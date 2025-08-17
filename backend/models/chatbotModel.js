import axios from 'axios';

// Portfolio details (replace with your actual info)
const portfolioDetails = {
  name: "Measum Naqi",
  skills: "JavaScript, React, Node.js, Express.js, Api integration, AI Integration, Web Development, MERN Stack, Vue.js, Nuxt.js, MongoDB, Tailwind CSS",
projects: [
    "Project 1: Real-Time Code Collaboration App using MERN (Live IDE with multiplayer editing).",
    "Project 2: ClarifyHub Blogging Platform with React (Markdown support, comments, and analytics).",  
    "Project 3: Job Portal System  (MERN for job listings and applications).",  
    "Project 4: Student Helping System with Next.js (task management career guidance using gemini api).",  
    "Project 5: Two-Factor Authentication (2FA) System using Express (OTP/email for secure logins).",  
    "Project 6: Appointment Management System using MERN (Bookings of appointment of doctors).",  
    // Internship Projects  
    "Project 7: Earn Flex Calendar Integration with Parallel API Fetching.",  
    "Project 8: WhatsApp Notification System for Job Alerts.",  
    "Project 9: Slack Bot for Team Notifications & Task Tracking.",  
    "Project 10: Google Calendar Interview Scheduling System.",  
    "Project 11: Albinaya SEO Optimization & Sitemap Generation.",  
    "Project 12: Vue + Express Contact Management System (CRUD)."  
],
  experience: '1.5 years as a Full-Stack Developer with expertise in Vue.js, Nuxt.js, and MERN stack. Developed calendar integrations using parallel API processing, built Slack/WhatsApp notification systems, and implemented Google Calendar scheduling with email consent flows. Integrated Sage Invoice API for payment processing. Optimized web performance through SEO improvements including sitemap generation and meta tag implementation. Gained additional experience developing CRUD applications and working with version control systems. Previously completed frontend development training focusing on React, Git, and CSS frameworks.',
  contact: "Email: shahmeasum008@gmail.com | LinkedIn: www.linkedin.com/in/measum-shah-61b137315/ | Phone: 03217387179"
};

// Handle chatbot logic
export async function getChatResponse(message) {
  // Initial greeting if no message
  if (!message) {
    return "How can I help you? What do you need to know: skills, projects, experience, how to contact? Or if you're a client, I can guide you through.";
  }

  // Check for specific portfolio-related queries
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("skills")) {
    return `My skills include: ${portfolioDetails.skills}. If you have a specific skill in mind, ask for more details!`;
  } else if (lowerMessage.includes("projects")) {
    return `Here are some of my projects:\n- ${portfolioDetails.projects.join("\n- ")}\nLet me know if you want more info on any.`;
  } else if (lowerMessage.includes("experience")) {
    return `My experience: ${portfolioDetails.experience}. Feel free to ask about specific roles or achievements.`;
  } else if (lowerMessage.includes("contact") || lowerMessage.includes("how to contact")) {
    return `You can contact me via: ${portfolioDetails.contact}. Looking forward to hearing from you!`;
  } else if (lowerMessage.includes("client") || lowerMessage.includes("guide")) {
    return "As a potential client, I'd love to guide you! What type of project are you interested in? Web development, AI integration, or something else? Tell me more about your needs.";
  }

  // For other questions, query Gemini API
  const prompt = `
You are an AI assistant for my personal portfolio website. You are helpful, professional, and engaging.
Portfolio details:
Name: ${portfolioDetails.name}
Skills: ${portfolioDetails.skills}
Projects: ${portfolioDetails.projects.join(", ")}
Experience: ${portfolioDetails.experience}
Contact: ${portfolioDetails.contact}

User message: ${message}

If the question is related to the portfolio, use the details above. For unrelated questions, provide a helpful answer but gently steer back to portfolio topics if possible. Keep responses concise and formatted clearly.
`;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response content";
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error);
    throw new Error("Failed to get a response from the Gemini API");
  }
}