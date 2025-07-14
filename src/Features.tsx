import { motion } from "motion/react"

export default function Features() {
    return (
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
    )
}