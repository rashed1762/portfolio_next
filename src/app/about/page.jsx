"use client"
import React from 'react'
import { motion } from "framer-motion";
import Aboutpage from '@/components/Aboutpage/Aboutpage';
import Flip from '@/components/Aboutpage/flip';

const page = () => {
  return (
    <motion.div
     className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
    <Aboutpage></Aboutpage>
    
    </motion.div>
  )
}

export default page