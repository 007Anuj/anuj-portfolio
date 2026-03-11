"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/tushu9588",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tushar-sharma-760858289",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ts766277@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Tushar Sharma. Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
