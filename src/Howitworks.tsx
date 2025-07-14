/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Howitworks({ heroVariant } : any) {
    return (
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
    )
}