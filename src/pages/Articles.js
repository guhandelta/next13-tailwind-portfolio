"use client"
import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'

import { AnimatedText, Layout } from '@/components'
import { featuredArticles, articles } from '@/components/articles'
import Mutler from "../../public/images/expressjs-mutler.png"

const FramerImage = motion(Image); 

/* The Image was isolated away from the <Article /> as the <MovingImage /> would have multiple states, and isolating it would prevent multiple re-renders*/
const AnimatedImage = ({ title, image, link }) => {
    
    // obbtain the position of the cursor for animating the image
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imageRef = useRef(null);

    function handleMouse(event){
        imageRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    
    function handleMouseLeave(event){
        imageRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link 
            href={link} 
            target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            >
            <h2 className="capitalize text-xl font-semibold hover:underline dark:text-orange-400">
            {title}
            </h2>
            <FramerImage 
                style={{ x:x, y:y }}
                initial={{ opacity: 0 }}
                whileInView = {{ opacity: 1, transition: { duration: 0.3 } }}
                ref={imageRef} 
                height={150}
                width={150}
                src={image} 
                alt={title} 
                className='w-96 h-auto hidden absolute rounded-lg z-10' 
            />
        </Link>
    )
}

const Article = ({ image, title, date, link }) => {


    return(
        <motion.li
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-transpatent/70
            dark:border-white dark:bg-dark hover:dark:border-double'
            initial={{ y:200 }}
            whileInView={{ y:0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once: true}}
        >
            <AnimatedImage title={title} image={image} link={link} /> <br />
            <span className='pl-4 text-primary font-semibold  dark:text-teal-400'>{date}</span>
        </motion.li>
    );
}

const FeaturedArticle = ({ title, time, image, link, gist }) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl text-dark/90 dark:border-light hover:dark:border-dashed dark:bg-dark dark:text-white'>
        <Link 
            href={link} 
            target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <FramerImage 
                src={image} 
                alt={title} 
                className=' w-full h-auto transition ease-in-out duration-150 my-8 scale-1x50'
                whileHover={{ scale:1.05 }} 
                transition={{ duration: 0.3 }}
            />
        </Link>
        <Link href={link} target='_blank' >
            <h2 className="capitalize text-2xl font-bold my-2 hover:underline dark:text-orange-400">{title}</h2>
        </Link>
        <p className="text-base mb-2 dark:text-sky-500">{gist}</p>
        <span className="text-primary font-semibold dark:text-teal-400">{time}</span>
    </li>
  )
}

const Articles = () => {
  return (
    <>
        <Head>
            <title>Guha | Artiles Page</title>
            <meta name="description" content="My own custom articles" />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden text-dark/90">
            <Layout className="pt-16">
                <AnimatedText className="mb-16" text="Words can Change the World!" />
                <ul className="grid grid-cols-2 gap-16">
                    {featuredArticles.map(({ key, title, time, image, link, gist }) => {
                        if(key<4){
                           return ( 
                                <FeaturedArticle
                                    key={key}
                                    title={title}
                                    time={time}
                                    image={image}
                                    link={link}
                                    gist={gist}
                                />
                            )
                        }
                    })}
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 text-dark/90">All Articles</h2>
                <ul>
                    {articles.map(({ key, title, image, date, link }) =>(
                        <Article 
                            key={key}
                            title={title}
                            image={image}
                            date={date}
                            link={link}
                        />
                    ))}
                        
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default Articles