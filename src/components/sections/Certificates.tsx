'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { motion } from 'framer-motion'

interface Certificate {
    id: string
    title: string
    issuer: string
    desc: string
    img: string
    tag: string
}

export default function Certificates() {
    const [certificates, setCertificates] = useState<Certificate[]>([])

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'certificates'), orderBy('createdAt', 'desc')), (snapshot) => {
            setCertificates(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Certificate)))
        })
        return () => unsub()
    }, [])

    return (
        <article id="certificate" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container relative z-10 px-4 mx-auto max-w-6xl">
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
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.id}
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
                    {certificates.length === 0 && (
                        <div className="col-span-full text-center py-20 bg-white/50 dark:bg-slate-800/20 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2rem]">
                            <p className="text-slate-400 font-mono text-sm uppercase italic">Certification list is being updated...</p>
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}
