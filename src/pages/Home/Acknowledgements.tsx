export default function Acknowledgement() {
  return (
    <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
      <h2
        className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-6 sm:px-8 lg:px-12 2xl:px-16"
      >
        <span className="flex items-center justify-center">
          <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black mr-3 sm:mr-4" />
          Acknowledgements
          <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black ml-3 sm:ml-4" />
        </span>
      </h2>
      <div className="w-full flex flex-row items-center justify-center gap-8 2xl:gap-16 3xl:gap-20 4xl:gap-24 px-6 sm:px-8 lg:px-12 2xl:px-16 mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20">
        <div className="flex flex-col items-center">
          <img src="./alfred-p-sloan-foundation.png" alt="Acknowledgement 1" className="h-10 sm:h-14 2xl:h-20 3xl:h-24 4xl:h-28 object-contain" />
          <a className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-700 mt-2" href="https://sloan.org/grant-detail/g-2024-22665" target="_blank" rel="noopener noreferrer">
            Grant G-2024-22665
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img src="./utdt.jpg" alt="Acknowledgement 2" className="h-10 sm:h-14 2xl:h-20 3xl:h-24 4xl:h-28 object-contain" />
          <a className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-700 mt-2" href="https://www.utdt.edu/ver_contenido.php?id_contenido=23180&id_item_menu=38420" target="_blank" rel="noopener noreferrer">
            Universidad Torcuato Di Tella
          </a>
        </div>
      </div>
    </div>
  )
}