import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { AnimatedText, Layout } from '@/components'
import { GithubIcon } from '@/components/Icons'
import projects from '@/components/projects'

const FramerImage = motion(Image); 

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light transition ease-in-out duration-150 hover:bg-white shadow-2xl relative'>
        <Link 
            href={link} 
            target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg h-full'
        >
            <FramerImage 
                src={image} 
                alt={title} 
                width={100}
                height={100}
                className='w-full h-auto transition ease-in-out duration-150' 
                whileHover={{ scale:1.05 }} 
                transition={{ duration: 0.3 }}
            />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
            <span className='text-primary font-medium text-sm'>{type}</span>
            <Link 
                href={link} 
                target='_blank'
                className='hover:underline underline-offset-2'
            >
                <h2 className='my-2 w-full text-left text-2xl pr-2 font-bold'>{title}</h2>
            </Link>
        </div>
        <p className='my-1 font-medium text-dark'>{summary}</p>
        <div className="-mt-2 flex items-center">
            <Link 
                href={github} 
                target='_blank'
                className='w-10'
            >
                <GithubIcon className="h-[2em] w-[2em] " />
            </Link>
            <Link  
                href={link} 
                target='_blank'
                className='ml-4 mr-2 rounded-lg bg-dark text-light p-1 my-2 text-sm font-semibold'
            >
                Project
            </Link>
        </div>
    </article>
  )
}

const Project = ({ type, title, image, link, github }) => {
    return (
        <article className='w-full h-24 flex items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl relative transition ease-in-out duration-150 relative'>
            <Link 
                href={link} 
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg mr-3'
            >
                <FramerImage 
                    src={image} 
                    alt={title}
                    width={200}
                    height={200}
                    className='transition ease-in-out duration-150' 
                    whileHover={{ scale:1.05 }} 
                    transition={{ duration: 0.3 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between py-2">
                <span className='text-primary font-medium text-base'>{type}</span>
                <Link 
                    href={link} 
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-base font-bold'>{title}</h2>
                </Link>
            </div>
            <div className="-mt-2 flex items-center">
                <Link 
                    href={github} 
                    target='_blank'
                    className='w-10'
                >
                    <GithubIcon className="h-[2em] w-[2em] " />
                </Link>
                <Link  
                    href={link} 
                    target='_blank'
                    className='ml-4 mr-2 rounded-lg bg-dark text-light p-1 my-2 text-sm font-semibold'
                >
                    Project
                </Link>
            </div>
        </article>
    );
}

const Projects = () => {
  return (
    <>
        <Head>
            <title>Guhaprasaanth | Projects Page</title>
            <meta name="description" content="Guhaprasaanth Nandagopal Projects" />
        </Head>
        <main className='w-full h-auto flex flex-col items-center justify-center'>
            <Layout>
                <AnimatedText className='mb-16 scale-90' text="Imagination Enlightens Knowledge!" />

                <div className="grid grid-cols-12 gap-24 mt-12 text-dark/80">
                    {projects.map(({ key, title, summary, image, link, type, github }) =>{
                        if(key == 1 || key == 4 || key == 7){
                            return (
                                <div key={key} className="col-span-12">
                                    <FeaturedProject 
                                        title={title}
                                        summary={summary}
                                        image={image}
                                        link={link}
                                        type={type}
                                        github={github}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div key={key} className="col-span-6">
                                    <Project 
                                        title={title}
                                        summary={summary}
                                        image={image}
                                        link={link}
                                        type={type}
                                        github={github}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className='grid grid-cols-3 w-full h-8 p-3 mt-24 -mb-16 items-center'>
                    <div className='grid-1/3'></div>
                    <div className='grid-1/3'>
                        <div className="flex">
                            <p className='text-center font-semibold mt-1 text-xl text-dark/80 '>Checkout my other projects &emsp;&nbsp;</p>
                            <Link href="https://github.com/guhandelta" target="_blank">
                                <GithubIcon className="w-[2em] h-[2em] mx-2 mt-1 scale-125 rounded-3xl text-dark  hover:scale-115 transition ease-in-out duration-150 hover:bg-orange-400" />
                            </Link>
                        </div>
                    </div>
                    <div className='grid-1/3'></div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects