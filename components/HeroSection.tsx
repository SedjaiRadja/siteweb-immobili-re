export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-[url('/heroImage.png')] bg-cover bg-right md:bg-right sm:bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="text-white px-6 md:px-20 max-w-xl">
          <h1 className="text-3xl md:text-6xl font-light tracking-wide">
            LUXURY RESIDENCE
          </h1>

          <p className="mt-4 text-sm md:text-lg opacity-80">
            Modern living in the heart of the city
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black text-sm md:text-base hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
