'use client'

import { useState, useEffect } from 'react'
import { db, auth, googleProvider } from '@/lib/firebase'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth'
import { motion, AnimatePresence } from 'framer-motion'
import { TrashIcon, EnvelopeIcon, UserIcon, ClockIcon, LockClosedIcon } from '@heroicons/react/24/outline'

interface ContactMessage {
    id: string
    name: string
    email: string
    message: string
    createdAt: any
}

const ADMIN_EMAIL = 'emonismail44@gmail.com'

export default function AdminDashboard() {
    const [messages, setMessages] = useState<ContactMessage[]>([])
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [authLoading, setAuthLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email === ADMIN_EMAIL) {
                setUser(currentUser)
            } else {
                setUser(null)
                if (currentUser) {
                    signOut(auth)
                }
            }
            setAuthLoading(false)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (!user) return

        setLoading(true)
        const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as ContactMessage[]
            setMessages(msgs)
            setLoading(false)
        }, (error) => {
            console.error("Firestore query failed:", error)
            const qFallback = query(collection(db, 'contacts'))
            onSnapshot(qFallback, (snapshot) => {
                const msgs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as ContactMessage[]
                msgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
                setMessages(msgs)
                setLoading(false)
            })
        })

        return () => unsubscribe()
    }, [user])

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            if (result.user.email !== ADMIN_EMAIL) {
                await signOut(auth)
                alert('Access Denied: You are not an administrator.')
            }
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    const handleLogout = () => signOut(auth)

    const deleteMessage = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            await deleteDoc(doc(db, 'contacts', id))
        }
    }

    if (authLoading) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 shadow-2xl"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <LockClosedIcon className="w-8 h-8 text-teal-500" />
                        </div>
                        <h1 className="font-poster text-3xl uppercase tracking-tight text-slate-900 dark:text-white mb-2 text-center">Admin Login</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-center mb-8">Secure access for administrator only.</p>

                        <button
                            onClick={handleLogin}
                            className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-slate-900 font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-lg shadow-teal-500/20 active:scale-95 flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.63l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Login with Google
                        </button>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <img src={user.photoURL || ''} className="w-16 h-16 rounded-2xl border-2 border-teal-500 p-0.5" alt="Admin" />
                        <div>
                            <h1 className="font-poster text-3xl md:text-5xl text-slate-900 dark:text-white uppercase tracking-tighter">Admin Dashboard</h1>
                            <p className="text-slate-500 dark:text-slate-400">Welcome, {user.displayName} • {messages.length} Messages</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 font-bold hover:text-red-500 transition-all text-sm shadow-sm"
                    >
                        Sign Out
                    </button>
                </header>

                <div className="grid gap-6">
                    <AnimatePresence>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 hover:border-teal-500/30 transition-all shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-lg">
                                            <UserIcon className="w-4 h-4" />
                                            {msg.name}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                                            <EnvelopeIcon className="w-4 h-4" />
                                            {msg.email}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                                            <ClockIcon className="w-4 h-4" />
                                            {msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleString() : 'Just now'}
                                        </div>
                                    </div>
                                    <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                                </div>
                                <div className="flex flex-row md:flex-col gap-2">
                                    <a href={`mailto:${msg.email}`} className="p-4 bg-teal-500 text-slate-900 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-teal-500/10"><EnvelopeIcon className="w-5 h-5" /></a>
                                    <button onClick={() => deleteMessage(msg.id)} className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 rounded-2xl transition-all shadow-sm"><TrashIcon className="w-5 h-5" /></button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {messages.length === 0 && !loading && (
                        <div className="text-center py-24 bg-white dark:bg-slate-900/30 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
                            <EnvelopeIcon className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-400 dark:text-slate-600 font-medium">No messages found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
