'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, RocketLaunchIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CurrentlyLearning() {
    const learningItems = [
        { title: "Advanced SEO", category: "Marketing", progress: 85, icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
        { title: "Brand Growth", category: "Business", progress: 80, icon: <RocketLaunchIcon className="w-6 h-6" /> },
        { title: "Project Management", category: "Operations", progress: 75, icon: <BriefcaseIcon className="w-6 h-6" /> }
    ]

    return (
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
                    {learningItems.map((item, i) => (
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
    )
}
