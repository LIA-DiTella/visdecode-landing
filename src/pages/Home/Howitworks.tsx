/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Howitworks({ heroVariant }: any) {
    return (
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20">
            <motion.h2
                className="relative flex items-center justify-center text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-4 sm:mb-6 2xl:mb-8 3xl:mb-12 4xl:mb-16 px-6 sm:px-8 lg:px-12 2xl:px-16 how-it-works-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
                <span className="flex items-center w-full justify-center text-nowrap">
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black mr-3 sm:mr-4" />
                    What we bring
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black ml-3 sm:ml-4" />
                </span>
            </motion.h2>

            <div className="w-full flex flex-row items-center justify-center text-sm gap-2 sm:gap-4 lg:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 text-black">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center flex-1 max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] 2xl:max-w-[320px] 3xl:max-w-[400px] 4xl:max-w-[480px]">
                    <motion.img
                        src="./step1.png"
                        alt="Logo"
                        className="w-12 sm:w-16 lg:w-20 2xl:w-32 3xl:w-40 4xl:w-48 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8"
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
                        className="font-medium text-xs sm:text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl leading-snug"
                    >
                        Upload Your Chart
                    </motion.p>
                </div>
                {/* Arrow 1 */}
                <span className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3 2xl:mx-4 3xl:mx-6 4xl:mx-8 text-black">
                    <ArrowRight size={32} className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
                </span>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center flex-1 max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] 2xl:max-w-[320px] 3xl:max-w-[400px] 4xl:max-w-[480px]">
                    <motion.img
                        src="./step2.png"
                        alt="Logo"
                        className="w-12 sm:w-16 lg:w-20 2xl:w-32 3xl:w-40 4xl:w-48 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8"
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
                        className="font-medium text-xs sm:text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl leading-snug"
                    >
                        AI Powered De-rendering
                    </motion.p>
                </div>
                {/* Arrow 2 */}
                <span className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3 2xl:mx-4 3xl:mx-6 4xl:mx-8 text-black">
                    <ArrowRight size={32} className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
                </span>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center flex-1 max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] 2xl:max-w-[320px] 3xl:max-w-[400px] 4xl:max-w-[480px]">
                    <motion.img
                        src="./step3.png"
                        alt="Logo"
                        className="w-12 sm:w-16 lg:w-20 2xl:w-32 3xl:w-40 4xl:w-48 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8"
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
                        className="font-medium text-xs sm:text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl leading-snug"
                    >
                        Recommendations & Re-rendering
                    </motion.p>
                </div>
            </div>
        </div>
    )
}