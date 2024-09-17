import React from 'react'
import "../../components/css/working.css"
import img1 from '../../../public/assest/img/profile.png'
import Upwork from "../../../public/assest/img/Upwork.png";
import Fiverr from "../../../public/assest/img/Facebook.png";
import Amazon from "../../../public/assest/img/fiverr.png";
import Shopify from "../../../public/assest/img/amazon.png";
import { motion } from "framer-motion";
import Image from 'next/image';


const Works = () => {

  return (
    <div>
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
           <a href='/about'> <Image src={Upwork} alt="" /></a>
          </div>
          
          <div className="w-secCircle">
            <Image src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <Image src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <Image src={Shopify} alt="" />
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