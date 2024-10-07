import React from 'react'

const Textshifting = () => {
  return (
    <div><section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h2 className="text-4xl font-bold mb-8">Text Shifting Effects</h2>
    
    {/* Text 1 - Slide in from left */}
    <div className="mb-4">
      <h3 className="text-3xl font-semibold text-blue-500 animate-slideIn">
        Slide In from Left
      </h3>
    </div>
    
    {/* Text 2 - Fade in and move up */}
    <div className="mb-4">
      <h3 className="text-3xl font-semibold text-green-500 animate-fadeInUp">
        Fade In and Move Up
      </h3>
    </div>
    
    {/* Text 3 - Rotate In */}
    <div>
      <h3 className="text-3xl font-semibold text-red-500 animate-rotateIn">
        Rotate In
      </h3>
    </div>
  </section></div>
  )
}

export default Textshifting