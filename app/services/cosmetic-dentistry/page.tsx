"use client"

import { ServicePageLayout } from "../layout-template"

export default function CosmeticPage() {
    return (
        <ServicePageLayout
            title="Cosmetic Dentistry"
            subtitle="Transform your smile and boost your confidence with our custom aesthetic treatments."
            heroImage="/assests/client-10.jpeg"
            overview="Cosmetic dentistry is art meeting science. Whether you want to fix a chipped tooth, close a gap, or get a complete smile makeover, Dr. Poonam Bambarkar specializes in designing smiles that look naturally beautiful, not fake. We offer a range of treatments from professional whitening to porcelain veneers."
            benefits={[
                "Custom Smile Design based on your facial features",
                "Minimally invasive options available",
                "Long-lasting, stain-resistant materials",
                "Boost your self-esteem instantly"
            ]}
            process={[
                {
                    title: "Consultation",
                    desc: "We discuss your goals and take digital photos/scans to analyze your current smile."
                },
                {
                    title: "Digital Design",
                    desc: "We plan your new smile digitally so you can see the potential result before we touch your teeth."
                },
                {
                    title: "Transformation",
                    desc: "We carefully execute the treatment plan, often in just 1-2 visits, revealing your new smile."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "What is a Smile Makeover?",
                    content: "A smile makeover is a combination of cosmetic procedures (like veneers, whitening, or bonding) tailored to give you your dream smile."
                },
                {
                    id: "2",
                    trigger: "How long does teeth whitening last?",
                    content: "Professional whitening can last from 6 months to 2 years, depending on your diet and oral hygiene. We provide maintenance tips to keep it bright."
                },
                {
                    id: "3",
                    trigger: "Are veneers permanent?",
                    content: "Veneers are a long-term solution that can last 10-15 years or more with proper care. They are resistant to staining and very durable."
                }
            ]}
        />
    )
}
