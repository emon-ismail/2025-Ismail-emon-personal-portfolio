'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { doc, onSnapshot } from 'firebase/firestore'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon, MapPinIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

export default function About() {
    const [aboutData, setAboutData] = useState({
        aboutText1: "I'm a multidisciplinary professional blending Digital Operations, Marketing Automation, SEO, and Software Engineering.",
        aboutText2: "I drive measurable growth through data-driven campaigns, automation systems, and front-end engineering.",
        cvUrl: "#",
        linkedinUrl: "#",
        location: 'Chittagong, Bangladesh',
        degree: 'BSc in CSE — IIUC',
        company: 'Oasis Outfit · ZiiZii Island',
        achievement: 'STEAM Olympiad Top 5'
    })

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'settings', 'about'), (docSnap) => {
            if (docSnap.exists()) {
                setAboutData(docSnap.data() as any)
            }
        })
        return () => unsub()
    }, [])

    return (
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
                    <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Get to know me</p>
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
                            {aboutData.aboutText1}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                            {aboutData.aboutText2}
                        </p>

                        {/* Highlights grid */}
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {([
                                { icon: <MapPinIcon className="w-5 h-5" />, label: 'Location', value: aboutData.location },
                                { icon: <AcademicCapIcon className="w-5 h-5" />, label: 'Degree', value: aboutData.degree },
                                { icon: <BriefcaseIcon className="w-5 h-5" />, label: 'Company', value: aboutData.company },
                                { icon: <TrophyIcon className="w-5 h-5" />, label: 'Achievement', value: aboutData.achievement },
                            ] as { icon: ReactNode; label: string; value: string }[]).map(({ icon, label, value }) => (
                                <div key={label} className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 hover:shadow-md transition-all duration-300 group">
                                    <span className="text-teal-500 dark:text-teal-400">{icon}</span>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">{label}</p>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={aboutData.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-1"
                            >
                                Download CV
                            </a>
                            <a
                                href={aboutData.linkedinUrl}
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
    )
}
