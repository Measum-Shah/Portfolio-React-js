import Visitor from '../models/visitorModel.js';

export const logVisitor = async (req, res) => {
  try {
    // Get client IP safely (works behind proxies)
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      req.ip;

    // Anonymize IP (store only first 3 octets for privacy)
    const anonymizedIp = ip?.includes('.')
      ? ip.split('.').slice(0, 3).join('.') + '.0'
      : ip;

    // Referrer + LinkedIn detection
    const referrer = req.headers.referer || null;
    let linkedinUsername = null;

    try {
      const urlParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
      linkedinUsername =
        urlParams.get('linkedin') ||
        (referrer?.includes('linkedin.com') ? extractLinkedInUsername(referrer) : null);
    } catch (e) {
      linkedinUsername = null;
    }

    // Device detection
    const userAgent = req.headers['user-agent'] || "Unknown";
    const isMobile = /mobile/i.test(userAgent);

    // Update or create visitor record
    await Visitor.findOneAndUpdate(
      { ip: anonymizedIp },
      {
        $set: {
          userAgent,
          referrer,
          linkedinUsername,
          deviceType: isMobile ? "mobile" : "desktop",
          lastVisit: new Date(),
        },
        $inc: { visitCount: 1 },
        $setOnInsert: { firstVisit: new Date() },
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error);
    res.status(500).json({ error: "Tracking failed" });
  }
};

// Get all visitors for dashboard
export const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ lastVisit: -1 });
    res.status(200).json({ data: visitors });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch visitors" });
  }
};

// Get visitor stats
export const getVisitorStats = async (req, res) => {
  try {
    const stats = await Visitor.aggregate([
      {
        $group: {
          _id: null,
          totalVisits: { $sum: "$visitCount" },
          uniqueVisitors: { $sum: 1 },
          desktopUsers: {
            $sum: { $cond: [{ $eq: ["$deviceType", "desktop"] }, 1, 0] },
          },
          linkedinUsers: {
            $sum: { $cond: [{ $ne: ["$linkedinUsername", null] }, 1, 0] },
          },
        },
      },
    ]);

    res.status(200).json({ data: stats[0] || {} });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};

// Helper function
function extractLinkedInUsername(url) {
  const match = url.match(/linkedin\.com\/in\/([^\/?]+)/);
  return match ? match[1] : null;
}
