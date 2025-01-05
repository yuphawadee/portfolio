'use client'

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="max-h-fit flex flex-col gap-8">
      <div className="">
        {/* <p className="text-sm tracking-[.1rem] text-[#F4F4F4]">PROJECT</p>
        <h1 className="w-fit text-[3rem] font-bold text-gradient ">My Project</h1>
        <p className="w-2/4 text-2xl text-[#F4F4F4] font-bold pt-2 pb-5 leading-normal">Here are some of the selected projects that showcase my passion for front-end development.</p> */}
        <motion.p
          className="text-sm tracking-[.1rem] text-[#F4F4F4]"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          PROJECT
        </motion.p>
        <motion.h1
          className="w-fit text-[3rem] font-bold text-gradient "
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          My Project
        </motion.h1>
        <motion.p
          className="w-2/4 text-2xl text-[#F4F4F4] font-bold pt-2 pb-5 leading-normal"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          Here are some of the selected projects that showcase my passion for front-end development.
        </motion.p>
      </div>

      <div className="flex flex-col gap-20">

        {/* First Project */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
          <motion.div
            // className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            <div className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out">
              <div className="bg-[#f4f4f4]  w-[450px] h-[320px] rounded-xl overflow-hidden">
                <Image
                  src="/addpay-1.png"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            // className="flex flex-col justify-center pl-0 lg:pl-20 gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <div className="flex flex-col justify-center pl-0 lg:pl-20 gap-6 h-full">
              <h1 className="text-[2rem]">AddPlay Project</h1>
              <p className="text-lg text-[#C7C7C7]">
                Developed an e-Office system for AddPay ServicePoint Co., Ltd. with features including user login, registration, CRUD operations for quotations, invoices, payment vouchers, and incoming/outgoing letters, as well as bidding task management.
              </p>
              <div className="flex gap-5 py-2">
                <span>HTML</span>
                <span>CSS</span>
                <span>PHP</span>
                <span>MySql</span>
                <span>Bootstrap</span>
              </div>
              <div className="text-base font-bold ">
                <Link
                  href="https://github.com/yuphawadee/addpay-project" target="_blank"
                  className="border-b-[3px] text-[#38bdf8] hover:text-[var(--blue)] border-[#38bdf8] hover:border-[var(--blue)] flex items-center gap-2 w-fit tracking-[.1rem]"
                >
                  SEE ON GITHUB
                  <IoLogoGithub size={20} style={{ strokeWidth: 1.5 }} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Second Project */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
          <motion.div
            // className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <div className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out ">
              <div className="bg-[#f4f4f4] w-[450px] h-[320px] rounded-xl overflow-hidden">
                <Image
                  src="/e-commerce-1.png"
                  width={450}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            // className="flex flex-col justify-center pl-0 lg:pl-20 gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 2.5 }}
          >
            <div className="flex flex-col justify-center pl-0 lg:pl-20 gap-6 h-full">
              <h1 className="text-[2rem]">E-Commerce Project</h1>
              <p className="text-lg text-[#C7C7C7]">
                Developed an E-Commerce platform with dynamic product galleries, allowing users to add items to their cart. The system fetches product data via API, providing real-time updates and a seamless shopping experience. Built with Next.js and Tailwind CSS for responsive design.
              </p>
              <div className="flex gap-5 py-2">
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>API</span>
              </div>
              <div className="text-base font-bold flex gap-6">
                <Link
                  href="https://txna-shop.netlify.app/" target="_blank"
                  className="border-b-[3px] text-[#38bdf8] hover:text-[var(--blue)] border-[#38bdf8] hover:border-[var(--blue)] flex items-center gap-2 w-fit tracking-[.1rem]"
                >
                  LIVE DEMO
                  <GoArrowUpRight size={20} style={{ strokeWidth: 1.5 }} />
                </Link>
                <Link
                  href="https://github.com/yuphawadee/e-commerce-api-nextjs" target="_blank"
                  className="border-b-[3px] text-[#38bdf8] hover:text-[var(--blue)] border-[#38bdf8] hover:border-[var(--blue)] flex items-center gap-2 w-fit tracking-[.1rem]"
                >
                  SEE ON GITHUB
                  <IoLogoGithub size={20} style={{ strokeWidth: 1.5 }} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Third Project */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
          <motion.div
            // className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 3 }}
          >
            <div className="w-full h-[500px] bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out">
              <div className=" w-[450px] h-[320px] rounded-xl overflow-hidden">
                <Image
                  src="/crud-5.png"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            // className="flex flex-col justify-center pl-0 lg:pl-20 gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.5 }}
          >
            <div className="flex flex-col justify-center pl-0 lg:pl-20 gap-6 h-full">
              <h1 className="text-[2rem]">Internship Management System</h1>
              <p className="text-lg text-[#C7C7C7]">
                A web-based system for storing and managing data related to students, their internships, and participating companies. The system supports CRUD operations, enabling efficient management of internship information in a centralized platform.
              </p>
              <div className="flex gap-5 py-2">
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>API</span>
                <span>Prisma</span>
                {/* <span>Bootstrap</span> */}
              </div>
              <div className="text-base font-bold ">
                <Link
                  href="https://github.com/yuphawadee/crud-nextauth-prisma" target="_blank"
                  className="border-b-[3px] text-[#38bdf8] hover:text-[var(--blue)] border-[#38bdf8] hover:border-[var(--blue)] flex items-center gap-2 w-fit tracking-[.1rem]"
                >
                  SEE ON GITHUB
                  <IoLogoGithub size={20} style={{ strokeWidth: 1.5 }} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div >
  );
}

export default Project;
