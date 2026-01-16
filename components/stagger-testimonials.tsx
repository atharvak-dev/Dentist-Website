"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
    {
        tempId: 0,
        testimonial: "My braces treatment has started at this clinic and I’m very satisfied with the care so far. The dentist explained each step, answered all my questions, and handled everything very gently.",
        by: "Jaykumar Girase",
        imgSrc: "https://i.pravatar.cc/150?u=jaykumar"
    },
    {
        tempId: 1,
        testimonial: "I visited the clinic twice and had a great experience. The first time I went for a toothache, the doctor diagnosed a cavity but instead of suggesting expensive procedures, recommended the most convenient option.",
        by: "Mainak Bhowmick",
        imgSrc: "https://i.pravatar.cc/150?u=mainak"
    },
    {
        tempId: 2,
        testimonial: "My 3-year-old child needed treatment... the doctor handled him with so much patience and care. They explained the problem clearly in simple terms.",
        by: "Anand Kamble",
        imgSrc: "https://i.pravatar.cc/150?u=anand"
    },
    {
        tempId: 3,
        testimonial: "Dentistree dental clinic is clean and healthy place... Dr Poonam is very friendly, informative, well versed and prioritize patient comfort.",
        by: "Rahul Surkar",
        imgSrc: "https://i.pravatar.cc/150?u=rahul"
    },
    {
        tempId: 4,
        testimonial: "Dr Poonam's precision and gentleness were exemplary. The modern, well-organized set-up is impressive.",
        by: "Shridhar Bhave",
        imgSrc: "https://i.pravatar.cc/150?u=shridhar"
    },
    {
        tempId: 5,
        testimonial: "I had severe tooth pain, so Poonam Mam did my root canal and fixed the cap on my teeth in a very reasonable price.",
        by: "Meena Kadam",
        imgSrc: "https://i.pravatar.cc/150?u=meena"
    },
    {
        tempId: 6,
        testimonial: "Dr Poonam is very experienced and suggests best possible treatment... She is very caring and did treatment painlessly.",
        by: "Nitesh Rahangdale",
        imgSrc: "https://i.pravatar.cc/150?u=nitesh"
    },
    {
        tempId: 7,
        testimonial: "I was very fearful and in a lot of pain... Dr. Poonam made me feel comfortable... and treated me without any pain.",
        by: "Ankita Dangat",
        imgSrc: "https://i.pravatar.cc/150?u=ankita"
    },
    {
        tempId: 8,
        testimonial: "Had a root canal with Dr. Poonam... The experience was smooth and comfortable. Dr. Poonam was clear in explanation and highly skilled.",
        by: "Supriya Bambarkar",
        imgSrc: "https://i.pravatar.cc/150?u=supriya"
    },
    {
        tempId: 9,
        testimonial: "I couldn't be happier with my experience. Dr Poonam provided exceptional care from start to finish.",
        by: "Deepali Pawar",
        imgSrc: "https://i.pravatar.cc/150?u=deepali"
    },
    {
        tempId: 10,
        testimonial: "I had a wonderful experience... She is very knowledgeable and experienced. I regularly visit her clinic every six months for check-ups.",
        by: "Pallavi Chavan",
        imgSrc: "https://i.pravatar.cc/150?u=pallavi"
    },
    {
        tempId: 11,
        testimonial: "I'm absolutely thrilled with the dental treatment! The procedure was quick and virtually painless. My smile looks amazing!",
        by: "Teju Deshmane",
        imgSrc: "https://i.pravatar.cc/150?u=teju"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardDimensions: { width: number; height: number };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardDimensions
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border px-6 py-8 sm:p-10 transition-all duration-500 ease-in-out flex flex-col justify-between rounded-[2rem]",
                isCenter
                    ? "z-20 bg-white text-slate-900 border-primary shadow-2xl scale-100 opacity-100"
                    : "z-10 bg-slate-50 text-slate-400 border-slate-200 shadow-sm opacity-40 scale-90 blur-[1px]"
            )}
            style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardDimensions.width / 1.5) * position}px)
          translateY(${isCenter ? 0 : 20}px)
          rotate(${isCenter ? 0 : position * 4}deg)
        `,
            }}
        >
            {/* Background Quote Icon - Fixed opacity handling */}
            <div
                className={cn(
                    "absolute top-6 right-6 transition-colors duration-300",
                    isCenter ? "text-primary opacity-10" : "text-slate-300 opacity-20"
                )}
            >
                <Quote size={56} fill="currentColor" />
            </div>

            <div className="flex items-center gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={cn("w-4 h-4 fill-current", isCenter ? "text-yellow-400" : "text-slate-200")} />
                ))}
            </div>

            <h3 className={cn(
                "text-base sm:text-l md:text-xl font-medium leading-relaxed tracking-wide relative z-10 line-clamp-6",
                isCenter ? "text-slate-800" : "text-slate-400"
            )}>
                "{testimonial.testimonial}"
            </h3>

            <div className={cn(
                "flex items-center gap-4 mt-auto pt-6 border-t relative z-10 w-full",
                isCenter ? "border-slate-100" : "border-slate-200"
            )}>
                <div className="shrink-0 relative">
                    <div className={cn("absolute inset-0 rounded-full blur-sm opacity-20", isCenter ? "bg-primary" : "bg-transparent")} />
                    <img
                        src={testimonial.imgSrc}
                        alt={testimonial.by}
                        className={cn(
                            "h-12 w-12 rounded-full object-cover border-2 relative",
                            isCenter ? "border-white shadow-md" : "border-slate-100 grayscale"
                        )}
                    />
                </div>
                <div className="flex flex-col min-w-0">
                    <p className={cn(
                        "font-bold text-sm sm:text-base truncate",
                        isCenter ? "text-slate-900" : "text-slate-400"
                    )}>
                        {testimonial.by}
                    </p>
                    <p className={cn(
                        "text-xs font-medium uppercase tracking-wider",
                        isCenter ? "text-primary/80" : "text-slate-300"
                    )}>
                        Patient
                    </p>
                </div>
            </div>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardDimensions, setCardDimensions] = useState({ width: 320, height: 420 }); // Better mobile defaults
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const isMobile = window.matchMedia("(max-width: 640px)").matches;
            // Taller, narrower cards for mobile legibility
            setCardDimensions(isMobile
                ? { width: 300, height: 440 }
                : { width: 400, height: 500 }
            );
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden py-12 md:py-20"
            style={{ height: 600 }}
        >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;

                if (Math.abs(position) > 2) return null;

                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardDimensions={cardDimensions}
                    />
                );
            })}

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-30">
                <button
                    onClick={() => handleMove(-1)}
                    className="flex h-12 w-12 items-center justify-center transition-all rounded-full shadow-lg bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className="flex h-12 w-12 items-center justify-center transition-all rounded-full shadow-lg bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
