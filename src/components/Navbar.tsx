'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Certificates', href: 'certificate' },
    { name: 'Meta Ads', href: 'ads' },
    { name: 'Contact', href: 'contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500 ease-in-out ${scrolled
        ? 'py-2 px-2'
        : 'py-4 px-4'
        }`}
    >
      <div
        className={`relative transition-all duration-500 rounded-[2rem] border ${isOpen ? 'overflow-visible' : 'overflow-hidden'
          } ${scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-white/20 dark:border-slate-800 shadow-[0_8px_32px_0_rgba(20,184,166,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
            : isOpen
              ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl'
              : 'bg-transparent border-transparent'
          }`}
      >
        {/* Subtle inner glow for scrolled state */}
        {scrolled && !isOpen && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-teal-500/5 via-transparent to-teal-500/5 opacity-50 rounded-[2rem]" />
        )}

        <div className="container relative z-10 mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => scrollToSection(e, 'hero')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-poster text-xl shadow-lg shadow-teal-500/20 group-hover:rotate-12 transition-transform duration-300">
              E
            </div>
            <span className={`font-poster text-2xl tracking-tighter transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-teal-400'
              }`}>
              EMON
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-inner">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>{link.name}</NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Action Button - Desktop */}
            <a
              href="contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden md:flex px-6 py-2.5 bg-slate-900 dark:bg-teal-500 hover:bg-teal-600 dark:hover:bg-teal-400 text-white dark:text-slate-900 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/10"
            >
              Hire Me
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-[110]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full origin-center`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full origin-center`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl relative z-[105]"
            >
              <div className="p-6 grid gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors py-3 px-4 rounded-xl hover:bg-teal-500/5 block w-full"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="flex items-center justify-center w-full py-4 bg-teal-500 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-teal-500/20"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

function NavLink({ href, onClick, children }: { href: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-slate-900 transition-all relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-500 rounded-full transition-all group-hover:w-1/2" />
    </motion.a>
  )
}
