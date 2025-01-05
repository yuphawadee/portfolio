'use client'

import React, { useState } from 'react'
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-20 from-black bg-gradient-to-b">
      <div>
        <motion.div
          className="progress-bar"
          style={{ scaleX }}
        />
      </div>
      <div className="max-w-[1300px] h-28 m-auto flex justify-between items-center p-5 relative">
        <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='cursor-pointer'>
          <HiOutlineBolt size={40} className='text-[#f4f4f4]' />
        </span>
        <div className='flex items-center gap-5 z-50 cursor-pointer'>
          {isMenuOpen ? (
            <IoCloseOutline size={40} className='text-[#f4f4f4]' onClick={toggleMenu} />
          ) : (
            <IoMenuOutline size={40} className='text-[#f4f4f4]' onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Render menu only when isMenuOpen is true */}
      {isMenuOpen && (
        <motion.div
          className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-80 text-white z-30 flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5, // Background transition duration
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="flex-none overflow-hidden flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{
              duration: 0.3, // Text scale transition duration
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <ul className="space-y-12 text-center">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-400 text-2xl lg:text-6xl font-mono"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-gray-400 text-2xl lg:text-6xl font-mono"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-gray-400 text-2xl lg:text-6xl font-mono"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar;
