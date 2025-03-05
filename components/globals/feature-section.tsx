"use client"

import { motion } from "framer-motion"
import { BookOpen, Filter, Bookmark, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureSection() {
  const features = [
    {
      icon: <Filter className="h-10 w-10 text-primary" />,
      title: "Personalized Categories",
      description: "Select your interests and get articles tailored specifically to you.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Hourly Updates",
      description: "Fresh content delivered every hour using Serper.dev and Google AI Studio.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Full Article Views",
      description: "Read complete articles without leaving the platform.",
    },
    {
      icon: <Bookmark className="h-10 w-10 text-primary" />,
      title: "Save for Later",
      description: "Bookmark articles to read when you have more time.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover how our platform makes staying informed effortless and enjoyable.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none bg-background shadow-md transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

