'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'

import { LiIcon, data } from '@/components'
import Exp from '../../public/images/work-experience.png'

const Details = ( { title, company, companyurl, time, location, description, objective } ) => {
  const ref = useRef( null )

  return (
    <>
      <li
        ref={ ref }
        className="
        my-12 first:mt-0 last:mb-0 
        w-full sm:w-[85%] md:w-[70%] lg:w-[60%] 
        mx-auto flex flex-col items-start relative
        pl-12 sm:pl-14 md:pl-16
        dark:hover:border-white dark:hover:border-dashed
      "
      >
        <span className="absolute left-0 top-4 sm:top-5 sm:mr-6">
          <LiIcon reference={ ref } />
        </span>

        <motion.div
          initial={ { y: 50 } }
          whileInView={ { y: 0 } }
          transition={ { duration: 0.5, type: 'spring' } }
          className="w-full ml-8"
        >
          <h3 className="capitalize font-bold text-xl md:text-2xl sm:text-base text-gray-700 dark:text-teal-500 mb-1">
            { title }{ ' ' }
            <a
              href={ companyurl }
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary capitalize"
            >
              @{ company }
            </a>
          </h3>
          <span className="capitalize font-medium text-sm md:text-base text-dark/75 dark:text-orange-400 block mb-2">
            { time } | { location }
          </span>

          <p className="font-bold text-base md:text-lg sm:text-base dark:text-sky-400 mb-2">
            { objective }
          </p>

          <ul className="list-disc pl-6 space-y-1 font-medium text-sm sm:text-[0.950rem] md:text-base dark:text-sky-500">
            { description.map( ( desc, idx ) => (
              <li key={ idx }>{ desc }</li>
            ) ) }
          </ul>
        </motion.div>
      </li>
      <br />
    </>
  )
}

const Experience = () => {
  const ref = useRef( null )
  const { scrollYProgress } = useScroll( {
    target: ref,
    offset: [ 'start center', 'end end' ],
  } )

  return (
    <div className="mt-8 mb-28 px-4 sm:px-6 md:px-8">
      <Image
        className="mx-auto mb-8 block w-[90%] max-w-xs sm:max-w-sm md:max-w-md"
        src={ Exp }
        height={ 200 }
        width={ 400 }
        alt="Work Experience"
        priority
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 400px"
      />

      <div ref={ ref } className="relative mx-auto w-full sm:w-[90%] md:w-[75%] max-w-4xl">
        <motion.div
          style={ { scaleY: scrollYProgress } }
          className="
            absolute left-6 sm:ml-4 ml-[0.8rem] md:left-10 top-0
            w-[3px] md:w-[4px] h-full
            bg-dark origin-top dark:bg-light
          "
        />
        <ul className="w-full flex flex-col items-start space-y-0 text-dark relative z-10">
          { data.map( ( { title, company, companyurl, time, location, description, objective } ) => (
            <Details
              key={ title }
              title={ title }
              company={ company }
              companyurl={ companyurl }
              time={ time }
              location={ location }
              objective={ objective }
              description={ description }
            />
          ) ) }
        </ul>
      </div>
    </div>
  )
}

export default Experience
