'use client'
import React, { useRef } from "react";
import TypingText from "./TypingText";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="h-screen flex justify-between" ref={ref}>
            <div className="mono-font w-full flex flex-col justify-center">
                {/* แอนิเมชันบรรทัดแรก */}
                <motion.p
                    className="text-[#4e4be6] text-lg pb-3"
                    initial={{ x: 0, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Hi, my name is
                </motion.p>

                {/* แอนิเมชันชื่อ */}
                <motion.div
                    className="flex gap-5 text-3xl md:text-6xl lg:text-6xl inter-font font-bold pb-5"
                    initial={{ x: 0, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className={`gradient-border-bottom ${isInView ? 'inview' : ''}`}
                        ref={ref}>Yuphawadee</h1>
                    <h1 className=" ">Pronprue</h1>
                </motion.div>

                {/* แอนิเมชัน TypingText */}
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <TypingText />
                </motion.div>

                {/* แอนิเมชันปุ่มและไอคอน */}
                <motion.div
                    className="flex items-center gap-10 pt-7"
                    initial={{ x: 0, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <a
                        href="/resume-yuphawadee.pdf" target="_blank"
                        className="border-custom w-[150px] h-[40px] text-base lg:text-lg flex justify-center"
                    >
                        Resume
                    </a>
                    {/* <div className="bg-[#222222] w-14 h-14 rounded-full flex items-center justify-center"> */}
                    <a href="https://github.com/yuphawadee" target="_blank">
                        <FiGithub size={25} className="hover:text-[var(--blue)]" />
                    </a>
                    {/* </div> */}
                </motion.div>
            </div>

            {/* แอนิเมชันรูปภาพ */}
            <motion.div
                className="w-full hidden lg:flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            >
                <div className="relative">
                    <Image
                        className="w-[274px] h-[275px] rounded-2xl shadow-custom object-cover"
                        src="/hero.jpg"
                        width={1000}
                        height={1000}
                        alt="Profile Image"
                    />
                    {/* <div className="absolute inset-0 rounded-2xl border-2 border-[#D3E97A] opacity-50 blur-sm -z-10"></div> */}
                    <motion.div
                        className="absolute top-0 left-0 w-[274px] h-[275px] rounded-2xl pointer-events-none outline-offset-right -z-10"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }}
                    />
                </div>
            </motion.div>

        </div>
    );
}

export default Hero;
