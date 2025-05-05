'use client'

import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
    onClick={scrollToTop}
    aria-label="Scroll to top"
    className="sticky bottom-16 left-full z-[99999] w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--primary-dark)] transition-all"
  >
    <ArrowUp className="w-5 h-5" />
  </button>
  
  
  )
}
