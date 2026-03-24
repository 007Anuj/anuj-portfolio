"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Sparkles, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollHeight, setScrollHeight] = useState(1) // ✅ FIX

  const { scrollY } = useScroll()
  
  // Transform header background based on scroll
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 0.8])
  const headerBlur = useTransform(scrollY, [0, 50], [0, 12])

  // ✅ FIX: calculate scroll height safely
  useEffect(() => {
    const updateHeight = () => {
      setScrollHeight(document.body.scrollHeight - window.innerHeight)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // ✅ FIX: safe transform
  const scaleX = useTransform(scrollY, [0, scrollHeight], [0, 1])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border/50"
            : "border-b border-transparent"
        }`}
        style={{
          backgroundColor: isScrolled 
            ? `rgba(var(--background-rgb), ${headerOpacity.get()})` 
            : "transparent",
          backdropFilter: isScrolled ? `blur(${headerBlur.get()}px)` : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <nav className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <Link href="#home" className="flex items-center gap-2 group" onClick={() => handleNavClick("#home")}>
                <div className="relative">
                  <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative text-xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    AS
                    <motion.span
                      className="text-primary inline-block"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      .
                    </motion.span>
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-transparent"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <motion.div
                      className="absolute inset-0 bg-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-6 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="sm" className="relative overflow-hidden group">
                <Link href="#contact" onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contact")
                }}>
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Button */}
            <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <div className="container px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ✅ FIXED Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary/20 z-50 origin-left"
        style={{ scaleX }}
      />
    </>
  )
}