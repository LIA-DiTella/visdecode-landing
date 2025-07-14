export default function Acknowledgement() {
  return (
    <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-4"
      >
        <span className="flex items-center">
          <span className="flex-1 h-px bg-black mr-2 w-xs" />
          Acknowledgements
          <span className="flex-1 h-px bg-black ml-2" />
        </span>
      </h2>
      <div className="w-full flex flex-row items-center justify-center gap-8 2xl:gap-16 3xl:gap-20 4xl:gap-24 px-4 mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20">
        <img src="./alfred-p-sloan-foundation.png" alt="Acknowledgement 1" className="h-10 sm:h-14 2xl:h-20 3xl:h-24 4xl:h-28 object-contain" />
        <img src="./utdt.jpg" alt="Acknowledgement 2" className="h-10 sm:h-14 2xl:h-20 3xl:h-24 4xl:h-28 object-contain" />
      </div>
    </div>
  )
}