"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Wrench, 
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  Shield,
  GitBranch,
  Cloud,
  Cpu,
  Terminal
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    gradient: "from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "PHP", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: 75, color: "from-yellow-500 to-yellow-600" },
      { name: "SQL", level: 85, color: "from-green-500 to-green-600" },
      { name: "HTML5", level: 85, color: "from-orange-500 to-orange-600" },
      { name: "CSS3", level: 80, color: "from-purple-500 to-purple-600" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    gradient: "from-purple-500/10 to-pink-500/10",
    skills: [
      { name: "Laravel", level: 97, color: "from-red-500 to-red-600" },
      { name: "CodeIgniter", level: 80, color: "from-orange-500 to-orange-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-cyan-500/10 to-blue-500/10",
    skills: [
      { name: "MySQL", level: 90, color: "from-cyan-500 to-cyan-600" },
      { name: "PostgreSQL", level: 75, color: "from-indigo-500 to-indigo-600" },
      { name: "MongoDB", level: 65, color: "from-green-500 to-green-600" },

    ],
  },
  {
    title: "Backend Concepts",
    icon: Server,
    gradient: "from-green-500/10 to-emerald-500/10",
    skills: [
      { name: "REST APIs", level: 92, color: "from-blue-500 to-blue-600" },
      { name: "JWT Auth", level: 88, color: "from-purple-500 to-purple-600" },
      { name: "API Security", level: 85, color: "from-red-500 to-red-600" },
      { name: "SOLID Principles", level: 85, color: "from-green-500 to-green-600" },
      { name: "Queues & Jobs", level: 80, color: "from-yellow-500 to-yellow-600" },
      { name: "Caching", level: 78, color: "from-orange-500 to-orange-600" },
      { name: "Design Patterns", level: 75, color: "from-pink-500 to-pink-600" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    gradient: "from-orange-500/10 to-red-500/10",
    skills: [
      { name: "Git", level: 85, color: "from-orange-500 to-orange-600" },
      { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
      { name: "CI/CD", level: 65, color: "from-green-500 to-green-600" },
      { name: "AWS", level: 60, color: "from-yellow-500 to-yellow-600" },
      { name: "Linux", level: 75, color: "from-gray-500 to-gray-600" },
    ],
  },
  {
    title: "Development Tools",
    icon: Terminal,
    gradient: "from-indigo-500/10 to-purple-500/10",
    skills: [
      { name: "VS Code", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "Postman", level: 88, color: "from-orange-500 to-orange-600" },
      { name: "Swagger", level: 85, color: "from-green-500 to-green-600" },
      { name: "JIRA", level: 80, color: "from-blue-500 to-blue-600" },
      { name: "Composer", level: 85, color: "from-purple-500 to-purple-600" },
      { name: "Excel", level: 75, color: "from-red-500 to-red-600" },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [codeSnippets, setCodeSnippets] = useState<Array<{
    id: number;
    x: number;
    y: number;
    duration: number;
    text: string;
  }>>([])

  // Get window dimensions on client side
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  // Create code snippets on client side after window size is known
  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      const snippets = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        duration: Math.random() * 10 + 5,
        text: ["<?php", "function()", "->", "::", "new", "namespace", "use"][Math.floor(Math.random() * 7)],
      }))
      setCodeSnippets(snippets)
    }
  }, [windowSize.width, windowSize.height])

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
        
        {/* Animated code snippets background - only render when initialized */}
        {codeSnippets.length > 0 && (
          <>
            {codeSnippets.map((snippet) => (
              <motion.div
                key={snippet.id}
                className="absolute text-primary/10 font-mono text-xs"
                initial={{
                  x: snippet.x,
                  y: snippet.y,
                  opacity: 0.1,
                }}
                animate={{
                  y: [snippet.y, snippet.y - 20, snippet.y + 20, snippet.y - 20],
                  x: [snippet.x, snippet.x + 15, snippet.x - 15, snippet.x + 15],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: snippet.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {snippet.text}
              </motion.div>
            ))}
          </>
        )}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section header with animated sparkles */}
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
              <motion.h2 
                className="text-sm font-medium tracking-wider text-primary uppercase flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4" />
                Skills & Technologies
                <Sparkles className="h-4 w-4" />
              </motion.h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
            </div>

            {/* Skill statistics summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {[
                { label: "Technologies", value: "25+", icon: Code2 },
                { label: "Years Experience", value: "3+", icon: TrendingUp },
                { label: "Projects Built", value: "15+", icon: Zap },
                { label: "Best Practices", value: "100%", icon: Shield },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center cursor-pointer"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  variants={item}
                  onHoverStart={() => setHoveredCategory(idx)}
                  onHoverEnd={() => setHoveredCategory(null)}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`group relative p-6 rounded-xl bg-gradient-to-br ${category.gradient} border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer`}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      x: hoveredCategory === idx ? ["0%", "100%"] : "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Category header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCategory === idx ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>

                    {/* Skills with progress bars */}
                    <div className="space-y-3 mt-4">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.1 + skillIdx * 0.03 }}
                          className="group/skill"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/skill:bg-primary transition-colors" />
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground group-hover/skill:text-primary transition-colors">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 + skillIdx * 0.03, ease: "easeOut" }}
                            >
                              {/* Shimmer effect on hover */}
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                                style={{
                                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skill count badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 pt-3 border-t border-border/50"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Skills mastered</span>
                        <span className="text-primary font-medium">
                          {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional expertise section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/20 animate-pulse">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Always exploring new technologies and best practices
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {["Microservices", "GraphQL", "K8s", "AI/ML"].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}