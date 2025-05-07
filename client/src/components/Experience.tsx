import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { experiences } from "@/lib/constants";

export default function Experience() {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Experience" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                <p className="text-primary-600 font-medium mb-4">{exp.company} | {exp.period}</p>
                
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1.5">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
