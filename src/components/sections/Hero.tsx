'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
    return (
        <article id="hero" className="min-h-screen relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center overflow-hidden pt-28 pb-12 md:py-0">
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
                        className="text-center md:mb-[-10px] z-30 relative mt-4 md:mt-0"
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
    )
}
