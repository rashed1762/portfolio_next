import React from 'react'
import '../css/flip.css'
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
import img14 from "../../../public/assest/img/firebase.png"
import img15 from "../../../public/assest/img/ss-removebg-preview.png"
import img16 from "../../../public/assest/img/github1.png"

const Flip = () => {
  return (

    <div>
        <div>
        <h1 className=" text-center mb-8 font-bold font-mont lg:text-[190px] opacity-[.3]  mt-32
        xxs:text-5xl xxs:mt-2
        xs:text-5xl
        sm:text-8xl
        shadow
        ">Skill</h1>
        
        </div>
    <div className='max-w-screen-xl mx-auto mt-16'>
    <h3 className='text-xl font-bold underline mb-4 '>MERN Stack: </h3>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4'>

    
<div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img2} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>HTML</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 95 }} role="progressbar">
  95%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img3} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>CSS</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 95 }} role="progressbar">
  95%
</div>
        </div>
        </div>
    </div>
    </div>


    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img4} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>JavaScript</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 60 }} role="progressbar">
  60%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img5} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>ReactJs</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar">
  80%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img6} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Tailwind</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 90 }} role="progressbar">
  90%
</div>
        </div>
        </div>
    </div>
    </div>


    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img7} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Bootstrap</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar">
  80%
</div>
        </div>
        </div>
    </div>
    </div>


    </div>



    {/* second row */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 mt-12'>

    
<div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img8} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>NextJs</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img9} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Nodejs</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
        </div>
        </div>
    </div>
    </div>


    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img10} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Netlify</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 100 }} role="progressbar">
  100%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img11} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>MongoDB</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar">
  80%
</div>
        </div>
        </div>
    </div>
    </div>

    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img12} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Mongoose</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar">
  80%
</div>
        </div>
        </div>
    </div>
    </div>


    <div>
        <div>
        <div className='card'>
        <div className='face front'>
            <div className='img'>
            <Image  src={img14} height={60} width={60} alt ></Image>
            <h1 className='flex justify-center items-center mt-1 '>Firebase</h1>
            </div>
        
        </div>

        <div className='face back'>
        <div className="radial-progress text-primary" style={{ "--value": 100 }} role="progressbar">
  100%
</div>
        </div>
        </div>
    </div>
    </div>


    </div>
    </div>
      



    </div>




      
    
  )
}

export default Flip