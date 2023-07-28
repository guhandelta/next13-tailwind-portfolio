import Image from 'next/image'
import Head from "next/head"
import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

import { LinkArrow } from '@/components/Icons'
import { AnimatedText, Layout } from "@/components"
import DisplayPicture from "../../public/images/profile/developer_dp.png"

const FramerImage = motion(Image);

const AnimatedImage = ({ image }) => {

   // obbtain the position of the cursor for animating the image
   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const imageRef = useRef(null);

   return <FramerImage 
            style={{ x:x, y:y }}
            initial={{ opacity: 0 }}
            whileInView = {{ opacity: 1, transition: { duration: 0.3 } }}
            ref={imageRef} 
            height={150}
            width={150}
            src={image} 
            alt="Guhaprasaanth" 
            className="w-full h-auto transform -mt-40 -ml-16 -scale-x-100 scale-110" 
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
          />

}

export default function Home() {

  const quote = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 1.0,
            staggerChildren: 0.08,
        }
    }
  };

  const rncSection = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 1.5,
            staggerChildren: 0.08,
        }
    }
  };

  return (
    <>
      <Head>
        <title>Guhan Portfolio</title>
        <meta name="description" content="Portfolio Website developed using NextJS 13 & TailwindCSS" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              
            <AnimatedImage 
              image={DisplayPicture} 
            />
            
            {/*
              
            <Image
              alt="Guhaprasaanth" 
              className="w-full h-auto transform -mt-40 -ml-16 -scale-x-100 scale-100" 
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
            */}
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <h1 className="-mt-16"> 
                <AnimatedText 
                  text="Turning Vision Into Reality With Code And Design." 
                  className="!text-4xl !text-left"
                />
              </h1>
              <motion.p 
                className="my-4 text-base font-medium dark:text-light"
                variants={quote}
                initial="initial"
                animate="animate"
              >As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </motion.p>
              <motion.div 
                variants={rncSection}
                initial="initial"
                animate="animate"
                className="flex items-center self-start mt-2"
              >
                <Link 
                  href="/spr.pdf" 
                  target="_blank" 
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                              hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                <Link 
                  href="mailto:guhan.delta@gmail.com" 
                  target="_blank"
                  className="ml-4 p-2.5 px-6 rounded-lg text-lg font-medium capitalize text-dark underline dark:text-light hover:dark:bg-light hover:dark:text-dark hover:border-solid"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
