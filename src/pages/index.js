import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head"
import { AnimatedText, Layout } from "@/components"

import DisplayPicture from "../../public/images/profile/developer_dp.png"
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
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
              <Image src={DisplayPicture} alt="Guhaprasaanth" className="w-full h-auto transform -mt-40 -ml-16 -scale-x-100 scale-100 " />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <h1 className="-mt-16"> 
                <AnimatedText 
                  text="Turning Vision Into Reality With Code And Design." 
                  className="!text-4xl !text-left"
                />
              </h1>
              <p className="my-4 text-base font-medium dark:text-light">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
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
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light hover:dark:bg-dark/60 hover:dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
