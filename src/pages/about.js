import Head from 'next/head'
import Image from 'next/image'
import { AnimatedText, Layout, Skills } from '@/components'

import DP from '../../public/images/profile/guha.png'

const About = () => {
  return (
    <>
        <Head>
            <title>Guhaprasaanth | About Page</title>
            <meta name="description" content="Guhaprasaanth Nandagopal Web Developer, UI Developer" />
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText text="Passion fuels purpose" className="mb-16" />
            <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start text-dark/75">
                    <h2 className="mb-4 text-lg font-bold uppercase ">About me</h2>
                    <p className="font-medium">Hi, I'm Guhaprasaanth, a web developer and UI/UX designer passionate about creating beautiful, functional, and user-centered digital experiences. With five years of experience in the field. I always seek new and innovative ways to transform complex ideas and user requirements into elegant, user-friendly designs that enhance the user experience. With a deep understanding of responsive design principles, I strive to deliver pixel-perfect UIs across multiple platforms.
                    </p>
                    <p className="my-4 font-medium">My expertise extends beyond coding; I possess a keen eye for aesthetics and a strong understanding of user-centered design principles. I believe in the power of collaboration and enjoy working closely with cross-functional teams, including designers and backend developers, to ensure seamless integration of design concepts into functional interfaces.</p>
                    <p className="font-medium">Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl h-max border-2 border-solid border-dark bg-light p-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
                    <Image alt="Guha" className="w-full h-auto rounded-2xl" src={DP}></Image>
                </div>
            </div>
            <Skills />
        </Layout>
        </main>
    </>
  )
}

export default About