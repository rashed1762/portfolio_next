"use client"
import React from 'react'
import { motion } from "framer-motion";
import Aboutpage from '@/components/Aboutpage/Aboutpage';
import Flip from '@/components/Aboutpage/flip';
import MagneticButton from '@/components/AnimButton/Button';

const page = () => {
  return (
    <motion.div
     className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
    <Aboutpage></Aboutpage>
    <div className="flex flex-col justify-center items-center text-center font-bold mt-32">
        <h1 className="text-6xl mb-8 font-marker font-bold">Ok  now let's go to see what kind of project i have created</h1>

        
      
        <MagneticButton >
        <a href="/portfolio">
        <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-full before:hover:rounded-full mb-8 font-marker">Let's Go!</button></a>
        </MagneticButton>
        
        </div>
    </motion.div>
  )
}

export default page