import React from 'react'
import img1 from '../../../public/assest/img/dominnoi.png'
import Image from 'next/image'
import img2 from "../../../public/assest/img/html1.png"
import img3 from "../../../public/assest/img/css4.png"
import img4 from "../../../public/assest/img/js.png"
import img5 from "../../../public/assest/img/ract.png"
import img6 from "../../../public/assest/img/tailwind.png"
import img7 from "../../../public/assest/img/bootstrap.png"
import img8 from "../../../public/assest/img/nextjs.png"
import img9 from "../../../public/assest/img/nodejs.png"
import img10 from "../../../public/assest/img//netlify.png"
import img11 from "../../../public/assest/img/mongodb.png"
import img12 from "../../../public/assest/img/mongoose.png"
import img13 from "../../../public/assest/img/vscode.png"
import img14 from "../../../public/assest/img/github1.png"
import img15 from "../../../public/assest/img/ss-removebg-preview.png"
import img16 from "../../../public/assest/img/github1.png"
import Timeline from './Timeline'
import Tab from './Tab'
import Flip from './flip'
import Service from './Service'
import '../css/externalstyle.css'

const Aboutpage = () => {
  return (
    <div>
      <div className='mt-16'>
      <h1 className='flex justify-start items-center   font-mont font-bold 
        xxs:text-5xl
        xs:text-5xl
        sm:text-8xl
        opacity-[.3]
        lg:text-[190px]
        shadow
        
        '>Experiance</h1>


      </div>
        
        {/* work experiance */}
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-16 flex space-x-6' >
        <div className='flex items-end justify-end border-r-4 border-indigo-500'>
            <Image className='rounded-full mr-32 md:ml-48 
            xxs:mr-16
            xs:mr-32
            sm:mr-48
            md:mr-16
            
            
            ' src={img1} height={200} width={200} alt=''></Image>
        </div>

        <div>
            <h1 className='text-xl font-bold
            xxs:flex xxs:justify-center
            lg:flex lg:justify-start
            md:flex md:justify-start
            
            '>DOM-INNO Development Ltd</h1>
            <h1 className='font-bold
            xxs:flex xxs:justify-center
            lg:flex lg:justify-start
            md:flex md:justify-start
            '>Web Developer</h1>
            <h1 className='text-blue-800
            xxs:flex xxs:justify-center
            lg:flex lg:justify-start
            md:flex md:justify-start
            '>(01-06-2023-Present)</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti excepturi tenetur sed numquam reiciendis, quis consequatur quos assumenda. Odio optio aut corporis expedita culpa cumque sunt recusandae modi at.</p>
            
        </div>
        </div>
        {/* end work experiance  */}

        {/* skill */}

      
        <div className='mt-32' >
            
            <div>
                <Flip></Flip>
            </div>

        <div className="min-h-screen mt-48">
      
      <Timeline />
      <Service></Service>
    </div>
            
          
        </div>



        
    </div>
  )
}

export default Aboutpage