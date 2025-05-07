import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

interface CyberButtonProps extends ButtonProps {
  pulseEffect?: boolean;
  glowColor?: "blue" | "green" | "pink";
  children: React.ReactNode;
}

export function CyberButton({
  children,
  pulseEffect = false,
  glowColor = "blue",
  className = "",
  ...props
}: CyberButtonProps) {
  const glowClass = {
    blue: "before:bg-blue-500/20 shadow-blue-500/30",
    green: "before:bg-green-500/20 shadow-green-500/30",
    pink: "before:bg-pink-500/20 shadow-pink-500/30",
  }[glowColor];

  return (
    <Button
      asChild
      className={`
        relative 
        overflow-hidden 
        bg-transparent 
        border 
        hover:border-transparent
        font-mono
        ${pulseEffect ? "pulse" : ""}
        ${className}
      `}
      {...props}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative 
          z-10 
          before:absolute 
          before:inset-0 
          before:z-[-1] 
          before:opacity-0
          hover:before:opacity-100
          before:transition-opacity
          ${glowClass}
        `}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    </Button>
  );
}

export function DeployButton({
  children = "Deploy Now",
  className = "",
  ...props
}: Omit<CyberButtonProps, "glowColor" | "pulseEffect">) {
  return (
    <CyberButton
      pulseEffect
      glowColor="green"
      className={`font-orbitron text-secondary-foreground bg-secondary/90 border-secondary hover:bg-secondary/80 ${className}`}
      {...props}
    >
      {children}
    </CyberButton>
  );
}