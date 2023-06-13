import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText, Layout } from '@/components'
import { GithubIcon } from '@/components/Icons'
import projects from '@/components/projects'

import CoffeeShop from "../../public/images/coffeeshop.png"
import Promptab from "../../public/images/promptab.png"
import KadhaiSurukkam from "../../public/images/kadhaisurukkam.png"
import Vite from "../../public/images/vite.png"
import GuhasCanvas from "../../public/images/guhascanvas.png"
import Metaversus from "../../public/images/metaversus.png"
import ApolloGraphQL from "../../public/images/ApolloGraphQL.png"
import Flask from "../../public/images/Flask.png"
import GatsbyMDX from "../../public/images/gatsbyMDX.png"



const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light transition ease-in-out duration-150 hover:bg-white shadow-2xl relative'>
        <Link 
            href={link} 
            target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
        >
            <Image src={image} alt={title} className='w-full h-auto transition ease-in-out duration-150' />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
            <span className='text-primary font-medium text-xl'>{type}</span>
            <Link 
                href={link} 
                target='_blank'
                className='hover:underline underline-offset-2'
            >
                <h2 className='my-2 w-full text-left text-2xl  font-bold'>{title}</h2>
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
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative transition ease-in-out duration-150 hover:scale-110'>
            <Link 
                href={link} 
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={image} alt={title} className='w-full h-auto transition ease-in-out duration-150' />
            </Link>
            <div className="w-full flex flex-col items-start justify-between pl-6">
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link 
                    href={link} 
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-2xl  font-bold'>{title}</h2>
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
                    <div className="col-span-12">
                        <FeaturedProject 
                            title="Kadhai Surukkam"
                            summary="A React App which summarizes the contents of the page, from the provided URL, using Open AI's GPT-4."
                            image={KadhaiSurukkam}
                            link="https://kadhai-surukkam.vercel.app/"
                            type="Project"
                            github="https://github.com/guhandelta/React-AI-Article-Summarizer"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="Next13 Promptab"
                            image={Promptab}
                            link="https://promptab.vercel.app"
                            type="Project"
                            github="https://github.com/guhandelta/Promptab"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="React Micro-FrontEnd"
                            image={Vite}
                            link="https://github.com/guhandelta/React-Vite-Webpack-MFE-app"
                            type="Project"
                            github="https://github.com/guhandelta/React-Vite-Webpack-MFE-app"
                        />
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject 
                            title="Guhas Canvas"
                            image={GuhasCanvas}
                            link="https://guhascanvas.com/"
                            type="Project"
                            github="https://github.com/guhandelta/MERN-AI-Image-generator"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="Next13 Metaversus"
                            image={Metaversus}
                            link="https://next-tailwind-framer-metaversus.vercel.app/"
                            type="Project"
                            github="https://github.com/guhandelta/Next-Tailwind-Framer-Metaversus"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="GatsbyJS Coffee Store"
                            image={CoffeeShop}
                            link="https://ngp-gatsby-coffeeshop.netlify.com/"
                            type="Project"
                            github="https://github.com/guhandelta/GatsbyCoffeeShop"
                        />
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject 
                            title="Next13 GraphQL"
                            image={ApolloGraphQL}
                            link="https://github.com/guhandelta/Next13-prisma-apollo-graphql"
                            type="Project"
                            github="https://github.com/guhandelta/Next13-prisma-apollo-graphql"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="Blockchain with RSA"
                            image={Flask}
                            link="https://github.com/guhandelta/BlockChain-Python-with-RSA-encryption"
                            type="Project"
                            github="https://github.com/guhandelta/BlockChain-Python-with-RSA-encryption"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project 
                            title="Gatsby MDX Blog"
                            image={GatsbyMDX}
                            link="https://ngp-gatsby-blog.netlify.app/"
                            type="Project"
                            github="https://github.com/guhandelta/GatsbyMDXBlog"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-3 w-full h-12 p-3 mt-24 -mb-12 items-center'>
                    <div className='grid-1/3'></div>
                    <div className='grid-2/3'>
                        <p className='text-center font-semibold text-md text-dark/80 '>Checkout my other projects &emsp;&emsp;&#62;&#62;&#62;&#10148;</p>
                    </div>
                    <div className='grid-1/3'>
                        <Link href="https://github.com/guhandelta" target="_blank">
                            <GithubIcon className="w-[2em] h-[2em] rounded-3xl text-dark  hover:scale-115 transition ease-in-out duration-150 hover:bg-orange-400" />
                        </Link>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects