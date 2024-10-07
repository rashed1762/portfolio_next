"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import img2 from '../../../public/assest/img/download__5_-removebg-preview.png'
import img3 from '../../../public/assest/img/output-onlinegiftools (2).gif'
import Works from "./Works";
import '../css/home.css'
import Hero from "./Hero";
import PreLoader from "../Preloader/preloader";
import Homenew from "../Preloader/homenew";
import Link from "next/link";
import MagneticButton from "../AnimButton/Button";


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
       
      <section className="grid
      xxs:grid-cols-1
      xs:grid-cols-1
      sm:grid-cols-1
       md:grid-cols-1
        lg:grid-cols-2 lg:gap-8
         gap-8">
        
       <div className="" >
        <Works></Works>
       </div>

       <div className=" max-w-screen-sm
       md:mt-16
       lg:ml-16
       
       ">
        <h1 className="text-6xl text-red-400 text-start font-marker" >Hello,</h1>
        <h1 className="text-2xl mt-2 font-comorant font-bold text-">I am experianced at MERN Stack,Frontend and Wordpress Development</h1>
        <p className="mt-12">I'm a passionate Website Developer with a strong focus on creating responsive, user-friendly websites that provide seamless digital experiences. With expertise in HTML, CSS, JavaScript, and various modern web technologies, I love turning complex problems into intuitive, accessible web solutions.

Over the years, I have worked on a wide range of projects, from building custom websites for small businesses to optimizing and maintaining large-scale platforms. I am dedicated to writing clean, maintainable code and continuously learning to stay at the forefront of web development trends.

When I’m not coding, you’ll find me exploring new technologies, diving into creative projects, or spending time in nature. Let's build something great together!</p>
        <div className="  mt-4">
        <MagneticButton >
        <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-full before:hover:rounded-full"><span>Download CV</span>  <span className="flex justify-center items-center"><Image src={img3} height={30} width={30} className=""></Image></span></button>
        </MagneticButton>
        <MagneticButton className="flex justify-center items-center "></MagneticButton>

        <a href="rashedul_Islam.pdf" download >
        <button className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">Download Cv</button>
                    </a>
       
        </div>

       </div>
       
       </section>   

       <div className="flex flex-col justify-center items-center text-center font-bold mt-32">
        <h1 className="text-6xl mb-8 font-marker font-bold">Hey chief! Lets Lern  about me.</h1>

        

        <MagneticButton >
        <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-full before:hover:rounded-full">Let's Go</button>
        </MagneticButton>
        
        </div>

        
         
       
     </div>
     </motion.div>
     </>
  )
}

export default Homepage