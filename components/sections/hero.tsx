"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance"
              >
                Tushar Sharma
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-6"
              >
                Backend Developer (.NET / ASP.NET Core)
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
              >
                Building scalable APIs and backend systems. Passionate about clean architecture, 
                performance optimization, and delivering robust solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">
                    Contact Me
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <span className="text-sm text-muted-foreground">Find me on</span>
                <div className="flex gap-3">
                  <Link 
                    href="https://github.com/tushu9588" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/tushar-sharma-760858289" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="mailto:ts766277@gmail.com"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              {/* Gradient border effect */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-1 shadow-2xl shadow-primary/20">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Tushar Sharma - Backend Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
