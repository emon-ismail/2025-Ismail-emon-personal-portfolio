'use client'

import { useState, useEffect } from 'react'
import { db, serverTimestamp } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, addDoc } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { TrashIcon } from '@heroicons/react/24/outline'

interface ContactMessage {
    id: string
    name: string
    email: string
    message: string
    createdAt: any
}

export default function AdminDashboard() {
    const [messages, setMessages] = useState<ContactMessage[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'contacts'), orderBy('createdAt', 'desc')), (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage)))
            setLoading(false)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete message?')) {
            await deleteDoc(doc(db, 'contacts', id))
        }
    }

    const seedDatabase = async () => {
        if (!window.confirm('This will seed the database with initial portfolio data. Continue?')) return;
        try {
            // Seed Education
            await addDoc(collection(db, 'education'), { degree: "Bachelor of Computer Science & Engineering", institution: "IIUC", period: "2019 – 2024", logo: "/iiuclogo.png", thesisTitle: "The Role of Machine Learning in Increased Cyberbullying Claims", thesisDoi: "10.13140/RG.2.2.30114.95689", createdAt: serverTimestamp() });
            // Seed Projects
            const projectsData = [
                { title: "Quran-For-Ummah", description: "Comprehensive Quran & Hadith platform featuring Firebase auth, daily duas, and an interactive quiz system.", image: "/images/quran-for-ummah.png", technologies: ["React", "Firebase", "MongoDB", "Tailwind"], liveUrl: "https://quran-for-ummah.netlify.app/", tag: "STEAM Olympiad Finalist", order: 0 },
                { title: "Abacus Academy", description: "Ed-tech platform with role-based auth, course management, and integrated payment gateways.", image: "/images/abacus-academy.png", technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"], liveUrl: "https://new-abacus-academy.web.app/", order: 1 },
                { title: "LifeLink Bangladesh", description: "A blood donor bridge for recipients in Bangladesh. My Sadqaye Jariah—a dream to ensure no one suffers due to a lack of blood.", image: "/images/lifelinkbd.png", technologies: ["Next.js", "Firebase", "Real-time DB", "SEO"], liveUrl: "https://lifelinkbd.com/", tag: "Social Initiative", order: 2 },
                { title: "ZiiZii Island", description: "Entertainment center website with modular components and optimized responsiveness.", image: "/images/ziizii-island.png", technologies: ["HTML5", "Bootstrap 5", "JS", "AOS"], liveUrl: "https://ziiziiisland.com/", order: 3 }
            ];
            for (const p of projectsData) await addDoc(collection(db, 'projects'), { ...p, createdAt: serverTimestamp() });
            // Seed Videos
            await addDoc(collection(db, 'videos'), { title: "YouTube Introduction", url: "https://www.youtube.com/embed/UnVjVB7BzRg", type: "16:9", createdAt: serverTimestamp() });
            await addDoc(collection(db, 'videos'), { title: "Quick Tips Short", url: "https://www.youtube.com/embed/9vIo183jceg", type: "9:16", createdAt: serverTimestamp() });
            // Seed Certificates
            const certs = [
                { title: "STEAM Olympiad Finalist", issuer: "National STEAM Olympiad", desc: "5th Place in National Competition", img: "/certificate/STEAM-OLYMPIAD-FINALIST.jpg", tag: "National Honor" },
                { title: "NASA Space Apps", issuer: "NASA", desc: "Virtual Round Selection", img: "/certificate/NASA-Space-Apps-Challenge-1.png", tag: "Global Competition" },
                { title: "SEO Certification", issuer: "Advanced SEO Hub", desc: "Search Engine Optimization Mastery", img: "/certificate/Mohammad-Ismail-Emon-Seo_Certificate.jpg", tag: "Professional" },
                { title: "Meta Ads Mastery", issuer: "Meta (Facebook)", desc: "Advertising & Campaign Management", img: "/certificate/meta-ads.jpeg", tag: "Professional" },
                { title: "Full Stack Development", issuer: "Web Development Hub", desc: "Full Stack Implementation", img: "/certificate/Web-development.jpeg", tag: "Engineering" },
                { title: "Chemistry Olympiad", issuer: "Bangladesh Chemistry Society", desc: "Preliminary Round Qualifier", img: "/certificate/chemistry-olympiad.jpg", tag: "STEM Honor" }
            ];
            for (const c of certs) await addDoc(collection(db, 'certificates'), { ...c, createdAt: serverTimestamp() });
            alert('Database seeded successfully!');
        } catch (error) {
            console.error('Seeding failed:', error);
            alert('Failed to seed database.');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-poster uppercase tracking-tight text-white/50">Contact Messages ({messages.length})</h2>
                {/* Seed button hidden as requested, but function kept in code for emergency */}
            </div>

            <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                    {messages.map(msg => (
                        <motion.div key={msg.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-start gap-4 hover:border-teal-500/20 transition-all">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-xs font-bold text-teal-400">
                                    <span className="bg-teal-400/10 px-2 py-1 rounded">{msg.name}</span>
                                    <span className="text-slate-500">{msg.email}</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed">{msg.message}</p>
                            </div>
                            <button onClick={() => handleDelete(msg.id)} className="p-2 text-slate-500 hover:text-red-500 transition-colors"><TrashIcon className="w-5 h-5" /></button>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {messages.length === 0 && !loading && <div className="text-center py-20 text-slate-500 italic bg-slate-900/20 rounded-[2.5rem] border border-dashed border-slate-800">No messages found</div>}
            </div>
        </div>
    )
}
