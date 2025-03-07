"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingProps {
  /**
   * The size of the loading component
   * @default "default"
   */
  size?: "small" | "default" | "large"

  /**
   * Optional text to display below the loading animation
   */
  text?: string

  /**
   * Optional className for additional styling
   */
  className?: string

  /**
   * Whether to show the loading component
   * @default true
   */
  isLoading?: boolean

  /**
   * The theme of the loading component
   * @default "light"
   */
  theme?: "light" | "dark"
}

export function Loading({ size = "default", text, className, isLoading = true, theme = "light" }: LoadingProps) {
  const [mounted, setMounted] = useState(false)

  // Article-themed emojis
  const emojis = ["📰", "📝", "📚", "✍️", "📖"]

  // Size mappings
  const sizeClasses = {
    small: "text-2xl",
    default: "text-4xl",
    large: "text-6xl",
  }

  const containerSizeClasses = {
    small: "h-16 w-16",
    default: "h-24 w-24",
    large: "h-32 w-32",
  }

  // Theme classes
  const themeClasses = {
    light: "bg-white/80 text-primary",
    dark: "bg-gray-900/80 text-primary-foreground",
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  

  // Handle client-side mounting for animations
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm",
            themeClasses[theme],
            className,
          )}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn("flex items-center justify-center rounded-full", containerSizeClasses[size])}
          >
            {emojis.map((emoji, i) => (
              <motion.div
                key={i}
                custom={i}
                className={cn("absolute", sizeClasses[size])}
                style={{
                  transform: `rotate(${i * (360 / emojis.length)}deg) translateY(-${size === "small" ? 30 : size === "default" ? 40 : 50}px)`,
                }}
              >
                {emoji}
              </motion.div>
            ))}
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 8,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                },
              }}
              className={cn(
                "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-primary/30",
              )}
            />
          </motion.div>

          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center font-medium"
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

