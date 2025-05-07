import { motion } from "framer-motion";

export function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 circuit-animation opacity-20" />
    </div>
  );
}

export function HolographicCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`holo-card ${className}`}
    >
      {children}
    </motion.div>
  );
}