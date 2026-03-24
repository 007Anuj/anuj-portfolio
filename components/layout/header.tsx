"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
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
  const [scrollHeight, setScrollHeight] = useState(1)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 0.9])
  const headerBlur = useTransform(scrollY, [0, 50], [0, 12])
  const scaleX = useTransform(scrollY, [0, scrollHeight], [0, 1])

  // Update scrollHeight on resize
  useEffect(() => {
    const updateHeight = () => setScrollHeight(document.body.scrollHeight - window.innerHeight)
    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "border-b border-border/50" : "border-b border-transparent"
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
                <span className="text-xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  AS<span className="text-primary">.</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact") }}>
                  <span className="flex items-center gap-2">Hire Me <Sparkles className="w-4 h-4" /></span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
            >
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="text-2xl font-medium hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild>
                <Link href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact") }}>
                  Hire Me
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary/20 z-50 origin-left"
        style={{ scaleX }}
      />
    </>
  )
}