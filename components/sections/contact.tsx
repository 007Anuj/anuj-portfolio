"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Sparkles, MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7607103186",
    href: "tel:+917607103186",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sanuj0262@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sanuj0262@gmail.com",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "anuj-singh-022b17254",
    href: "https://www.linkedin.com/in/anuj-singh-022b17254",
    gradient: "from-blue-600/10 to-indigo-500/10",
  },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   value: "tushu9588",
  //   href: "https://github.com/tushu9588",
  // },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
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
        
        {/* Floating message bubbles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 20, -20, 20],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircle className="w-8 h-8 text-primary" />
          </motion.div>
        ))}
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
                Get In Touch
                <Sparkles className="h-4 w-4" />
              </motion.h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
            </div>

            {/* Enhanced header text */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                {"Let's Work Together"}
              </motion.h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info - takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-background to-background border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
                      >
                        {/* Animated gradient background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div className="relative z-10 flex-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                        <motion.div 
                          className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <Send className="w-4 h-4 text-primary" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Additional availability info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Response Time</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    I typically respond within 24 hours during business days.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form - takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  <h4 className="text-lg font-semibold text-foreground">Send a Message</h4>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="text-primary">*</span>
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.45 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="text-primary">*</span>
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <span className="text-primary">*</span>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary/50 transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <span className="text-primary">*</span>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary/50 transition-colors resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group relative overflow-hidden"
                      disabled={isLoading || isSubmitted}
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitted ? (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle className="w-5 h-5 mr-2" />
                            </motion.div>
                            Message Sent!
                          </>
                        ) : isLoading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Send className="w-5 h-5 mr-2" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>

                {/* Form success message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm text-center"
                  >
                    ✓ Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-xs text-muted-foreground">
                * I'll never share your information with anyone else. Your privacy matters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}