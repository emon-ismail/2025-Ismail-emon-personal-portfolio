'use client'

import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  MapPinIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon,
  WindowIcon,
  CheckBadgeIcon,
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ArrowDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
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
        <article id="experience" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          <div className="container relative z-10 px-4 mx-auto max-w-5xl">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Career Journey</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Work Experience</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </div>

            <div className="space-y-8">
              {/* Role 1 */}
              <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm p-8 rounded-3xl transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase tracking-tight mb-2">
                      Digital Ops Manager | Marketing Automation & SEO
                    </h3>
                    <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                      <BriefcaseIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <span className="font-bold text-teal-700 dark:text-teal-300">Oasis Outfit (ZiiZii Island)</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center self-start md:self-auto bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600/50 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Nov 2023 - Present
                  </div>
                </div>

                <ul className="grid gap-3 text-slate-600 dark:text-slate-400">
                  {[
                    "Automated payroll processing for 120+ employees using Excel and RAMS software, cutting reporting time by 30%.",
                    "Ranked top 3 on Google Search for high-volume branded keywords through strategic SEO implementation.",
                    "Led Facebook Ads, product posting, and campaign performance tracking via GA4, GTM, and Facebook Pixel.",
                    "Developed Messenger and comment auto-reply bots with keyword triggers, improving customer engagement."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role 2 */}
              <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm p-8 rounded-3xl transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase tracking-tight mb-2">
                      Founder & Entrepreneur
                    </h3>
                    <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                      <BriefcaseIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <span className="font-bold text-teal-700 dark:text-teal-300">Organic Fruitopia</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center self-start md:self-auto bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600/50 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Jun 2023 - Present
                  </div>
                </div>

                <ul className="grid gap-3 text-slate-600 dark:text-slate-400">
                  {[
                    "Founded a seasonal mango business selling 3+ tons of premium-quality mango directly to consumers.",
                    "Generated BDT 40,000 profit in one season by optimizing sourcing, pricing, and marketing.",
                    "Managed end-to-end operations: procurement, logistics, customer service, and digital engagement.",
                    "Executed targeted social media campaigns to attract health-conscious customers.",
                    "Gained hands-on experience in entrepreneurship, e-commerce, and supply chain management."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>


        {/* Education & Projects Section */}
        <article id="projects" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

          <div className="container relative z-10 px-4 mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Academic & Portfolio</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Education & Projects</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            {/* Education Corner */}
            <div className="max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AcademicCapIcon className="w-24 h-24 text-teal-600" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center p-4 shadow-lg">
                    <img src="/iiuclogo.png" alt="IIUC Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-2">Bachelor of Computer Science & Engineering</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-bold mb-4">International Islamic University Chittagong • 2019 – 2024</p>

                    <div className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                      <p className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">Research Thesis</p>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 leading-snug">"The Role of Machine Learning in Increased Cyberbullying Claims"</h4>
                      <a
                        href="http://dx.doi.org/10.13140/RG.2.2.30114.95689"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline font-mono"
                      >
                        DOI: 10.13140/RG.2.2.30114.95689
                        <ArrowUpRightIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg group h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src="/images/quran-for-ummah.png" alt="Quran-For-Ummah" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-teal-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg">
                    STEAM Olympiad Finalist
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-3">Quran-For-Ummah</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">A comprehensive Quran & Hadith platform featuring Firebase auth, daily duas, and an interactive quiz system.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {['React', 'Firebase', 'MongoDB', 'Tailwind'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-600">{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://quran-for-ummah.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-4 px-6 bg-teal-500/10 hover:bg-teal-500 text-teal-600 dark:text-teal-400 hover:text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl transition-all duration-300"
                  >
                    View Live Project
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 2: Abacus Academy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg group h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src="/images/abacus-academy.png" alt="Abacus Academy" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-3">Abacus Academy</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">Ed-tech platform with role-based auth, course management, and integrated payment gateways.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {['Next.js', 'Node.js', 'MongoDB', 'Firebase'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-600">{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://new-abacus-academy.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-4 px-6 bg-teal-500/10 hover:bg-teal-500 text-teal-600 dark:text-teal-400 hover:text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl transition-all duration-300"
                  >
                    View Live Project
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 3: ZiiZii Island (Clothing Brand) */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg group h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src="/images/ziizii-island.png" alt="ZiiZii Island Clothing" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-slate-950/80 text-teal-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg backdrop-blur-sm">
                    E-commerce
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-3">ZiiZii Island (Clothing)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">A premium clothing brand website with advanced product filtering, cart functionality, and responsive design.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {['Next.js', 'Tailwind', 'Framermotion', 'SEO'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-600">{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://ziiziiisland.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-4 px-6 bg-teal-500/10 hover:bg-teal-500 text-teal-600 dark:text-teal-400 hover:text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl transition-all duration-300"
                  >
                    Visit Store
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div> */}

              {/* Project 4: LifeLink Bangladesh */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-red-500/50 transition-all duration-300 shadow-lg group h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src="/images/lifelinkbd.png" alt="LifeLink Bangladesh" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg">
                    Social Initiative
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-3">LifeLink Bangladesh</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
                    "I created LifeLink Bangladesh to build a bridge between blood donors and recipients. This platform is my Sadqaye Jariah—a dream to ensure no one in Bangladesh suffers due to a lack of blood."
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {['Next.js', 'Firebase', 'Real-time DB', 'SEO'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-600">{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://lifelinkbd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-4 px-6 bg-red-500/10 hover:bg-red-600 text-red-600 dark:text-red-400 hover:text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all duration-300"
                  >
                    View Platform
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 5: ZiiZii Island (Entertainment) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg group h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src="/images/ziizii-island.png" alt="ZiiZii Island Entertainment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-3 text-sm">ZiiZii Island (Entertainment)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">Entertainment center website with modular components and optimized responsiveness.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {['HTML5', 'Bootstrap 5', 'JS', 'AOS'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-600">{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://ziiziiisland.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-4 px-6 bg-teal-500/10 hover:bg-teal-500 text-teal-600 dark:text-teal-400 hover:text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl transition-all duration-300"
                  >
                    View Live
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </article>

        {/* Simplified Problem Solving Video Gallery */}
        <article id="problem-solving" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container relative z-10 px-4 mx-auto max-w-7xl">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Content Creation</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Video Gallery</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            {/* 2-column layout: left stacks video + channel, right has Reels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                {/* 16:9 Video */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl hover:border-teal-500/30 transition-all duration-500">
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/UnVjVB7BzRg?si=3Y8F-u_GwnFprAa0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </motion.div>

                {/* Channel Link Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="bg-slate-100 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] p-6 flex flex-row items-center justify-between gap-4 group-hover:border-teal-500/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                      </div>
                      <h3 className="text-base font-poster text-slate-900 dark:text-slate-100 uppercase">Watch More on YouTube</h3>
                    </div>
                    <a
                      href="https://www.youtube.com/channel/UCyMAFlIO5gEPb0FZnuq_BeQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-all text-sm"
                    >
                      Subscribe
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Reels (9:16) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl hover:border-teal-500/30 transition-all duration-500 h-full flex flex-col items-center">
                  <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/9vIo183jceg"
                      title="Quick Tips Short"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        <article id="certificate" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          <div className="container relative z-10 px-4 mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Validation & Honors</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Certificates & Recognition</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "STEAM Olympiad Finalist",
                  issuer: "National STEAM Olympiad",
                  desc: "5th Place in National Competition",
                  img: "/certificate/STEAM-OLYMPIAD-FINALIST.jpg",
                  tag: "National Honor"
                },
                {
                  title: "NASA Space Apps",
                  issuer: "NASA",
                  desc: "Virtual Round Selection",
                  img: "/certificate/NASA-Space-Apps-Challenge-1.png",
                  tag: "Global Competition"
                },
                {
                  title: "SEO Certification",
                  issuer: "Advanced SEO Hub",
                  desc: "Search Engine Optimization Mastery",
                  img: "/certificate/Mohammad-Ismail-Emon-Seo_Certificate.jpg",
                  tag: "Professional"
                },
                {
                  title: "Meta Ads Mastery",
                  issuer: "Meta (Facebook)",
                  desc: "Advertising & Campaign Management",
                  img: "/certificate/meta-ads.jpeg",
                  tag: "Professional"
                },
                {
                  title: "Full Stack Development",
                  issuer: "Web Development Hub",
                  desc: "Full Stack Implementation",
                  img: "/certificate/Web-development.jpeg",
                  tag: "Engineering"
                },
                {
                  title: "Chemistry Olympiad",
                  issuer: "Bangladesh Chemistry Society",
                  desc: "Preliminary Round Qualifier",
                  img: "/certificate/chemistry-olympiad.jpg",
                  tag: "STEM Honor"
                }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden shadow-lg hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="relative h-64 w-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 block">{cert.tag}</span>
                    <h3 className="text-xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-1 leading-tight">{cert.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{cert.issuer}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-3 italic">{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </article>

        {/* Statistics Section */}
        <article className="relative py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "70+" },
                { label: "Happy Clients", value: "20+" },
                { label: "GitHub Commits", value: "1000+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <span className="block text-4xl md:text-6xl font-poster text-teal-600 dark:text-teal-400 uppercase tracking-tighter mb-2">{stat.value}</span>
                  <span className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </article>

        {/* Currently Learning Section */}
        <article className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          <div className="container relative z-10 px-4 mx-auto max-w-5xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Future Roadmap</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Currently Learning</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Advanced SEO", category: "Marketing", progress: 85, icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
                { title: "Brand Growth", category: "Business", progress: 80, icon: <RocketLaunchIcon className="w-6 h-6" /> },
                { title: "Project Management", category: "Operations", progress: 75, icon: <BriefcaseIcon className="w-6 h-6" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-xl group hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-poster text-slate-800 dark:text-slate-100 uppercase leading-none">{item.title}</h3>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{item.category}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </article>

        {/* Career Highlights Section */}
        <article className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/4 -translate-y-1/2" />

          <div className="container relative z-10 px-4 mx-auto max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Milestones</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Career Highlights</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Front-End Development",
                  icon: <CodeBracketIcon className="w-8 h-8" />,
                  items: ["ZiiZii Island Website", "Bug Finding & Reporting", "Full Stack Implementation"]
                },
                {
                  title: "Digital Marketing",
                  icon: <RocketLaunchIcon className="w-8 h-8" />,
                  items: ["GA4 & GTM Implementation", "Facebook Ads Management", "Chatbot & Automation"]
                },
                {
                  title: "Operations & HR",
                  icon: <BriefcaseIcon className="w-8 h-8" />,
                  items: ["Cross-functional Roles", "RAMS Payroll Management", "Process Optimization"]
                },
                {
                  title: "Business Venture",
                  icon: <AcademicCapIcon className="w-8 h-8" />,
                  items: ["Organic Fruitopia", "5-Member Team Leadership", "40K Profit per Season"]
                }
              ].map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-lg group hover:border-teal-500/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-4 leading-tight">
                    {highlight.title}
                  </h3>
                  <ul className="space-y-3 mt-auto">
                    {highlight.items.map((item, j) => (
                      <li key={j} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                        <CheckBadgeIcon className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </article>

        {/* Facebook Ads Performance Section */}
        <article id="ads" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Marketing Excellence</p>
              <h2 className="font-poster text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Facebook Ads Performance</h2>
              <div className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Driving exceptional results through strategic Facebook advertising campaigns, reaching millions of users with optimized targeting and engagement.
              </p>
            </motion.div>

            {/* Top 4 Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Total Reach", value: "4.59M+", desc: "Unique users reached", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                { label: "Total Impressions", value: "18.3M+", desc: "Total ad views generated", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
                { label: "Total Clicks", value: "636.9K+", desc: "Engaged users tracking", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg> },
                { label: "Total Investment", value: "$2,536", desc: "Optimized ad spend ROI", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-teal-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-poster text-slate-900 dark:text-white mb-1 group-hover:text-teal-500 transition-colors uppercase">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-1 flex items-center gap-2">
                    {stat.label} <ArrowUpRightIcon className="w-3 h-3 text-teal-500" />
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Metrics & Highlights */}
            <div className="grid lg:grid-cols-5 gap-6 mb-16">
              {/* Performance Metrics Bar Chart / Progress */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-lg"
              >
                <h3 className="text-2xl font-poster text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-3">
                  <CheckBadgeIcon className="w-6 h-6 text-teal-500" /> Key Metrics
                </h3>
                <div className="space-y-8">
                  {[
                    { label: "Average CPC", value: "$0.004", percent: 95 },
                    { label: "Click-Through Rate (CTR)", value: "3.48%", percent: 85 },
                    { label: "Conversion Rate", value: "2.89%", percent: 80 }
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span className="uppercase tracking-wider">{metric.label}</span>
                        <span className="text-teal-600 dark:text-teal-400 text-lg font-poster">{metric.value}</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Campaign Highlights List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-gradient-to-br from-teal-500 to-teal-700 p-[1px] rounded-[2rem] shadow-xl overflow-hidden"
              >
                <div className="bg-slate-900 h-full p-8 rounded-[2rem]">
                  <h3 className="text-2xl font-poster text-white uppercase mb-8 flex items-center gap-3">
                    <RocketLaunchIcon className="w-6 h-6 text-teal-400" /> Campaign Highlights
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "Managed multiple concurrent campaigns with daily budget optimization based on real-time ROAS.",
                      "Achieved 18M+ impressions through meticulous targeted audience segmentation and lookalike audiences.",
                      "Maintained a consistently low CPC of $0.004 across global campaigns, maximizing reach.",
                      "Generated 636.9K+ clicks through highly compelling, A/B tested ad creatives and copy."
                    ].map((highlight, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 border border-teal-500/30">
                          <CheckBadgeIcon className="w-4 h-4 text-teal-400" />
                        </div>
                        <span className="text-base leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Image Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                "/Analytics-1.png",
                "/Analytics-2.png",
                "/Analytics-3.png",
                "/Analytics-4.jpg"
              ].map((imgSrc, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-md aspect-auto bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 p-2">
                  <Image
                    src={imgSrc}
                    alt={`Facebook Ad Performance ${idx + 1}`}
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </div>
        </article>


        {/* Contact Section */}
        {/* Contact Section */}
        <article id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 dark:bg-slate-800/50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="container relative z-10 px-4 mx-auto max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Connect</p>
              <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Get In Touch</h2>
              <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Information Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 space-y-6"
              >
                <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-lg">
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>

                  <div className="space-y-6">
                    <a href="mailto:emonismail44@gmail.com" className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                        <EnvelopeIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">emonismail44@gmail.com</p>
                      </div>
                    </a>

                    <a href="tel:+8801628692798" className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                        <PhoneIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">+880 1628692798</p>
                      </div>
                    </a>

                    <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4">
                        <MapPinIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">Chattogram, Bangladesh</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Connect Socially</p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:shadow-lg transition-all duration-300">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a href="https://github.com/emon-ismail" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#181717] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-lg transition-all duration-300">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href="https://www.facebook.com/ismail.emon.180" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:shadow-lg transition-all duration-300">
                        <FaFacebook className="w-5 h-5" />
                      </a>
                      <a href="https://www.behance.net/emon44" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#1769ff] hover:border-[#1769ff]/30 hover:shadow-lg transition-all duration-300">
                        <FaBehance className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3"
              >
                <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 shadow-xl p-8 lg:p-10 rounded-[2rem]">
                  <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-8">Send a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Email <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Message <span className="text-teal-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-800/50 py-12 relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100px] bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="container px-4 mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-poster text-2xl text-slate-100 tracking-wider">ISMAIL</span>
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            </div>

            <p className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Mohammad Ismail Emon. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#about" className="text-sm font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">About</a>
              <a href="#skills" className="text-sm font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">Skills</a>
              <a href="#experience" className="text-sm font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">Projects</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}
