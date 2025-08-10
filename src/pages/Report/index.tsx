import { motion, useScroll, useTransform, useSpring } from 'motion/react'

const recommendationCategories = [
    {
        "title": "🔵 Data & Encoding",
        "description": "Covers everything related to data types, transformations, and visual mappings.",
        "items": [
            "Valid field types and scale compatibility",
            "Aggregation, binning, time units", 
            "Mapping of data to channels (e.g., x, y, size, color)",
            "Constraints like no duplicate encodings or required fields"
        ]
    },
    {
        "title": "🟢 Perception & Aesthetics", 
        "description": "Deals with visual clarity, accessibility, and perceptual effectiveness.",
        "items": [
            "Color use, contrast, font size",
            "Label overlap, symbol confusion",
            "Use of 3D, animation, transparency",
            "Gestalt principles, clutter, gridlines"
        ]
    },
    {
        "title": "🟠 Narrative & Communication",
        "description": "Focuses on how well the visualization communicates, guides the viewer, and supports understanding.",
        "items": [
            "Titles, legends, axis labels",
            "Layout consistency, grouping, alignment", 
            "Emphasis techniques, storytelling, tooltips",
            "Order, callouts, reference lines"
        ]
    }
]

export default function Report() {
    // Scroll position for parallax effect
    const { scrollY } = useScroll()
    const backgroundYRaw = useTransform(scrollY, [0, 1000], [0, -300])
    const backgroundOpacityRaw = useTransform(scrollY, [0, 500], [1, 0.3])

    // Add spring delay to parallax effect
    const backgroundY = useSpring(backgroundYRaw, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    const backgroundOpacity = useSpring(backgroundOpacityRaw, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-white via-white to-gray-50 pt-6 sm:pt-8 lg:pt-12 2xl:pt-16 3xl:pt-20">
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none left-1/2 transform -translate-x-1/2 h-screen w-full"
                style={{ y: backgroundY, opacity: backgroundOpacity }}
            >
                <img src="./background-wave.svg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-90"></div>
            </motion.div>

            <div className="relative max-w-4xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto pt-4 sm:pt-6 lg:pt-8 2xl:pt-12 3xl:pt-16 px-12 sm:px-16 lg:px-20 2xl:px-28 3xl:px-32 4xl:px-36 flex flex-col items-center z-10">
                
                {/* Main Title */}
                <motion.h1 
                    className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl text-black font-serif font-medium text-center mb-12 sm:mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    About VisDecode
                </motion.h1>

                {/* Introduction section */}
                <motion.div 
                    className="w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    <p className="text-gray-700 text-lg sm:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-center leading-relaxed mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20">
                        At VisDecode, we believe that data visualizations are powerful tools for communication.
                        But poorly designed visuals can mislead, overwhelm, or distort messages —
                        sometimes unintentionally contributing to confusion or even social harm.
                    </p>
                    
                    <p className="text-gray-600 text-base sm:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-center leading-relaxed">
                        That's why we've developed a set of evidence-based recommendations to guide users toward better, clearer, and more responsible visual communication.
                    </p>
                </motion.div>

                {/* How We Built These Guidelines section */}
                <motion.div 
                    className="w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-black font-serif font-medium text-center mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20">
                        <span className="flex items-center w-full">
                            <span className="flex-1 h-px bg-black mr-4" />
                            Our Research Foundation
                            <span className="flex-1 h-px bg-black ml-4" />
                        </span>
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-center leading-relaxed">
                        These recommendations draw on principles from information visualization, perceptual psychology, and communication design, based on established visualization best practices (e.g., Munzner, Cleveland & McGill) and human perception research.
                    </p>
                </motion.div>

                {/* Recommendation Categories section */}
                <motion.div 
                    className="w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-black font-serif font-medium text-center mb-6 2xl:mb-8 3xl:mb-12 4xl:mb-16">
                        <span className="flex items-center w-full">
                            <span className="flex-1 h-px bg-black mr-4" />
                            Three Core Dimensions
                            <span className="flex-1 h-px bg-black ml-4" />
                        </span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-center leading-relaxed mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
                        Our recommendations are organized into three main dimensions that address the most common pitfalls in visual design
                    </p>

                    {/* Categories Grid */}
                    <div className="grid gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12">
                        {recommendationCategories.map((category, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 2xl:p-8 3xl:p-10 4xl:p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/90"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                            >
                                <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-serif font-bold text-black mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10 leading-tight text-center">
                                    {category.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 leading-relaxed font-medium text-center">
                                    {category.description}
                                </p>
                                <ul className="space-y-3 2xl:space-y-4 3xl:space-y-5 4xl:space-y-6 max-w-lg mx-auto">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-6">
                                            <div className="w-2 h-2 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 bg-[#FDBA49] rounded-full flex-shrink-0 mt-2 2xl:mt-2.5 3xl:mt-3 4xl:mt-3.5"></div>
                                            <span className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
            
            {/* Bottom accent bar */}
            <div className="w-full h-4 sm:h-6 lg:h-8 2xl:h-10 3xl:h-12 bg-[#FDBA49]" />
        </div>
    );
}