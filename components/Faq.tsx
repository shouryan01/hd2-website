import Apply_Button from "@/components/Apply_Button";
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
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            What's a hackathon?
                        </div>
                        <div className="collapse-content ">
                            <p>A hackathon is a 24+ hour event where " hackers" will collaborate on creating a functioning software and/or hardware project for fame and fortune. Okay, maybe not fame or fortune, but definitely cool prizes and bragging rights.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            Who can attend?
                        </div>
                        <div className="collapse-content">
                            <p>Hack Dearborn is open to all currently enrolled college students, especially beginners!. ALL majors are welcome - we'll have workshops to help non-technical students get started and build something really cool!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            I am a first time hacker.
                        </div>
                        <div className="collapse-content">
                            <p>We love to welcome first time hackers starting their hacking journey. We'll have tons of mentors and workshops to help you get started. We'll also have a beginner track for you to compete in!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            How do teams work?
                        </div>
                        <div className="collapse-content">
                            <p>You can form team with up to 4 members. We encourage you to bring your friends to form a team! If you don't have a team, there'll be plenty of opportunities for you to meet other hackers and form a team!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            Can I participate virtually?
                        </div>
                        <div className="collapse-content ">
                            <p>This event will be an exclusively in-person event held at the University Center on the University of Michigan Dearborn campus. We will not be offering a virtual option for this event.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            How to register for the hackathon?
                        </div>
                        <div className="collapse-content">
                            <p>All you need is to fill our form above! We will send you an email confirmation and a link to join the Discord.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-black/70 my-2 py-3 backdrop-blur-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-md md:text-xl font-medium">
                            Will there be swag?
                        </div>
                        <div className="collapse-content">
                            <p>Yes! All participants will receive some swag. Those who end up demoing their project will receive even more swag!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Apply_Button glitch={true} />
        </div>
    );
};

export default Faq;
