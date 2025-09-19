"use client"
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'

import { AnimatedText, Layout } from '@/components'
import { featuredArticles, articles } from '@/components/articles'
import Mutler from "../../public/images/expressjs-mutler.png"

const FramerImage = motion(Image); 

const darkColors = [
  'dark:text-orange-400',
  'dark:text-teal-400',
  'dark:text-sky-500',
  'dark:text-gold-500',
];

/* The Image was isolated away from the <Article /> as the <MovingImage /> would have multiple states, and isolating it would prevent multiple re-renders*/
const AnimatedImage = ({ title, image, link, titleColor }) => {
    
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
            <h2 className={`capitalize text-xl font-semibold hover:underline ${titleColor}`}>
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
                priority 
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
        </Link>
    )
}

const Article = ({ image, title, date, link, titleColor }) => {


    return(
        <motion.li
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-transpatent/70
            dark:border-white dark:bg-dark hover:dark:border-double dark:text-cyan-500'
            initial={{ y:200 }}
            whileInView={{ y:0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once: true}}
        >
            <AnimatedImage title={title} image={image} link={link} titleColor={titleColor} /> <br />
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
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);    
    
    useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/medium-posts'); // Fetch from your API route
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
    posts && console.log("Posts:\t", posts);
    
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }



  return (
    <>
        <Head>
            <title>Guha | Artiles Page</title>
            <meta name="description" content="My own custom articles" />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden text-dark/90">
            <Layout className="pt-16">
                <AnimatedText className="mb-16" text="Words can Change the World!" />
                <ul className="grid grid-cols-3 gap-16">
                    {/* {featuredArticles.map(({ key, title, time, image, link, gist }) => {
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
                    })} */}
                    {posts && posts.map((post, index) => (
                        <article key={index} className={`border rounded-lg p-4 shadow-md ${index%2===0 ? "dark:text-teal-500" :
                                                                                            index%3===0 ? "dark:text-orange-500" : "dark:text-sky-500" }`}>
                        <Link href={post.link} target="_blank" passHref>
                            <div className="relative h-1 w-[35%] mb-4">
                            {post.imageUrl && (
                                <Image
                                src={post.imageUrl}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                                />
                            )}
                            </div>
                            <h2 className="text-xl font-bold mb-2 hover:underline">{post.title}</h2>
                        </Link>
                        {/* <p className="text-sm text-gray-600 mb-2">{post?.description}</p> */}
                        <span className="text-xs text-gray-500">{new Date(post.pubDate).toLocaleDateString()}</span>
                        </article>
                    ))}
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 text-dark/90 dark:text-amber-500" >All Articles</h2>
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