'use client'

import { useState, useEffect } from 'react'
import { auth, googleProvider } from '@/lib/firebase'
import { signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth'
import { motion } from 'framer-motion'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ADMIN_EMAIL = 'emonismail44@gmail.com'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [authLoading, setAuthLoading] = useState(true)
    const pathname = usePathname()

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

    const handleLogout = () => signOut(auth)

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

    const navItems = [
        { href: '/admin', label: 'Dashboard' },
        { href: '/admin/education', label: 'Education' },
        { href: '/admin/projects', label: 'Projects' },
        { href: '/admin/videos', label: 'Videos' },
        { href: '/admin/certificates', label: 'Certificates' },
    ]

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
                    <button onClick={handleLogout} className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 font-bold hover:text-red-500 transition-all text-sm">Sign Out</button>
                </header>

                <nav className="flex flex-wrap gap-2 mb-8 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all ${pathname === item.href ? 'bg-teal-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <main>{children}</main>
            </div>
        </div>
    )
}
