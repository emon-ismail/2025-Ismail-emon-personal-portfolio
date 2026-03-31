'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRightIcon, CheckBadgeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function FacebookAds() {
    const stats = [
        { label: "Total Reach", value: "6.0M+", desc: "Unique users reached", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { label: "Total Impressions", value: "18.3M+", desc: "Total ad views generated", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        { label: "Total Engagement", value: "850K+", desc: "Clicks, Likes & Shares", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg> },
        { label: "Total Investment", value: "$3,200+", desc: "Optimized ad spend ROI", icon: <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
    ]

    const services = [
        { title: "Social Media Strategy", desc: "Crafting data-driven roadmaps for organic and paid growth." },
        { title: "Paid Advertising", desc: "Expert management of Facebook, Instagram & Google Ads." },
        { title: "SEO Optimization", desc: "Technical & On-page SEO to dominate search results." },
        { title: "Performance Reports", desc: "Advanced analytics with Looker Studio & GA4." }
    ]

    const caseStudies = [
        {
            brand: "Oasis Outfit",
            category: "Retail & Fashion",
            goal: "Drive Foot Traffic & Sales",
            spend: "$2,105",
            reach: "3.6M",
            results: [
                "10.1M+ Total Impressions generated",
                "12,000+ Messaging Conversations started",
                "Optimized Google Business Profile for outlets",
                "Managed Terry Bazar, Khulshi & Fortune Outlets"
            ],
            color: "from-blue-500/20 to-teal-500/20"
        },
        {
            brand: "Zii Zii Island",
            category: "Entertainment & Kids",
            goal: "Amusement Park Engagement",
            spend: "$1,133",
            reach: "2.4M",
            results: [
                "Top Ranked in Local SEO & Key search terms",
                "Optimized Google Business Profile & Maps",
                "850,000+ Viral Post Engagements generated",
                "Grand Launch of Finlay Branch (Minions Land)"
            ],
            color: "from-purple-500/20 to-pink-500/20"
        }
    ]

    const tools = [
        "Meta Ads Manager", "Google Analytics 4", "Looker Studio", "Canva Pro", "Ahrefs"
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
                    <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Digital Marketing Expert</p>
                    <h2 className="font-poster text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Performance Marketing</h2>
                    <div className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-medium">
                        I combine marketing psychology with advanced technical automation & analytics to deliver measurable ROI. Specialized in hyper-local targeting and viral engagement strategies.
                    </p>
                </motion.div>

                {/* Top 4 Global Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-teal-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
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

                {/* Core Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {services.map((service, i) => (
                        <div key={i} className="p-8 bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl">
                            <h4 className="text-lg font-poster text-slate-900 dark:text-teal-400 uppercase mb-3">{service.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Case Studies */}
                <h3 className="text-3xl font-poster text-slate-900 dark:text-white uppercase mb-10 text-center">Featured Case Studies</h3>
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {caseStudies.map((caseStudy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative overflow-hidden p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700/50 bg-gradient-to-br ${caseStudy.color} group`}
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="px-3 py-1 bg-teal-500/20 text-teal-600 dark:text-teal-400 text-[10px] font-black uppercase rounded-full border border-teal-500/30">{caseStudy.category}</span>
                                        <h4 className="text-3xl font-poster text-slate-900 dark:text-white uppercase mt-3">{caseStudy.brand}</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Invested</p>
                                        <p className="text-xl font-poster text-teal-600 dark:text-teal-400">{caseStudy.spend}</p>
                                    </div>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 font-bold mb-6 italic">"Goal: {caseStudy.goal}"</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800/50">
                                    <ul className="space-y-3">
                                        {caseStudy.results.map((res, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tighter">
                                                <CheckBadgeIcon className="w-4 h-4 text-teal-500 flex-shrink-0" /> {res}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col justify-center items-center p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                                        <p className="text-3xl font-poster text-teal-600 dark:text-teal-400">{caseStudy.reach}</p>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Total Reach</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack & Analytics Section */}
                <div className="space-y-16">
                    {/* Tools & Tech Stack - Full Width Row */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                            <div>
                                <h4 className="text-2xl font-poster text-white uppercase mb-2 flex items-center gap-3">
                                    <RocketLaunchIcon className="w-6 h-6 text-teal-400" /> Modern Tech Stack
                                </h4>
                                <p className="text-sm text-slate-400 font-medium">Proven expertise with the industry's leading marketing & growth tools.</p>
                            </div>
                            <div className="flex flex-wrap gap-3 max-w-2xl justify-end">
                                {tools.map((tool, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-slate-800 text-teal-400 rounded-xl text-xs font-bold uppercase border border-slate-700 hover:border-teal-500/50 hover:bg-slate-700 transition-all">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Performance Analytics Showcase - Large Images Section */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800" />
                            <h3 className="text-2xl font-poster text-slate-900 dark:text-white uppercase px-4 whitespace-nowrap">Analytics & Performance Reports</h3>
                            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {images.map((imgSrc, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800 hover:border-teal-500/30 transition-all duration-500"
                                >
                                    {/* Larger Aspect Ratio for Clarity */}
                                    <div className="relative aspect-[16/10] sm:aspect-video md:aspect-[4/3] w-full bg-slate-900/10">
                                        <Image
                                            src={imgSrc}
                                            alt={`Performance Report ${idx + 1}`}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <p className="text-white font-poster uppercase text-lg tracking-wider">View Performance Data {idx + 1}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 dark:text-slate-400 font-mono text-sm uppercase tracking-widest mb-4">Interested in scaling your brand?</p>
                    <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-teal-500 text-slate-900 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-teal-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-teal-500/20">
                        Let's Talk ROI <ArrowUpRightIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </article>
    )
}
