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
      className="w-6 mx-3 sm:mx-2 relative"
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

const SocialMediaLinks = [
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/guhaprasaanthnandagopal/",
    label: "LinkedIn"
  },
  {
    icon: <GithubIcon />,
    link: "https://github.com/guhandelta",
    label: "GitHub"
  },
  {
    icon: <TwitterIcon />,
    link: "https://x.com/guhandelta",
    label: "Twitter"
  },
  {
    icon: <MediumIcon />,
    link: "https://medium.com/@guhaprasaanth",
    label: "Medium"
  },
  {
    icon: <DZoneIcon />,
    link: "https://dzone.com/users/5292216/guhaprasaanth.html",
    label: "DZone"
  },
];

 // Define navigation links as an array of objects
  const NavLinks = [
    { href: "/", title: "Home", style:"mr-4 lg:mr-3 sm:mr-2" },
    { href: "/about", title: "About", style:"mx-4 lg:mx-3 sm:mx-2" },
    { href: "experience", title: "Experience", style:"mx-4 lg:mx-3 sm:mx-2" },
    { href: "/Projects", title: "Projects", style:"mx-4 lg:mx-3 sm:mx-2" },
    { href: "/Articles", title: "Articles", style:"ml-4 lg:ml-3 sm:ml-2" },
  ];

const Navbar = () => {

    const [ mode, setMode ] = useThemeSwitcher();

  return (
    <header 
        className="w-full px-32 py-8 font-medium grid grid-cols-3 sm:grid-cols-1 items-center text-black dark:text-light xl:px-24 lg:px-16 md:px-12 sm:px-8 lg:py-6 md:py-4 sm:py-4 text-lg lg:text-base md:text-base sm:text-base"
    >
        <nav className="justify-self-start sm:justify-self-center sm:mb-4">
            {NavLinks.map(({ href, title, style}) => <CustomLink key={href} href={href} title={title} className={style} />)}
            

            {/* <CustomLink href="/about" title="About" className="mx-4 lg:mx-3 sm:mx-2" />
            <CustomLink href="experience" title="Experience" className="mx-4 lg:mx-3 sm:mx-2" />
            <CustomLink href="/Projects" title="Projects" className="mx-4 lg:mx-3 sm:mx-2" />
            <CustomLink href="/Articles" title="Articles" className="ml-4 lg:ml-3 sm:ml-2" /> */}
        </nav>
        <div className="justify-self-center sm:mb-4">
            <Logo />
        </div>
        <nav className="justify-self-end sm:justify-self-center flex items-center justify-center flex-wrap">
            {SocialMediaLinks.map(({ icon, link, label }) => (
              <CustomAnchor href={link} helperText={label} key={link}>
                {icon}                           
              </CustomAnchor>
            ))}
            
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
    </header>
  )
}

export default Navbar