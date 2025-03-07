"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingArticlesProps {
  /**
   * Optional text to display
   * @default "Loading articles"
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
}

export function LoadingArticles({ text = "Loading articles", className, isLoading = true }: LoadingArticlesProps) {
  const [mounted, setMounted] = useState(false)
  const [loadingText, setLoadingText] = useState(text)

  // Handle client-side mounting for animations
  useEffect(() => {
    setMounted(true)

    // Animate the loading text with dots
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingText((current) => {
          if (current.endsWith("...")) return text
          return current + "."
        })
      }, 500)

      return () => clearInterval(interval)
    }
  }, [isLoading, text])

  if (!mounted || !isLoading) return null

  return (
    <div
      className={cn(
        "flex min-h-[200px] w-full flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8",
        className,
      )}
    >
      <div className="relative h-16 w-16">
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="h-12 w-12" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: 360,
            transition: {
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            },
          }}
        >
          <motion.div
            className="absolute top-0 h-2 w-2 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
              },
            }}
          />
          <motion.div
            className="absolute right-0 h-2 w-2 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              },
            }}
          />
          <motion.div
            className="absolute bottom-0 h-2 w-2 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              },
            }}
          />
          <motion.div
            className="absolute left-0 h-2 w-2 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1.5,
              },
            }}
          />
        </motion.div>
      </div>

      <p className="text-center text-sm font-medium text-muted-foreground">{loadingText}</p>
    </div>
  )
}

