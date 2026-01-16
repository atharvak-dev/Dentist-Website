"use client"

import React, { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
    ShieldCheck,
    Stethoscope,
    Heart,
    Users,
    Calendar,
    Award,
    Sparkles,
    Star,
    ArrowRight,
    Zap,
    TrendingUp,
    Smile,
    Microscope,
    Baby
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, type Variants } from "framer-motion"

export default function WhyUsPage() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    // Parallax effect for decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    } as any

    interface ServiceData {
        icon: React.ReactNode
        secondaryIcon?: React.ReactNode
        title: string
        description: string
        position: "left" | "right"
    }

    const services: ServiceData[] = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "15+ Years Expertise",
            description:
                "Led by Dr. Poonam Bambarkar, combining over a decade of clinical excellence with continuous learning in modern dentistry.",
            position: "left",
        },
        {
            icon: <Microscope className="w-6 h-6" />,
            title: "Modern Technology",
            description:
                "We utilize digital diagnostics, rotary endodontics, and systematic sterilization protocols to ensure safe and precise treatments.",
            position: "left",
        },
        {
            icon: <Baby className="w-6 h-6" />,
            title: "Family Friendly",
            description:
                "Our space is designed to reduce anxiety, especially for young children, providing a comfortable environment for the whole family.",
            position: "left",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Patient Centered",
            description:
                "We prioritize your comfort and safety. Our treatment plans are evidence-based and tailored to your specific oral health needs.",
            position: "right",
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Transparent & Safe",
            description:
                "Clear explanation of diagnosis, transparent pricing, and strict hygiene protocols are the pillars of our practice.",
            position: "right",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Long-term Health",
            description:
                "We focus not just on fixing immediate problems, but on preventative care to ensure healthy smiles for years to come.",
            position: "right",
        },
    ]

    const stats = [
        { icon: <Calendar />, value: 15, label: "Years Experience", suffix: "+" },
        { icon: <Users />, value: 5000, label: "Happy Patients", suffix: "+" },
        { icon: <Star />, value: 5, label: "Star Rating", suffix: ".0" },
        { icon: <ShieldCheck />, value: 100, label: "Safety Protocol", suffix: "%" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <section
                id="about-section"
                ref={sectionRef}
                className="flex-1 w-full py-24 px-4 bg-gradient-to-b from-slate-50 to-blue-50/30 text-slate-900 overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div className="flex flex-col items-center mb-12" variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <motion.span
                            className="text-primary font-bold tracking-wider uppercase mb-2 flex items-center gap-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Zap className="w-4 h-4" />
                            WHY CHOOSE US
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center text-slate-900">
                            The Dentistree <span className="text-primary">Difference</span>
                        </h2>
                        <motion.div
                            className="w-24 h-1.5 bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                    </motion.div>

                    <motion.p
                        className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-20 text-slate-600 leading-relaxed"
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Dentistree Dental Clinic provides complete family dentistry under one roof.
                        We blend trusted clinical expertise with a warm, sterilized environment to ensure
                        your dental journey is comfortable, safe, and effective.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Left Column */}
                        <div className="space-y-12">
                            {services
                                .filter((service) => service.position === "left")
                                .map((service, index) => (
                                    <ServiceItem
                                        key={`left-${index}`}
                                        icon={service.icon}
                                        secondaryIcon={service.secondaryIcon}
                                        title={service.title}
                                        description={service.description}
                                        variants={itemVariants}
                                        delay={index * 0.2}
                                        direction="left"
                                    />
                                ))}
                        </div>

                        {/* Center Image */}
                        <div className="flex justify-center items-center order-first md:order-none mb-12 md:mb-0">
                            <motion.div className="relative w-full max-w-sm" variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                                <motion.div
                                    className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                >
                                    <div className="relative aspect-[3/4]">
                                        {/* Using a dental-related placeholder or the same from user if appropriate, sticking to placeholder for now */}
                                        <img
                                            src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=800&width=600"
                                            alt="Modern Dental Clinic"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-center p-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.9 }}
                                    >
                                        <motion.button
                                            className="bg-white text-primary px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book Consultation <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </motion.div>
                                </motion.div>

                                {/* Decorative border accent */}
                                <motion.div
                                    className="absolute inset-0 border-4 border-primary/20 rounded-3xl -m-4 z-[-1]"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                ></motion.div>

                                {/* Floating bubbles */}
                                <motion.div
                                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                >
                                    <Sparkles className="w-8 h-8" />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12">
                            {services
                                .filter((service) => service.position === "right")
                                .map((service, index) => (
                                    <ServiceItem
                                        key={`right-${index}`}
                                        icon={service.icon}
                                        secondaryIcon={service.secondaryIcon}
                                        title={service.title}
                                        description={service.description}
                                        variants={itemVariants}
                                        delay={index * 0.2}
                                        direction="right"
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        ref={statsRef}
                        className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        animate={isStatsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {stats.map((stat, index) => (
                            <StatCounter
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                                delay={index * 0.1}
                            />
                        ))}
                    </motion.div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

interface ServiceItemProps {
    icon: React.ReactNode
    secondaryIcon?: React.ReactNode
    title: string
    description: string
    variants: Variants
    delay: number
    direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
    return (
        <motion.div
            className="flex flex-col group"
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="flex items-center gap-4 mb-3"
                initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                <motion.div
                    className="text-primary bg-primary/10 p-3 rounded-2xl transition-all duration-300 group-hover:bg-primary group-hover:text-white relative shadow-sm"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                >
                    {icon}
                    {secondaryIcon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
            </motion.div>
            <motion.p
                className="text-base text-slate-600 leading-relaxed pl-16 opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.4 }}
            >
                {description}
            </motion.p>
        </motion.div>
    )
}

interface StatCounterProps {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 10,
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(value)
            setHasAnimated(true)
        } else if (!isInView && hasAnimated) {
            springValue.set(0)
            setHasAnimated(false)
        }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

    return (
        <motion.div
            className="bg-white p-6 rounded-2xl flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 border border-slate-100"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay },
                },
            } as any}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-4xl font-bold text-slate-900 flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span className="text-primary">{suffix}</span>
            </motion.div>
            <p className="text-slate-500 font-medium mt-2">{label}</p>
        </motion.div>
    )
}
