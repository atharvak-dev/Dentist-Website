"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Check, Phone, Calendar, ArrowRight, LucideIcon } from "lucide-react"

interface ServicePageProps {
    title: string
    subtitle: string
    heroImage: string
    overview: string
    benefits: string[]
    process: { title: string; desc: string }[]
    faqs: { id: string; trigger: string; content: string }[]
    ctaTitle?: string
    ctaDesc?: string
    imageAspect?: string
    imageFit?: "cover" | "contain"
}

export function ServicePageLayout({
    title,
    subtitle,
    heroImage,
    overview,
    benefits,
    process,
    faqs,
    ctaTitle = "Ready to Schedule?",
    ctaDesc = "Book your appointment today and take the first step towards a healthier smile.",
    imageAspect = "aspect-[4/3]",
    imageFit = "cover"
}: ServicePageProps) {
    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 pt-20">

                {/* Hero Section */}
                <section className="relative bg-teal-50/50 py-8 lg:py-12 overflow-hidden">
                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-4 py-2 rounded-full bg-dental-teal/10 text-dental-teal text-sm font-bold uppercase tracking-wider mb-6">
                                    Specialized Care
                                </div>
                                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-dental-charcoal mb-6 leading-[1.1]">
                                    {title}
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
                                    {subtitle}
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg" className="rounded-full bg-dental-teal text-white hover:bg-teal-700 h-14 px-8 text-lg" asChild>
                                        <Link href="/contact">Book Consultation</Link>
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`relative ${imageAspect} rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white`}
                            >
                                <Image
                                    src={heroImage}
                                    alt={title}
                                    fill
                                    className={`object-${imageFit}`}
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Overview & Benefits */}
                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div>
                                <SectionHeader label="Overview" title="Why Choose This Treatment?" />
                                <div className="prose prose-lg text-slate-600">
                                    <p>{overview}</p>
                                </div>
                            </div>

                            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                                <h3 className="font-display text-2xl font-bold text-dental-charcoal mb-6">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <div className="w-6 h-6 rounded-full bg-dental-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-dental-teal" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-24 bg-dental-charcoal text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-900/20" />
                    <div className="container px-4 md:px-6 relative z-10">
                        <SectionHeader light label="The Process" title="What to Expect" center subtitle="We value transparency. Here is exactly what happens during your visit." />

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {process.map((step, i) => (
                                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="text-6xl font-display font-medium text-dental-teal/30 mb-4">{`0${i + 1}`}</div>
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-24 bg-white">
                    <div className="container px-4 md:px-6 max-w-4xl">
                        <SectionHeader center label="FAQ" title="Common Questions" />
                        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                            <Accordion items={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-pediatric-cream/30">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-dental-charcoal mb-6">{ctaTitle}</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">{ctaDesc}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-dental-teal hover:bg-teal-700" asChild>
                                <Link href="/contact">Book Now</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg" asChild>
                                <Link href="tel:+918237156777">
                                    <Phone className="w-5 h-5 mr-2" />
                                    82371 56777
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
