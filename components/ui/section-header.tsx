"use client"

import { motion } from "framer-motion"
import { Sparkles, Star } from "lucide-react"

interface SectionHeaderProps {
    label: string
    title: React.ReactNode
    subtitle?: string
    center?: boolean
    light?: boolean
    className?: string
}

export function SectionHeader({
    label,
    title,
    subtitle,
    center = false,
    light = false,
    className = ""
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${center ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 ${light
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-teal-50 text-dental-teal border border-teal-100"
                    } ${center ? "mx-auto" : ""}`}
            >
                {light ? <Star className="w-3 h-3 text-dental-gold" /> : <Sparkles className="w-3 h-3 text-dental-teal" />}
                {label}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-display text-4xl md:text-5xl font-medium leading-[1.1] mb-6 ${light ? "text-white" : "text-dental-charcoal"
                    }`}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`text-lg leading-relaxed ${light ? "text-white/80" : "text-slate-600"
                        }`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}
