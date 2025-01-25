/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

// Components
import SkillCard from "./SkillCard";

const Skill = () => {

    const skillItem = [
        {
          imgSrc: '/figma.svg',
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: '/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '/expressjs.svg',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: '/mongodb.svg',
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: '/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
      ];

  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
               {skillItem.map(({imgSrc,label,desc},key)=>(
                <SkillCard imgSrc={imgSrc} 
                label={label}
                desc={desc}
                key={key} />
               ))}
            </div>

        </div>
    </section>
  )
}

export default Skill
