"use client"
import React, { useEffect } from "react";
import { preLoaderAnim } from ".";
import '../css/preload.css'


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome</span>
        <span>To My</span>
        <span>Website</span>
        <span>Website</span>
        
      </div>
    </div>
  );
};

export default PreLoader;