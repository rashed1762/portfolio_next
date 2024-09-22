"use client"
import '../css/portfolio.css'
import img1 from '../../assests/travelguru-23c1f.web.app_.png'
import img2 from '../../assests/online bazar12.PNG'
import img3 from '../../assests/fidalgoo.netlify.app_.png'
import Image from 'next/image'




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
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20'>

{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Travelguru</h1>
        <Image className='projectimg' src={img1} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex justify-center items-center'>
        <label htmlFor="travelguru-modal-5" className="btn btn-outline btn-accent mt-4 ">View Details</label>
        <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
        <div className='text-white'>
        <input type="checkbox" id="travelguru-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="travelguru-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Travelguru</h3>
   <div>
  
        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Travelguru</span> is a traveling website.In Now a day's in our world their has many natural place that give people refreshment and relaxing time.So that reason we make a website that help to travel easily find room in their suitable place and suitable date's. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their place and choose their rooms.</li>
          <li className="step step-primary">People can also buy traveling product from this website.</li>
          <li className="step step-primary">Specific user can see specific product and room which they buy and book room.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :travelguru@gmail.com , password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
    <div >
    <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4 flex justify-center items-center">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>
{/* travelguru........................................................................ */}



{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Online Bazar</h1>
      <Image className='projectimg' src={img2} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex items-center justify-center'>
        <label htmlFor="onlinebazar-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
       
        <div className='text-white'>
        <input type="checkbox" id="onlinebazar-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="onlinebazar-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Online Bazar</h3>
   <div>
   

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Online Bazar</span> is online platform that is help a people shopping their daily need from our website from home.Day by day our population grow heavily and people are stuck at  traffic jam.So everyone suffer to collect daily bazar.so we solve the proble.people can easily shop their daily need .by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their product and buy easily..</li>
          <li className="step step-primary">Specific user can see specific product  which they want to buy</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :admin@gmail.com, password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
   <div >
   <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
      </div>
      {/* onlinebazar........................................................................ */}

    </div>



    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 ml-20 mr-20 mt-16'>

{/* travelgur........................................................................ */}
      <div className=''>
        <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Fidalgo</h1>
        <Image className='projectimg' src={img3} ></Image>
        <h1 className='flex justify-center items-center  mt-4'><span className='text-xl font-bold text-red-400'> Technology: </span> ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex justify-center items-center'>
        <label htmlFor="travelguru-modal-5" className="btn btn-outline btn-accent mt-4 ">View Details</label>
        <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
        
        <div className='text-white'>
        <input type="checkbox" id="travelguru-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="travelguru-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Travelguru</h3>
   <div>
  
        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Travelguru</span> is a traveling website.In Now a day's in our world their has many natural place that give people refreshment and relaxing time.So that reason we make a website that help to travel easily find room in their suitable place and suitable date's. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their place and choose their rooms.</li>
          <li className="step step-primary">People can also buy traveling product from this website.</li>
          <li className="step step-primary">Specific user can see specific product and room which they buy and book room.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :travelguru@gmail.com , password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
    <div >
    <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4 flex justify-center items-center">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>
{/* travelguru........................................................................ */}



{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2 flex justify-center items-center'>Online Bazar</h1>
      <Image className='projectimg' src={img2} ></Image>
      <h1 className='flex justify-center items-center mt-4'><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
        <div className='flex items-center justify-center'>
        <label htmlFor="onlinebazar-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        </div>
        
       
        <div className='text-white'>
        <input type="checkbox" id="onlinebazar-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="onlinebazar-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Online Bazar</h3>
   <div>
   

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Online Bazar</span> is online platform that is help a people shopping their daily need from our website from home.Day by day our population grow heavily and people are stuck at  traffic jam.So everyone suffer to collect daily bazar.so we solve the proble.people can easily shop their daily need .by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their product and buy easily..</li>
          <li className="step step-primary">Specific user can see specific product  which they want to buy</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :admin@gmail.com, password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
   <div >
   <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
      </div>
      {/* onlinebazar........................................................................ */}

    </div>



    </div>

      </div>
       
  )
}

export default Portfoliosec