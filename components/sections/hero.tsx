"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Code, Server, Database, Sparkles, Terminal, Cpu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)
  
  // For 3D tilt effect on image - disabled on mobile
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"])

  // Get window dimensions and detect mobile
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setIsMobile(window.innerWidth < 768)
    }
    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
    return () => window.removeEventListener("resize", updateWindowSize)
  }, [])

  // Floating particles effect - optimized for mobile
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])
  
  useEffect(() => {
    if (windowSize.width > 0) {
      const particleCount = isMobile ? 8 : 20
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 3 : 4) + (isMobile ? 1 : 2),
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }
  }, [windowSize.width, isMobile])

  // Code rain effect - disabled on mobile for performance
  const [codeRainItems, setCodeRainItems] = useState<Array<{ id: number; startX: number; startY: number; duration: number; delay: number; text: string }>>([])
  
  useEffect(() => {
    if (!isMobile && windowSize.width > 0 && windowSize.height > 0) {
      const items = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        startX: Math.random() * windowSize.width,
        startY: -100 - Math.random() * 200,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        text: ["{ }", "()", "=>", "<?", "[]", "::"][Math.floor(Math.random() * 6)],
      }))
      setCodeRainItems(items)
    }
  }, [windowSize.width, windowSize.height, isMobile])

  // Tech stack items for floating badges - responsive sizing
  const techStack = [
    { name: "PHP", icon: Code, color: "from-blue-500/20 to-blue-600/20" },
    { name: "Laravel", icon: Terminal, color: "from-red-500/20 to-red-600/20" },
    { name: "MySQL", icon: Database, color: "from-cyan-500/20 to-cyan-600/20" },
    { name: "API", icon: Server, color: "from-green-500/20 to-green-600/20" },
  ]

  // Typing effect for role - adjusted for mobile
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
    if (isMobile) return
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background - optimized for mobile */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        animate={!isMobile ? {
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(99,102,241,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 70%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)",
          ]
        } : {}}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Floating particles - optimized for mobile */}
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
                y: [0, -20, 0],
                x: [0, particle.x > 50 ? -10 : 10, 0],
                opacity: [0.2, 0.6, 0.2],
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

      {/* Animated code rain effect - desktop only */}
      {!isMobile && codeRainItems.length > 0 && (
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

      <div className="container relative z-10 px-4 md:px-6 py-8 md:py-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left content - order changes on mobile */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <motion.span 
                  className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  animate={!isMobile ? {
                    boxShadow: [
                      "0 0 0 0 rgba(99,102,241,0.4)",
                      "0 0 0 4px rgba(99,102,241,0)",
                      "0 0 0 0 rgba(99,102,241,0)",
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
                  </span>
                  Available for opportunities
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 md:mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
              >
                Anuj Singh
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-4 md:mb-6"
              >
                <span className="text-primary">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 md:h-7 bg-primary ml-1"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0"
              >
                Crafting scalable backend systems and APIs, driven by clean architecture principles, 
                performance optimization, and a commitment to delivering robust, efficient solutions.
              </motion.p>

              {/* Floating tech badges - responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={!isMobile ? { y: -3, scale: 1.05 } : {}}
                    className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-gradient-to-r ${tech.color} border border-primary/20 backdrop-blur-sm`}
                  >
                    <tech.icon className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons - responsive layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <Button asChild size={isMobile ? "default" : "lg"} className="group relative overflow-hidden">
                  <Link href="#projects">
                    <span className="relative z-10 flex items-center text-sm md:text-base">
                      View Projects
                      <ArrowDown className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-y-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
                <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="group">
                  <Link href="#contact">
                    Contact Me
                    <Sparkles className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:rotate-12" />
                  </Link>
                </Button>
              </motion.div>

              {/* Social links and stats - responsive */}
              <div className="space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
                >
                  <span className="text-xs md:text-sm text-muted-foreground">Find me on</span>
                  <div className="flex gap-2 md:gap-3">
                    <motion.div whileHover={!isMobile ? { y: -2 } : {}} whileTap={{ scale: 0.95 }}>
                      <Link 
                        href="https://www.linkedin.com/in/anuj-singh-022b17254" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 md:p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors flex items-center gap-2 group"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={!isMobile ? { y: -2 } : {}} whileTap={{ scale: 0.95 }}>
                      <Link 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sanuj0262@gmail.com"
                        className="p-1.5 md:p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors flex items-center gap-2 group"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Stats section - responsive grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4 md:pt-8 border-t border-border flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8"
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
                      <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right profile image - responsive sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0"
              style={!isMobile ? { perspective: "1000px" } : {}}
              onMouseEnter={() => !isMobile && setIsHovering(true)}
              onMouseLeave={() => {
                if (!isMobile) {
                  setIsHovering(false)
                  mouseX.set(0)
                  mouseY.set(0)
                }
              }}
            >
              {/* Animated rings - simpler on mobile */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={!isMobile ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                }}
              />
              
              {/* Gradient border effect */}
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto"
                style={!isMobile && isHovering ? {
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transition: "transform 0.1s ease-out",
                } : {}}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-0.5 md:p-1 shadow-2xl shadow-primary/20">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden relative">
                    <img
                      src="/anuj.jpeg"
                      alt="Anuj Singh - Backend Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Decorative rings - simpler on mobile */}
                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute -inset-3 md:-inset-4 rounded-full border border-primary/20"
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
                      className="absolute -inset-6 md:-inset-8 rounded-full border border-primary/10"
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
                  </>
                )}
                
                {/* Glowing orb effect - simplified on mobile */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
                  animate={!isMobile ? {
                    boxShadow: [
                      "0 0 20px rgba(99,102,241,0.3)",
                      "0 0 40px rgba(99,102,241,0.5)",
                      "0 0 20px rgba(99,102,241,0.3)",
                    ],
                  } : {
                    boxShadow: "0 0 15px rgba(99,102,241,0.3)",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating icons - responsive positioning */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 bg-primary/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-primary/30"
                animate={!isMobile ? {
                  y: [0, -8, 0],
                  rotate: [0, 8, 0],
                } : {
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 bg-primary/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-primary/30"
                animate={!isMobile ? {
                  y: [0, 8, 0],
                  rotate: [0, -8, 0],
                } : {
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Database className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div 
            className="w-1 h-2 md:w-1.5 md:h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 10, 0],
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
          className="text-[10px] md:text-xs text-muted-foreground mt-1 md:mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}