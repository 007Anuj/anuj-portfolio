"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  MapPin, 
  GraduationCap, 
  Code2, 
  Award, 
  Coffee, 
  Sparkles,
  TrendingUp,
  Users,
  Rocket,
  Zap,
  Heart,
  Globe,
  ChevronRight,
  Star
} from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    duration: number;
  }>>([])

  // Get window dimensions on client side
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  // Create particles on client side after window size is known
  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        duration: Math.random() * 5 + 3,
      }))
      setParticles(newParticles)
    }
  }, [windowSize.width, windowSize.height])

  // Skills data with icons and colors
  const skills = [
    { name: "PHP", level: 90, icon: Code2, color: "from-blue-500 to-blue-600" },
    { name: "Laravel", level: 97, icon: Rocket, color: "from-red-500 to-red-600" },
    { name: "MySQL", level: 90, icon: DatabaseIcon, color: "from-cyan-500 to-cyan-600" },
    { name: "REST API", level: 92, icon: TrendingUp, color: "from-green-500 to-green-600" },
    { name: "JavaScript", level: 75, icon: Zap, color: "from-yellow-500 to-yellow-600" },
    { name: "Git", level: 80, icon: Code2, color: "from-orange-500 to-orange-600" },
  ]

  // Stats data
  const stats = [
    { value: "4+", label: "Projects Completed", icon: Award },
    { value: "98%", label: "Code Quality", icon: Star },
    { value: "24/7", label: "Support", icon: Heart },
    { value: "2+", label: "Years Experience", icon: Coffee },
  ]

  // Fun facts
  const funFacts = [
    "🎯 Debugged 1000+ bugs",
    "☕ 4 cups of coffee per day",
    "🚀 Built 1000+ REST APIs",
    "📚 Reads 2 tech books/month",
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-card/50 to-background relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating particles - only render when particles are initialized */}
        {particles.length > 0 && (
          <>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                }}
                animate={{
                  y: [particle.y, particle.y - 30, particle.y + 30, particle.y - 30],
                  x: [particle.x, particle.x + 20, particle.x - 20, particle.x + 20],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header with animated underline */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
            <motion.h2 
              className="text-sm font-medium tracking-wider text-primary uppercase flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4" />
              About Me
              <Sparkles className="h-4 w-4" />
            </motion.h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main content - takes 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 48 } : { height: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
                    Backend developer passionate about building{" "}
                    <span className="text-primary font-bold relative inline-block">
                      scalable web APIs
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                    </span>{" "}
                    and backend systems using{" "}
                    <span className="text-primary font-bold">Core PHP</span> and{" "}
                    <span className="text-primary font-bold">Laravel</span>.
                  </p>
                </div>
                
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
              </motion.div>

              {/* Skills section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              x: ["0%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fun facts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-4"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Coffee className="h-5 w-5 text-primary" />
                  Fun Facts
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-lg">{fact[0]}</span>
                      <span className="text-sm text-muted-foreground">{fact.slice(2)}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right sidebar - takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              {/* Info cards with 3D hover effect */}
              {[
                { icon: MapPin, title: "Location", content: "Gorakhpur, Uttar Pradesh, India", delay: 0.2, gradient: "from-orange-500/10 to-red-500/10" },
                { icon: Code2, title: "Focus", content: "Backend Development, API Architecture", delay: 0.3, gradient: "from-blue-500/10 to-cyan-500/10" },
                { icon: GraduationCap, title: "Education", content: "B.Tech, Information Technology (2023)", delay: 0.4, gradient: "from-purple-500/10 to-pink-500/10" },
                { icon: Globe, title: "Availability", content: "Open for opportunities", delay: 0.5, gradient: "from-green-500/10 to-emerald-500/10" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`p-5 rounded-xl bg-gradient-to-br ${item.gradient} border border-border backdrop-blur-sm relative overflow-hidden group cursor-pointer`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: hoveredCard === index ? ["0%", "100%"] : "0%",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  />
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.title}
                      </span>
                      <p className="text-foreground font-medium mt-1">{item.content}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}

              {/* Stats section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-2 gap-3 mt-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-secondary/30 border border-border text-center group cursor-pointer"
                  >
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <motion.div
                      className="text-2xl font-bold text-foreground"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote or motto */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/20 text-center"
              >
                <p className="text-sm italic text-muted-foreground">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <p className="text-xs text-primary mt-2">- Cory House</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Database icon component (since it's not in lucide-react by default)
function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 18 0" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  )
}