'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'

import { LiIcon, data } from '@/components'
import Exp from '../../public/images/work-experience.png'

const Details = ({ title, company, companyurl, time, location, description }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y:50 }}
                whileInView={{ y:0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {title}&nbsp;<a href={companyurl} target="_blank" rel="noopener noreferrer" className="text-primary capitalize">@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {location}
                </span>
                {/*description.map((desc, index) => <p key={index} className="font-medium w-full">{desc}</p>)*/} 
                <p className="font-medium w-full">{description}</p>
            </motion.div>
        </li>
    )
}
const Experience = () => {
    const ref = useRef(null);
    /*The scroll position between defined offsets*/
    const { scrollYProgress } = useScroll(
            {
                target: ref,
                offset: ["start center","center start"]
            }
        )
    /* Offset- array of at least 2 intersections, where intersection is a point when the target and container meet.
    start end => start of the target to meet the end of the container
    center start => center of element should be aligned with the top edge of the viewport */

  return (
    <div className="mt-8 mb-28">
        {/*<h2 className="font-bold text-4xl mb-4 w-full text-center text-dark">Experience</h2> */}
        <Image className='mx-[18%] mb-8' src={Exp} height="auto" width="auto" alt="Work Experience" />
        {/* useScroll() will monitor the scroll in this div through the ref */}
        <div ref={ref} className="relative mx-auto w-[75%]">
            {/*scaleY, as the line would be increased or decreased in the Y axis */}
            <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" 
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4 text-dark">
               {/**/}{data.map(({ title, company, companyurl, time, location, description, }) =>
                     <Details  
                        key={title} 
                        title={title} 
                        company={company} 
                        companyurl={companyurl} 
                        time={time} 
                        location={location} 
                        description={description} 
                    />
                )} 
            </ul>
        </div>
    </div>
  )
}

export default Experience