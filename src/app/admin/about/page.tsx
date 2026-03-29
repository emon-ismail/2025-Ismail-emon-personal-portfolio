'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore'
import { motion } from 'framer-motion'
import { ArrowPathIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'

export default function AboutAdmin() {
    const [formData, setFormData] = useState({
        aboutText1: '',
        aboutText2: '',
        cvUrl: '',
        linkedinUrl: '',
        location: 'Chittagong, Bangladesh',
        degree: 'BSc in CSE — IIUC',
        company: 'Oasis Outfit · ZiiZii Island',
        achievement: 'STEAM Olympiad Top 5'
    })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'settings', 'about'), (docSnap) => {
            if (docSnap.exists()) {
                setFormData(docSnap.data() as any)
            }
            setLoading(false)
        })
        return () => unsub()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            await setDoc(doc(db, 'settings', 'about'), formData)
            alert('About Me updated successfully!')
        } catch (error) {
            console.error('Update failed:', error)
            alert('Failed to update.')
        }
        setSaving(false)
    }

    const handleRestore = () => {
        if (!window.confirm('Restore default bio and links?')) return;
        setFormData({
            aboutText1: "I'm a multidisciplinary professional blending Digital Operations, Marketing Automation, SEO, and Software Engineering. At Oasis Outfit (ZiiZii Island), I drive measurable growth through data-driven campaigns, automation systems, and front-end engineering.",
            aboutText2: "I hold a BSc in Computer Science & Engineering from International Islamic University Chittagong (IIUC), and I was recognised as a National STEAM Olympiad Finalist (Top 5 Nationally) for my award-winning Quran-For-Ummah platform.",
            cvUrl: "https://drive.google.com/file/d/19Ey7TylruEvj3rAnYWI0GRETRYDkhQhy/view?usp=sharing",
            linkedinUrl: "https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/",
            location: 'Chittagong, Bangladesh',
            degree: 'BSc in CSE — IIUC',
            company: 'Oasis Outfit · ZiiZii Island',
            achievement: 'STEAM Olympiad Top 5'
        })
    }

    if (loading) return <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" /></div>

    return (
        <div className="max-w-4xl space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-poster uppercase tracking-tight">Manage About & CV</h2>
                    <p className="text-slate-500 text-sm">Update your bio and document links</p>
                </div>
                <button 
                    onClick={handleRestore}
                    className="px-4 py-2 border border-slate-700 rounded-xl text-[10px] font-bold uppercase text-slate-400 hover:text-white transition-all"
                >
                    Restore Defaults
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 border border-slate-800 p-8 rounded-[2.5rem]">
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-teal-500">About Paragraph 1</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-slate-800 border-slate-700 rounded-2xl p-4 text-slate-100 focus:border-teal-500 outline-none transition-all"
                            value={formData.aboutText1}
                            onChange={(e) => setFormData({ ...formData, aboutText1: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-teal-500">About Paragraph 2</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-slate-800 border-slate-700 rounded-2xl p-4 text-slate-100 focus:border-teal-500 outline-none transition-all"
                            value={formData.aboutText2}
                            onChange={(e) => setFormData({ ...formData, aboutText2: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-teal-500">CV Download Link</label>
                            <input
                                required
                                type="url"
                                className="w-full bg-slate-800 border-slate-700 rounded-2xl p-4 text-slate-100 focus:border-teal-500 outline-none"
                                value={formData.cvUrl}
                                onChange={(e) => setFormData({ ...formData, cvUrl: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-teal-500">LinkedIn Link</label>
                            <input
                                required
                                type="url"
                                className="w-full bg-slate-800 border-slate-700 rounded-2xl p-4 text-slate-100 focus:border-teal-500 outline-none"
                                value={formData.linkedinUrl}
                                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Location</label>
                            <input className="w-full bg-slate-800 border-slate-700 rounded-xl p-3 text-sm" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Degree</label>
                            <input className="w-full bg-slate-800 border-slate-700 rounded-xl p-3 text-sm" value={formData.degree} onChange={(e) => setFormData({ ...formData, degree: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Company</label>
                            <input className="w-full bg-slate-800 border-slate-700 rounded-xl p-3 text-sm" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Achievement</label>
                            <input className="w-full bg-slate-800 border-slate-700 rounded-xl p-3 text-sm" value={formData.achievement} onChange={(e) => setFormData({ ...formData, achievement: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        disabled={saving}
                        className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-slate-950 font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-2"
                    >
                        {saving ? <ArrowPathIcon className="w-5 h-5 animate-spin" /> : <CloudArrowUpIcon className="w-5 h-5" />}
                        {saving ? 'Updating...' : 'Update Bio & CV'}
                    </button>
                </div>
            </form>
        </div>
    )
}
