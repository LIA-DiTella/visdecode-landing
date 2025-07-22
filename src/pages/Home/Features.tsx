import { motion } from "motion/react"

export default function Features() {
  return (
    <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full">
      <motion.h2
        className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-4 sm:mb-6 2xl:mb-8 3xl:mb-12 4xl:mb-16 px-6 sm:px-8 lg:px-12 2xl:px-16"
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
      <div className="w-full flex flex-col items-center lg:px-12 2xl:px-16 3xl:px-20 4xl:px-24 mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20">
        <div className="max-w-6xl 2xl:max-w-8xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] w-full py-6 2xl:py-8 3xl:py-12 4xl:py-16 flex flex-col gap-8 lg:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 2xl:gap-16 3xl:gap-24 4xl:gap-32 px-6 sm:px-8 lg:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
            <div className="flex-shrink-0">
              <video
                src="./feature1.mp4"
                className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 2xl:w-[28rem] 2xl:h-64 3xl:w-[36rem] 3xl:h-72 4xl:w-[44rem] 4xl:h-88 object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Open & Framework-Agnostic"
              />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-3 3xl:gap-4 mb-1 2xl:mb-2 3xl:mb-3 4xl:mb-4">
                <span role="img" aria-label="globe" className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">🌐</span>
                <span className="font-semibold text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-black">Open & Framework-Agnostic</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                Continue using your favorite plotting tools, VisDecode works on any exported image and emits a publication ready output. Fully open-source on GitHub.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12 2xl:gap-16 3xl:gap-24 4xl:gap-32 px-6 sm:px-8 lg:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
            <div className="flex-shrink-0">
              <video
                src="./feature2.mp4"
                className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 2xl:w-[28rem] 2xl:h-64 3xl:w-[36rem] 3xl:h-72 4xl:w-[44rem] 4xl:h-88 object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="AI-Powered, Actionable Feedback"
              />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-3 3xl:gap-4 mb-1 2xl:mb-2 3xl:mb-3 4xl:mb-4">
                <span role="img" aria-label="robot" className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">🤖</span>
                <span className="font-semibold text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-black">AI-Powered, Actionable Feedback</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                Built on a curated "best-practices" corpus (perceptual, cognitive, contextual principles) plus RAG-augmented LLM, so every suggestion is grounded in data-viz research.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 2xl:gap-16 3xl:gap-24 4xl:gap-32 px-6 sm:px-8 lg:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
            <div className="flex-shrink-0">
              <video
                src="./feature3.mp4"
                className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 2xl:w-[28rem] 2xl:h-64 3xl:w-[36rem] 3xl:h-72 4xl:w-[44rem] 4xl:h-88 object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Guided Recommendations & Iteration"
              />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-2 2xl:gap-3 3xl:gap-4 mb-1 2xl:mb-2 3xl:mb-3 4xl:mb-4">
                <span role="img" aria-label="bulb" className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">💡</span>
                <span className="font-semibold text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-black">Guided Recommendations & Iteration</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                Receive tailored improvement suggestions for your chart, select which recommendations to apply, and instantly see the results. Iterate as much as you like—each round brings new, actionable feedback for continuous enhancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}