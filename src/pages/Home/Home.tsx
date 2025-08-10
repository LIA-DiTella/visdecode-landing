import Acknowledgement from './Acknowledgements'
import Features from './Features'
import Howitworks from './Howitworks'
import Hero from './Hero'
import FAQ from './FAQ'
import { useScroll, useTransform, useSpring, motion } from 'motion/react'
import Team from './Team'

function Home() {
  // Animation variants
  const heroVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  // Scroll position
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
      <motion.div
        className="absolute inset-0 pointer-events-none left-1/2 transform -translate-x-1/2 h-screen w-full"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <img src="./background-wave.svg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-white opacity-90"></div>
      </motion.div>
      {/* </div> */}
      <div className="relative max-w-4xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto pt-4 sm:pt-6 lg:pt-8 2xl:pt-12 3xl:pt-16 px-12 sm:px-16 lg:px-20 2xl:px-28 3xl:px-32 4xl:px-36 flex flex-col items-center z-10">
        <Hero heroVariant={heroVariant} />
        <Howitworks heroVariant={heroVariant} />
        <Features />
        <Acknowledgement />
        <Team />
        <FAQ />
      </div>
      <div className="w-full h-4 sm:h-6 lg:h-8 2xl:h-10 3xl:h-12 bg-[#FDBA49]" />
    </div>
  );
}

export default Home;
