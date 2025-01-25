/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

// components
import ProjectCard from "./ProjectCard"

const Work = () => {

    const works = [
        {
          imgSrc: '/project-1.png',
          title: 'Full stack Job Portal System',
          tags: ['API', 'MVC', 'Development'],
          projectLink: 'https://measumproject4.netlify.app/'
        },
        {
          imgSrc: '/project-2.png',
          title: 'Child Donation Landing Page',
          tags: ['Bootstrap'],
          projectLink: 'https://measumproject3.netlify.app/'
        },
        {
          imgSrc: '/project-3.png',
          title: 'Construction Company Landing Page Demo',
          tags: ['Bootstrap', 'CSS'],
          projectLink: 'https://measumproject.netlify.app/'
        },
        {
          imgSrc: '/project-4.png',
          title: 'Sundown Clone not responsive yet',
          tags: ['Clone', 'CSS', 'GSAP'],
          projectLink: 'https://measumproject2.netlify.app/'
        },
        {
            imgSrc: '/project-5.png',
            title: 'Personal Portfolio',
            tags: ['Web-design', 'React', 'GSAP'],
            projectLink: 'https://measumportfolio.netlify.app/'
          },
    ]      

  return (
    <section id="work" className="section">
    <div className="container">
        <h2 className="headline-2 pb-4">
        My Portfolio Highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc,title,tags,projectLink},key)=>(
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                />
            ))}
        </div>
        </div>        
    </section>
  )
}

export default Work
