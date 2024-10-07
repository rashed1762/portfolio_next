"use client"
import ScrollSection from '@/components/Portfolio/ScrollSection';
import Head from 'next/head';
import { motion } from "framer-motion";
import Portfoliosec from '@/components/Portfolio/Portfolio';


const Portfolio = () => {

 
  return (
    <motion.div
     className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
    <div>
      <Portfoliosec></Portfoliosec>
    </div>
    </motion.div>
  )
}

export default Portfolio;