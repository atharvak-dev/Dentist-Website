"use client"

import { ServicePageLayout } from "../layout-template"

export default function ImplantsPage() {
    return (
        <ServicePageLayout
            title="Dental Implants"
            subtitle="The permanent, natural-looking solution for missing teeth. Eat, smile, and live with confidence again."
            heroImage="/assests/client-6.png"
            overview="Dental implants are the gold standard for replacing missing teeth. Unlike dentures that can slip or bridges that require grinding down healthy teeth, implants are anchored directly into the jawbone, acting just like natural tooth roots. They provide a stable foundation for a crown, bridge, or denture, restoring 100% of your chewing ability."
            benefits={[
                "Permanent solution designed to last a lifetime",
                "Preserves jawbone health and facial structure",
                "Looks, feels, and functions like a natural tooth",
                "No damage to adjacent healthy teeth"
            ]}
            process={[
                {
                    title: "3D Planning",
                    desc: "We use CBCT scans to precisely plan the placement of the implant for maximum stability."
                },
                {
                    title: "Placement",
                    desc: "The titanium implant is gently placed in the jawbone. This is usually a quick, painless procedure."
                },
                {
                    title: "Restoration",
                    desc: "After healing, we attach a custom-made crown that perfectly matches your natural teeth."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Are dental implants safe?",
                    content: "Yes. Implants have been used for decades with a success rate of over 95%. They are made of biocompatible titanium."
                },
                {
                    id: "2",
                    trigger: "Is the surgery painful?",
                    content: "Most patients report less discomfort than a tooth extraction. We use local anesthesia to ensure you are completely comfortable."
                },
                {
                    id: "3",
                    trigger: "How long do they last?",
                    content: "With proper care (brushing and flossing), dental implants can last a lifetime."
                }
            ]}
        />
    )
}
