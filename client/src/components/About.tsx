import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="About Me" />
        
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
          <p className="text-gray-700 text-lg leading-relaxed">
            A proficient and reliable professional with good understanding of working various domain areas. 
            Currently working as a Lead DevOps engineer at a major IT organization with demonstrated track 
            record of performance in deliverables. Some of my traits are resilience, quick learner, and a performer. 
            I like to use my technical and soft skills along with team collaboration to develop/optimize existing 
            solution and to learn and develop from the process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
