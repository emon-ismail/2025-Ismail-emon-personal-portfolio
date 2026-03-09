'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AcademicCapIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function Projects() {
    return (
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
    )
}
