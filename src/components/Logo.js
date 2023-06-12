"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link);
const backgroundColor = ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"];

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink 
        className="w-16 h-16 bg-dark text-light flex items-center border border-black
                   justify-center rounded-full text-2xl font-bold font-serif "
        href="/"
        whileHover={{ 
          backgroundColor,
          transition: { duration: 1, repeat: Infinity }
        }}
      >NGP</MotionLink>
    </div>
  )
}

export default Logo