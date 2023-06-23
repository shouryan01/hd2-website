import Apply_Button from "./Apply_Button";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

type faqItem = {
    question: string;
    answer: string;
}

const faqItems: faqItem[] = [
    {
        question: "What is a hackathon?",
        answer: "A hackathon is a 24+ hour event where \" hackers\" will collaborate on creating a functioning software and/or hardware project for fame and fortune. Okay, maybe not fame or fortune, but definitely cool prizes and bragging rights."
    },
    {
        question: "Who can attend?",
        answer: "Hack Dearborn is open to all currently enrolled college students, especially beginners!. ALL majors are welcome - we'll have workshops to help non-technical students get started and build something really cool!"
    },
    {
        question: "I am a first time hacker, what should I do?",
        answer: "We love to welcome first time hackers starting their hacking journey. We'll have tons of mentors and workshops to help you get started. We'll also have a beginner track for you to compete in!"
    },
    {
        question: "How do teams work?",
        answer: "You can form team with up to 4 members. We encourage you to bring your friends to form a team! If you don't have a team, there'll be plenty of opportunities for you to meet other hackers and form a team!"
    },
    {
        question: "Can I participate virtually?",
        answer: "This event will be an exclusively in-person event held at the University Center on the University of Michigan Dearborn campus. We will not be offering a virtual option for this event."
    },
    {
        question: "How to register for the hackathon?",
        answer: "All you need is to fill our form above! We will send you an email confirmation and a link to join the Discord."
    },
    {
        question: "Will there be swag?",
        answer: "Yes! All participants will receive some swag. Those who end up demoing their project will receive even more swag!"
    },
    {
        question: "I have more questions.",
        answer: "Reach us directly at info@hackdearborn.org, we would happy to help you."
    },
]

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Handles the collapsile state change
    const handleItemClick = (index: number) => {
        // If item is already clicked, return null otherwise set to index
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const variants = {
        open: { height: "auto", opacity: 1 },
        closed: { height: 0, opacity: 0 },
    }

    return (
        <div className="container mx-auto h-screen text-center mt-96">
            <h1 className="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
                FAQ
            </h1>
            <div className="faq-grid grid grid-cols-2 gap-8 mb-32">
                <div>
                    {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                        <motion.div
                            key={index}
                            className="faq-item border-b border-gray-300"
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "#007aff", color: "#fff", borderRadius: "10px", paddingLeft: "10px" }}
                                className="faq-item-button py-4 w-full text-left focus:outline-none"
                                onClick={() => handleItemClick(index)}
                            >
                                {item.question}
                                <span
                                    className={`ml-4 transition-transform transform ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                >
                                    ▼
                                </span>
                            </motion.button>
                            {activeIndex === index && (
                                <div className="delay-150 px-4 py-2">{item.answer}</div>
                            )}
                        </motion.div>
                    ))}
                </div>
                <div>
                    {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                        <motion.div
                            key={index}
                            className="faq-item border-b border-gray-300"
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "#007aff", color: "#fff", borderRadius: "10px", paddingLeft: "10px" }}
                                className="faq-item-button py-4 w-full text-left focus:outline-none"
                                onClick={() => handleItemClick(index + Math.ceil(faqItems.length / 2))}
                            >
                                {item.question}
                                <span
                                    className={`ml-4 transition-transform transform ${activeIndex === index + Math.ceil(faqItems.length / 2) ? "rotate-180" : ""
                                        }`}
                                >
                                    ▼
                                </span>
                            </motion.button>
                            {activeIndex === index + Math.ceil(faqItems.length / 2) && (
                                <div className="faq-item-answer px-4 py-2">{item.answer}</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
            <Apply_Button glitch={true} />
        </div>
    );
};

export default Faq;
