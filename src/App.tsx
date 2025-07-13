import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'

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

  // Animation variants
  const heroVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-white via-white to-gray-50 overflow-x-hidden pt-8 sm:pt-12 lg:pt-16">
      <div className="relative max-w-3xl mx-auto pt-6 sm:pt-8 lg:pt-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full">
          <div className="absolute inset-0 pointer-events-none -z-10 w-screen left-1/2 transform -translate-x-1/2">
            <div className="relative w-full h-full">
              <img src="./background-wave.svg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-white opacity-90"></div>
            </div>
          </div>
          {/* <motion.img
            src="./logo.svg"
            alt="Logo"
            className="mb-4 sm:mb-6"
            style={{ width: '10rem', height: '10rem' }} // fallback for w-16 h-16
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          /> */}
          <Logo />
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-center leading-tight mb-2 sm:mb-3 text-black px-2"
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            Make Every Chart<br />Speak Clearly
          </motion.h1>
          <motion.p
            className="text-gray-500 text-sm sm:text-base text-center mb-6 sm:mb-8 px-4"
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
          >
            Upload any plot and get AI-powered feedback in seconds.
          </motion.p>
          <motion.form
            className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-12 justify-center px-4 w-2/3 sm:w-full lg:w-5/6"
            onSubmit={e => e.preventDefault()}
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          >
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
          </motion.form>
          <motion.div
            className="w-full sm:w-screen flex justify-center my-8 sm:my-10 lg:my-14 px-4 sm:px-0"
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75, duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="./demo-vid.gif"
              alt="Compare Original and Generated Plot"
              className="w-full sm:w-5/6 lg:w-4/6 rounded-xl bg-transparent object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-12">
          <motion.h2
            className="relative flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-black font-serif font-medium text-center mb-6 sm:mb-8 px-4 how-it-works-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="flex items-center w-full">
              <span className="flex-1 h-px bg-black mr-4 w-xs" />
              How it works
              <span className="flex-1 h-px bg-black ml-4" />
            </span>
          </motion.h2>

          <div className="w-full flex flex-row items-center justify-center text-sm gap-0 sm:gap-2 lg:gap-4 px-2 sm:px-4 lg:px-8 text-black">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <motion.img
                src="./upload.png"
                alt="Logo"
                className="w-16 sm:w-20 lg:w-24 mb-4 sm:mb-6"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              />
              <motion.p
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
                className="font-medium"
              >
                Upload Your Chart
              </motion.p>
            </div>
            {/* Arrow 1 */}
            <span className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-4 text-black">
              <ArrowRight size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
            </span>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <motion.img
                src="./derendering.png"
                alt="Logo"
                className="w-16 sm:w-20 lg:w-24 mb-4 sm:mb-6"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              />
              <motion.p
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
                className="font-medium"
              >
                AI Powered De-rendering
              </motion.p>
            </div>
            {/* Arrow 2 */}
            <span className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-4 text-black">
              <ArrowRight size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
            </span>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <motion.img
                src="./recommendations.png"
                alt="Logo"
                className="w-16 sm:w-20 lg:w-24 mb-4 sm:mb-6"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              />
              <motion.p
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
                className="font-medium"
              >
                Recommendations & Re-rendering
              </motion.p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-black font-serif font-medium text-center mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="flex items-center w-full">
              <span className="flex-1 h-px bg-black mr-4 w-xs" />
              What We Offer
              <span className="flex-1 h-px bg-black ml-4" />
            </span>
          </motion.h2>
          {/* What We Offer Features Section */}
          <div className="w-full flex flex-col items-center lg:px-8 mb-12">
            <div className="max-w-6xl w-full py-8 flex flex-col gap-12 lg:gap-16">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 px-4 lg:px-8">
                <div className="flex-shrink-0">
                  <img src="./feature1.gif" alt="Open & Framework-Agnostic" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 object-contain" loading="lazy" />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span role="img" aria-label="globe" className="text-xl">🌐</span>
                    <span className="font-semibold text-lg sm:text-xl text-black">Open & Framework-Agnostic</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Continue using your favorite plotting tools, VisDecode works on any exported image and emits a publication ready output. Fully open-source on GitHub.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16 px-4 lg:px-8">
                <div className="flex-shrink-0">
                  <img src="./feature2.gif" alt="AI-Powered, Actionable Feedback" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 object-contain" loading="lazy" />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span role="img" aria-label="robot" className="text-xl">🤖</span>
                    <span className="font-semibold text-lg sm:text-xl text-black">AI-Powered, Actionable Feedback</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Built on a curated "best-practices" corpus (perceptual, cognitive, contextual principles) plus RAG-augmented LLM, so every suggestion is grounded in data-viz research.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 px-4 lg:px-8">
                <div className="flex-shrink-0">
                  <img src="./feature3.gif" alt="Guided Recommendations & Iteration" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 object-contain" loading='lazy' />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span role="img" aria-label="bulb" className="text-xl">💡</span>
                    <span className="font-semibold text-lg sm:text-xl text-black">Guided Recommendations & Iteration</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Receive tailored improvement suggestions for your chart, select which recommendations to apply, and instantly see the results. Iterate as much as you like—each round brings new, actionable feedback for continuous enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Acknowledgements Section */}
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl text-black font-serif font-medium text-center mb-6 sm:mb-8 px-4"
          >
            <span className="flex items-center">
              <span className="flex-1 h-px bg-black mr-2 w-xs" />
              Acknowledgements
              <span className="flex-1 h-px bg-black ml-2" />
            </span>
          </h2>
          <div className="w-full flex flex-row items-center justify-center gap-8 px-4 mb-10">
            <img src="./alfred-p-sloan-foundation.png" alt="Acknowledgement 1" className="h-16 sm:h-24 object-contain" />
            <img src="./utdt.jpg" alt="Acknowledgement 2" className="h-16 sm:h-24 object-contain" />
          </div>
        </div>
        {/* FAQ Section */}
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
      </div>
      <div className="w-full h-6 sm:h-8 lg:h-10 bg-[#FDBA49]" />
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
  );
}

export default App;
