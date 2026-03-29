'use client'

import { useState, useEffect } from 'react'
import { db, serverTimestamp } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { TrashIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline'

const IMGBB_API_KEY = 'db99764e6548abcf42b2b0e79cfe3994'

async function uploadToImgBB(file: File) {
    const formData = new FormData()
    formData.append('image', file)
    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        })
        const result = await response.json()
        return result.success ? result.data.url : ''
    } catch (error) {
        console.error('ImgBB error:', error)
        return ''
    }
}

interface Education {
    id: string
    degree: string
    institution: string
    period: string
    logo: string
    thesisTitle?: string
    thesisDoi?: string
}

export default function EducationAdmin() {
    const [education, setEducation] = useState<Education[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editItem, setEditItem] = useState<Education | null>(null)
    const [formData, setFormData] = useState({ degree: '', institution: '', period: '', thesisTitle: '', thesisDoi: '' })
    const [logoFile, setLogoFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'education'), orderBy('createdAt', 'desc')), (snapshot) => {
            setEducation(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Education)))
        })
        return () => unsub()
    }, [])

    const handleEdit = (edu: Education) => {
        setEditItem(edu)
        setFormData({ degree: edu.degree, institution: edu.institution, period: edu.period, thesisTitle: edu.thesisTitle || '', thesisDoi: edu.thesisDoi || '' })
        setShowForm(true)
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this entry?')) await deleteDoc(doc(db, 'education', id))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        let logoUrl = editItem?.logo || ''
        if (logoFile) logoUrl = await uploadToImgBB(logoFile)

        const data = { ...formData, logo: logoUrl, updatedAt: serverTimestamp() }
        if (editItem) {
            await updateDoc(doc(db, 'education', editItem.id), data)
        } else {
            await addDoc(collection(db, 'education'), { ...data, createdAt: serverTimestamp() })
        }

        setLoading(false)
        setShowForm(false)
        setEditItem(null)
        setFormData({ degree: '', institution: '', period: '', thesisTitle: '', thesisDoi: '' })
        setLogoFile(null)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-poster uppercase tracking-tight">Education Management</h2>
                <button 
                    onClick={() => { setShowForm(!showForm); setEditItem(null); setFormData({ degree: '', institution: '', period: '', thesisTitle: '', thesisDoi: '' }); }}
                    className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 text-teal-400 rounded-xl font-bold uppercase text-xs border border-teal-500/20 hover:bg-teal-500/20 transition-all"
                >
                    {showForm ? 'Cancel' : <><PlusIcon className="w-4 h-4" /> Add New</>}
                </button>
            </div>

            {showForm && (
                <motion.form initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required placeholder="Degree" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.degree} onChange={e => setFormData({ ...formData, degree: e.target.value })} />
                    <input required placeholder="Institution" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.institution} onChange={e => setFormData({ ...formData, institution: e.target.value })} />
                    <input required placeholder="Period" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.period} onChange={e => setFormData({ ...formData, period: e.target.value })} />
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 uppercase font-bold px-1">Institution Logo {editItem && '(Leave empty to keep current)'}</span>
                        <input type="file" required={!editItem} onChange={e => setLogoFile(e.target.files?.[0] || null)} className="text-sm bg-slate-800 p-2 rounded-xl" />
                    </div>
                    <input placeholder="Thesis Title (Optional)" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.thesisTitle} onChange={e => setFormData({ ...formData, thesisTitle: e.target.value })} />
                    <input placeholder="Thesis DOI (Optional)" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.thesisDoi} onChange={e => setFormData({ ...formData, thesisDoi: e.target.value })} />
                    <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Education'}</button>
                </motion.form>
            )}

            <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                    {education.map(edu => (
                        <motion.div key={edu.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center group transition-all hover:border-teal-500/30">
                            <div className="flex items-center gap-4">
                                <img src={edu.logo} className="w-12 h-12 rounded-lg bg-white p-1 object-contain" alt="" />
                                <div>
                                    <h3 className="font-bold">{edu.degree}</h3>
                                    <p className="text-sm text-slate-400">{edu.institution} • {edu.period}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(edu)} className="p-2 text-slate-500 hover:text-teal-400"><PencilSquareIcon className="w-5 h-5" /></button>
                                <button onClick={() => handleDelete(edu.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
