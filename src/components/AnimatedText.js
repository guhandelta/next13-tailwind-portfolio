"use client"
import { motion } from 'framer-motion'
import { strafer } from './Layout';

const quote = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
};

const wordAnimate = {
    initial:{
        opacity: 0,
        x:50
    },
    animate:{
        opacity: 1,
        x:0,
        transition: {
            duration: 1,
        }
    }
};

const AnimatedText = ({ text, className="" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ">
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize ${className} dark:text-light`}
            variants={quote}
            initial="initial"
            animate="animate"
        >
            {
                text.split(" ").map((word, index) => (
                    <span key={word+'-'+index} 
                        className={`inline-block ${strafer.variable} font-sans capitalize`}
                        variants={wordAnimate}
                        initial="initial"
                        animate="animate"
                    >
                        {word}&nbsp;
                    </span>
                ))
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText