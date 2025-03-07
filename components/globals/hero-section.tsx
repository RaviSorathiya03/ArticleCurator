"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignUpButton, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const {isSignedIn} = useUser()

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.2)_0%,hsl(var(--background))_100%)]" />

      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Articles That <span className="text-primary">Matter to You</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Personalized article curation powered by AI. Stay informed with content that matches your interests,
              updated hourly.
            </p>
          </motion.div>

          <motion.div
            className="w-full max-w-sm space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <SignUpButton mode="modal">
              <Button size="lg" className="w-full h-12">
                  {isSignedIn?   <Link href={"/articles"}>Explore Articles</Link>: <>Get Started <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
            </SignUpButton>
            <p className="text-xs text-muted-foreground">Free 14-day trial. No credit card required.</p>
          </motion.div>

          <motion.div
  className="mt-12 w-full max-w-4xl overflow-hidden rounded-lg border bg-background/50 shadow-xl backdrop-blur"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.7 }}
>
  <Image
    src="https://images.pexels.com/photos/3944460/pexels-photo-3944460.jpeg?auto=compress&cs=tinysrgb&w=1200"
    alt="Article curation app interface preview"
    layout="responsive"
    width={1200}
    height={800}
    className="object-cover"
  />
</motion.div>

        </div>
      </motion.div>
    </section>
  )
}

