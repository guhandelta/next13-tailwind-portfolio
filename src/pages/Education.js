'use client'
import { motion, useScroll } from 'framer-motion'
// import data from '../components/data'
import { useRef } from 'react'
import { LiIcon, education } from '@/components'

const Details = ({ degree, major, graduation, location, institution, schoolURL }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[67%] mx-auto flex flex-col items-left justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y:50 }}
                whileInView={{ y:0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="font-bold text-3xl dark:text-orange-400 ">
                    {degree}&nbsp;<a href={schoolURL} target="_blank" rel="noopener noreferrer" className="text-primary normal-case">in&nbsp;{major}</a>
                </h3>
                {/*description.map((desc, index) => <p key={index} className="font-medium w-full">{desc}</p>)*/} 
                <span className="flex flex-col capitalize font-medium text-dark/75">
                    <p className="font-medium text-lg w-full dark:text-teal-500">{institution},&nbsp;{graduation}</p>
                    <p className="font-medium text-lg w-full dark:text-sky-500">{location}</p>
                    
                </span>
            </motion.div>
        </li>
    )
}
const Education = () => {
    const ref = useRef(null);
    /*The scroll position between defined offsets*/
    const { scrollYProgress } = useScroll(
            {
                target: ref,
                offset: ["start end","center start"]
            }
        )
    /* Offset- array of at least 2 intersections, where intersection is a point when the target and container meet.
    start end => start of the target to meet the end of the container
    center start => center of element should be aligned with the top edge of the viewport */

  return (
    <div className="my-36">
        <h2 className="font-bold text-6xl mt-40 mb-32 w-full text-center text-light">Education</h2>
        {/* useScroll() will monitor the scroll in this div */}
        <div ref={ref} className="relative mx-auto w-[75%]">
            {/*scaleY, as the line would be increased or decreased in the Y axis */}
            <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"  
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4 text-dark">
               {/**/}{education.map(({  key, degree, major, graduation, location, institution, schoolURL }) =>
                     <Details  
                        key={key} 
                        degree={degree} 
                        major={major} 
                        institution={institution} 
                        schoolURL={schoolURL} 
                        graduation={graduation} 
                        location={location} 
                    />
                )} 
            </ul>
        </div>
    </div>
  )
}

export default Education