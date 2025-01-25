/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

const About = () => {

    const aboutItems = [
        {
          label: 'Project done',
          number: 10
        },
        {
          label: 'Years of experience',
          number: 1.5
        }
      ];

  return (
    <section
    id="about"
    className="section"
    >
       <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
               
                I’m Measum Naqi, a practicing developer passionate about transforming concepts into functional and efficient solutions. Continuously honing my skills through hands-on projects, I thrive on exploring new technologies and tackling challenges head-on. For me, development is not just about coding—it's about learning, growing, and creating meaningful digital experiences.  
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({label,number},key)=>(
                    <div key={key}>
                      <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                        <span className="text-blue-400 font-semibold md:text-3xl">+</span>
                      </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
                }


                <img src="/logo.svg"
                 alt="Logo" width={30} height={30}
                 className="ml-auto md:w-[40px] md:h-[40px]" 
                 />
            </div>
          </div>
        </div> 

    </section>
  )
}

export default About
