'use client'

import { useState, useEffect } from 'react'
import { db, serverTimestamp } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { TrashIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline'

interface Video {
    id: string
    title: string
    url: string
    type: '16:9' | '9:16'
}

export default function VideosAdmin() {
    const [videos, setVideos] = useState<Video[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editItem, setEditItem] = useState<Video | null>(null)
    const [formData, setFormData] = useState({ title: '', url: '', type: '16:9' as '16:9' | '9:16' })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'videos'), orderBy('createdAt', 'desc')), (snapshot) => {
            setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Video)))
        })
        return () => unsub()
    }, [])

    const handleEdit = (video: Video) => {
        setEditItem(video)
        setFormData({ title: video.title, url: video.url, type: video.type })
        setShowForm(true)
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete video?')) await deleteDoc(doc(db, 'videos', id))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        
        // Convert YouTube URL to embed URL
        let embedUrl = formData.url
        if (embedUrl.includes('youtube.com/watch?v=')) embedUrl = embedUrl.replace('watch?v=', 'embed/')
        else if (embedUrl.includes('youtu.be/')) embedUrl = embedUrl.replace('youtu.be/', 'youtube.com/embed/')

        const data = { ...formData, url: embedUrl, updatedAt: serverTimestamp() }
        if (editItem) {
            await updateDoc(doc(db, 'videos', editItem.id), data)
        } else {
            await addDoc(collection(db, 'videos'), { ...data, createdAt: serverTimestamp() })
        }

        setLoading(false)
        setShowForm(false)
        setEditItem(null)
        setFormData({ title: '', url: '', type: '16:9' })
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-poster uppercase tracking-tight">Video Gallery Management</h2>
                <button 
                    onClick={() => { setShowForm(!showForm); setEditItem(null); setFormData({ title: '', url: '', type: '16:9' }); }}
                    className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 text-teal-400 rounded-xl font-bold uppercase text-xs border border-teal-500/20 hover:bg-teal-500/20 transition-all"
                >
                    {showForm ? 'Cancel' : <><PlusIcon className="w-4 h-4" /> Add Video</>}
                </button>
            </div>

            {showForm && (
                <motion.form initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required placeholder="Video Title" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <select className="bg-slate-800 border-slate-700 rounded-xl p-3 text-slate-300" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value as any })}>
                        <option value="16:9">Landscape (16:9)</option>
                        <option value="9:16">Portrait / Reel (9:16)</option>
                    </select>
                    <input required placeholder="YouTube URL" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.url} onChange={e => setFormData({ ...formData, url: e.target.value })} />
                    <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Video'}</button>
                </motion.form>
            )}

            <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                    {videos.map(video => (
                        <motion.div key={video.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center group transition-all hover:border-teal-500/30">
                            <div>
                                <h3 className="font-bold">{video.title}</h3>
                                <p className="text-sm text-teal-400 uppercase tracking-widest text-[10px]">{video.type} Aspect Ratio</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(video)} className="p-2 text-slate-500 hover:text-teal-400"><PencilSquareIcon className="w-5 h-5" /></button>
                                <button onClick={() => handleDelete(video.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
