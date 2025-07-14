import Acknowledgement from './Acknowledgements'
import Features from './Features'
import Howitworks from './Howitworks'
import Hero from './Hero'
import FAQ from './FAQ'

function App() {
  // Animation variants
  const heroVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-white via-white to-gray-50 overflow-x-hidden pt-8 sm:pt-12 lg:pt-16">
      <div className="relative max-w-3xl mx-auto pt-6 sm:pt-8 lg:pt-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <Hero heroVariant={heroVariant} />
        <Howitworks heroVariant={heroVariant} />
        <Features />
        <Acknowledgement />
        <FAQ />
      </div>
      <div className="w-full h-6 sm:h-8 lg:h-10 bg-[#FDBA49]" />
    </div>
  );
}

export default App;
