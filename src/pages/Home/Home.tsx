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
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-white via-white to-gray-50 pt-8 sm:pt-12 lg:pt-16 2xl:pt-20 3xl:pt-24">
      {/* <div className="absolute inset-0 pointer-events-none left-1/2 transform -translate-x-1/2 h-screen w-screen" ref={backgroundWaveRef}>
        <div className="relative w-full h-full">
          <img src="./background-wave.svg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-white opacity-90"></div>
        </div>
      </div> */}
      {/* <div className="absolute inset-0 pointer-events-none left-1/2 transform -translate-x-1/2 h-screen w-screen"> */}
      <motion.div
        className="absolute inset-0 pointer-events-none left-1/2 transform -translate-x-1/2 h-screen w-full"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <img src="./background-wave.svg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-white opacity-90"></div>
      </motion.div>
      {/* </div> */}
      <div className="relative max-w-3xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl mx-auto pt-6 sm:pt-8 lg:pt-12 2xl:pt-16 3xl:pt-20 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 flex flex-col items-center z-10">
        <Hero heroVariant={heroVariant} />
        <Howitworks heroVariant={heroVariant} />
        <Features />
        <Acknowledgement />
        <Team />
        <FAQ />
      </div>
      <div className="w-full h-6 sm:h-8 lg:h-10 2xl:h-12 3xl:h-16 bg-[#FDBA49]" />
    </div>
  );
}

export default Home;
