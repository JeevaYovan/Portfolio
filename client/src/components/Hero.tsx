import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GlitchText, NeonText, TerminalText } from "@/components/ui/glitch-text";
import { HolographicCard } from "@/components/ui/circuit-background";
import { CyberButton, DeployButton } from "@/components/ui/cyber-button";

// Simulated data for SRE-specific system status indicators
const systemStatuses = [
  { name: "APP AVAILABILITY", value: 98, max: 100 },
  { name: "SCALABILITY", value: 95, max: 100 },
  { name: "SECURITY", value: 97, max: 100 },
  { name: "PERFORMANCE", value: 90, max: 100 }
];

export default function Hero() {
  // Animation States
  const [showMainContent, setShowMainContent] = useState(false);
  const [showDeployBtn, setShowDeployBtn] = useState(false);
  const [showCodeAnimation, setShowCodeAnimation] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  // System Check functionality
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  
  // DevOps commands cycler for terminal
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const devOpsCommands = [
    "Deploying to AWS...",
    "Scaling Kubernetes pods...",
    "Running integration tests...",
    "Building Docker image...",
    "Validating Terraform plan...",
    "Checking Prometheus alerts...",
    "Updating load balancer...",
    "Rolling out canary deployment..."
  ];
  
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
  
  // DevOps command cycling effect
  useEffect(() => {
    // Cycle through the commands every 3 seconds
    const commandInterval = setInterval(() => {
      setCurrentCommandIndex((prevIndex) => 
        prevIndex === devOpsCommands.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(commandInterval);
  }, [devOpsCommands.length]);

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
  
  // System Check functionality
  const handleSystemCheck = () => {
    if (isScanning) return;
    
    // Play a scan sound
    const scanSound = new Audio();
    scanSound.src = "data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAAB/f39/f39/f39/f39/f39/f3+AgICAgYGBgoKCg4ODgoKCgYGBgICAgH9/f39+fn5+fn5+fn5+f39/f4CAgIGBgYKCgoKCgoKCgoGBgYCAgH9/f35+fnx8fHt7e3t7e3x8fH1+fn9/f4CAgIGBgYGBgYGBgYCAgH9/f35+fnt7e3l5eXh4eHh4eHl5eXp7e31+fn9/f4CAgICAgIB/f39+fn58fHx6enp4eHh3d3d3d3d4eHh6enp8fHx+fn5/f39/f39/f35+fnx8fHp6enl5eXd3d3Z2dnZ2dnd3d3l5eXt7e3x8fH5+fn5+fn5+fn19fXt7e3p6end3d3Z2dnV1dXV1dXZ2dnd3d3l5eXt7e3x8fH19fX19fX19fXx8fHt7e3l5eXd3d3V1dXR0dHR0dHV1dXZ2dnh4eHp6ent7e3x8fHx8fHx8fHt7e3p6enh4eHd3d3V1dXR0dHNzc3R0dHV1dXZ2dnd3d3l5eXp6ent7e3t7e3t7e3p6enl5eXh4eHd3d3V1dXR0dHNzc3Nzc3R0dHV1dXZ2dnd3d3h4eHl5eXl5eXl5eXl5eXh4eHd3d3Z2dnV1dXR0dHNzc3Jycl5eXkZGRjo6Oj4+PkhISFZWVmVlZXBwcHl5eX5+foCAgIGBgYGBgYCAgH9/f319fXt7e3p6enl5eXh4eHh4eHd3d25ubmRkZFpaWlJSUk1NTUpKSklJSUtLS09PT1NTU1dXV1xcXGBgYGNjY2ZmZmlpaWtra2xsbHFxcXd3d3t7e39/f4KCgoWFhYeHh4mJiYqKiouLi4qKiomJiYeHh4WFhYKCgn9/f3t7e3Z2dnJycm1tbWlpaWVlZWFhYV1dXVlZWVVVVVFRUU1NTUhISEZGRkREREJCQkFBQUBAQD8/Pz8/Pz8/Pz9AQEBBQUFBQUJCQ0NEREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVNTU1RUVFVVVVZWV1dXV1hYWFlZWVpaWlpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHBwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///w==";
    scanSound.volume = 0.2;
    scanSound.play().catch(() => console.log("Audio blocked"));
    
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    
    // Simulate a scan progress
    let progress = 0;
    const scanInterval = setInterval(() => {
      progress += 2;
      setScanProgress(progress);
      
      if (progress >= 100) {
        clearInterval(scanInterval);
        setIsScanning(false);
        setScanComplete(true);
        
        // Play completion sound
        const completeSound = new Audio();
        completeSound.src = "data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YcADAAAAAAAA//8AAAEAAQACAAIABAADAAMABQAEAAQABQAFAAUABQAGAAUABQAFAAUABQAEAAQABAAEAAQAA//+//7//v/+//3//f/9//z//P/8//v/+//7//r/+v/6//n/+f/5//j/+P/4//f/9//3//b/9v/2//X/9f/1//T/9P/0//P/8//z//L/8v/y//H/8f/x//D/8P/w/+//7//v/+7/7v/u/+3/7f/t/+z/7P/s/+v/6//r/+r/6v/q/+n/6f/p/+j/6P/o/+f/5//n/+b/5v/m/+X/5f/l/+T/5P/k/+P/4//j/+L/4v/i/+H/4f/h/+D/4P/g/9//3//f/97/3v/e/93/3f/d/9z/3P/c/9v/2//b/9r/2v/a/9n/2f/Z/9j/2P/Y/9f/1//X/9b/1v/W/9X/1f/V/9T/1P/U/9P/0//T/9L/0v/S/9H/0f/R/9D/0P/Q/8//z//P/87/zv/O/83/zf/N/8z/zP/M/8v/y//L/8r/yv/K/8n/yf/J/8j/yP/I/8f/x//H/8b/xv/G/8X/xf/F/8T/xP/E/8P/w//D/8L/wv/C/8H/wf/B/8D/wP/A/7//v/+//77/vv++/73/vf+9/7z/vP+8/7v/u/+7/7r/uv+6/7n/uf+5/7j/uP+4/7f/t/+3/7b/tv+2/7X/tf+1/7T/tP+0/7P/s/+z/7L/sv+y/7H/sf+x/7D/sP+w/6//r/+v/67/rv+u/63/rf+t/6z/rP+s/6v/q/+r/6r/qv+q/6n/qf+p/6j/qP+o/6f/p/+n/6b/pv+m/6X/pf+l/6T/pP+k/6P/o/+j/6L/ov+i/6H/of+h/6D/oP+g/5//n/+f/57/nv+e/53/nf+d/5z/nP+c/5v/m/+b/5r/mv+a/5n/mf+Z/5j/mP+Y/5f/l/+X/5b/lv+W/5X/lf+V/5T/lP+U/5P/k/+T/5L/kv+S/5H/kf+R/5D/kP+Q/4//j/+P/47/jv+O/43/jf+N/4z/jP+M/4v/i/+L/4r/iv+K/4n/if+J/4j/iP+I/4f/h/+H/4b/hv+G/4X/hf+F/4T/hP+E/4P/g/+D/4L/gv+C/4H/gf+B/4D/gP+A/3//f/9/";
        completeSound.volume = 0.2;
        completeSound.play().catch(() => console.log("Audio blocked"));
      }
    }, 30);
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
                
                {/* System Check button */}
                <div className="pt-3">
                  <CyberButton
                    glowColor="green"
                    className="w-full text-secondary bg-muted/30 border-secondary/50 font-mono text-sm"
                    onClick={handleSystemCheck}
                    disabled={isScanning}
                  >
                    {isScanning ? "Running System Check..." : scanComplete ? "System Healthy √" : "Run System Check"}
                  </CyberButton>
                  
                  {/* Progress bar for scanning animation */}
                  {isScanning && (
                    <div className="mt-3">
                      <div className="text-xs font-mono text-secondary mb-1 flex justify-between">
                        <span>Diagnostic scan in progress</span>
                        <span>{scanProgress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: `${scanProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Scan result message */}
                  {scanComplete && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-mono text-secondary border border-secondary/20 bg-muted/20 rounded p-2"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                        <span className="uppercase font-bold">System Check Complete</span>
                      </div>
                      <div className="mt-1 pl-4 space-y-1">
                        <div>• Infrastructure: optimal</div>
                        <div>• Security protocols: activated</div>
                        <div>• CI/CD pipeline: operational</div>
                        <div>• Kubernetes clusters: healthy</div>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Terminal output simulation */}
                <div className="pt-2 mt-3">
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
                      
                      {/* Cycling DevOps commands */}
                      <motion.div
                        key={currentCommandIndex}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1.5 border-t border-primary/10 pt-1.5"
                      >
                        <span className="text-accent mr-1">&gt;</span> 
                        <span className="text-accent/90 font-mono">
                          {devOpsCommands[currentCommandIndex]}
                        </span>
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
