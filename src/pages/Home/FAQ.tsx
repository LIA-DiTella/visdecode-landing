import { useState } from "react"
import { X } from "lucide-react"

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)
    const faqs = [
        {
            question: 'What is VisDecode?',
            answer:
                'VisDecode is an open-source tool designed to help users improve their charts, providing suggestions grounded in visualization research.',
        },
        { question: 'How does it work?', answer: 'The tool analyzes the chart you upload using a trained large language model (LLM) and offers recommendations for improvement, all based on carefully selected visualization literature.' },
        { question: 'How can I use it?', answer: "VisDecode is simple to use. Just upload the chart you'd like to improve, review the recommended changes, and choose which ones to apply. Once you're satisfied with the result, you can download the improved chart in your preferred format!" },
        { question: 'When will the tool be available?', answer: "We're still developing VisDecode, but you can check out our GitHub to follow our progress!" },
    ]

    return (
        <div className="w-full max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
            <h2
                className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-4 "
            >
                <span className="flex items-center w-full">
                    <span className="flex-1 h-px bg-black mr-4 w-md" />
                    Frequently Asked Questions
                    <span className="flex-1 h-px bg-black ml-4" />
                </span>
            </h2>
            <div className="w-full flex flex-col gap-3 sm:gap-5 2xl:gap-6 3xl:gap-8 4xl:gap-10 text-black px-4 2xl:px-8 3xl:px-12 4xl:px-16">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`border border-gray-900 rounded-xl bg-[#eff0f0] shadow-sm transition-all duration-300 ease-in-out ${openIndex === idx ? 'shadow-lg' : ''}`}
                    >
                        <div
                            className="flex justify-between items-center px-4 sm:px-5 2xl:px-6 3xl:px-8 4xl:px-10 py-3 sm:py-4 2xl:py-5 3xl:py-6 4xl:py-8 cursor-pointer text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-serif"
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        >
                            <span className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pr-2">{faq.question}</span>
                            <span className={`text-xl sm:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl ml-2 sm:ml-3 2xl:ml-4 3xl:ml-6 4xl:ml-8 transition-transform duration-300 ease-in-out flex-shrink-0 ${openIndex === idx ? 'rotate-0' : 'rotate-45'}`}>
                                <X className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-32 2xl:max-h-40 3xl:max-h-48 4xl:max-h-56 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-4 sm:px-5 2xl:px-6 3xl:px-8 4xl:px-10 pb-3 sm:pb-4 2xl:pb-5 3xl:pb-6 4xl:pb-8 text-gray-800 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}