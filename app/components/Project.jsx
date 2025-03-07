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
          className="lg:w-2/4 lg:text-2xl text-xl text-[#F4F4F4] font-bold pt-2 pb-5 leading-normal"
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
            <div className="w-full lg:h-[600px] md:py-20 bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out">
              <div className=" bg-[#f4f4f4] lg:w-[450px] lg:h-[320px] md:h-[420px] h-[300px] md:w-3/4 rounded-xl overflow-hidden">
                <Image
                  src="/addpay-1.png"
                  width={450}
                  height={500}
                  className="object-cover w-full h-full"
                  alt=""
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
              <h1 className="text-[2rem] font-semibold">E-Office Project</h1>
              <div>
                <h2 className="text-lg font-semibold pb-1">Description</h2>
                <p className="text-[#C7C7C7]">
                  Developed an e-Office system with features including user login and registration, CRUD operations for quotations, invoices, payment vouchers, and incoming/outgoing letters, as well as bidding task management.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Key Features</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">User Authentication: </span> Login and registration system for users</li>
                  <li><span className="font-bold">CRUD Operations: </span> Manage quotations, invoices, payment vouchers, and letters</li>
                  <li><span className="font-bold">Task Management: </span> Track and manage bidding tasks</li>
                  <li><span className="font-bold">Database Integration: </span> MySQL for storing and managing data</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Technologies Used</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">Frontend:</span> HTML, CSS, JavaScript, Bootstrap</li>
                  <li><span className="font-bold">Backend:</span> PHP</li>
                  <li><span className="font-bold">Database:</span> MySQL</li>
                </ul>
              </div>
              {/* <div className="flex gap-5 py-2">
                <span>HTML</span>
                <span>CSS</span>
                <span>PHP</span>
                <span>MySql</span>
                <span>Bootstrap</span>
              </div> */}
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
            <div className="w-full lg:h-[600px] md:py-20 bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out ">
              <div className="lg:w-[450px] lg:h-[320px] md:h-[420px]  h-[300px] md:w-3/4 rounded-xl overflow-hidden">
                <Image
                  src="/e-commerce-1.png"
                  width={450}
                  height={500}
                  className="object-cover w-full h-full"
                  alt=""
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
              <h1 className="text-[2rem] font-semibold">E-Commerce Project</h1>
              {/* <p className="text-lg text-[#C7C7C7]">
                Developed an E-Commerce platform with dynamic product galleries, allowing users to add items to their cart. The system fetches product data via API, providing real-time updates and a seamless shopping experience. Built with Next.js and Tailwind CSS for responsive design.
              </p>
              <div className="flex gap-5 py-2">
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>API</span>
              </div> */}
<div>
                <h2 className="text-lg font-semibold pb-1">Description</h2>
                <p className="text-[#C7C7C7]">
                Developed an E-Commerce platform with features including product categorization, search functionality, and the ability to add/remove products from the cart. The system is built with a responsive design and dynamic data fetching via API, providing a seamless shopping experience.                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Key Features</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">Product Management: </span> Add, remove, and manage products in the cart</li>
                  <li><span className="font-bold">Search: </span> Search for products with dynamic filtering</li>
                  <li><span className="font-bold">Product Categorization: </span> Filter products based on categories</li>
                  <li><span className="font-bold">Real-time Updates: </span> Fetch product data via API</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Technologies Used</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">Frontend: </span>Next.js, Tailwind CS</li>
                  <li><span className="font-bold">API Integration: </span>Fetch product data via API</li>
                  {/* <li><span className="font-bold">Database:</span> MySQL</li> */}
                </ul>
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
            <div className="w-full lg:h-[600px] md:py-20 bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:-translate-y-5 transition-transform duration-500 ease-in-out">
              <div className=" lg:w-[450px] lg:h-[320px] md:h-[420px] h-[300px] md:w-3/4 rounded-xl overflow-hidden">
                <Image
                  src="/crud-5.png"
                  width={450}
                  height={500}
                  className="object-cover w-full h-full"
                  alt=""
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
              <h1 className="text-[2rem] font-semibold">Internship Management System</h1>
              {/* <p className="text-lg text-[#C7C7C7]">
                A web-based system for storing and managing data related to students, their internships, and participating companies. The system supports CRUD operations, enabling efficient management of internship information in a centralized platform.
              </p>
              <div className="flex gap-5 py-2">
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>API</span>
                <span>Prisma</span>
                <span>Bootstrap</span>
              </div> */}
              <div>
                <h2 className="text-lg font-semibold pb-1">Description</h2>
                <p className="text-[#C7C7C7]">
                Developed a web-based system for managing student internships and company participation. The platform supports CRUD operations for storing and organizing student internship records efficiently in a centralized system.                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Key Features</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">Internship Management: </span> Store and manage student internship records</li>
                  <li><span className="font-bold">CRUD Operations: </span> Create, read, update, and delete internship-related data</li>
                  <li><span className="font-bold">Company Database: </span> Maintain details of participating companies</li>
                  <li><span className="font-bold">Centralized Platform: </span> Streamline the internship tracking process</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold pb-1">Technologies Used</h2>
                <ul className="list-disc pl-5 text-[#C7C7C7]">
                  <li><span className="font-bold">Frontend:</span> Next.js, Tailwind CSS</li>
                  <li><span className="font-bold">Backend:</span> Prisma</li>
                  <li><span className="font-bold">Database:</span> PostgreSQL</li>
                </ul>
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
