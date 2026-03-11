"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["ASP.NET Core Web API", "Entity Framework Core", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Backend Concepts",
    skills: ["REST APIs", "JWT Authentication", "API Security", "Pagination", "Filtering", "SOLID Principles"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Swagger", "Visual Studio", "VS Code"],
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

  return (
    <section id="skills" className="py-24 md:py-32">
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
              <h2 className="text-sm font-medium tracking-wider text-primary uppercase">Skills & Technologies</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={item}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
