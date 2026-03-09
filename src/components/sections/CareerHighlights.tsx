'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, RocketLaunchIcon, BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function CareerHighlights() {
    const highlights = [
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
    ]

    return (
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
                    {highlights.map((highlight, i) => (
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
    )
}
