"use client"
import React from 'react'
import img1 from '../../../public/assest/img/insta.png'
import img2 from '../../../public/assest/img/fb.png'
import img3 from '../../../public/assest/img/linkdin.png'
import img4 from '../../../public/assest/img/git.png'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import MagneticButton from '@/components/AnimButton/Button'
import Textrotate from '@/components/AnimButton/Textrotate'
const Contact = () => {
  return (
    <motion.div
     className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
    <div className="">

      <div className=" container mx-auto grid grid-cols-2 gap-8 
      xxs:grid-cols-1
      xs:grid-cols-1
      sm:grid-cols-1
       md:grid-cols-1
        lg:grid-cols-2
      
      mt-32">

      <div className="
      
      ">
        <h1 className="text-9xl font-bold font-marker text-c 
        xxs:text-7xl
      xs:text-7xl
      sm:text-7xl
       md:text-8xl
        lg:text-9xl
        
        
        
        ">Want to  ?</h1>
        <h1 className="text-9xl font-bold font-marker 
         xxs:text-7xl
      xs:text-7xl
      sm:text-7xl
       md:text-8xl
        lg:text-9xl
        
        ">start</h1>
        <h1 className="text-9xl font-bold font-marker 
         xxs:text-7xl
      xs:text-7xl
      sm:text-7xl
       md:text-8xl
        lg:text-9xl"> a new </h1>
        <h1 className="text-9xl font-bold font-marker 
         xxs:text-7xl
      xs:text-7xl
      sm:text-7xl
       md:text-8xl
        lg:text-9xl
        ">project ?</h1>
        
        
      </div>

      <div>
        <h1 className="text-4xl underline text-bold font-marker text-center
         xxs:text-2xl
      xs:text-3xl
      sm:text-3xl
       md:text-4xl
        lg:text-4xl">rashedul54islam@gmail.com</h1>

        <div className=" grid grid-cols-2
        xxs:grid-cols-1
      xs:grid-cols-1
      sm:grid-cols-1
       md:grid-cols-1
        lg:grid-cols-2
        
        p-24 ">
        <div>
        
          <a href="https://github.com/rashed1762" target='blank'><h1 className="flex justify-center items-center p-4"><Image className="h-[70px] w-[70px]" src={img4} ></Image> Github</h1></a>
        <a href="https://github.com/rashed1762" target='blank'>
        <h1 className="flex justify-center items-center"><Image className="h-[70px] w-[70px]" src={img1} ></Image> Linkdin</h1>
        </a>
        </div>

        <div>
        <h1 className="flex justify-center items-center p-4"><Image className="h-[70px] w-[70px]" src={img3} ></Image> Instagram</h1>
        <a href="https://www.facebook.com/rajon.hasan.792/about" target='blank'>
        <h1 className="flex justify-center items-center"><Image className="h-[70px] w-[70px]" src={img2} ></Image> Facebook</h1></a>
        </div>

        <div>

        </div>
        </div>

        <section className="p-24">
        <div className="grid grid-cols-2
        xxs:grid-cols-1
      xs:grid-cols-1
      sm:grid-cols-1
       md:grid-cols-1
        lg:grid-cols-2
        
        gap-4">
          <div>
          <input type="text" placeholder="Name" className="input w-full max-w-xs" />
          </div>

          <div>
          <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
          </div>

        </div>
        <div className="mt-4 flex justify-center items-center">
        <textarea
  placeholder="Write a short note"
  className="textarea textarea-bordered textarea-md w-full max-w-xs back"></textarea>
        </div>
        <div className="flex justify-center items-center mt-4">
        <MagneticButton  >
        <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-full before:hover:rounded-full font-marker">Send</button>
        </MagneticButton>
        </div>
        
      </section>
      </div>
      
      </div>

      
    </div>

    
    </motion.div>
  )
}

export default Contact