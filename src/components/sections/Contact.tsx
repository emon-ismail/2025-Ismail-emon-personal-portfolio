'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            return
        }

        setLoading(true)
        try {
            const response = await emailjs.send(
                'service_luzs8ns',
                'template_m0qhmfg',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: 'Contact Form Message',
                    message: formData.message,
                    phone: '',
                    company: '',
                    to_name: 'Mohammad Ismail Emon',
                    reply_to: formData.email,
                },
                'ZGVGuwI76m9UvhoWk'
            )

            if (response.status === 200) {
                toast.success('Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
            } else {
                throw new Error(`Unexpected response status: ${response.status}`)
            }
        } catch (error) {
            console.error('EmailJS Error Details:', error)

            // Fallback to mailto
            const subject = `Contact Form Message from ${formData.name}`
            const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`.trim()

            const mailtoLink = `mailto:emonismail44@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.location.href = mailtoLink

            toast.info('Opening email client...', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        } finally {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            setLoading(false)
        }
    }

    return (
        <article id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/5 dark:bg-teal-500/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 dark:bg-slate-800/50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Connect</p>
                    <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Get In Touch</h2>
                    <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-lg">
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:emonismail44@gmail.com" className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                                        <EnvelopeIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">emonismail44@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+8801628692798" className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                                        <PhoneIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">+880 1628692798</p>
                                    </div>
                                </a>

                                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mr-4">
                                        <MapPinIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-medium">Chattogram, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Connect Socially</p>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:shadow-lg transition-all duration-300">
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://github.com/emon-ismail" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#181717] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-lg transition-all duration-300">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.facebook.com/ismail.emon.180" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:shadow-lg transition-all duration-300">
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.behance.net/emon44" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#1769ff] hover:border-[#1769ff]/30 hover:shadow-lg transition-all duration-300">
                                        <FaBehance className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 shadow-xl p-8 lg:p-10 rounded-[2rem]">
                            <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                            Name <span className="text-teal-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                            Email <span className="text-teal-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Message <span className="text-teal-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </article>
    )
}
