"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Server, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "News Aggregator API",
    description:
      "A production-ready REST API that aggregates live news from Economic Times and Times of India using sitemap parsing. Includes JWT authentication, role-based access control, filtering, pagination and optimized database queries.",
    techStack: ["C#", "ASP.NET Core", "MySQL", "JWT", "REST API"],
    icon: Server,
    features: [
      "Live news aggregation via sitemap parsing",
      "JWT authentication & RBAC",
      "Advanced filtering & pagination",
      "Optimized database queries",
    ],
  },
  {
    title: "Fresho Organic Store",
    description:
      "Full-stack web application for an organic grocery store with dynamic product catalog APIs, responsive UI and backend REST APIs. Includes contact form storing user messages securely in PostgreSQL.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    icon: ShoppingCart,
    features: [
      "Dynamic product catalog",
      "Responsive UI design",
      "RESTful backend APIs",
      "Secure contact form with database storage",
    ],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-medium tracking-wider text-primary uppercase">Featured Projects</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono font-medium bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="https://github.com/tushu9588" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com/tushu9588" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
