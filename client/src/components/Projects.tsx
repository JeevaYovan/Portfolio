import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { projects } from "@/lib/constants";

export default function Projects() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Projects" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.period}</p>
                  
                  <div className="mt-4 space-y-2">
                    {project.description.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2 mt-1.5">•</span>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
