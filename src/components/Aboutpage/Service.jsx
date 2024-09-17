import { motion } from "framer-motion";

const services = [
  {
    title: "MERN Stack Development",
    description: "This is the description for Service 1.",
    icon: "🚀",
  },
  {
    title: "Frontend Development",
    description: "This is the description for Service 2.",
    icon: "💻",
  },
  {
    title: "Wordpress Development",
    description: "This is the description for Service 3.",
    icon: "📱",
  },
  {
    title: "Malware Cleaning",
    description: "This is the description for Service 4.",
    icon: "🌍",
  },
  {
    title: "Bug Fixing",
    description: "This is the description for Service 5.",
    icon: "🎨",
  },
  {
    title: "Resposive Design",
    description: "This is the description for Service 6.",
    icon: "⚙️",
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">My Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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