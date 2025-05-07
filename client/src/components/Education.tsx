import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function Education() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Education" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Engineering (ECE)</h3>
                <p className="text-primary-600 mt-1">Dhirajlal Gandhi College of Technology, Salem</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-600">Aug 2019 - Jul 2023</p>
                <p className="text-gray-800 font-medium">8.2 GPA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
