"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Code2 } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-wider text-primary uppercase">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Backend developer passionate about building{" "}
                <span className="text-primary font-medium">scalable web APIs</span> and backend systems 
                using <span className="text-primary font-medium">ASP.NET Core</span> and{" "}
                <span className="text-primary font-medium">C#</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in REST API development, database design, and backend architecture. 
                I focus on writing clean, maintainable code while following industry best practices 
                like SOLID principles. I enjoy solving complex problems and optimizing systems for 
                better performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies, learning about system design, 
                and working on personal projects to expand my skill set.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-muted-foreground text-sm">Rohtak, Haryana, India</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Focus</span>
                </div>
                <p className="text-muted-foreground text-sm">Backend Development, APIs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Education</span>
                </div>
                <p className="text-muted-foreground text-sm">BCA, MDU (2022-2025)</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
