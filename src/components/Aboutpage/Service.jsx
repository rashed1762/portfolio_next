import { motion } from "framer-motion";

const services = [
  {
    title: "MERN Stack Development",
  
    icon: "🚀",
  },
  {
    title: "Frontend Development",
   
    icon: "💻",
  },
  {
    title: "Wordpress Development",
    
    icon: "📱",
  },
  {
    title: "Malware Cleaning",
    
    icon: "🌍",
  },
  {
    title: "Bug Fixing",
    
    icon: "🎨",
  },
  {
    title: "Resposive Design",
    
    icon: "⚙️",
  },
];

const Service = () => {
  return (
    <div className=" mt-32 xxs:mt-4">
      <div className=" ">
        <h1 className="text-4xl font-bold text-center mb-8  font-mont text-[190px] opacity-[.3] absolute
        xxs:text-5xl
        xs:text-5xl
        sm:text-8xl
        lg:text-[190px]
        shadow
        ">Service</h1>
       
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12 lg:pt-48
      sm:pt-32
      "
       >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-indigo-100 cursor-pointer transition-all duration-300 ease-in-out"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Service