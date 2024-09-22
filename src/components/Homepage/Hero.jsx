import Image from 'next/image';
import heroImage from '../../../public/assest/img/profile.png'; // Replace with your image

const Hero = () => {

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Left Side: Image */}
        <div className="relative w-full h-96 md:h-auto">
          <Image 
            src={heroImage} 
            alt="Full-Stack Developer" 
            layout="fill" 
            objectFit="cover"
            className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Full-Stack Web Developer
          </h1>
          <p className="text-lg md:text-xl">
            I build high-performance web applications with modern technologies like Next.js, Tailwind CSS, and more.
          </p>
          <a 
            href="#projects"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg transition-colors duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero