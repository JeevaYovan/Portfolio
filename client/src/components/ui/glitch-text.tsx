import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export function GlitchText({ text, className = "", as = "span" }: GlitchTextProps) {
  const Element = as;
  
  return (
    <Element className={`glitch-hover ${className}`} data-text={text}>
      {text}
    </Element>
  );
}

interface NeonTextProps {
  text: string;
  color?: "blue" | "green" | "pink";
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export function NeonText({ 
  text, 
  color = "blue", 
  className = "", 
  as = "span" 
}: NeonTextProps) {
  const Element = as;
  
  const colorClass = {
    blue: "neon-blue",
    green: "neon-green",
    pink: "neon-pink",
  }[color];
  
  return (
    <Element className={`${colorClass} ${className}`}>
      {text}
    </Element>
  );
}

interface TerminalTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  width?: string;
}

export function TerminalText({ 
  text, 
  className = "", 
  as = "span",
  width = "auto"
}: TerminalTextProps) {
  const Element = as;
  
  return (
    <Element 
      className={`terminal-text ${className}`} 
      style={{ 
        display: "inline-block",
        width,
        overflow: "hidden"
      }}
    >
      {text}
    </Element>
  );
}