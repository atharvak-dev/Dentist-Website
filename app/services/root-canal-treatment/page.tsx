"use client"

import { ServicePageLayout } from "../layout-template"

export default function RootCanalPage() {
    return (
        <ServicePageLayout
            title="Root Canal Treatment"
            subtitle="Save your natural tooth with our advanced, microscope-enhanced root canal therapy. Pain-free, precise, and effective."
            heroImage="/assests/root-canal.png"
            overview="Root canal treatment (Endodontics) is a procedure used to repair and save a tooth that is badly decayed or infected. At Dentistree, we use advanced rotary instruments and microscopes to ensure the procedure is cleaner, faster, and more successful than traditional methods. Contrary to popular belief, a modern root canal is no more painful than getting a filling."
            benefits={[
                "Save your natural tooth instead of extraction",
                "Eliminate pain and infection immediately",
                "Microscopic precision for 99.8% success rate",
                "Single-visit options available for most cases"
            ]}
            process={[
                {
                    title: "Diagnosis",
                    desc: "We use Digital X-Rays to assess the extent of infection and plan the procedure."
                },
                {
                    title: "Cleaning & Shaping",
                    desc: "The infected pulp is removed, and the canals are cleaned using advanced rotary files."
                },
                {
                    title: "Sealing",
                    desc: "The cleaned canals are filled with a biocompatible material and sealed to prevent reinfection."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Is root canal treatment painful?",
                    content: "No. With modern anesthesia and our gentle techniques, the procedure is virtually painless. Most patients feel instant relief from their toothache after the treatment."
                },
                {
                    id: "2",
                    trigger: "How long does it take?",
                    content: "Most treatments are completed in a single visit of about 45-60 minutes. Complex cases may require a second appointment."
                },
                {
                    id: "3",
                    trigger: "Do I need a crown/cap afterwards?",
                    content: "Yes. A root canal treated tooth becomes brittle over time. A crown protects it from fracturing and restores its full function."
                }
            ]}
        />
    )
}
