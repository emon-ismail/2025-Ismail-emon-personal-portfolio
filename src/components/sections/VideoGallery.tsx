'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { motion } from 'framer-motion'

interface Video {
    id: string
    title: string
    url: string
    type: '16:9' | '9:16'
}

export default function VideoGallery() {
    const [videos, setVideos] = useState<Video[]>([])

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'videos'), orderBy('createdAt', 'desc')), (snapshot) => {
            setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Video)))
        })
        return () => unsub()
    }, [])

    const landscapeVideos = videos.filter(v => v.type === '16:9')
    const portraitVideos = videos.filter(v => v.type === '9:16')

    return (
        <article id="problem-solving" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Content Creation</p>
                    <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Video Gallery</h2>
                    <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                        {landscapeVideos.length > 0 ? landscapeVideos.map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl hover:border-teal-500/30 transition-all duration-500">
                                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={video.url}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <h3 className="mt-4 px-2 font-poster text-slate-800 dark:text-slate-200 uppercase text-sm tracking-tight">{video.title}</h3>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="bg-white/50 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-700 p-12 rounded-[2.5rem] text-center">
                                <p className="text-slate-400 font-mono text-xs uppercase">No landscape videos yet</p>
                            </div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="bg-slate-100 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] p-6 flex flex-row items-center justify-between gap-4 group-hover:border-teal-500/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                                        <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </div>
                                    <h3 className="text-base font-poster text-slate-900 dark:text-slate-100 uppercase">Watch More on YouTube</h3>
                                </div>
                                <a
                                    href="https://www.youtube.com/channel/UCyMAFlIO5gEPb0FZnuq_BeQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-all text-sm"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {portraitVideos.length > 0 ? portraitVideos.map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl hover:border-teal-500/30 transition-all duration-500 h-full flex flex-col items-center">
                                    <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={video.url}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <h3 className="mt-4 font-poster text-slate-800 dark:text-slate-200 uppercase text-sm tracking-tight">{video.title}</h3>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="bg-white/50 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-700 p-12 rounded-[2.5rem] text-center h-full flex items-center justify-center">
                                <p className="text-slate-400 font-mono text-xs uppercase">No portrait videos yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
