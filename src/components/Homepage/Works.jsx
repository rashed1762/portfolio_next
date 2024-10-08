import React from 'react'
import "../../components/css/working.css"
import img1 from '../../../public/assest/img/profile.png'
import img2 from '../../../public/assest/img/insta.png'
import img3 from '../../../public/assest/img/fb.png'
import img4 from '../../../public/assest/img/linkdin.png'
import img5 from '../../../public/assest/img/git.png'
import { motion } from "framer-motion";
import Image from 'next/image';


const Works = () => {

  return (
    <div className=''>
         <div className="works" id="works">
            
      {/* left side */}
      
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-60px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
           <a href=''> <Image src={img2} alt="" /></a>
          </div>
          
          <div className="w-secCircle">
            <a href="https://www.facebook.com/rajon.hasan.792/about"><Image src={img3} alt="" /></a>
            
          </div>
          <div className="w-secCircle">
            <a href="https://www.linkedin.com/in/rashed-islam-/"><Image src={img4} alt="" /></a>
            
          </div>{" "}
          <div className="w-secCircle">
            <a href="https://github.com/rashed1762"><Image src={img5} alt="" /></a>
            
          </div>
          <div className="w-sec">
            <Image className='img1' src={img1} height={450} alt="" />
          </div> 
        </motion.div>
        {/* background Circles */}
       
      </div>
    </div>
    </div>
  )
}

export default Works