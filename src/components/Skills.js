'use client';
import { motion } from 'framer-motion'


const Skill = ({ name, x, y }) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
        whileHover={{ scale: 1.2 }}
        initial={{ x:0,  y:0 }}
        whileInView={{ x:x,  y:y, transition:  { duration: 1.5 } }}
        viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}


const Skills = () => {
  return (
    <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light">Skills</h2>
        <div className="flex relative items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark">
            <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
            >
                Web
            </motion.div>
                
              <Skill name="HTML" x="-23vw" y="-2vw" />
              <Skill name="CSS" x="-5vw" y="-8vw" />
              <Skill name="JavaScript" x="0vw" y="8vw" />
              <Skill name="ReactJS" x="-14vw" y="15vw" />
              <Skill name="NextJS" x="14vw" y="-11vw" />
              <Skill name="GraphQL" x="30vw" y="-5vw" />
              <Skill name="React Query" x="13vw" y="-19vw" />
              <Skill name="Tailwind" x="-36vw" y="9vw" />
              <Skill name="Jest" x="18vw" y="8.5vw" />
              <Skill name="NodeJS" x="0vw" y="21vw" />
              <Skill name="Flask" x="-26vw" y="-16vw" />
              <Skill name="Django" x="26vw" y="16vw" />
        </div>
    </>
  )
}

export default Skills