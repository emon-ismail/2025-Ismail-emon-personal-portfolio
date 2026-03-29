'use client'

import { useState, useEffect } from 'react'
import { db, auth, storage, googleProvider } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    TrashIcon, 
    EnvelopeIcon, 
    UserIcon, 
    ClockIcon, 
    LockClosedIcon, 
    AcademicCapIcon, 
    BriefcaseIcon, 
    VideoCameraIcon, 
    TrophyIcon,
    PlusIcon,
    PencilSquareIcon,
    ArrowUpTrayIcon
} from '@heroicons/react/24/outline'

const ADMIN_EMAIL = 'emonismail44@gmail.com'
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
        if (result.success) {
            return result.data.url
        } else {
            throw new Error('ImgBB Upload Failed')
        }
    } catch (error) {
        console.error('ImgBB error:', error)
        return ''
    }
}

interface ContactMessage {
    id: string
    name: string
    email: string
    message: string
    createdAt: any
}

interface Education {
    id: string
    degree: string
    institution: string
    period: string
    logo: string
    thesisTitle?: string
    thesisDoi?: string
    createdAt?: any
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
    createdAt?: any
}

interface Video {
    id: string
    title: string
    url: string
    type: '16:9' | '9:16'
    createdAt?: any
}

interface Certificate {
    id: string
    title: string
    issuer: string
    desc: string
    img: string
    tag: string
    createdAt?: any
}

