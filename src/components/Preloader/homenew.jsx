import React, { useEffect } from "react";
import img1 from '../../../public/assest/img/output-onlinegiftools (1).gif'
import '../css/externalstyle.css'
import Image from "next/image";
const text1 = "Rashedul islam";

const Homenew = () => {
   
  return (
    
      <div className="landing mt-32">
        <section className="landing__top">
          <div className="sub
          xxs:text-[10px]
          ">Full-Stack Developer</div>
          <h1 className="landing__main 
          
          ">
          <span className="text-con ">
              {text1.split("").map((t, i) => (
                <span key={i} className="text
                
                 xxs:text-[15px]
                 xs:text-[40px]
                 sm:text-[60px]
                 md:text-[80px]
                 lg:text-[100px]
                 xl:text-[140px]
                 xxl:text-[190px]
                ">
                  {t}
                </span>
              ))}
            </span>
          </h1>

          <h1 className="mt-32">Scroll Down</h1>
              <div className="flex justify-center">
                <Image src={img1} height={70} width={70}></Image>
              </div>
          
        </section>
      </div>
    
  )
}

export default Homenew