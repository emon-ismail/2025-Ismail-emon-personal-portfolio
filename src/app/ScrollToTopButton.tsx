'use client'

import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTopButton() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] w-12 h-12 md:w-14 md:h-14 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-[0_5px_20px_-5px_theme(colors.teal.500)] hover:bg-teal-600 hover:shadow-[0_8px_25px_-5px_theme(colors.teal.600)] transition-colors"
      >
        <FaArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </AnimatePresence>
  )
}