type Tab = 'messages' | 'education' | 'projects' | 'videos' | 'certificates'

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<Tab>('messages')
    const [messages, setMessages] = useState<ContactMessage[]>([])
    const [education, setEducation] = useState<Education[]>([])
    const [projects, setProjects] = useState<Project[]>([])
    const [videos, setVideos] = useState<Video[]>([])
    const [certificates, setCertificates] = useState<Certificate[]>([])
    
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [authLoading, setAuthLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    // Form states
    const [showForm, setShowForm] = useState(false)
    const [editId, setEditId] = useState<string | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email === ADMIN_EMAIL) {
                setUser(currentUser)
            } else {
                setUser(null)
                if (currentUser) signOut(auth)
            }
            setAuthLoading(false)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (!user) return

        const unsubMessages = onSnapshot(query(collection(db, 'contacts'), orderBy('createdAt', 'desc')), (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage)))
        })

        const unsubEducation = onSnapshot(query(collection(db, 'education'), orderBy('createdAt', 'desc')), (snapshot) => {
            setEducation(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Education)))
        })

        const unsubProjects = onSnapshot(query(collection(db, 'projects'), orderBy('order', 'asc')), (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project)))
        })

        const unsubVideos = onSnapshot(query(collection(db, 'videos'), orderBy('createdAt', 'desc')), (snapshot) => {
            setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Video)))
        })

        const unsubCertificates = onSnapshot(query(collection(db, 'certificates'), orderBy('createdAt', 'desc')), (snapshot) => {
            setCertificates(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Certificate)))
        })

        setLoading(false)

        return () => {
            unsubMessages()
            unsubEducation()
            unsubProjects()
            unsubVideos()
            unsubCertificates()
        }
    }, [user])

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            if (result.user.email !== ADMIN_EMAIL) {
                await signOut(auth)
                alert('Access Denied')
            }
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    const seedDatabase = async () => {
        if (!window.confirm('This will seed the database with initial portfolio data. Continue?')) return;
        
        try {
            // Seed Education
            await addDoc(collection(db, 'education'), {
                degree: "Bachelor of Computer Science & Engineering",
                institution: "IIUC",
                period: "2019 – 2024",
                logo: "/iiuclogo.png",
                thesisTitle: "The Role of Machine Learning in Increased Cyberbullying Claims",
                thesisDoi: "10.13140/RG.2.2.30114.95689",
                createdAt: serverTimestamp()
            });

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

    const handleLogout = () => signOut(auth)

    const handleDelete = async (coll: string, id: string) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await deleteDoc(doc(db, coll, id))
        }
    }

    const handleFileUpload = async (file: File, folder: string) => {
        const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`)
        setUploading(true)
        try {
            await uploadBytes(storageRef, file)
            const url = await getDownloadURL(storageRef)
            setUploading(false)
            return url
        } catch (error) {
            console.error('Upload failed:', error)
            setUploading(false)
            return ''
        }
    }

    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-950"><div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" /></div>

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md bg-slate-900 rounded-[2.5rem] border border-slate-800 p-10 shadow-2xl text-center">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <LockClosedIcon className="w-8 h-8 text-teal-500" />
                    </div>
                    <h1 className="font-poster text-3xl uppercase text-white mb-2">Admin Login</h1>
                    <p className="text-slate-400 mb-8">Secure access only.</p>
                    <button onClick={handleLogin} className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-slate-900 font-black uppercase tracking-widest text-xs rounded-2xl transition-all flex items-center justify-center gap-3">
                        Login with Google
                    </button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950 p-6 md:p-12 text-slate-100">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <img src={user.photoURL || ''} className="w-16 h-16 rounded-2xl border-2 border-teal-500 p-0.5" alt="Admin" />
                        <div>
                            <h1 className="font-poster text-3xl md:text-5xl uppercase tracking-tighter">Admin Dashboard</h1>
                            <p className="text-slate-400">Welcome, {user.displayName}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={seedDatabase}
                            className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 font-bold hover:bg-teal-500/20 transition-all text-sm"
                        >
                            Seed Initial Data
                        </button>
                        <button onClick={handleLogout} className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 font-bold hover:text-red-500 transition-all text-sm">Sign Out</button>
                    </div>
                </header>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800">
                    {[
                        { id: 'messages', label: 'Messages', icon: EnvelopeIcon },
                        { id: 'education', label: 'Education', icon: AcademicCapIcon },
                        { id: 'projects', label: 'Projects', icon: BriefcaseIcon },
                        { id: 'videos', label: 'Videos', icon: VideoCameraIcon },
                        { id: 'certificates', label: 'Certificates', icon: TrophyIcon },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id as Tab); setShowForm(false); setEditId(null); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all ${activeTab === tab.id ? 'bg-teal-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content */}
                <div className="space-y-6">
                    {activeTab !== 'messages' && (
                        <button 
                            onClick={() => setShowForm(!showForm)}
                            className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 text-teal-400 rounded-xl font-bold uppercase text-xs border border-teal-500/20 hover:bg-teal-500/20 transition-all"
                        >
                            {showForm ? 'Cancel' : <><PlusIcon className="w-4 h-4" /> Add New</>}
                        </button>
                    )}

                    {showForm && activeTab === 'education' && <EducationForm onSuccess={() => setShowForm(false)} />}
                    {showForm && activeTab === 'projects' && <ProjectForm onSuccess={() => setShowForm(false)} projectsCount={projects.length} />}
                    {showForm && activeTab === 'videos' && <VideoForm onSuccess={() => setShowForm(false)} />}
                    {showForm && activeTab === 'certificates' && <CertificateForm onSuccess={() => setShowForm(false)} />}

                    <div className="grid gap-4">
                        <AnimatePresence mode="popLayout">
                            {activeTab === 'messages' && messages.map(msg => (
                                <motion.div key={msg.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-start gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-xs font-bold text-teal-400">
                                            <span className="bg-teal-400/10 px-2 py-1 rounded">{msg.name}</span>
                                            <span className="text-slate-500">{msg.email}</span>
                                        </div>
                                        <p className="text-slate-300">{msg.message}</p>
                                    </div>
                                    <button onClick={() => handleDelete('contacts', msg.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </motion.div>
                            ))}

                            {activeTab === 'education' && education.map(edu => (
                                <motion.div key={edu.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={edu.logo} className="w-12 h-12 rounded-lg bg-white p-1 object-contain" alt="" />
                                        <div>
                                            <h3 className="font-bold">{edu.degree}</h3>
                                            <p className="text-sm text-slate-400">{edu.institution} • {edu.period}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete('education', edu.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </motion.div>
                            ))}

                            {activeTab === 'projects' && projects.map(project => (
                                <motion.div key={project.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={project.image} className="w-20 h-12 rounded-lg object-cover" alt="" />
                                        <div>
                                            <h3 className="font-bold">{project.title}</h3>
                                            <p className="text-sm text-slate-400">{project.technologies.join(', ')}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete('projects', project.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </motion.div>
                            ))}

                            {activeTab === 'videos' && videos.map(video => (
                                <motion.div key={video.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold">{video.title}</h3>
                                        <p className="text-sm text-teal-400">{video.type} Aspect Ratio</p>
                                    </div>
                                    <button onClick={() => handleDelete('videos', video.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </motion.div>
                            ))}

                            {activeTab === 'certificates' && certificates.map(cert => (
                                <motion.div key={cert.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={cert.img} className="w-12 h-12 rounded-lg object-contain bg-slate-800" alt="" />
                                        <div>
                                            <h3 className="font-bold">{cert.title}</h3>
                                            <p className="text-sm text-slate-400">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete('certificates', cert.id)} className="p-2 text-slate-500 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Form Components
function EducationForm({ onSuccess }: { onSuccess: () => void }) {
    const [formData, setFormData] = useState({ degree: '', institution: '', period: '', thesisTitle: '', thesisDoi: '' })
    const [logoFile, setLogoFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        let logoUrl = ''
        if (logoFile) {
            logoUrl = await uploadToImgBB(logoFile)
        }
        await addDoc(collection(db, 'education'), { ...formData, logo: logoUrl, createdAt: serverTimestamp() })
        setLoading(false)
        onSuccess()
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Degree" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.degree} onChange={e => setFormData({ ...formData, degree: e.target.value })} />
            <input required placeholder="Institution" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.institution} onChange={e => setFormData({ ...formData, institution: e.target.value })} />
            <input required placeholder="Period (e.g. 2019 - 2024)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.period} onChange={e => setFormData({ ...formData, period: e.target.value })} />
            <input type="file" required onChange={e => setLogoFile(e.target.files?.[0] || null)} className="text-sm" />
            <input placeholder="Thesis Title (Optional)" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.thesisTitle} onChange={e => setFormData({ ...formData, thesisTitle: e.target.value })} />
            <input placeholder="Thesis DOI (Optional)" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.thesisDoi} onChange={e => setFormData({ ...formData, thesisDoi: e.target.value })} />
            <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Education'}</button>
        </form>
    )
}

function ProjectForm({ onSuccess, projectsCount }: { onSuccess: () => void, projectsCount: number }) {
    const [formData, setFormData] = useState({ title: '', description: '', technologies: '', liveUrl: '', tag: '' })
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        let imageUrl = ''
        if (imageFile) {
            imageUrl = await uploadToImgBB(imageFile)
        }
        await addDoc(collection(db, 'projects'), { 
            ...formData, 
            technologies: formData.technologies.split(',').map(t => t.trim()), 
            image: imageUrl, 
            order: projectsCount,
            createdAt: serverTimestamp() 
        })
        setLoading(false)
        onSuccess()
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Project Title" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <input placeholder="Tag (e.g. Featured)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} />
            <textarea required placeholder="Description" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2 h-32" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
            <input required placeholder="Technologies (comma separated)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.technologies} onChange={e => setFormData({ ...formData, technologies: e.target.value })} />
            <input required placeholder="Live URL" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.liveUrl} onChange={e => setFormData({ ...formData, liveUrl: e.target.value })} />
            <div className="md:col-span-2 flex items-center gap-4">
                <span className="text-sm text-slate-400">Project Image:</span>
                <input type="file" required onChange={e => setImageFile(e.target.files?.[0] || null)} className="text-sm" />
            </div>
            <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Project'}</button>
        </form>
    )
}

function VideoForm({ onSuccess }: { onSuccess: () => void }) {
    const [formData, setFormData] = useState({ title: '', url: '', type: '16:9' as '16:9' | '9:16' })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Convert YouTube URL to embed URL if needed
        let embedUrl = formData.url
        if (embedUrl.includes('youtube.com/watch?v=')) {
            embedUrl = embedUrl.replace('watch?v=', 'embed/')
        } else if (embedUrl.includes('youtu.be/')) {
            embedUrl = embedUrl.replace('youtu.be/', 'youtube.com/embed/')
        }
        
        await addDoc(collection(db, 'videos'), { ...formData, url: embedUrl, createdAt: serverTimestamp() })
        setLoading(false)
        onSuccess()
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Video Title" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <select className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value as any })}>
                <option value="16:9">Landscape (16:9)</option>
                <option value="9:16">Portrait / Reel (9:16)</option>
            </select>
            <input required placeholder="YouTube URL" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2" value={formData.url} onChange={e => setFormData({ ...formData, url: e.target.value })} />
            <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Video'}</button>
        </form>
    )
}

function CertificateForm({ onSuccess }: { onSuccess: () => void }) {
    const [formData, setFormData] = useState({ title: '', issuer: '', desc: '', tag: '' })
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        let imageUrl = ''
        if (imageFile) {
            imageUrl = await uploadToImgBB(imageFile)
        }
        await addDoc(collection(db, 'certificates'), { ...formData, img: imageUrl, createdAt: serverTimestamp() })
        setLoading(false)
        onSuccess()
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Certificate Title" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <input required placeholder="Issuer" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.issuer} onChange={e => setFormData({ ...formData, issuer: e.target.value })} />
            <input placeholder="Tag (e.g. Professional)" className="bg-slate-800 border-slate-700 rounded-xl p-3" value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} />
            <input type="file" required onChange={e => setImageFile(e.target.files?.[0] || null)} className="text-sm" />
            <textarea required placeholder="Brief Description" className="bg-slate-800 border-slate-700 rounded-xl p-3 md:col-span-2 h-24" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} />
            <button disabled={loading} className="md:col-span-2 bg-teal-500 text-slate-900 py-3 rounded-xl font-bold uppercase">{loading ? 'Saving...' : 'Save Certificate'}</button>
        </form>
    )
}

