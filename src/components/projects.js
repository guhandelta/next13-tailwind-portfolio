import Tanstack from "../../public/images/react-query-app.png"
import Promptab from "../../public/images/promptab.png"
import KadhaiSurukkam from "../../public/images/kadhaisurukkam.png"
import Vite from "../../public/images/vite.png"
import GuhasCanvas from "../../public/images/guhascanvas.png"
import Metaversus from "../../public/images/metaversus.png"
import ApolloGraphQL from "../../public/images/ApolloGraphQL.png"
import Flask from "../../public/images/Flask.png"

const projects = [
    {
        key: 1,
        title:"Promptab",
        summary:"A NextJS 13 application to create and share prompts",
        image:{Promptab},
        link:"https://promptab.vercel.app",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/Promptab"
    },{
        key: 2,
        title:"Kadhai Surukkam",
        summary:"A React App which summarizes the contents of the page, from the provided URL, using Open AI's GPT-4.",
        image:{KadhaiSurukkam},
        link:"https://kadhai-surukkam.vercel.app/",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/React-AI-Article-Summarizer"
    },{
        key: 3,
        title:"React Vite Webpack Micro-FrontEnd app",
        summary:"A Micro-FrontEnd architecture comprised of applications generated using Module Federation from Vite and Webpack",
        image:{Vite},
        link:"https://github.com/guhandelta/React-Vite-Webpack-MFE-app",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/React-Vite-Webpack-MFE-app"
    },{
        key: 4,
        title:"Guhas Canvas",
        summary:"MERN application that generates images using AI using OpenAI's DALL-E model",
        image:{GuhasCanvas},
        link:"http://guhascanvas.com/",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/MERN-AI-Image-generator"
    },{
        key: 5,
        title:"Metaversus",
        summary:"A Single page app using Next 13, TailwindCSS and Framer Motion with animated entities",
        image:{Metaversus},
        link:"https://next-tailwind-framer-metaversus.vercel.app/",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/Next-Tailwind-Framer-Metaversus"
    },{
        key: 6,
        title:"React Tanstack Query App",
        summary:"A ReactJS application utilizing the Tanstack Query to expierment and understand the features provided by React Query for data fetching.",
        image:{Tanstack},
        link:"https://react-tanstack-query-app.vercel.app",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/React-Tanstack-Query-app"
    },{
        key: 7,
        title:"Next13 Prisma Apollo GraphQL",
        summary:"A Book keeping application developed using NextJS 13, Apollo GraphQL and Prisma",
        image:{ApolloGraphQL},
        link:"https://github.com/guhandelta/Next13-prisma-apollo-graphql",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/Next13-prisma-apollo-graphql"
    },{
        key: 8,
        title:"Python Flask Blockchain with RSA Encryption & Digital Signatures",
        summary:"BlockChain Constructed using Python, with RSA Algorithm and Digital Signatures",
        image:{Flask},
        link:"https://github.com/guhandelta/BlockChain-Python-with-RSA-encryption",
        type:"Experimental Project",
        github:"https://github.com/guhandelta/BlockChain-Python-with-RSA-encryption"
    }

]

export default projects;
