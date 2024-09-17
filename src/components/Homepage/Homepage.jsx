"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { Title } from "@/components/style";
import Works from "./Works";
import '../css/home.css'


const Homepage = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 0]);
  return (
    <motion.div
    className="h-full w-screen"
   initial={{y:"-200vh"}}
   animate={{y:"0%"}}
   transition={{duration:1}}
   
   >
     <div className="">
       <div className="mt-16  ">
       <Title  style={{ x }}>Rashedul islam</Title>
       
         <h1 className="flex justify-center items-center text-8xl  font-bai font-semibold 
         s
          ">Full stack web developer</h1>
       </div>
       <div className="flex justify-center items-center">
       <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum vero, sunt repellendus obcaecati sint corporis dignissimos iusto porro quis voluptatum aut vel error rerum, non quam? Sint, illum quisquam.</p>
       </div>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
       
       <div >
        <div  className="absolute">
        
        </div>
        
         <div className="relative" >
        <Works></Works>
       </div>
       </div>

       <div className=" mt-64 max-w-screen-sm">
        <h1 className="text-6xl text-red-400 text-start" >Hello,</h1>
        <h1 className="text-2xl mt-2 font-comorant font-bold text-">I am experianced at Frontend,MERN Stack and Wordpress Development</h1>
       </div>
       </section>    

      
       
       
       
     </div>
     </motion.div>
  )
}

export default Homepage