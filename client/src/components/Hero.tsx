import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GlitchText, NeonText, TerminalText } from "@/components/ui/glitch-text";
import { HolographicCard } from "@/components/ui/circuit-background";
import { CyberButton, DeployButton } from "@/components/ui/cyber-button";

// Simulated data for system status indicators
const systemStatuses = [
  { name: "CPU", value: 86, max: 100 },
  { name: "MEMORY", value: 72, max: 100 },
  { name: "NETWORK", value: 93, max: 100 },
  { name: "UPTIME", value: 98, max: 100 }
];

export default function Hero() {
  // Animation States
  const [showMainContent, setShowMainContent] = useState(false);
  const [showDeployBtn, setShowDeployBtn] = useState(false);
  const [showCodeAnimation, setShowCodeAnimation] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  useEffect(() => {
    // Simulate a terminal boot sequence
    const timer1 = setTimeout(() => setShowMainContent(true), 500);
    const timer2 = setTimeout(() => setShowDeployBtn(true), 1800);
    const timer3 = setTimeout(() => setShowCodeAnimation(true), 1200);
    
    // Simulated deployment code lines that will appear in background
    const deploymentCodeExample = [
      "const deploy = async () => {",
      "  console.log('Initializing deployment...');",
      "  await ci.runTests();",
      "  const build = await docker.buildImage('./app');",
      "  await kubernetes.deploy(build, 'production');",
      "  console.log('Deployment successful!');",
      "};",
      "",
      "// Execute deployment pipeline",
      "deploy().catch(err => {",
      "  console.error('Deployment failed:', err);",
      "  process.exit(1);",
      "});"
    ];
    
    if (showCodeAnimation) {
      let currentLines: string[] = [];
      let lineIndex = 0;
      
      const codeInterval = setInterval(() => {
        if (lineIndex < deploymentCodeExample.length) {
          currentLines = [...currentLines, deploymentCodeExample[lineIndex]];
          setCodeLines([...currentLines]);
          lineIndex++;
        } else {
          clearInterval(codeInterval);
        }
      }, 200);
      
      return () => clearInterval(codeInterval);
    }
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [showCodeAnimation]);

  // Click handler for the "Deploy Now" button with sound effect
  const handleDeployClick = () => {
    // Deploy sound effect
    const deploySound = new Audio();
    deploySound.src = "data:audio/wav;base64,UklGRl4EAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YToEAAAAAAAAAAAAAAAAgD+eP8o/9D8bQDtAVkBuQINAlUCnQLRAwUDMQNVA20DhQORA6UDrQOlA5EDfQNRA0EDEQL9At0CwQKhAnkCUQIpAfkBzQGlAXUBSQEdAPUA0QCtAI0AbQBNAC0AEQPw/9j/vP+k/4z/dP9g/0z/OP8U/wT+5P7I/rT+oP6U/oz+dP5s/mT+WP5M/kD+OP4s/hz+EP4E/fT94P3Q/bj9qP2Y/Yj9eP1w/Wj9YP1Y/Vj9UP1I/UD9OP0o/SD9IP0I/Qj86PzY/ND8wPyw/LD8oPyY/JD8kPyA/ID8gPxw/HD8cPxw/HD8gPyA/ID8gPyA/JD8kPyQ/JD8oPyg/KD8oPyw/LD8wPzA/MD80PzQ/ND84Pzg/OD88Pzw/PD9AP0A/QD9CP0I/RD9EP0Q/SD9IP0g/Sj9KP0o/Sj9KP0w/TD9MP04/Tj9QP1A/UD9SP1I/Uj9UP1Q/Vj9WP1Y/WD9YP1o/Wj9aP1w/XD9eP14/YD9gP2I/Yj9kP2Q/ZD9mP2Y/aD9oP2o/aj9sP2w/bj9uP3A/cD9yP3I/dD90P3Y/dj94P3g/ej96P3w/fD9+P34/QD+AP4I/gj+EP4Q/hj+GP4g/iD+KP4o/jD+MP44/jj+QP5A/kj+SP5Q/lD+WP5Y/mD+YP5o/mj+cP5w/nj+eP6A/oD+iP6I/pD+kP6Y/pj+oP6g/qj+qP6w/rD+uP64/sD+wP7I/sj+0P7Q/tj+2P7g/uD+6P7o/vD+8P74/vj+AP8A/wj/CP8Q/xD/GP8Y/yD/IP8o/yj/MP8w/zj/OP9A/0D/SP9I/1D/UP9Y/1j/YP9g/2j/aP9w/3D/eP94/4D/gP+I/4j/kP+Q/5j/mP+g/6D/qP+o/7D/sP+4/7j/wP/A/8j/yP/Q/9D/2P/Y/+D/4P/o/+j/8P/w//j/+P8AAAgAEAAYACAAKAAwADgAQABIAFAAWABgAGgAcAB4AIAAiACQAJgAoACgAKgAsAC4AMAAyADIANAA2ADYANgA4ADgAOAA6ADwAPAA8AD4APgA+AAAAQABAAgACAAIABABEAEQARABGAEYARgBGAEYARgBGAEQARABEAEQAQgBCAEIAQABAAEAAQAB+AD4APgA+ADwAPAA8ADwAOgA6ADoAOgA4ADgAOAA4ADYANgA2ADQANAAyADIAMgAwACwALAAsACwAKgAqACoAKAAkACQAJAAiACIAIAAgABwAHAAaABoAGAAYABYAFgAUABQAEgASAA4ADgAMAAwACgAKAAgABgAGAAQAAgACAD4//j/+P/w/+j/6P/g/+D/2P/Y/9D/0P/I/8j/wP+4/7j/sP+w/6j/oP+g/5j/mP+Q/5D/iP+A/4D/eP94/3D/cP9o/2D/YP9Y/1D/UP9I/0j/QP9A/zj/OP8w/yj/KP8g/yD/GP8Y/xD/CP8I/wD/AP/4/vD+8P7o/uj+4P7Y/tj+0P7Q/sj+wP7A/rj+uP6w/rD+qP6g/qD+mP6Y/pD+kP6I/oD+eP54/nD+cP5o/mD+YP5Y/lj+UP5I/kj+QP5A/jj+OP4w/jD+KP4g/iD+GP4Y/hD+CP4I/gD+AP74/fD98P3o/ej";
    deploySound.volume = 0.2;
    deploySound.play().catch(err => console.log("Audio blocked"));
    
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-10 relative overflow-hidden"
    >
      {/* Background code animation - simulates CI/CD pipeline */}
      {showCodeAnimation && (
        <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 font-mono text-xs leading-tight text-primary">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="whitespace-pre"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* Main holographic content */}
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left column with holographic text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showMainContent ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-center md:text-left"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h4 className="text-primary font-mono uppercase tracking-widest mb-2 opacity-70">
                  <TerminalText text="// initialize profile" />
                </h4>
                
                <div className="mb-4">
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-orbitron"
                    initial={{ scale: 0.9 }}
                    animate={{ 
                      scale: [0.9, 1.05, 1],
                      rotateX: [0, 5, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{ 
                      delay: 0.5,
                      duration: 0.8
                    }}
                  >
                    <NeonText 
                      text="JEEVA YOVAN" 
                      as="span" 
                      className="block font-orbitron font-black"
                    />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 font-light text-foreground/80">
                      Lead DevOps<span className="text-accent">_</span>Engineer
                    </span>
                  </motion.h1>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg max-w-lg leading-relaxed font-mono text-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                A proficient and reliable professional with expertise in CI/CD pipelines, 
                infrastructure automation, cloud architecture, and modern DevOps practices.
              </motion.p>
              
              {/* Action buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showDeployBtn ? 1 : 0, y: showDeployBtn ? 0 : 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-wrap gap-4 pt-4 md:justify-start justify-center"
              >
                <DeployButton onClick={handleDeployClick}>
                  Deploy Projects
                </DeployButton>
                
                <CyberButton 
                  glowColor="blue"
                  className="border-primary text-primary"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Establish Connection
                </CyberButton>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column with system status */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: showMainContent ? 1 : 0, x: showMainContent ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:col-span-5"
          >
            <HolographicCard className="p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-primary">System Status</h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-1"></div>
                    <span className="text-xs font-mono text-secondary">ONLINE</span>
                  </div>
                </div>
                
                {/* Status bars */}
                <div className="space-y-4">
                  {systemStatuses.map((status, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-foreground/70">{status.name}</span>
                        <span className="text-primary">{status.value}%</span>
                      </div>
                      <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${status.value}%` }}
                          transition={{ delay: 1 + (index * 0.2), duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Terminal output simulation */}
                <div className="pt-2 mt-auto">
                  <div className="border border-border/40 rounded bg-background/50 p-3 font-mono text-xs">
                    <div className="flex items-center mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2 opacity-70"></div>
                      <span className="text-foreground/70">Terminal Output</span>
                    </div>
                    <div className="space-y-1 text-foreground/70">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >
                        <span className="text-secondary mr-1">&gt;</span> Skills verified: containerization, CI/CD
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                      >
                        <span className="text-secondary mr-1">&gt;</span> AWS, Azure, GCP credentials: valid
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.5 }}
                      >
                        <span className="text-primary mr-1">&gt;</span> 
                        <TerminalText 
                          text="Full stack deployment ready..." 
                          className="text-primary" 
                          width="auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
