/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "./Logo"
import { motion } from "motion/react"

export default function Hero({ heroVariant } : any) {
    return (
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
    )
}