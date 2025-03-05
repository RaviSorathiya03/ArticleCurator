"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "This app has completely changed how I consume news. The personalized curation is spot on!",
      author: "Alex Johnson",
      role: "Marketing Director",
      avatar: "AJ",
    },
    {
      quote: "I save at least an hour every day by having relevant articles curated for me. Absolutely worth it.",
      author: "Sarah Chen",
      role: "Product Manager",
      avatar: "SC",
    },
    {
      quote: "The hourly updates keep me informed throughout the day. It's like having a personal news assistant.",
      author: "Michael Rodriguez",
      role: "Software Engineer",
      avatar: "MR",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what people love about our platform.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none bg-background shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <Avatar className="h-16 w-16 border-4 border-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="mb-4 text-center italic">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

