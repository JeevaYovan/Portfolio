import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { GlitchText } from "@/components/ui/glitch-text";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [_, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("hero");

  // System status effect - simulates a system that's always online
  const [systemStatus, setSystemStatus] = useState("Offline");
  
  useEffect(() => {
    // Simulate system booting up
    const timer = setTimeout(() => {
      setSystemStatus("Online");
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detect which section is currently in view for active status
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    
    // Play a soft 'navigation' sound
    const beepSound = new Audio();
    beepSound.src = "data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAAB/f39/f39/f39/f39/f39/f3+AgICAgYGBgoKCg4ODgoKCgYGBgICAgH9/f39+fn5+fn5+fn5+f39/f4CAgIGBgYKCgoKCgoKCgoGBgYCAgH9/f35+fnx8fHt7e3t7e3x8fH1+fn9/f4CAgIGBgYGBgYGBgYCAgH9/f35+fnt7e3l5eXh4eHh4eHl5eXp7e31+fn9/f4CAgICAgIB/f39+fn58fHx6enp4eHh3d3d3d3d4eHh6enp8fHx+fn5/f39/f39/f35+fnx8fHp6enl5eXd3d3Z2dnZ2dnd3d3l5eXt7e3x8fH5+fn5+fn5+fn19fXt7e3p6end3d3Z2dnV1dXV1dXZ2dnd3d3l5eXt7e3x8fH19fX19fX19fXx8fHt7e3l5eXd3d3V1dXR0dHR0dHV1dXZ2dnh4eHp6ent7e3x8fHx8fHx8fHt7e3p6enh4eHd3d3V1dXR0dHNzc3R0dHV1dXZ2dnd3d3l5eXp6ent7e3t7e3t7e3p6enl5eXh4eHd3d3V1dXR0dHNzc3Nzc3R0dHV1dXZ2dnd3d3h4eHl5eXl5eXl5eXl5eXh4eHd3d3Z2dnV1dXR0dHNzc3Jycl5eXkZGRjo6Oj4+PkhISFZWVmVlZXBwcHl5eX5+foCAgIGBgYGBgYCAgH9/f319fXt7e3p6enl5eXh4eHh4eHd3d25ubmRkZFpaWlJSUk1NTUpKSklJSUtLS09PT1NTU1dXV1xcXGBgYGNjY2ZmZmlpaWtra2xsbHFxcXd3d3t7e39/f4KCgoWFhYeHh4mJiYqKiouLi4qKiomJiYeHh4WFhYKCgn9/f3t7e3Z2dnJycm1tbWlpaWVlZWFhYV1dXVlZWVVVVVFRUU1NTUhISEZGRkREREJCQkFBQUBAQD8/Pz8/Pz8/Pz9AQEBBQUFBQUJCQ0NEREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVNTU1RUVFVVVVZWV1dXV1hYWFlZWVpaWlpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHBwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///w==";
    beepSound.volume = 0.2;
    beepSound.play().catch(() => {
      // Browser may block autoplay without user interaction
      console.log("Audio play was prevented");
    });
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        scrolled 
          ? "backdrop-blur-md border-b border-primary/30 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with "System Online" status */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <h1 className="text-xl md:text-2xl font-orbitron font-bold">
                <span className="text-primary">JEEVA</span>
                <span className="text-foreground">_YOVAN</span>
              </h1>
              
              <div className="flex items-center mt-1 text-xs">
                <div 
                  className={`w-2 h-2 rounded-full mr-1.5 ${
                    systemStatus === "Online" ? "bg-secondary animate-pulse" : "bg-destructive"
                  }`}
                />
                <span 
                  className={`${
                    systemStatus === "Online" ? "text-secondary" : "text-destructive"
                  } font-mono uppercase text-[10px]`}
                >
                  System {systemStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Space Station Control Panel Style */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center space-x-1 bg-muted/30 backdrop-blur-sm rounded px-1.5 py-1 border border-border/50"
          >
            {["about", "experience", "skills", "projects", "education", "contact"].map((item) => (
              <motion.button 
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-3 py-1.5 rounded font-mono text-sm uppercase tracking-wider transition-all
                  ${activeSection === item 
                    ? "text-background bg-primary shadow-md shadow-primary/50" 
                    : "text-foreground/80 hover:text-primary"}
                `}
              >
                <span>{item}</span>
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile menu button - futuristic style */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-muted/30 backdrop-blur-sm border border-primary/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - Cyberpunk dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden backdrop-blur-lg bg-background/95 border-x border-b border-primary/30 shadow-lg shadow-primary/5"
        >
          <div className="flex flex-col space-y-1 px-4 py-3">
            {["about", "experience", "skills", "projects", "education", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`
                  flex items-center space-x-2 py-2.5 px-3 rounded-sm transition-colors
                  ${activeSection === item 
                    ? "bg-muted/80 text-primary border-l-2 border-primary" 
                    : "text-foreground/90 hover:bg-muted/30 hover:text-primary"}
                `}
              >
                <span className="text-xs font-mono opacity-60">&gt;</span>
                <span className="font-mono uppercase text-sm tracking-wider">{item}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
