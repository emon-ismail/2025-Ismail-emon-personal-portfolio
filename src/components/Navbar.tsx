'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="sticky  top-0 z-50 flex justify-center w-full px-4">
      <nav className={`w-full max-w-[95%] md:max-w-7xl rounded-lg md:rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-[#042f2e]/95 dark:bg-[#042f2e]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#042f2e]/80 dark:bg-[#5eebd5]/50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-white font-display text-xl tracking-wide"
            >
              Emon
            </motion.a>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#certificate">Certificate</NavLink>
              <NavLink href="#ads">Meta Ads</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <ThemeToggle />
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-teal-400 transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-teal-400 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-teal-400 transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className={`md:hidden overflow-hidden rounded-lg ${
              scrolled 
                ? 'bg-[#042f2e]/95 dark:bg-[#042f2e]/95 backdrop-blur-md' 
                : 'bg-[#042f2e]/80 dark:bg-[#042f2e]/80 backdrop-blur-sm'
            }`}
          >
            <div className="py-4 space-y-4 px-4">
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#certificate" onClick={() => setIsOpen(false)}>Certificate</MobileNavLink>
              <MobileNavLink href="#ads" onClick={() => setIsOpen(false)}>Meta Ads</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-gray-300 hover:text-teal-400 transition-colors font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all hover:after:w-full"
    >
      {children}
    </motion.a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="block text-gray-300 hover:text-teal-400 transition-colors font-medium tracking-wide"
    >
      {children}
    </motion.a>
  )
} 