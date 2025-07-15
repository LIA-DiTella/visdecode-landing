import { motion } from "motion/react"

export default function Features() {
    return (
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="flex items-center w-full">
              <span className="flex-1 h-px bg-black mr-4 w-xs" />
              What we offer
              <span className="flex-1 h-px bg-black ml-4" />
            </span>
          </motion.h2>
          {/* What We Offer Features Section */}
          <div className="w-full flex flex-col items-center lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
            <div className="max-w-6xl 2xl:max-w-8xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] w-full py-8 2xl:py-12 3xl:py-16 4xl:py-20 flex flex-col gap-12 lg:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-28">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 2xl:gap-24 3xl:gap-32 4xl:gap-40 px-4 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20">
                <div className="flex-shrink-0">
                  <img src="./feature1.gif" alt="Open & Framework-Agnostic" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 2xl:w-[32rem] 2xl:h-72 3xl:w-[40rem] 3xl:h-80 4xl:w-[48rem] 4xl:h-96 object-contain" loading="lazy" />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-4 3xl:gap-6 mb-1 2xl:mb-3 3xl:mb-4 4xl:mb-6">
                    <span role="img" aria-label="globe" className="text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">🌐</span>
                    <span className="font-semibold text-lg sm:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-black">Open & Framework-Agnostic</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                    Continue using your favorite plotting tools, VisDecode works on any exported image and emits a publication ready output. Fully open-source on GitHub.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16 2xl:gap-24 3xl:gap-32 4xl:gap-40 px-4 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20">
                <div className="flex-shrink-0">
                  <img src="./feature2.gif" alt="AI-Powered, Actionable Feedback" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 2xl:w-[32rem] 2xl:h-72 3xl:w-[40rem] 3xl:h-80 4xl:w-[48rem] 4xl:h-96 object-contain" loading="lazy" />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-4 3xl:gap-6 mb-1 2xl:mb-3 3xl:mb-4 4xl:mb-6">
                    <span role="img" aria-label="robot" className="text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">🤖</span>
                    <span className="font-semibold text-lg sm:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-black">AI-Powered, Actionable Feedback</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                    Built on a curated "best-practices" corpus (perceptual, cognitive, contextual principles) plus RAG-augmented LLM, so every suggestion is grounded in data-viz research.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 2xl:gap-24 3xl:gap-32 4xl:gap-40 px-4 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20">
                <div className="flex-shrink-0">
                  <img src="./feature3.gif" alt="Guided Recommendations & Iteration" className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 2xl:w-[32rem] 2xl:h-72 3xl:w-[40rem] 3xl:h-80 4xl:w-[48rem] 4xl:h-96 object-contain" loading='lazy' />
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-4 3xl:gap-6 mb-1 2xl:mb-3 3xl:mb-4 4xl:mb-6">
                    <span role="img" aria-label="bulb" className="text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">💡</span>
                    <span className="font-semibold text-lg sm:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-black">Guided Recommendations & Iteration</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                    Receive tailored improvement suggestions for your chart, select which recommendations to apply, and instantly see the results. Iterate as much as you like—each round brings new, actionable feedback for continuous enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}