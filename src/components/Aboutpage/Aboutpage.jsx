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

const Aboutpage = () => {
  return (
    <div>
        <h1 className='flex justify-center items-center text-6xl font-bai font-semibold mt-8'>Work Experiance</h1>
        {/* work experiance */}
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-16 flex space-x-6' >
        <div className='flex items-end justify-end border-r-4 border-indigo-500'>
            <Image className='rounded-full mr-32 md:ml-48 ' src={img1} height={200} width={200} alt=''></Image>
        </div>

        <div>
            <h1 className='text-xl font-bold'>DOM-INNO Development Ltd</h1>
            <h1 className='font-bold'>Web Developer</h1>
            <h1 className='text-blue-800'>(01-016-2023-Present)</h1>
            
        </div>
        </div>
        {/* end work experiance  */}

        {/* skill */}

      
        <div className='max-w-screen-xl mx-auto mt-16' >
            
            <div>
                <Flip></Flip>
            </div>

        <div className="min-h-screen mt-32">
      
      <Timeline />
      <Service></Service>
    </div>
            
          
        </div>



        
    </div>
  )
}

export default Aboutpage