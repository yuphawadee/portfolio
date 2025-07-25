'use client'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

const skills = [
  {
    image: '/html.svg',
    name: 'HTML'
  },
  {
    image: '/css.svg',
    name: 'CSS'
  },
  {
    image: '/javascript.svg',
    name: 'JavaScript'
  },
  {
    image: '/php.svg',
    name: 'PHP'
  },
  {
    image: '/vite.svg',
    name: 'Vite'
  },
  {
    image: '/react.svg',
    name: 'React'
  },
  {
    image: '/tailwindcss.svg',
    name: 'Tailwind'
  },
  {
    image: '/bootstrap.svg',
    name: 'Bootstrap'
  },
  {
    image: '/mysql.svg',
    name: 'MySQL'
  },
  {
    image: '/mongodb.svg',
    name: 'Mongodb'
  },
]

function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='w-full h-max flex flex-col gap-8 pb-20'>
      <div className=''>
        <motion.p
          className="text-sm tracking-[.1rem] text-[#F4F4F4]"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, }}
        >
          SKILLS
        </motion.p>
        <motion.h1
          className='w-fit text-[3rem] font-bold text-gradient '
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          className="lg:w-2/4 lg:text-2xl text-xl text-[#F4F4F4] font-bold pt-2 pb-5 leading-normal"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          The essential tools and technologies I use to create modern, responsive web experiences.
        </motion.p>
      </div>

      <div className='flex flex-col gap-10'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div>
            <h3 className='tracking-[.1rem]'>LANGUAGES AND TOOLS</h3>
            <div className='flex flex-wrap items-center gap-8 pt-5'>
              <Image src='/html.svg' width={60} height={60} alt='HTML' title='HTML' />
              <Image src='/css.svg' width={60} height={60} alt='CSS' title='CSS' />
              <Image src='/javascript.svg' width={60} height={60} alt='JavaScript' title='JavaScript' />
              <Image src='/Typescript.svg' width={60} height={60} alt='TypeScript' title='TypeScript' />
              <Image src='/php.svg' width={65} height={65} alt='PHP' title='PHP' />
              <Image src='/vite.svg' width={60} height={60} alt='Vite' title='Vite' />
              <Image src='/vitest.svg' width={60} height={60} alt='Vitest' title='Vitest' />
              <Image src='/postman.svg' width={60} height={60} alt='Postman' title='Postman' />
              <Image src='/figma.svg' width={60} height={60} alt='Figma' title='Figma' />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          <div>
            <h3 className='tracking-[.1rem]'>LIBRARIES AND FRAMEWORKS</h3>
            <div className='flex items-center gap-8 pt-5'>
              <Image src='/next.js.svg' width={60} height={60} alt='Next.js' title='Next.js' />
              <Image src='/react.svg' width={60} height={60} alt='React' title='React' />
               <Image src='/vue.svg' width={60} height={60} alt='Vue.js' title='Vue.js' />
              <Image src='/express.svg' width={60} height={60} alt='Express' title='Express' />
              <Image src='/node-js.svg' width={60} height={60} alt='Node.js' title='Node.js' />
              <Image src='/tailwindcss.svg' width={60} height={60} alt='Tailwind CSS' title='Tailwind CSS' />
              <Image src='/bootstrap.svg' width={60} height={60} alt='Bootstrap' title='Bootstrap' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 2 }}
        >
          <div>
            <h3 className='tracking-[.1rem]'>DATABASES</h3>
            <div className='flex items-center gap-8 pt-5'>
              <Image src='/mysql.svg' width={60} height={60} alt='MySQL logo' title='MySQL' className='p-1' />
              <Image src='/postgresql.svg' width={60} height={60} alt='PostgreSQL logo' title='PostgreSQL' className='pb-1' />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
