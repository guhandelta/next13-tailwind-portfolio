import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import Logo from "./Logo"
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { anurati, quantum } from "./Layout";

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group ${quantum.variable}`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 
            -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomAnchor = ({ href, children }) =>(
    <motion.a 
        href={href} 
        target={"_blank"}
        whileHover={{
            y: -8,
            scale: 1.2
        }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-4"
    >
        {children}
    </motion.a>
)

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-black">
        <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
            {/*<motion.a 
                href="https://www.linkedin.com/in/guhaprasaanthnandagopal/" 
                target={"_blank"}
                whileHover={{
                    y: -4
                }}
            >
                <LinkedInIcon />
            </motion.a>
            <motion.a 
                href="https://github.com/guhandelta" 
                target={"_blank"}
                whileHover={{
                    y: -4
                }}
            >
                <GithubIcon />
            </motion.a>
            <motion.a 
                href="https://twitter.com/guhandelta" 
                target={"_blank"}
                whileHover={{
                    y: -4
                }}
            >
                <TwitterIcon />
            </motion.a>*/}

            <CustomAnchor href="https://www.linkedin.com/in/guhaprasaanthnandagopal/">
                <LinkedInIcon />                            
            </CustomAnchor>
            <CustomAnchor href="https://github.com/guhandelta">
                <GithubIcon />                    
            </CustomAnchor>
            <CustomAnchor href="https://twitter.com/guhandelta">
                <TwitterIcon />                    
            </CustomAnchor>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default Navbar