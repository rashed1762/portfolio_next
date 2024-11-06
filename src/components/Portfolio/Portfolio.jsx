"use client"
import '../css/portfolio.css'
import img1 from '../../assests/travelguru-23c1f.web.app_.png'
import img2 from '../../assests/online bazar12.PNG'
import img3 from '../../assests/fidalgoo.netlify.app_.png'
import img4 from '../../assests/dominno-bd.com_ (1) (1) (1).jpg'
import img5 from '../../assests/profilelimited.com_ (1).jpg'
import img6 from '../../assests/rmc.dominno-bd.com_ (2) (1).jpg'
import img7 from '../../assests/hyde-furniture.netlify.app_ (1) (1).jpg'
import img8 from '../../assests/cara-shop-website.netlify.app_.jpg'
import img9 from '../../assests/furns-website.netlify.app_.jpg'
import img10 from '../../assests/twinklerscare.com_.png'
import img11 from '../../assests/test.affix-bd.com_wp_.png'
import Image from 'next/image'
import MagneticButton from '../AnimButton/Button'




const Portfoliosec = () => {

  return (
    <div className='mt-8'>
      <div>
      <h1 className='flex justify-start items-center   font-mont font-bold 
        xxs:text-5xl
        xs:text-5xl
        sm:text-8xl
        opacity-[.3]
        lg:text-[190px]
        shadow
        
        '>Projects</h1>

    {/* wordpress */}

    <section>
    <div className="container mx-auto mt-32 mb-16">
    <div className="divider text-3xl font-bold font-cormorant">Wordpress</div>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>DOM-INNO</h1>
        <Image className='projectimg' src={img4} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> Wordpress,Elementor,Elementor Pro</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://dominno-bd.com/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
        
        
      </div>
{/* dominno........................................................................ */}



{/* profile........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Profilelimited</h1>
      <Image className='projectimg' src={img5} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span>Wordpress,WpBakery</h1>
        <div className='flex items-center justify-center'>
        
        <a target={'_blank'} href="https://profilelimited.com/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
       
      </div>
      {/* profile........................................................................ */}

    </div>
    </section>


    <section className="mt-16">
    

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* rmc........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>DOM-INNO Concrete</h1>
        <Image className='projectimg' src={img6} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> Wordpress,Elementor</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://rmc.dominno-bd.com/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
      </div>
{/* rmc........................................................................ */}

<div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Twinklers</h1>
        <Image className='projectimg' src={img10} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> Wordpress,Elementor</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://twinklerscare.com"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
      </div>


{/* onlinebazar........................................................................ */}
      
      {/* onlinebazar........................................................................ */}

    </div>
    </section>


    <section className="mt-16">
    

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* fushion........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Fushion Resturant</h1>
        <Image className='projectimg' src={img11} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> Wordpress,Elementor</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://test.affix-bd.com/wp"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
      </div>
{/* fushion........................................................................ */}




{/* onlinebazar........................................................................ */}
      
      {/* onlinebazar........................................................................ */}

    </div>
    </section>
    {/* wordpress end */}




        <div className="container mx-auto mt-32 mb-16">
        <div className="divider text-3xl font-bold font-cormorant">MERN-STACK</div>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Travelguru</h1>
        <Image className='projectimg' src={img1} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
       
        
      </div>
{/* travelguru........................................................................ */}



{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Online Bazar</h1>
      <Image className='projectimg' src={img2} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex items-center justify-center'>
        
        <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
       
      </div>
      {/* onlinebazar........................................................................ */}

    </div>



    



{/* frontend */}
    <section>
    <section>
    <div className="container mx-auto mt-32 mb-16">
    <div className="divider text-3xl font-bold font-cormorant">Frontend</div>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Fidalgo</h1>
        <Image className='projectimg' src={img3} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> ReactJS, Tailwind css.</h1>
        <div className='flex justify-center items-center'>
        
        <a target={'_blank'} href="https://fidalgo.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
      </div>
{/* travelguru........................................................................ */}



{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Cara Shop</h1>
      <Image className='projectimg' src={img8} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span>HTML, CSS, Bootstrap, Javascript.</h1>
        <div className='flex items-center justify-center'>
        
        <a target={'_blank'} href="https://cara-shop-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
       
      </div>
      {/* onlinebazar........................................................................ */}

    </div>
    </section>
    </section>

    <section className="mt-16">
    

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

    
{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>HYDE Furniture</h1>
        <Image className='projectimg' src={img7} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> HTML, CSS, Bootstrap, ReactJs, React Router, Email Js, Firebase Authentication.</h1>
        <div className='flex justify-center items-center'>
       
        <a target={'_blank'} href="https://hyde-furniture.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
      </div>
{/* travelguru........................................................................ */}



{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Furns</h1>
      <Image className='projectimg' src={img9} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span> HTML, CSS, Bootstrap, ReactJs, React Router, Email Js, Firebase Authentication.</h1>
        <div className='flex items-center justify-center'>
        
        <a target={'_blank'} href="https://furns-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
       
      </div>
      {/* onlinebazar........................................................................ */}

    </div>
    </section>

{/* fronend end */}

    </div>

    <div className="flex flex-col justify-center items-center text-center font-bold mt-32">
        <h1 className="text-6xl mb-8 font-marker font-bold">Have you any Project?</h1>

        
      
        <MagneticButton >
        <a href="/contact">
        <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-full before:hover:rounded-full mb-8 font-marker">Hire Me!</button></a>
        </MagneticButton>
        
        </div>
      </div>
       
  )
}

export default Portfoliosec