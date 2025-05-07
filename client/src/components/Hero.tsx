import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="block">Hi, I'm</span>
          <span className="text-primary-600 block mt-2">Jeeva Yovan E</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mb-6">
          Lead DevOps Engineer
        </h2>
        
        <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
          A proficient and reliable professional with good understanding of working various domain areas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            View Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
