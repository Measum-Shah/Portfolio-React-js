/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

// Components
import { ButtonPrimary } from "./Button";

const Footer = () => {

    const sitemap = [
        {
          label: 'Home',
          href: '#home'
        },
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Work',
          href: '#work'
        },
        {
          label: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [
        {
          label: 'GitHub',
          href: 'https://github.com/Measum-Shah'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/measum-shah-61b137315/'
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/measum.shah.16'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/measumshah007/'
        },
        {
          label: 'Tiktok',
          href: 'https://www.tiktok.com/@devmakeeasy/'
        }
      ];

  return (
   <footer className='section'>

    <div className="container">

        <div className="lg:grid lg:grid-cols-2">

            <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                Let&apos;s work together today!
                </h2>
                <ButtonPrimary 
                href="mailto: comsiandev@gmail.com"
                label="Start Project"
                icon=">"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

                <div>
                    <p className="mb-2">Sitemap</p>
                    <ul>
                        {sitemap.map(({label,href}, key)=>(
                            <li key={key}>
                                <a href={href}
                                className="hover:text-zinc-200 block text-sm text-zinc-400 py-1 transition-colors">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2">Socials</p>
                    <ul>
                        {socials.map(({label,href}, key)=>(
                            <li key={key}>
                                <a href={href}
                                target="_blank"
                                className="hover:text-zinc-200 block text-sm text-zinc-400 py-1 transition-colors">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>

    </div>

    <div className="flex justify-center items-center text-center pt-10 mb-4 ">
        <a href="">                
            <img src="/logo.svg" 
            width={40}
            height={40}
             alt="Logo" />
        </a>

        <p className="text-zinc-500 text-sm">
        &copy; 2025 <span className="text-zinc-200">Measum-Shah</span>   
        </p>               

    </div>

   </footer>
  )
}

export default Footer
