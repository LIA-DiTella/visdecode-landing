import { useState } from 'react'
import { X } from 'lucide-react'

function App() {
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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-white via-white to-gray-50 overflow-x-hidden py-8 sm:py-12 lg:py-16">
      <div className="relative max-w-xl mx-auto pt-6 sm:pt-8 lg:pt-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full">
          <div className="absolute inset-0 pointer-events-none -z-10 w-screen left-1/2 transform -translate-x-1/2">
            <div className="relative w-full h-full">
              <img src="/background-wave.svg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-white opacity-90"></div>
            </div>
          </div>
          <img src="/logo-placeholder.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-center leading-tight mb-2 sm:mb-3 text-black px-2">
            Make Every Chart<br />Speak Clearly
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center mb-6 sm:mb-8 px-4">
            Upload any plot and get AI-powered feedback in seconds.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-12 w-full justify-center px-4" onSubmit={e => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row border sm:border-gray-300 bg-transparent sm:bg-[#eff0f0] rounded-none sm:rounded-full overflow-hidden w-full gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="px-4 sm:px-6 py-3 sm:py-4 text-black min-w-0 sm:min-w-[280px] text-base sm:text-lg focus:outline-none focus:border-none focus:ring-0 focus:ring-yellow-200 border border-black sm:border-none bg-[#eff0f0] rounded-xl sm:rounded-none"
              />
              <button className="rounded-xl sm:rounded-full bg-[#FDBA49] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-sm transition w-full hover:bg-[#FDBA49]/80 cursor-pointer active:scale-95">
                Join the waitlist
              </button>
            </div>
          </form>
          <div className="w-full sm:w-screen flex justify-center my-8 sm:my-10 lg:my-14 px-4 sm:px-0">
            <img
              src="/demo-vid.gif"
              alt="Compare Original and Generated Plot"
              className="w-full sm:w-5/6 lg:w-4/6 rounded-xl bg-transparent object-cover"
            />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-serif font-medium text-center mb-6 sm:mb-8 px-4">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col gap-3 sm:gap-5 text-black px-4">
          {faqs.map((faq, idx) => (
            <div
              className={`border border-gray-900 rounded-xl bg-[#eff0f0] shadow-sm transition-all duration-300 ease-in-out ${openIndex === idx ? 'shadow-lg' : ''}`}
              key={idx}
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
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default App
