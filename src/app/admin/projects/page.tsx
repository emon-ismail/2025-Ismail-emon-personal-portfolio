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

interface Project {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    tag?: string
    order: number
}

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState<Project[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editItem, setEditItem] = useState<Project | null>(null)
    const [formData, setFormData] = useState({ title: '', description: '', technologies: '', liveUrl: '', tag: '' })
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'projects'), orderBy('order', 'asc')), (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project)))
        })
        return () => unsub()
    }, [])

    const handleEdit = (project: Project) => {
        setEditItem(project)
        setFormData({ title: project.title, description: project.description, technologies: project.technologies.join(', '), liveUrl: project.liveUrl, tag: project.tag || '' })
        setShowForm(true)
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this project?')) await deleteDoc(doc(db, 'projects', id))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        let imageUrl = editItem?.image || ''
        if (imageFile) imageUrl = await uploadToImgBB(imageFile)

        const data = { 
            ...formData, 
            technologies: formData.technologies.split(',').map(t => t.trim()), 
            image: imageUrl, 
            updatedAt: serverTimestamp() 
        }

        if (editItem) {
            await updateDoc(doc(db, 'projects', editItem.id), data)
        } else {
            await addDoc(collection(db, 'projects'), { ...data, order: projects.length, createdAt: serverTimestamp() })
        }

        setLoading(false)
        setShowForm(false)
        setEditItem(null)
        setFormData({ title: '', description: '', technologies: '', liveUrl: '', tag: '' })
        setImageFile(null)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-poster uppercase tracking-tight">Project Management</h2>
                <button 
                    onClick={() => { setShowForm(!showForm); setEditItem(null); setFormData({ title: '', description: '', technologies: '', liveUrl: '', tag: '' }); }}
                    className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 text-teal-400 rounded-xl font-bold uppercase text-xs border border-teal-500/20 hover:bg-teal-500/20 transition-all"
                >
                    {showForm ? 'Cancel' : <><PlusIcon className="w-4 h-4" /> Add Project</>}
                </button>
            </div>

            {showForm && (
                <motion.form initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required placeholder="Project Title" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <input placeholder="Tag (e.g. Featured)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} />
                    <textarea required placeholder="Description" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2 h-32" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                    <input required placeholder="Technologies (comma separated)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.technologies} onChange={e => setFormData({ ...formData, technologies: e.target.value })} />
                    <input required placeholder="Live URL" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.liveUrl} onChange={e => setFormData({ ...formData, liveUrl: e.target.value })} />
                    <div className="md:col-span-2 flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 uppercase font-bold px-1">Project Image {editItem && '(Leave empty to keep current)'}</span>
                        <input type="file" required={!editItem} onChange={e => setImageFile(e.target.files?.[0] || null)} className="text-sm bg-slate-800 p-2 rounded-xl" />
                    </div>
                    <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Project'}</button>
                </motion.form>
            )}

            <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                    {projects.map(project => (
                        <motion.div key={project.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center group transition-all hover:border-teal-500/30">
                            <div className="flex items-center gap-4">
                                <img src={project.image} className="w-20 h-12 rounded-lg object-cover bg-slate-800" alt="" />
                                <div>
                                    <h3 className="font-bold">{project.title}</h3>
                                    <p className="text-sm text-slate-400">{project.technologies.join(', ')}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(project)} className="p-2 text-slate-500 hover:text-teal-400"><PencilSquareIcon className="w-5 h-5" /></button>
                                <button onClick={() => handleDelete(project.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
