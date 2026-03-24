"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Server, ShoppingCart, Sparkles, ArrowRight, Star, Code, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Unnati – ERP Web Application",
    description:
      "A modular ERP web application built with Laravel, focusing on secure document handling, seamless data flow across tender, production, and billing modules, along with RESTful API integration and automated workflows.",
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
    icon: Server,
    features: [
      "Modular Laravel backend architecture",
      "Secure document handling and data integrity",
      "RESTful APIs for inter-module communication",
      "Automated PDF invoice generation",
      "Kanban-style task tracking system",
      "RBAC implementation using Policies & Gates",
      "Robust input validation for enhanced security",
    ],
  },
  {
    title: "Vaikunt - Ritual Services Web Application",
    description:
      "A Laravel-based web application for booking and managing ritual services, featuring real-time priest availability, secure authentication, and optimized backend performance.",
    techStack: ["PHP", "Laravel", "MySQL", "JWT", "REST API"],
    icon: Server,
    features: [
      "Priest booking and scheduling system",
      "Real-time availability tracking",
      "RESTful APIs for service management",
      "JWT-based secure authentication",
      "Role-based access control (RBAC)",
      "Optimized MySQL schema and queries",
      "Account management system",
    ],
  },

  {
    title: "Paras Defence - Business Portfolio Website",
    description:
      "A responsive business portfolio website with separate admin and user interfaces, showcasing categorized products with smooth interactions and modern UI design.",
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    icon: Server,
    features: [
      "Admin and user interface separation",
      "Categorized product display system",
      "Responsive design using Bootstrap",
      "Custom UI with HTML, CSS, and JavaScript",
      "Smooth user interactions",
      "Dynamic content management",
    ],
  },
  {
    title: "Indian Railways ERP System",
    description:
      "An enterprise ERP solution for Indian Railways, contributing to Yard Management and Component Management System (CMS) modules, focusing on efficient coach handling and structured BOM creation.",
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
    icon: Server,
    features: [
      "Yard Management System for tracking coach placement across yard and workshop",
      "Real-time monitoring of coach movement and allocation",
      "Component Management System (CMS) development",
      "Bill of Materials (BOM) creation and management",
      "Structured data handling for railway operations",
      "Improved operational efficiency through digitization",
    ],
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced section header */}
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
              <motion.h2 
                className="text-sm font-medium tracking-wider text-primary uppercase flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4" />
                Featured Projects
                <Sparkles className="h-4 w-4" />
              </motion.h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-primary/20 border-r-transparent" />
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 relative z-10">
                      {/* Enhanced icon with animation */}
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300">
                            <project.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex-1 space-y-4">
                        {/* Title with animated underline */}
                        <div>
                          <motion.h3 
                            className="text-xl md:text-2xl font-bold text-foreground mb-2 inline-block"
                            whileHover={{ x: 5 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.div 
                            className="h-0.5 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500"
                          />
                          <p className="text-muted-foreground leading-relaxed mt-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Features with enhanced styling */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <motion.div 
                              key={feature} 
                              className="flex items-center gap-2 text-sm text-muted-foreground group/feature"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.3, delay: 0.2 + idx * 0.02 }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/feature:bg-primary transition-colors"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="group-hover/feature:text-foreground transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech stack with enhanced badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                              whileHover={{ y: -2, scale: 1.05 }}
                              className="group/tech relative px-3 py-1 text-xs font-mono font-medium bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                            >
                              <span className="relative z-10">{tech}</span>
                              <motion.div 
                                className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover/tech:opacity-100 transition-opacity"
                                initial={false}
                              />
                            </motion.span>
                          ))}
                        </div>

                        {/* Optional: Expand/collapse for long feature lists */}
                        {project.features.length > 6 && (
                          <motion.button
                            onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                            className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1 mt-2"
                            whileHover={{ x: 3 }}
                          >
                            {expandedProject === index ? "Show less" : `Show ${project.features.length - 6} more features`}
                            <ArrowRight className="h-3 w-3" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional: Project stats summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">{projects.length}</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">
                    {projects.reduce((acc, p) => acc + p.techStack.length, 0)}
                  </div>
                  <div className="text-xs text-muted-foreground">Technologies Used</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">
                    {projects.reduce((acc, p) => acc + p.features.length, 0)}+
                  </div>
                  <div className="text-xs text-muted-foreground">Features Implemented</div>
                </div>
                <div className="space-y-1">
                  <motion.div 
                    className="text-2xl font-bold text-primary"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    100%
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}