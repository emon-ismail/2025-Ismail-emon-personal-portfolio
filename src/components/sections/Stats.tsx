'use client'

import { motion } from 'framer-motion'

export default function Stats() {
    const statsData = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "70+" },
        { label: "Happy Clients", value: "20+" },
        { label: "GitHub Commits", value: "1000+" }
    ]

    return (
        <article className="relative py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {statsData.map((stat, i) => (
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
    )
}
