"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
import { motion, stagger } from 'framer-motion'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const topVarient={
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: 45,
            
        }
    }
    const centerVarient={
        closed:{
            opacity: 1,
        },
        opened:{
            opacity: 0,
        }
    }

    const bottomVarient={
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: -45,
        }
    }

    const listVarient={
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
        },
    };

    

    const menuVarse={
        initial:{
            scaleY:0,
        },
        animate:{
            scaleY:1,
            transition:{
              duration:0.5,
                ease: [0.12,0,0.39,0],
            }
            
        },
        closed:{
            scaleY:0,
            transition:{
              duration:0.5,
                ease: [0.12,0,0.39,1],
        },
    },
    };

    const containerVarse={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }


    const links=[
        {url: "/" ,title: "Home"},
        {url: "/about" ,title: "About"},
        {url: "/portfolio" ,title: "Portfolio"},
        {url: "/contact" ,title: "Contact"},
    ]
  return (
    <div className='h-full'>
       <div className="navbar h-full ">
  <div className="navbar-start gap-2">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex flex-col  z-50 relative w-14 h-8" onClick={(()=>setOpen(!open))}>
        <motion.div variants={topVarient} 
        animate={open ? "opened" : "closed"}
        className='w-8 h-1 bg-black origin-left'></motion.div>
        <motion.div variants={centerVarient}  animate={open ? "opened" : "closed"} className='w-8 h-1 bg-black'></motion.div>
        <motion.div variants={bottomVarient} animate={open ? "opened" : "closed"}  className='w-8 h-1 bg-black origin-left'></motion.div>
        
      </div>
      { open && (
         <motion.ul
         variants={menuVarse}
         initial="initial"
         animate="animate"
         closed="closed"
         tabIndex={0}
         className="menu menu-sm dropdown-content w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
         {links.map((link)=>(
            <motion.div
            key={link.title}
            variants={containerVarse}
            initial="initial"
            animate="open"
            >
            <Link href={link.url} key={link.title}>
             {link.title}
         </Link>
            </motion.div>
         
      ))}
       </motion.ul>
     )}
     
    </div>
    <a className="btn btn-ghost text-xl border-2 border-indigo-400 ">Rashedul islam</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 font-bold">
     {links.map((link)=>(
       <NavLink link={link} key={link.title} />
     ))}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar