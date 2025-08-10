/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "./Logo"
import { motion } from "motion/react"
import { Github } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero({ heroVariant }: any) {
    return (
        <div className="flex flex-col items-center gap-2 sm:gap-4 w-full">
            {/* Logo as main element */}
            {/* <motion.img
                src="./logo-name.svg"
                alt="Visdecode Logo"
                className="h-20 sm:h-24 lg:h-28 2xl:h-36 3xl:h-40 4xl:h-44 mb-4 sm:mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            /> */}
            <Logo />

            {/* Subtitle */}
            <motion.h2
                className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-serif font-medium text-center leading-tight mb-3 sm:mb-4 2xl:mb-6 3xl:mb-8 text-gray-700 px-6 sm:px-8 lg:px-12 2xl:px-16"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
                Make every chart speak clearly
            </motion.h2>

            {/* Project description */}
            <motion.p
                className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-center mb-4 sm:mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 px-6 sm:px-8 lg:px-12 2xl:px-16 max-w-4xl leading-relaxed"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
            >
                VisDecode is an open-source AI tool that reads scientific plots and suggests clearer ways to visualize your data, drawing on cutting-edge vision-language models and a curated guide of visualization best practices
            </motion.p>
            <motion.div
                className="flex flex-col sm:flex-row gap-3 2xl:gap-4 3xl:gap-6 mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 justify-center px-6 sm:px-8 lg:px-12 2xl:px-16 w-2/3 sm:w-full lg:w-5/6 2xl:w-4/5 3xl:w-3/4 text-black"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            >
                <Link
                    to="app"
                    className="rounded-xl sm:rounded-full bg-[#FDBA49] px-6 sm:px-8 2xl:px-10 3xl:px-14 4xl:px-18 py-2.5 sm:py-3 2xl:py-5 3xl:py-6 4xl:py-8 sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium shadow-sm transition w-full hover:bg-[#FDBA49]/80 cursor-pointer active:scale-95 text-center"
                >
                    Try now
                </Link>
                <a
                    href="https://github.com/LIA-DiTella/VisDecode_demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full border border-gray-300 bg-white px-6 sm:px-8 2xl:px-10 3xl:px-14 4xl:px-18 py-2.5 sm:py-3 2xl:py-5 3xl:py-6 4xl:py-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium shadow-sm transition w-full hover:bg-gray-100 cursor-pointer active:scale-95"
                >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    Github
                </a>
            </motion.div>
        </div>
    )
}