"use client"

import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

interface ArticleSkeletonProps {
  count?: number
}

export function ArticleSkeleton({ count = 3 }: ArticleSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex flex-col space-y-3 overflow-hidden rounded-lg border bg-card p-4 shadow-sm"
        >
          <Skeleton className="h-[200px] w-full rounded-md" />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-20 rounded-full" />
              <Skeleton className="h-4 w-16 rounded-full" />
            </div>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex items-center space-x-2 pt-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

