"use client"
import React, { useEffect } from "react";
import { preLoaderAnim } from ".";
import '../css/preload.css'


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader font-marker bg-gradient-to-b from-black to-slate-500">
      <div className="texts-container">
        <span>Welcome</span>
        <span>To </span>
        <span>Rashed.dev</span>
        <span>Profile</span>
        
      </div>
    </div>
  );
};

export default PreLoader;