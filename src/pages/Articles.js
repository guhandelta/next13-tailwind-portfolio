import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText, Layout } from '@/components'

const FeaturedArticle = ({ title, time, image, link, summary }) => {
  return (
    <li>
        <Link 
            href={link} 
            target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <Image src={image} alt={title} className='w-full h-auto transition ease-in-out duration-150' />
        </Link>
        <Link href={link} target='_blank' >
            <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
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
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
            <Layout className="pt-16">
                <AnimatedText className="mb-16" text="Words can Change the World!" />
                <ul className="grid grid-cols-2 gap-16">
                    <li>Featured Article 1</li>
                    <li>Featured Article 2</li>
                    <li>Featured Article 3</li>
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default Articles