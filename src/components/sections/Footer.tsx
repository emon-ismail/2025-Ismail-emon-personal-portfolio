'use client'

import { motion } from 'framer-motion'
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 border-t border-slate-800/50 py-12 relative overflow-hidden">
            {/* subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100px] bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="font-poster text-2xl text-white uppercase tracking-tighter mb-2">
                            Mohammad <span className="text-teal-500">Ismail</span> Emon
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Digital Ops Manager & Software Engineer</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {[
                            { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mohammad-ismail-emon-b40190220/" },
                            { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/emon-ismail" },
                            { icon: <FaFacebook className="w-5 h-5" />, href: "https://www.facebook.com/ismail.emon.180" },
                            { icon: <FaBehance className="w-5 h-5" />, href: "https://www.behance.net/emon44" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                            © {currentYear} All Rights Reserved
                        </p>
                        <p className="text-slate-600 text-[10px] font-mono uppercase">
                            Designed & Built with <span className="text-red-500">❤</span> by Emon
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
