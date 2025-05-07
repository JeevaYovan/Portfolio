import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { GlitchText, TerminalText } from "@/components/ui/glitch-text";
import { CyberButton } from "@/components/ui/cyber-button";
import { HolographicCard } from "@/components/ui/circuit-background";
import { ScanLine } from "@/components/ui/scanline";

export default function About() {
  const { ref, controls } = useScrollAnimation();
  
  // Bio decryption states
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptionProgress, setDecryptionProgress] = useState(0);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [decryptedText, setDecryptedText] = useState("");
  const [scanActive, setScanActive] = useState(false);
  
  const bioText = "A proficient and reliable professional with good understanding of working various domain areas. Currently working as a Lead DevOps engineer at a major IT organization with demonstrated track record of performance in deliverables. Some of my traits are resilience, quick learner, and a performer. I like to use my technical and soft skills along with team collaboration to develop/optimize existing solution and to learn and develop from the process.";
  
  // Watch for scroll to trigger scan effect
  const aboutSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const rect = aboutSectionRef.current.getBoundingClientRect();
        // When about section is visible in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScanActive(true);
        } else {
          setScanActive(false);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Bio decryption effect
  const handleDecrypt = () => {
    if (isDecrypting) return;
    
    // Play decryption sound
    const decryptSound = new Audio();
    decryptSound.src = "data:audio/wav;base64,UklGRpYEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YXIEAACBgYGCgoKDg4OEhISEhISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSEhIODg4KCgoGBgYCAgH5+fXx8e3t6enl5eHd3dnZ1dXR0c3NycnFxcHBvb25ubW1sbGtra2pqaWlpaWhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhnZ2dnZ2dnZ2dnZ2dnZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVkZGRkZGRkZGRkZGRjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh";
    decryptSound.volume = 0.2;
    decryptSound.play().catch(err => console.log("Audio blocked"));
    
    setIsDecrypting(true);
    setDecryptionProgress(0);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setDecryptionProgress(progress);
      
      // Generate random characters during decryption
      if (progress < 100) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?";
        let randomText = "";
        for (let i = 0; i < bioText.length; i++) {
          // Gradually reveal more correct characters as progress increases
          if (Math.random() * 100 < progress) {
            randomText += bioText.charAt(i);
          } else {
            randomText += characters.charAt(Math.floor(Math.random() * characters.length));
          }
        }
        setDecryptedText(randomText);
      } else {
        setDecryptedText(bioText);
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsDecrypting(false);
        setIsDecrypted(true);
        
        // Play completion sound
        const completeSound = new Audio();
        completeSound.src = "data:audio/wav;base64,UklGRuQDAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YcADAAAAAAAA//8AAAEAAQACAAIABAADAAMABQAEAAQABQAFAAUABQAGAAUABQAFAAUABQAEAAQABAAEAAQAA//+//7//v/+//3//f/9//z//P/8//v/+//7//r/+v/6//n/+f/5//j/+P/4//f/9//3//b/9v/2//X/9f/1//T/9P/0//P/8//z//L/8v/y//H/8f/x//D/8P/w/+//7//v/+7/7v/u/+3/7f/t/+z/7P/s/+v/6//r/+r/6v/q/+n/6f/p/+j/6P/o/+f/5//n/+b/5v/m/+X/5f/l/+T/5P/k/+P/4//j/+L/4v/i/+H/4f/h/+D/4P/g/9//3//f/97/3v/e/93/3f/d/9z/3P/c/9v/2//b/9r/2v/a/9n/2f/Z/9j/2P/Y/9f/1//X/9b/1v/W/9X/1f/V/9T/1P/U/9P/0//T/9L/0v/S/9H/0f/R/9D/0P/Q/8//z//P/87/zv/O/83/zf/N/8z/zP/M/8v/y//L/8r/yv/K/8n/yf/J/8j/yP/I/8f/x//H/8b/xv/G/8X/xf/F/8T/xP/E/8P/w//D/8L/wv/C/8H/wf/B/8D/wP/A/7//v/+//77/vv++/73/vf+9/7z/vP+8/7v/u/+7/7r/uv+6/7n/uf+5/7j/uP+4/7f/t/+3/7b/tv+2/7X/tf+1/7T/tP+0/7P/s/+z/7L/sv+y/7H/sf+x/7D/sP+w/6//r/+v/67/rv+u/63/rf+t/6z/rP+s/6v/q/+r/6r/qv+q/6n/qf+p/6j/qP+o/6f/p/+n/6b/pv+m/6X/pf+l/6T/pP+k/6P/o/+j/6L/ov+i/6H/of+h/6D/oP+g/5//n/+f/57/nv+e/53/nf+d/5z/nP+c/5v/m/+b/5r/mv+a/5n/mf+Z/5j/mP+Y/5f/l/+X/5b/lv+W/5X/lf+V/5T/lP+U/5P/k/+T/5L/kv+S/5H/kf+R/5D/kP+Q/4//j/+P/47/jv+O/43/jf+N/4z/jP+M/4v/i/+L/4r/iv+K/4n/if+J/4j/iP+I/4f/h/+H/4b/hv+G/4X/hf+F/4T/hP+E/4P/g/+D/4L/gv+C/4H/gf+B/4D/gP+A/3//f/9/";
        completeSound.volume = 0.2;
        completeSound.play().catch(err => console.log("Audio blocked"));
      }
    }, 30);
  };

  return (
    <section ref={aboutSectionRef} id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="About" />
        
        <div className="max-w-5xl mx-auto mt-10 relative">
          {/* Holographic data file panel */}
          <HolographicCard className="p-0 relative overflow-hidden">
            {/* Scan line effect */}
            {scanActive && (
              <ScanLine />
            )}
            
            {/* Header bar with file information */}
            <div className="border-b border-primary/30 bg-background/80 backdrop-blur-sm p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="font-mono text-xs text-foreground/70">
                  <TerminalText text="// PROFILE.holo" />
                </div>
              </div>
              <div className="font-mono text-xs text-primary/80">
                <span className="animate-pulse">■</span> STATUS: {isDecrypted ? "DECRYPTED" : "ENCRYPTED"}
              </div>
            </div>
            
            {/* Main holographic content with glow effect */}
            <div className="p-8 bg-background/30 backdrop-blur-lg relative">
              {/* Holographic bio section */}
              <div className="relative">
                {!isDecrypted ? (
                  <div className="relative z-10">
                    <div className="font-mono text-sm text-foreground/50 mb-6 border-l-2 border-primary/50 pl-4">
                      <div className="text-xs uppercase tracking-widest mb-2 text-primary/70">Security Level: Classified</div>
                      <div>Personal profile data encrypted. Authorize access to view complete information.</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></div>
                      <div className="font-mono text-xs text-foreground/70">
                        Access status: {isDecrypting ? `Decrypting (${decryptionProgress}%)` : "Awaiting authorization"}
                      </div>
                    </div>
                    
                    {/* Encrypted text preview */}
                    <div className="mt-4 border border-border/40 rounded p-4 bg-background/30 font-mono text-xs blur-sm">
                      <div className="flex gap-2 flex-wrap">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <span key={i} className="text-primary/60">0x{Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decrypt button */}
                    <div className="mt-6">
                      <CyberButton
                        glowColor="green"
                        className="text-secondary bg-background/90 border-secondary/50 font-mono text-sm"
                        onClick={handleDecrypt}
                        disabled={isDecrypting}
                      >
                        {isDecrypting ? `Decrypting... ${decryptionProgress}%` : "Decrypt Bio"}
                      </CyberButton>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-mono"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <div className="text-xs uppercase tracking-widest text-secondary">Access Granted</div>
                      </div>
                      
                      <div className="border-l-2 border-secondary pl-4 py-1 mb-4">
                        <h3 className="text-lg font-semibold text-secondary mb-1">Identity: Jeeva Yovan</h3>
                        <p className="text-xs text-foreground/70">Lead DevOps Engineer // Security Clearance: Level 5</p>
                      </div>
                      
                      <div 
                        className="text-foreground/90 text-md leading-relaxed p-4 bg-background/20 border border-border/30 rounded"
                      >
                        {decryptedText.split('. ').map((sentence, index) => (
                          <p key={index} className="mb-2">
                            {sentence + (index < bioText.split('. ').length - 1 ? '.' : '')}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between text-xs text-foreground/50">
                        <span>Data file integrity: 100%</span>
                        <span>Last updated: {new Date().toLocaleDateString()}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </HolographicCard>
        </div>
      </div>
    </section>
  );
}
