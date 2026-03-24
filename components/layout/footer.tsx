"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Sparkles, Code, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anuj-singh-022b17254",
    label: "LinkedIn",
    color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sanuj0262@gmail.com",
    label: "Email",
    color: "hover:bg-red-500/10 hover:text-red-500",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-8 border-t border-border bg-gradient-to-b from-background to-card/50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </motion.button>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {currentYear} Anuj Singh.</span>
            <span className="hidden sm:inline">Built with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
            </motion.div>
            <span className="hidden sm:inline">using modern tech stack</span>
            <Code className="w-3 h-3 ml-1 text-primary/60" />
          </motion.div>

          {/* Center - Animated decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-foreground">Available for work</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Right side - Social links with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`relative group p-2.5 rounded-xl text-muted-foreground transition-all duration-300 ${link.color} hover:scale-110`}
                  aria-label={link.label}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <link.icon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-foreground text-background rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
            
            {/* Optional: Add a subtle separator and current time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:flex items-center gap-2 pl-2 ml-2 border-l border-border"
            >
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <span className="text-xs text-muted-foreground">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>
    </footer>
  )
}