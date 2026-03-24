"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, Sparkles, Award, BookOpen, Star, Trophy } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
        
        {/* Floating educational icons */}
        {[
          { icon: BookOpen, delay: 0, x: "10%", y: "20%" },
          { icon: Award, delay: 2, x: "85%", y: "70%" },
          { icon: Trophy, delay: 4, x: "15%", y: "80%" },
          { icon: Star, delay: 1, x: "90%", y: "15%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.icon className="w-12 h-12 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                Education
                <Sparkles className="h-4 w-4" />
              </motion.h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-primary/20 border-r-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[48px] border-l-[48px] border-b-primary/20 border-l-transparent" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                  {/* Enhanced icon with animation */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300"
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                          opacity: isHovered ? 0.8 : 0.5,
                        }}
                      />
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300">
                        <GraduationCap className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    {/* Degree title with animated underline */}
                    <div>
                      <motion.h3 
                        className="text-xl md:text-2xl font-bold text-foreground mb-2 inline-block"
                        whileHover={{ x: 5 }}
                      >
                        Bachelor of Technology (B.Tech)
                      </motion.h3>
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500"
                      />
                    </div>
                    
                    <h4 className="text-lg md:text-xl text-foreground mb-2 font-medium">
                      Information Technology
                    </h4>
                    
                    <motion.p 
                      className="text-primary font-medium mb-4 flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Dr. APJ Abdul Kalam Technical University, Uttar Pradesh
                    </motion.p>

                    {/* Timeline with enhanced styling */}
                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                      <motion.div 
                        className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.1)" }}
                      >
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">2019 - 2023</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.1)" }}
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Lucknow, Uttar Pradesh</span>
                      </motion.div>
                    </div>

                    {/* Key Coursework with enhanced styling */}
                    <div className="mt-6 pt-6 border-t border-border relative">
                      <div className="absolute -top-3 left-0 w-12 h-0.5 bg-primary" />
                      <motion.h4 
                        className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        <BookOpen className="w-4 h-4 text-primary" />
                        Key Coursework
                      </motion.h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures",
                          "Algorithms",
                          "Database Management",
                          "Object-Oriented Programming",
                          "Web Development",
                          "Software Engineering",
                        ].map((course, index) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className="group/course relative px-3 py-1.5 text-xs font-medium bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                          >
                            <span className="relative z-10">{course}</span>
                            <motion.div 
                              className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover/course:opacity-100 transition-opacity"
                              initial={false}
                            />
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Optional: Achievement badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 flex items-center gap-2"
                    >
                      <div className="flex items-center gap-1 text-xs text-primary/80 bg-primary/5 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3" />
                        <span>Graduated with Distinction</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Timeline connector line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden md:block" />
            </motion.div>

            {/* Additional education stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { label: "Graduation Year", value: "2023", icon: Calendar },
                { label: "University Rank", value: "Top 15%", icon: Trophy },
                { label: "Projects Completed", value: "4+", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-3 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border text-center cursor-pointer"
                >
                  <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}