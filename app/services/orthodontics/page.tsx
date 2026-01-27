"use client"

import { ServicePageLayout } from "../layout-template"

export default function OrthodonticsPage() {
    return (
        <ServicePageLayout
            title="Orthodontics & Aligners"
            subtitle="Straighten your teeth discreetly with Invisalign or traditional braces. Precision alignment for all ages."
            heroImage="/assests/invisible-braces.jpg"
            overview="A straight smile is a healthy smile. Correcting misalignment isn't just about looks; it improves your bite function and makes teeth easier to clean. We offer both traditional metal/ceramic braces for complex cases and clear aligners (Invisalign) for a virtually invisible treatment experience."
            benefits={[
                "Invisible options for adults and teens",
                "Improve bite function and jaw health",
                "Easier cleaning -> Fewer cavities",
                "Boost confidence with a perfect smile"
            ]}
            process={[
                {
                    title: "Digital Scan",
                    desc: "We take a 3D scan of your teeth to analyze the crowding or spacing issues accurately."
                },
                {
                    title: "Treatment Plan",
                    desc: "We show you a digital simulation of how your teeth will move and what the final result will look like."
                },
                {
                    title: "Active Alignment",
                    desc: "Whether braces or aligners, we monitor your progress every 6-8 weeks until your smile is perfect."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Is there an age limit for braces?",
                    content: "No! We treat many adults. As long as your gums and bone are healthy, you can straighten your teeth at any age."
                },
                {
                    id: "2",
                    trigger: "How long does treatment take?",
                    content: "It varies by case complexity, but typically ranges from 12 to 24 months. Simple cosmetic alignment can be faster."
                },
                {
                    id: "3",
                    trigger: "Will I need to wear a retainer?",
                    content: "Yes. Retention is lifetime. Without a retainer, teeth naturally drift back. We provide comfortable clear retainers to protect your investment."
                }
            ]}
        />
    )
}
