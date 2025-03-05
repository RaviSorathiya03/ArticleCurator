"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignUpButton } from "@clerk/nextjs"

export default function CtaSection() {
  return (
    <section className="py-20">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-lg bg-primary p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.8),hsl(var(--primary)))]" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Reading Experience?
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl">
                Join thousands of readers who have already discovered the power of personalized article curation.
              </p>
            </motion.div>

            <motion.div
              className="w-full max-w-sm space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full h-12">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
              <p className="text-xs text-primary-foreground/80">Start your 14-day free trial today. Cancel anytime.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

