'use client'

import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import VideoGallery from '@/components/sections/VideoGallery'
import Certificates from '@/components/sections/Certificates'
import Stats from '@/components/sections/Stats'
import CurrentlyLearning from '@/components/sections/CurrentlyLearning'
import CareerHighlights from '@/components/sections/CareerHighlights'
import FacebookAds from '@/components/sections/FacebookAds'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Initialize EmailJS
    emailjs.init("ZGVGuwI76m9UvhoWk")
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VideoGallery />
        <Certificates />
        <Stats />
        <CurrentlyLearning />
        <CareerHighlights />
        <FacebookAds />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}
