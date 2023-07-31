import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg text-dark dark:text-light dark:border-light">
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center">
                Built with <span className="text-primary text-2xl px-1">&#9825;</span>
                by&nbsp;<Link href="https://guhaprasaanth.com" target={"_blank"} 
                className="underline underline-offset-2">Guhaprasaanth</Link>
            </div>
            <Link href="mailTo:guhan.delta@gmail.com" target={"_blank"} className="underline underline-offset-2">Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer