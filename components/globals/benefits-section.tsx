"use client"

import { motion } from "framer-motion"
import { Clock, Brain, Compass } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Save Time",
      description: "No more endless scrolling. Get relevant articles delivered directly to you.",
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Stay Informed",
      description: "Keep up with topics that matter to you with our AI-powered curation.",
    },
    {
      icon: <Compass className="h-12 w-12 text-primary" />,
      title: "Discover New Content",
      description: "Expand your horizons with articles you might have missed otherwise.",
    },
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground md:text-xl">
              Our article curation app is designed with your needs in mind, offering benefits that enhance your reading
              experience.
            </p>

            <div className="space-y-8 pt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
              <img src="/article2.jpg" alt="App benefits visualization" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Personalized For You</h3>
                  <p className="text-white/80">Content that adapts to your preferences</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

