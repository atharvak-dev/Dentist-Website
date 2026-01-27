"use client"

import { ServicePageLayout } from "../layout-template"

export default function PediatricPage() {
    return (
        <ServicePageLayout
            title="Pediatric Dentistry"
            subtitle="Gentle, fun, and fear-free dental care for your little ones. Building healthy habits for a lifetime."
            heroImage="/assests/children-1.png"
            imageAspect="aspect-square"
            overview="We specialize in treating children from infancy through adolescence. Dr. Poonam is trained in pediatric behavior management, meaning she knows how to make kids feel safe and even excited about the dentist. We focus on prevention, interceptive orthodontics, and creating a positive association with oral health."
            benefits={[
                "Fear-Free Environment designed for kids",
                "Focus on preventive care (Sealants, Fluoride)",
                "Habit breaking (Thumb sucking, Mouth breathing)",
                "Emergency care for dental trauma"
            ]}
            process={[
                {
                    title: "Meet & Greet",
                    desc: "We introduce your child to the team and the 'cool tools' in a non-threatening way."
                },
                {
                    title: "Gentle Exam",
                    desc: "We count their teeth and check for any early signs of cavities or alignment issues."
                },
                {
                    title: "Fun Education",
                    desc: "We teach them (and you) proper brushing techniques and diet tips for strong teeth."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "When should I bring my child for their first visit?",
                    content: "The ADA recommends the first visit by their first birthday or within 6 months of the first tooth erupting."
                },
                {
                    id: "2",
                    trigger: "How do you handle scared children?",
                    content: "We use the 'Tell-Show-Do' technique and positive reinforcement. We never force a child. Patience is our superpower."
                },
                {
                    id: "3",
                    trigger: "Are baby teeth really important?",
                    content: "Yes! They hold space for adult teeth and are crucial for chewing and speech development. Neglected baby teeth can cause pain and damage permanent teeth."
                }
            ]}
        />
    )
}
