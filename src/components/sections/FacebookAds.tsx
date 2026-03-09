'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRightIcon, CheckBadgeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function FacebookAds() {
    const stats = [
        { label: "Total Reach", value: "4.59M+", desc: "Unique users reached", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { label: "Total Impressions", value: "18.3M+", desc: "Total ad views generated", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        { label: "Total Clicks", value: "636.9K+", desc: "Engaged users tracking", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg> },
        { label: "Total Investment", value: "$2,536", desc: "Optimized ad spend ROI", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
    ]

    const metrics = [
        { label: "Average CPC", value: "$0.004", percent: 95 },
        { label: "Click-Through Rate (CTR)", value: "3.48%", percent: 85 },
        { label: "Conversion Rate", value: "2.89%", percent: 80 }
    ]

    const campaignHighlights = [
        "Managed multiple concurrent campaigns with daily budget optimization based on real-time ROAS.",
        "Achieved 18M+ impressions through meticulous targeted audience segmentation and lookalike audiences.",
        "Maintained a consistently low CPC of $0.004 across global campaigns, maximizing reach.",
        "Generated 636.9K+ clicks through highly compelling, A/B tested ad creatives and copy."
    ]

    const images = [
        "/Analytics-1.png",
        "/Analytics-2.png",
        "/Analytics-3.png",
        "/Analytics-4.jpg"
    ]

    return (
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
                    {stats.map((stat, i) => (
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
                            {metrics.map((metric, i) => (
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
                                {campaignHighlights.map((highlight, i) => (
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
                    {images.map((imgSrc, idx) => (
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
    )
}
