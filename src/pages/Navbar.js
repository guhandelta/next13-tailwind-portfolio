'use client'
import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import Logo from "../components/Logo"
import { DZoneIcon, GithubIcon, LinkedInIcon, MediumIcon, MoonIcon, SunIcon, TwitterIcon } from "../components/Icons";
import { anurati, quantum } from "../components/Layout";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher"

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group ${quantum.variable}`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 
            -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
} 

const CustomAnchor = ({ href, children, helperText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (helperText) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = () => {
    if (helperText) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (helperText) {
      setIsHovered(false);
    }
  };

  return (
    <motion.a
      href={href}
      target={"_blank"}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-4 relative"
    >
      {children}
      {helperText && isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            left: mousePosition.x + 15,
            top: mousePosition.y + 15,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          className="bg-gray-800 text-gray-700 dark:text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
        >
          {helperText}
        </motion.div>
      )}
    </motion.a>
  );
};


const Navbar = () => {

    const [ mode, setMode ] = useThemeSwitcher();

  return (
    <header 
        className="w-full px-32 py-8 font-medium flex items-center justify-between text-black dark:text-light"
    >
        <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="experience" title="Experience" className="mx-4" />
            <CustomLink href="/Projects" title="Projects" className="mx-4" />
            <CustomLink href="/Articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
            <CustomAnchor href="https://www.linkedin.com/in/guhaprasaanthnandagopal/" helperText="LinkedIn">
                <LinkedInIcon />                            
            </CustomAnchor>
            <CustomAnchor href="https://github.com/guhandelta" helperText="GitHub">
                <GithubIcon />                    
            </CustomAnchor>
            <CustomAnchor href="https://x.com/guhandelta" helperText="Twitter">
                <TwitterIcon />                    
            </CustomAnchor>
            <CustomAnchor href="https://medium.com/@guhaprasaanth" helperText="Medium">
                <MediumIcon />                    
            </CustomAnchor>
            <CustomAnchor href="https://dzone.com/users/5292216/guhaprasaanth.html" helperText="DZone">
                <DZoneIcon />                    
            </CustomAnchor>

            <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 
                ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
                {
                    mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        :
                        <MoonIcon className={"fill-dark"} />
                }
            </button>
        </nav>

        <div className="absolute left-[50%] top-2 -translate-x-[50%]">
            <Logo />
        </div>
    </header>
  )
}

export default Navbar