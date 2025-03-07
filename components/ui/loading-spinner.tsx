"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  /**
   * The size of the spinner
   * @default "default"
   */
  size?: "xs" | "sm" | "default" | "lg" | "xl"

  /**
   * Optional className for additional styling
   */
  className?: string

  /**
   * The color of the spinner
   * @default "primary"
   */
  color?: "primary" | "secondary" | "muted" | "white"
}

export function LoadingSpinner({ size = "default", className, color = "primary" }: LoadingSpinnerProps) {
  // Size mappings
  const sizeClasses = {
    xs: "h-3 w-3 border-[1.5px]",
    sm: "h-4 w-4 border-2",
    default: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
    xl: "h-12 w-12 border-4",
  }

  // Color mappings
  const colorClasses = {
    primary: "border-primary/30 border-t-primary",
    secondary: "border-secondary/30 border-t-secondary",
    muted: "border-muted/30 border-t-muted-foreground",
    white: "border-white/30 border-t-white",
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={cn("rounded-full border-solid", sizeClasses[size], colorClasses[color], className)}
    />
  )
}

