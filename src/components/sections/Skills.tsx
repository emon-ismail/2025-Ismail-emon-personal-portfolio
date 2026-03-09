'use client'

import { motion } from 'framer-motion'

export default function Skills() {
    return (
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
    )
}
