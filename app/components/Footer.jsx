import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { motion } from 'framer-motion';

function Footer() {
    return (
            <div className='border-t-2 border-[#1A1A1A] mt-40 h-20 p-5 flex items-center gap-2 text-sm justify-center text-[#C7C7C7]'>
                <p>© 2023 | Developed with</p>
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <IoIosHeart className="text-red-500" />
                </motion.div>
                <p>By Yuphawadee Pronprue</p>
            </div>
    )
}

export default Footer