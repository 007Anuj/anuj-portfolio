"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Code, Server, Database, Sparkles, Terminal, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  
  // For 3D tilt effect on image
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"])

  // Get window dimensions on client side
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  // Floating particles effect - create on client side only
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])
  
  useEffect(() => {
    if (windowSize.width > 0) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }
  }, [windowSize.width])

  // Code rain effect items
  const [codeRainItems, setCodeRainItems] = useState<Array<{ id: number; startX: number; startY: number; duration: number; delay: number; text: string }>>([])
  
  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      const items = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        startX: Math.random() * windowSize.width,
        startY: -100 - Math.random() * 200,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        text: ["{ }", "()", "=>", "<?", "[]", "::"][Math.floor(Math.random() * 6)],
      }))
      setCodeRainItems(items)
    }
  }, [windowSize.width, windowSize.height])

  // Tech stack items for floating badges
  const techStack = [
    { name: "PHP", icon: Code, color: "from-blue-500/20 to-blue-600/20" },
    { name: "Laravel", icon: Terminal, color: "from-red-500/20 to-red-600/20" },
    { name: "MySQL", icon: Database, color: "from-cyan-500/20 to-cyan-600/20" },
    { name: "API", icon: Server, color: "from-green-500/20 to-green-600/20" },
  ]

  // Typing effect for role
  const roles = ["Backend Developer", "API Architect", "Database Optimizer", "Laravel Expert"]
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole]
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }

    const timer = setTimeout(handleTyping, 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole, roles])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background with moving colors */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(99,102,241,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 70%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Floating particles - only render when particles are initialized */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, particle.x > 50 ? -20 : 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Animated grid with mouse-follow effect */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Animated code rain effect - only render when items are initialized */}
      {codeRainItems.length > 0 && (
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          {codeRainItems.map((item) => (
            <motion.div
              key={item.id}
              className="absolute text-primary font-mono text-xs"
              initial={{ y: item.startY, x: item.startX }}
              animate={{ y: windowSize.height + 100 }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear",
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>
      )}

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
                <motion.span 
                  className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(99,102,241,0.4)",
                      "0 0 0 4px rgba(99,102,241,0)",
                      "0 0 0 0 rgba(99,102,241,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for opportunities
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
              >
                Anuj Singh
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium mb-6"
              >
                <span className="text-primary">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-primary ml-1"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
              >
                Crafting scalable backend systems and APIs, driven by clean architecture principles, 
                performance optimization, and a commitment to delivering robust, efficient solutions.
              </motion.p>

              {/* Floating tech badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.color} border border-primary/20 backdrop-blur-sm`}
                  >
                    <tech.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                <Button asChild size="lg" className="group relative overflow-hidden">
                  <Link href="#projects">
                    <span className="relative z-10 flex items-center">
                      View Projects
                      <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="#contact">
                    Contact Me
                    <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
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
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="https://www.linkedin.com/in/anuj-singh-022b17254" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors flex items-center gap-2 group"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sanuj0262@gmail.com"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors flex items-center gap-2 group"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center lg:justify-start gap-8"
              >
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "4+", label: "Projects Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right profile image with enhanced 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false)
                mouseX.set(0)
                mouseY.set(0)
              }}
            >
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                }}
              />
              
              {/* Gradient border effect with 3D tilt */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                style={{
                  rotateX: isHovering ? rotateX : "0deg",
                  rotateY: isHovering ? rotateY : "0deg",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-1 shadow-2xl shadow-primary/20">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden relative">
                    <img
                      src="/anuj.jpeg"
                      alt="Anuj Singh - Backend Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-primary/20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-full border border-primary/10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Glowing orb effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99,102,241,0.3)",
                      "0 0 40px rgba(99,102,241,0.5)",
                      "0 0 20px rgba(99,102,241,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating code icon */}
              <motion.div
                className="absolute -top-6 -right-6 bg-primary/20 backdrop-blur-sm p-2 rounded-full border border-primary/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              
              {/* Floating database icon */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary/20 backdrop-blur-sm p-2 rounded-full border border-primary/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Database className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-xs text-muted-foreground mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}