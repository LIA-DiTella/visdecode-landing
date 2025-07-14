import { useState } from "react"
import { X } from "lucide-react"

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)
    const faqs = [
        {
            question: 'What is this?',
            answer:
                'This is a tool that helps you make every chart speak clearly.',
        },
        { question: 'How does it work?', answer: 'It works by using AI to analyze the chart and provide feedback.' },
        { question: 'How do I use it?', answer: 'You can use it by uploading a chart and getting feedback.' },
        { question: 'How do I get started?', answer: 'You can get started by signing up for the waitlist.' },
    ]

    return (
        <div className="w-full max-w-3xl mx-auto mb-12">
            <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-black font-serif font-medium text-center mb-6 sm:mb-8 px-4 "
            >
                <span className="flex items-center w-full">
                    <span className="flex-1 h-px bg-black mr-4 w-md" />
                    Frequently Asked Questions
                    <span className="flex-1 h-px bg-black ml-4" />
                </span>
            </h2>
            <div className="w-full flex flex-col gap-3 sm:gap-5 text-black px-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`border border-gray-900 rounded-xl bg-[#eff0f0] shadow-sm transition-all duration-300 ease-in-out ${openIndex === idx ? 'shadow-lg' : ''}`}
                    >
                        <div
                            className="flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-serif"
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        >
                            <span className="text-base sm:text-lg pr-2">{faq.question}</span>
                            <span className={`text-xl sm:text-2xl ml-2 sm:ml-3 transition-transform duration-300 ease-in-out flex-shrink-0 ${openIndex === idx ? 'rotate-0' : 'rotate-45'}`}>
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-4 sm:px-5 pb-3 sm:pb-4 text-gray-800 text-sm sm:text-base">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}