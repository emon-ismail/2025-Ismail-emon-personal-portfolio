'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, XMarkIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TypeAnimation } from 'react-type-animation'
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
    // Initialize EmailJS
    emailjs.init("ZGVGuwI76m9UvhoWk")

    // Test EmailJS initialization
    const testEmailJS = async () => {
      try {
        const testResponse = await emailjs.send(
          'service_luzs8ns',
          'template_m0qhmfg',
          {
            from_name: 'Test User',
            from_email: 'test@example.com',
            message: 'This is a test message',
            to_name: 'Mohammad Ismail Emon',
            reply_to: 'test@example.com',
          },
          'ZGVGuwI76m9UvhoWk'
        )
        console.log('EmailJS Test Response:', testResponse)
      } catch (error) {
        console.error('EmailJS Test Error:', error)
      }
    }

    // Run test after initialization
    setTimeout(testEmailJS, 1000)
  }, [])

  if (!mounted) {
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
      return
    }

    setLoading(true)
    try {
      const response = await emailjs.send(
        'service_luzs8ns',
        'template_m0qhmfg',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Contact Form Message',
          message: formData.message,
          phone: '',
          company: '',
          to_name: 'Mohammad Ismail Emon',
          reply_to: formData.email,
        },
        'ZGVGuwI76m9UvhoWk'
      )

      if (response.status === 200) {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      } else {
        throw new Error(`Unexpected response status: ${response.status}`)
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error)

      // Fallback to mailto
      const subject = `Contact Form Message from ${formData.name}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`.trim()

      // Create mailto link with properly encoded parameters
      const mailtoLink = `mailto:emonismail44@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open mail client in same window to prevent duplicate email display
      window.location.href = mailtoLink

      toast.info('Opening email client...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } finally {
      // Clear form data regardless of success or failure
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setLoading(false)
    }
  }

  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300 font-sans">
      <header className='sticky  top-0 z-50 flex justify-center w-full px-4'>
        <Navbar />
      </header>
      <main>
        {/* Hero Section */}
        {/* Hero Section - Madison Style Redesign */}
        <article id="hero" className="min-h-screen relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center overflow-hidden py-12 md:py-0">

          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-slate dark:bg-grid-white bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50 dark:via-slate-950/50 dark:to-slate-950 opacity-80 pointer-events-none"></div>

          <div className="container px-4 z-10 relative w-full h-full flex flex-col items-center justify-center">

            {/* Desktop: Central Layout Group */}
            <div className="relative w-full max-w-6xl flex flex-col md:items-center">

              {/* 1. Script Header (Top) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:mb-[-10px] z-30 relative"
              >
                <h2 className="font-script text-5xl md:text-8xl text-slate-800 dark:text-slate-200 italic relative inline-block drop-shadow-sm">
                  Hey, there
                  <svg className="hidden md:block absolute w-24 h-2 -bottom-2 right-0 text-teal-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </h2>
              </motion.div>

              {/* Main Interaction Area: Text - Image - Text */}
              <div className="flex flex-col md:flex-row items-center justify-center w-full relative mt-8 md:mt-0 gap-8 md:gap-0">

                {/* 2. Left Big Text (Desktop: Right Aligned to Image, Mobile: Center) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="z-20 md:mr-[-60px] text-center md:text-right"
                >
                  <h1 className="font-poster text-5xl sm:text-6xl md:text-[6.5rem] lg:text-[8rem] leading-[0.85] text-slate-900 dark:text-slate-100 uppercase tracking-tighter drop-shadow-2xl">
                    MOHAMMAD <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-300 dark:to-teal-500">
                      ISMAIL
                    </span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-200 dark:to-teal-400">
                      EMON
                    </span>
                  </h1>
                </motion.div>

                {/* 3. Center Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-64 sm:w-80 md:w-[420px] aspect-[3/4] shadow-2xl rounded-full border-4 border-white/50 dark:border-slate-800/50 backdrop-blur-sm order-first md:order-none mb-4 md:mb-0"
                >
                  {/* Decorative Ring */}
                  <div className="absolute inset-[-12px] border border-slate-300 dark:border-slate-700 rounded-full z-0 animate-[spin_20s_linear_infinite]"></div>

                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src="/ismail-emon.jpg"
                      alt="Mohammad Ismail Emon"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* 4. Right Role Text & Buttons (Desktop: Left Aligned to Image, Mobile: Center) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="z-20 md:ml-[-60px] text-center md:text-left flex flex-col items-center md:items-start w-full md:w-auto mt-4 md:mt-0"
                >
                  <h3 className="font-poster text-2xl md:text-4xl lg:text-5xl text-slate-800 dark:text-slate-100 uppercase leading-tight mb-4 md:mb-6 min-h-[4rem] md:min-h-[6rem]">
                    <TypeAnimation
                      sequence={[
                        'Digital Ops Manager', 1500,
                        'Marketing Automation\n& SEO Engineer', 1500,
                        'Analytics & Reporting\nSpecialist', 1500,
                        'National STEAM\nOlympiad Finalist', 1500,
                        'Software Engineer', 1500,
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={60}
                      repeat={Infinity}
                      className="text-teal-600 dark:text-teal-400 whitespace-pre-line"
                    />
                  </h3>
                  <div className="h-1 w-16 bg-teal-500 mb-6 rounded-full hidden md:block"></div>
                  <p className="font-display text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-xs">
                    Specialized in <strong className="text-slate-900 dark:text-white">Marketing Automation</strong>, <strong className="text-slate-900 dark:text-white">SEO</strong>, <strong className="text-slate-900 dark:text-white">Analytics</strong> &amp; <strong className="text-slate-900 dark:text-white">Software Engineering</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                      href="#contact"
                      className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-1 w-full sm:w-auto display-inline-block text-center"
                    >
                      Let's Talk
                    </a>
                    <a
                      href="#projects"
                      className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-bold hover:border-teal-500 transition-all hover:-translate-y-1 w-full sm:w-auto display-inline-block text-center"
                    >
                      My Work
                    </a>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 z-20"
          >
            <ArrowDownIcon className="w-8 h-8" />
          </motion.div>
        </article>



        {/* About Section */}
        <article id="about" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="container relative z-10 px-4 mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2">Get to know me</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">About Me</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT — Image collage */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Main big image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full aspect-[4/5] max-w-sm mx-auto">
                  <Image src="/emon-image.jpg" alt="Mohammad Ismail Emon" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
                {/* Floating image 2 — bottom right */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 w-36 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-900">
                  <Image src="/emon-image-1.jpg" alt="Mohammad Ismail Emon" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Floating image 3 — top right */}
                <div className="absolute -top-6 -right-4 md:-right-8 w-32 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-900">
                  <Image src="/emon-image-3.jpg" alt="Mohammad Ismail Emon" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Floating stat badge — experience */}
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                  <span className="text-3xl font-poster text-teal-500">3+</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-tight">Years<br />Experience</span>
                </div>
                {/* STEAM badge */}
                <div className="absolute bottom-20 -left-4 bg-teal-600 text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                  <TrophyIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold leading-tight">National STEAM<br />Olympiad Finalist</span>
                </div>
              </motion.div>

              {/* RIGHT — Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-poster text-3xl md:text-4xl text-slate-900 dark:text-slate-100 uppercase tracking-tight mb-1">
                    Mohammad Ismail Emon
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    Digital Ops Manager · Marketing Automation &amp; SEO Engineer · Analytics Specialist · Software Engineer
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  I&apos;m a multidisciplinary professional blending <strong className="text-slate-900 dark:text-white">Digital Operations</strong>, <strong className="text-slate-900 dark:text-white">Marketing Automation</strong>, <strong className="text-slate-900 dark:text-white">SEO</strong>, and <strong className="text-slate-900 dark:text-white">Software Engineering</strong>. At <span className="text-teal-600 dark:text-teal-400 font-semibold">Oasis Outfit (ZiiZii Island)</span>, I drive measurable growth through data-driven campaigns, automation systems, and front-end engineering.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  I hold a <strong className="text-slate-900 dark:text-white">BSc in Computer Science &amp; Engineering</strong> from International Islamic University Chittagong (IIUC), and I was recognised as a <strong className="text-slate-900 dark:text-white">National STEAM Olympiad Finalist</strong> (Top 5 Nationally) for my award-winning Quran-For-Ummah platform.
                </p>

                {/* Highlights grid */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {([
                    { icon: <MapPinIcon className="w-5 h-5" />, label: 'Location', value: 'Chittagong, Bangladesh' },
                    { icon: <AcademicCapIcon className="w-5 h-5" />, label: 'Degree', value: 'BSc in CSE — IIUC' },
                    { icon: <BriefcaseIcon className="w-5 h-5" />, label: 'Company', value: 'Oasis Outfit · ZiiZii Island' },
                    { icon: <TrophyIcon className="w-5 h-5" />, label: 'Achievement', value: 'STEAM Olympiad Top 5' },
                  ] as { icon: ReactNode; label: string; value: string }[]).map(({ icon, label, value }) => (
                    <div key={label} className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 hover:shadow-md transition-all duration-300 group">
                      <span className="text-teal-500 dark:text-teal-400">{icon}</span>
                      <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">{label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Role pills */}
                <div className="flex flex-wrap gap-2">
                  {['Digital Ops Manager', 'Marketing Automation', 'SEO Engineer', 'Analytics Specialist', 'Software Engineer', 'STEAM Finalist'].map(role => (
                    <span key={role} className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700">
                      {role}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/19Ey7TylruEvj3rAnYWI0GRETRYDkhQhy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-1"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-bold hover:border-teal-500 transition-all hover:-translate-y-1"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </article>

        {/* Skills Section */}
        <article id="skills" className="relative py-24 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 px-4 mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Technical Arsenal</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Skills & Expertise</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            {/* Core Skills — Bars */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Front-End */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-2xl p-7 hover:shadow-2xl hover:border-teal-500/50 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors duration-300 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="font-poster text-2xl text-slate-800 dark:text-slate-100 uppercase tracking-tight">Front-End Development</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'React & Next.js', level: 90 },
                    { name: 'TypeScript', level: 85 },
                    { name: 'Tailwind CSS', level: 95 },
                    { name: 'HTML & CSS', level: 95 },
                  ].map(({ name, level }) => (
                    <div key={name} className="group/bar">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">{name}</span>
                        <span className="text-teal-600 dark:text-teal-400 font-bold">{level}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-600/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Marketing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-2xl p-7 hover:shadow-2xl hover:border-teal-500/50 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                  </div>
                  <h3 className="font-poster text-2xl text-slate-800 dark:text-slate-100 uppercase tracking-tight">Marketing Automation</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Facebook Ads & Pixel', level: 95 },
                    { name: 'Social Media Growth', level: 90 },
                    { name: 'E-commerce Marketing', level: 85 },
                    { name: 'Lead Generation', level: 88 },
                  ].map(({ name, level }) => (
                    <div key={name} className="group/bar">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">{name}</span>
                        <span className="text-teal-600 dark:text-teal-400 font-bold">{level}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-600/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Chip Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Programming & DB',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />,
                  skills: ['JavaScript', 'Python', 'PHP', 'Java', 'C/C++', 'MySQL', 'MongoDB', 'PostgreSQL']
                },
                {
                  title: 'Analytics & Ads',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                  skills: ['Google Analytics', 'GA4 & GTM', 'Ads Manager', 'Commerce Manager', 'Pixel Tracking', 'API Integration']
                },
                {
                  title: 'SEO & Growth',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                  skills: ['On-Page SEO', 'Technical SEO', 'Local SEO', 'Keyword Research', 'Audit Reports', 'Growth Strategy']
                }
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{category.icon}</svg>
                    </div>
                    <h3 className="font-poster text-xl text-slate-800 dark:text-slate-100 uppercase tracking-tight">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Office & Design — Full Width Option */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-3 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="font-poster text-xl text-slate-800 dark:text-slate-100 uppercase tracking-tight">Office & Design Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Microsoft Excel', 'Microsoft Word', 'PowerPoint', 'Adobe Illustrator', 'Canva', 'Notion', 'Notepad++', 'Figma', 'VS Code'].map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-50 dark:bg-teal-900/10 text-slate-600 dark:text-teal-300/80 border border-slate-200 dark:border-teal-500/20 hover:border-teal-500 transition-all duration-300 cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Experience Section */}
        <article id="experience" className="section py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80">
          <div className="container">
            <h2 className="section-title font-display">Work Experience</h2>
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl group animate-scale-in">
                <h3 className="text-xl font-bold text-dark dark:text-light mb-1 font-display">
                  Digital Ops Manager | Marketing Automation & SEO Engineer
                </h3>
                <p className="text-primary font-mono text-sm mb-2 group">
                  <span className="inline-block hover:animate-wave">Oasis Outfit || Zii Zii Island • November 2023 - Present</span>
                </p>
                <ul className="text-secondary space-y-2">
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Automated payroll processing for 120+ employees using Excel and RAMS software, cutting reporting time by 30%</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Ranked top 3 on Google Search for high-volume branded keywords through strategic SEO implementation</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Led Facebook Ads, product posting, and campaign performance tracking via GA4, GTM, and Facebook Pixel</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Developed Messenger and comment auto-reply bots with keyword triggers, improving customer engagement</span>
                  </li>
                </ul>
              </div>
              {/* Add more experience cards as needed */}
              <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl group animate-scale-in">
                <h3 className="text-xl font-bold text-dark dark:text-light mb-1 font-display">
                  Founder & Entrepreneur
                </h3>
                <p className="text-primary font-mono text-sm mb-2 group">
                  <span className="inline-block hover:animate-wave">  Organic Fruitopia • June 2023 - Present</span>
                </p>
                <ul className="text-secondary space-y-2">
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Founded a seasonal mango business selling 3+ tons of premium-quality mango directly to consumers.</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Generated BDT 40,000 profit in one season by optimizing sourcing, pricing, and marketing.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Managed end-to-end operations: procurement, logistics, customer service, and digital engagement.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Executed targeted social media campaigns to attract health-conscious customers.</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span className="inline-block hover:animate-wave">Gained hands-on experience in entrepreneurship, e-commerce, and supply chain management.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>



        </article>


        {/* Projects Section */}
        <article id="projects" className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80 py-20">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              <h2 className="section-title font-display">Education & Projects</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                {/* Education */}
                <div className="relative mb-32 animate-fade-in ">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 p-4 md:order-1 bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl">
                      <p className="text-primary font-mono text-sm mb-2 group">
                        <span className="inline-block hover:animate-wave">Education</span>
                      </p>
                      <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 font-display group">
                        <span className="inline-block hover:animate-wave">Bachelor of Computer Science & Engineering</span>
                      </h3>
                      <div className="bg-dark-lighter p-6 rounded-lg mb-4 group">
                        <p className="text-secondary mb-2">
                          <span className="inline-block hover:animate-wave">International Islamic University Chittagong, Bangladesh</span>
                        </p>
                        <p className="text-secondary mb-2">
                          <span className="inline-block hover:animate-wave">Year of Graduation: Nov 2019 – Feb 2024</span>
                        </p>

                        <p className="text-primary font-mono text-sm mb-2 group">
                          <span className="inline-block hover:animate-wave">Thesis</span>
                        </p>
                        <h6 className="text-xl font-semibold text-dark dark:text-light mb-4 font-display group">
                          <span className="inline-block hover:animate-wave">"The Role of Machine Learning in Increased Cyberbullying Claims"</span>
                        </h6>
                        {/* <a className="text-primary font-mono text-sm mb-2 group">
                        <span className="inline-block hover:animate-wave">Thesis</span>
                      </a> */}
                        <a className='text-primary font-mono' href="http://dx.doi.org/10.13140/RG.2.2.30114.95689" target='_blank'>DOI:10.13140/RG.2.2.30114.95689</a>

                      </div>
                    </div>

                    <div className="order-1 md:order-2">
                      <div className="relative">
                        <div className="w-full h-64 bg-dark-lighter rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                          <div className="text-center p-6">
                            <img src="/iiuclogo.png" alt="IIUC Logo" className="w-16 h-16 mx-auto mb-4" />

                            <h4 className="text-xl font-bold text-dark dark:text-light">IIUC</h4>
                            <p className="text-secondary">International Islamic University Chittagong</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 border border-primary/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 1 - Quran-For-Ummah */}
                <div className="relative mb-32 animate-fade-in [animation-delay:200ms]">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 p-2 bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-2">
                        <p className="text-primary font-mono text-sm group">
                          <span className="inline-block hover:animate-wave">Featured Project</span>
                        </p>
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                          Top 5 National STEAM Olympiad
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 font-display group">
                        <span className="inline-block hover:animate-wave">Quran-For-Ummah</span>
                      </h3>
                      <div className="bg-dark-lighter p-6 rounded-lg mb-4 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-dark px-4 py-2 rounded-bl-lg font-semibold">
                          5th Place Nationally
                        </div>
                        <p className="text-secondary mb-4 mt-2">
                          <span className="inline-block hover:animate-wave">A comprehensive Quran and Hadith platform built with React, featuring Firebase authentication, Bangla translations, daily duas, and an Islamic quiz system. Recognized and awarded in the National STEAM Olympiad for innovative use of technology in Islamic education.</span>
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">🏆</span>
                            <span>National STEAM Olympiad Finalist</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">📖</span>
                            <span>Complete Quran with Bangla translation</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">🙏</span>
                            <span>140+ Daily Duas collection</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">📝</span>
                            <span>Interactive Islamic Quiz System</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">🔒</span>
                            <span>Secure Firebase Authentication</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-dark-lighter p-4 rounded-lg mb-4">
                        <h4 className="text-primary font-semibold mb-2">STEAM Olympiad Achievement</h4>
                        <p className="text-secondary text-sm">
                          Secured 5th place nationally for innovative integration of technology in Islamic education, competing against hundreds of projects across Bangladesh.
                        </p>
                      </div>
                      <ul className="flex flex-wrap gap-4 text-secondary text-sm">
                        <li className="group"><span className="inline-block hover:animate-wave">React</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">MongoDB</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Node.js</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Firebase</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Tailwind CSS</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Daisy UI</span></li>
                      </ul>
                      <div className="flex gap-4 mt-4">
                        <a href="https://quran-for-ummah.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </a>
                        {/* <a href="https://quran-for-ummah.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a> */}
                      </div>
                    </div>

                    <div className="order-1">
                      <div className="relative">
                        <div className="w-full h-64 bg-dark-lighter rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="/images/quran-for-ummah.png"
                            alt="Quran-For-Ummah - National STEAM Olympiad Finalist"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4">
                              <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-semibold">
                                5th Place - National STEAM Olympiad
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 border border-primary/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 - Abacus Academy */}
                <div className="relative mb-32 animate-fade-in [animation-delay:400ms]">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-2">
                      <p className="text-primary font-mono text-sm mb-2 group">
                        <span className="inline-block hover:animate-wave">Featured Project</span>
                      </p>
                      <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 font-display group">
                        <span className="inline-block hover:animate-wave">Abacus Academy</span>
                      </h3>
                      <div className="bg-dark-lighter p-6 rounded-lg mb-4 group">
                        <p className="text-secondary mb-4">
                          <span className="inline-block hover:animate-wave">An education platform with role-based authentication (Teacher/Student), course management, and payment integration. Users can register with email/password or Google, with data stored in MongoDB.</span>
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">👥</span>
                            <span>Role-based Authentication</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">📚</span>
                            <span>Course Management</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">💳</span>
                            <span>Payment Integration</span>
                          </div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-4 text-secondary text-sm">
                        <li className="group"><span className="inline-block hover:animate-wave">React</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">MongoDB</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Node.js</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Firebase</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Payment API</span></li>
                      </ul>
                      <div className="flex gap-4 mt-4">
                        <a href="https://new-abacus-academy.web.app/" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a> */}
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative">
                        <div className="w-full h-64 bg-dark-lighter rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="images/abacus-academy.png"
                            alt="Abacus Academy"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 border border-primary/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 - ZiiZii Island */}
                <div className="relative animate-fade-in [animation-delay:600ms]">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-2">
                      <p className="text-primary font-mono text-sm mb-2 group">
                        <span className="inline-block hover:animate-wave">Featured Project</span>
                      </p>
                      <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 font-display group">
                        <span className="inline-block hover:animate-wave">ZiiZii Island Website</span>
                      </h3>
                      <div className="bg-dark-lighter p-6 rounded-lg mb-4 group">
                        <p className="text-secondary mb-4">
                          <span className="inline-block hover:animate-wave">Developed the front-end for ZiiZii Island's family entertainment center website. Implemented responsive design, interactive elements, and optimized performance for a seamless user experience.</span>
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">🎮</span>
                            <span>Family Entertainment Center</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">📱</span>
                            <span>Responsive Design</span>
                          </div>
                          <div className="flex items-center text-secondary">
                            <span className="mr-2">⚡</span>
                            <span>Performance Optimized</span>
                          </div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-4 text-secondary text-sm">
                        <li className="group"><span className="inline-block hover:animate-wave">HTML</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">CSS</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">JavaScript</span></li>
                        <li className="group"><span className="inline-block hover:animate-wave">Bootstrap 5</span></li>

                      </ul>
                      <div className="flex gap-4 mt-4">
                        <a href="https://ziiziiisland.com/" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </a>
                        {/* <a href="https://github.com/yourusername/ziiziiisland" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light hover:text-primary">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a> */}
                      </div>
                    </div>
                    <div className="order-1">
                      <div className="relative">
                        <div className="w-full h-64 bg-dark-lighter rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="images/ziizii-island.png"
                            alt="ZiiZii Island Website"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 border border-primary/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Certificates Section */}
        <article id="certificate" className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80 py-20">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              <h2 className="section-title font-display">Certificates & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {/* STEAM Olympiad Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/STEAM-OLYMPIAD-FINALIST.jpg"
                      alt="STEAM Olympiad Finalist Certificate"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">STEAM Olympiad Finalist</h3>
                        <p className="text-light/80 text-sm">5th Place in National Competition</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NASA Space Apps Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/NASA-Space-Apps-Challenge-1.png"
                      alt="NASA Space Apps Challenge Certificate"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">NASA Space Apps Challenge</h3>
                        <p className="text-light/80 text-sm">Virtual Round Selection</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/Mohammad-Ismail-Emon-Seo_Certificate.jpg"
                      alt="SEO Certification"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">SEO Certification</h3>
                        <p className="text-light/80 text-sm">Advanced Search Engine Optimization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta Ads Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/meta-ads.jpeg"
                      alt="Meta Ads Certification"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">Meta Ads Certification</h3>
                        <p className="text-light/80 text-sm">Facebook & Instagram Advertising</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Web Development Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/Web-development.jpeg"
                      alt="Web Development Certification"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">Web Development</h3>
                        <p className="text-light/80 text-sm">Full Stack Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* fb Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/fb-ads.jpg"
                      alt="fb ads Certification"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">Facebook Ads Certification</h3>
                        <p className="text-light/80 text-sm">Facebook Ads</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* fb Certificate */}
                <div className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-dark-lighter/80 border-2 border-secondary shadow-2xl hover:shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] transition-shadow duration-300 animate-scale-in">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    <img
                      src="/certificate/chemistry-olympiad.jpg"
                      alt="fb ads Certification"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-light">Bangladesh Chemistry Olympiad Certification</h3>
                        <p className="text-light/80 text-sm">Chemistry Olympiad-Preliminary Round</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </article>

        {/* Statistics Section */}
        <article className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80 py-20">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Stat 1 */}
                <div className="text-center group animate-fade-in">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    3+
                  </div>
                  <div className="text-secondary">Years Experience</div>
                </div>

                {/* Stat 2 */}
                <div className="text-center group animate-fade-in">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    70+
                  </div>
                  <div className="text-secondary">Projects Completed</div>
                </div>

                {/* Stat 3 */}
                <div className="text-center group animate-fade-in">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    20+
                  </div>
                  <div className="text-secondary">Happy Clients</div>
                </div>

                {/* Stat 4 */}
                <div className="text-center group animate-fade-in">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    100+
                  </div>
                  <div className="text-secondary">GitHub Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Currently Learning Section */}
        <article className="section py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              <h2 className="section-title font-display">Currently Learning</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Learning Item 1 */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark dark:text-light group-hover:text-primary transition-colors">
                        SEO
                      </h3>
                      <p className="text-secondary text-sm">Search Engine Optimization</p>
                    </div>
                  </div>
                  <div className="w-full bg-dark/20 rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-secondary text-sm">80% Complete</p>
                </div>

                {/* Learning Item 2 */}
                <div className="bg-dark-lighter  bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark dark:text-light group-hover:text-primary transition-colors">
                        Brand Growth Strategy
                      </h3>
                      <p className="text-secondary text-sm">Marketing & Branding</p>
                    </div>
                  </div>
                  <div className="w-full bg-dark/20 rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full w-5/6"></div>
                  </div>
                  <p className="text-secondary text-sm">80% Complete</p>
                </div>

                {/* Learning Item 3 */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark dark:text-light group-hover:text-primary transition-colors">
                        Project Management
                      </h3>
                      <p className="text-secondary text-sm">Team & Resource Management</p>
                    </div>
                  </div>
                  <div className="w-full bg-dark/20 rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-secondary text-sm">70% Complete</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Achievements Section */}
        <article className="section py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              {/* Career Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-dark dark:text-light mb-6 font-display">Career Highlights</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Front-End Development */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                    <h4 className="text-xl font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors">
                      Front-End Development
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">💻</span>
                        <span>ZiiZii Island Website</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🔍</span>
                        <span>Bug Finding & Reporting</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🛠️</span>
                        <span>Full Stack Implementation</span>
                      </div>
                    </div>
                  </div>

                  {/* Digital Marketing */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                    <h4 className="text-xl font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors">
                      Digital Marketing
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">📊</span>
                        <span>GA4 & GTM Implementation</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🎯</span>
                        <span>Facebook Ads Management</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🤖</span>
                        <span>Chatbot & Automation</span>
                      </div>
                    </div>
                  </div>

                  {/* Multitasking & Operations */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                    <h4 className="text-xl font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors">
                      Multitasking & Operations
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🔄</span>
                        <span>Cross-functional Roles</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">💼</span>
                        <span>RAMS Payroll Management</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">📈</span>
                        <span>Process Optimization</span>
                      </div>
                    </div>
                  </div>

                  {/* Business Venture */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in">
                    <h4 className="text-xl font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors">
                      Business Venture
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">🍎</span>
                        <span>Organic Fruitopia</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">👥</span>
                        <span>5-Member Team</span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <span className="mr-2">💰</span>
                        <span>40K Profit per Season</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Highlights */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark dark:text-light mb-6 font-display">Competition Highlights</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* STEAM Olympiad */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl text-primary">🏆</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark dark:text-light">National STEAM Olympiad</h3>
                          <p className="text-primary">5th Place Nationally</p>
                        </div>
                      </div>
                      <p className="text-secondary mb-4">
                        Secured 5th position among hundreds of participants nationwide with the Quran-For-Ummah project, showcasing innovative use of technology in Islamic education.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span className="text-secondary">Innovative integration of technology and religious education</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span className="text-secondary">National recognition for project impact and execution</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* NASA Space Apps */}
                  <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl text-primary">🚀</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark dark:text-light">NASA Space Apps Challenge</h3>
                          <p className="text-primary">Virtual Round Selection</p>
                        </div>
                      </div>
                      <p className="text-secondary mb-4">
                        Selected for the virtual round of the NASA Space Apps Challenge, demonstrating innovative solutions for space exploration challenges.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span className="text-secondary">International collaboration on space technology</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span className="text-secondary">Recognition from NASA for innovative solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </article>

        {/* Facebook Ads Performance Section */}
        <article id="ads" className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80 py-20">
          <div className="container">
            <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
              <div className="text-center mb-12">
                <h2 className="section-title font-display mb-6">Facebook Ads Performance</h2>
                <p className="text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
                  Driving exceptional results through strategic Facebook advertising campaigns, reaching millions of users with optimized targeting and engagement.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Reach */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary text-sm">Total Reach</p>
                      <h3 className="text-2xl font-bold text-primary">4.59M+</h3>
                    </div>
                  </div>
                  <div className="text-secondary text-sm">
                    Unique users reached across campaigns
                  </div>
                </div>

                {/* Total Impressions */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary text-sm">Total Impressions</p>
                      <h3 className="text-2xl font-bold text-primary">18.3M+</h3>
                    </div>
                  </div>
                  <div className="text-secondary text-sm">
                    Total ad views generated
                  </div>
                </div>

                {/* Total Clicks */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary text-sm">Total Clicks</p>
                      <h3 className="text-2xl font-bold text-primary">636.9K+</h3>
                    </div>
                  </div>
                  <div className="text-secondary text-sm">
                    Engaged users who clicked ads
                  </div>
                </div>

                {/* Total Ad Spend */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary text-sm">Total Investment</p>
                      <h3 className="text-2xl font-bold text-primary">$2,536</h3>
                    </div>
                  </div>
                  <div className="text-secondary text-sm">
                    Optimized ad spend with high ROI
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Performance Metrics */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark dark:text-light mb-4">Key Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-secondary">Average CPC</span>
                        <span className="text-primary">$0.004</span>
                      </div>
                      <div className="h-2 bg-dark/20 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-secondary">CTR (Click-Through Rate)</span>
                        <span className="text-primary">3.48%</span>
                      </div>
                      <div className="h-2 bg-dark/20 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-secondary">Conversion Rate</span>
                        <span className="text-primary">2.89%</span>
                      </div>
                      <div className="h-2 bg-dark/20 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campaign Highlights */}
                <div className="bg-dark-lighter bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark dark:text-light mb-4">Campaign Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-secondary">Managed multiple concurrent campaigns with daily budget optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-secondary">Achieved 18M+ impressions with targeted audience segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-secondary">Maintained consistently low CPC of $0.004 across campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-secondary">Generated 636.9K+ clicks through compelling ad creatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
          {/* Facebook Ads Image Showcase */}
          <section className="container my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/Analytics-1.png"
                alt="Facebook Ad 1"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              />
              <img
                src="/Analytics-2.png"
                alt="Facebook Ad 2"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              />
              <img
                src="/Analytics-3.png"
                alt="Facebook Ad 3"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              />
              <img
                src="/Analytics-4.jpg"
                alt="Facebook Ad 4"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              />
            </div>
          </section>



        </article>


        {/* Contact Section */}
        <article id="contact" className="pt-16 md:pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-light/80 dark:from-primary/20 dark:via-secondary/20 dark:to-dark/80">
          <div className="container">
            <h2 className="section-title font-display">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" p-3 space-y-6 bg-white/80 dark:bg-dark-lighter/80 border border-secondary/30 shadow-md rounded-xl hover:shadow-xl">
                  <p className="text-secondary text-lg leading-relaxed group">
                    <span className="inline-block hover:animate-wave">I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</span>
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:emonismail44@gmail.com"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <EnvelopeIcon className="w-5 h-5 mr-3" />
                      <span className="inline-block hover:animate-wave">emonismail44@gmail.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/" target="_blank"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <FaLinkedin className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="inline-block hover:animate-wave">Linkdin</span>
                    </a>
                    <a
                      href="https://www.facebook.com/ismail.emon.180" target="_blank"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <FaFacebook className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="inline-block hover:animate-wave">Facebook</span>
                    </a>
                    <a
                      href="https://github.com/emon-ismail" target="_blank"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <FaGithub className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="inline-block hover:animate-wave">Github</span>
                    </a>
                    <a
                      href="https://www.behance.net/emon44" target="_blank"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <FaBehance className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="inline-block hover:animate-wave">Behance</span>
                    </a>
                    <a
                      href="tel:+8801628692798"
                      className="flex items-center text-secondary hover:text-primary transition-colors group"
                    >
                      <PhoneIcon className="w-5 h-5 mr-3" />
                      <span className="inline-block hover:animate-wave">+880 1628692798</span>
                    </a>
                    <div className="flex items-center text-secondary group">
                      <MapPinIcon className="w-5 h-5 mr-3" />
                      <span className="inline-block hover:animate-wave">Chattogram, Bangladesh</span>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-lighter/70 border border-secondary/30 shadow-xl p-8 rounded-2xl">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2 bg-light dark:bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2 bg-light dark:bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        className="w-full px-4 py-2 bg-light dark:bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full shadow-md hover:shadow-lg transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>


      </main>
    </div>
  )
}