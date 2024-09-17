import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
      const element = scrollContainerRef.current;
      const sections = gsap.utils.toArray(".portfolio-section");
  
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + element.offsetWidth,
        },
      });
    }, []);
  
    
  return (
    
    <div ref={scrollContainerRef} className="relative overflow-hidden h-screen">
    <div className="flex">
      {/* Portfolio Content #1 */}
      <div className="portfolio-section w-screen h-screen flex items-center justify-center bg-gray-800">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Project 1</h2>
          <p className="text-xl">Description of the first project with detailed information.</p>
        </div>
      </div>
      {/* Portfolio Content #2 */}
      <div className="portfolio-section w-screen h-screen flex items-center justify-center bg-blue-500">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Project 2</h2>
          <p className="text-xl">Description of the second project, showcasing details and images.</p>
        </div>
      </div>
      {/* Portfolio Content #3 */}
      <div className="portfolio-section w-screen h-screen flex items-center justify-center bg-green-500">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Project 3</h2>
          <p className="text-xl">A breakdown of the third project, highlighting key features.</p>
        </div>
      </div>
      {/* Portfolio Content #4 */}
      <div className="portfolio-section w-screen h-screen flex items-center justify-center bg-purple-500">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Project 4</h2>
          <p className="text-xl">Overview of the fourth project with technical details.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ScrollSection