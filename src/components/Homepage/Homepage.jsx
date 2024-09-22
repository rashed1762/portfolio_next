"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { Title } from "@/components/style";
import Works from "./Works";
import '../css/home.css'
import Hero from "./Hero";
import PreLoader from "../Preloader/preloader";
import Homenew from "../Preloader/homenew";


const Homepage = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 0]);
  return (
    <>
    <PreLoader></PreLoader>
    <motion.div
    className="h-full w-screen"
   initial={{y:"-200vh"}}
   animate={{y:"0%"}}
   transition={{duration:1}}
   
   >
     <div className="">
       <Homenew></Homenew>
       
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        
       <div >
        <Works></Works>
       </div>

       <div className=" max-w-screen-sm  mt-16">
        <h1 className="text-6xl text-red-400 text-start" >Hello,</h1>
        <h1 className="text-2xl mt-2 font-comorant font-bold text-">I am experianced at MERN Stack,Frontend and Wordpress Development</h1>
        <p className="mt-12">I'm a passionate Website Developer with a strong focus on creating responsive, user-friendly websites that provide seamless digital experiences. With expertise in HTML, CSS, JavaScript, and various modern web technologies, I love turning complex problems into intuitive, accessible web solutions.

Over the years, I have worked on a wide range of projects, from building custom websites for small businesses to optimizing and maintaining large-scale platforms. I am dedicated to writing clean, maintainable code and continuously learning to stay at the forefront of web development trends.

When I’m not coding, you’ll find me exploring new technologies, diving into creative projects, or spending time in nature. Let's build something great together!</p>
        <div className="flex gap-4 mt-4">
        <button className="btn btn-outline btn-success">Success</button>

        <button className="btn btn-outline btn-success">Success</button>
        </div>

       </div>
       
       </section>    
       
     </div>
     </motion.div>
     </>
  )
}

export default Homepage