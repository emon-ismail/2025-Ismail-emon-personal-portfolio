'use client'

import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function Experience() {
    return (
        <article id="experience" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="container relative z-10 px-4 mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-teal-600 dark:text-teal-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Career Journey</p>
                    <h2 className="font-poster text-4xl md:text-6xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">Work Experience</h2>
                    <div className="mx-auto mt-4 w-16 h-1 bg-teal-500 rounded-full" />
                </div>

                <div className="space-y-8">
                    {/* Role 1 */}
                    <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm p-8 rounded-3xl transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase tracking-tight mb-2">
                                    Digital Ops Manager | Marketing Automation & SEO
                                </h3>
                                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                                    <BriefcaseIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <span className="font-bold text-teal-700 dark:text-teal-300">Oasis Outfit (ZiiZii Island)</span>
                                </p>
                            </div>
                            <div className="inline-flex items-center self-start md:self-auto bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600/50 text-sm font-semibold text-slate-600 dark:text-slate-300">
                                Nov 2023 - Present
                            </div>
                        </div>

                        <ul className="grid gap-3 text-slate-600 dark:text-slate-400">
                            {[
                                "Automated payroll processing for 120+ employees using Excel and RAMS software, cutting reporting time by 30%.",
                                "Ranked top 3 on Google Search for high-volume branded keywords through strategic SEO implementation.",
                                "Led Facebook Ads, product posting, and campaign performance tracking via GA4, GTM, and Facebook Pixel.",
                                "Developed Messenger and comment auto-reply bots with keyword triggers, improving customer engagement."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Role 2 */}
                    <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm p-8 rounded-3xl transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-poster text-slate-900 dark:text-slate-100 uppercase tracking-tight mb-2">
                                    Founder & Entrepreneur
                                </h3>
                                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                                    <BriefcaseIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <span className="font-bold text-teal-700 dark:text-teal-300">Organic Fruitopia</span>
                                </p>
                            </div>
                            <div className="inline-flex items-center self-start md:self-auto bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600/50 text-sm font-semibold text-slate-600 dark:text-slate-300">
                                Jun 2023 - Present
                            </div>
                        </div>

                        <ul className="grid gap-3 text-slate-600 dark:text-slate-400">
                            {[
                                "Founded a seasonal mango business selling 3+ tons of premium-quality mango directly to consumers.",
                                "Generated BDT 40,000 profit in one season by optimizing sourcing, pricing, and marketing.",
                                "Managed end-to-end operations: procurement, logistics, customer service, and digital engagement.",
                                "Executed targeted social media campaigns to attract health-conscious customers.",
                                "Gained hands-on experience in entrepreneurship, e-commerce, and supply chain management."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}
