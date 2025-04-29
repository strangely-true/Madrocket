export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-24 h-24 rounded-full bg-pokemon-red border-8 border-black relative animate-spin-slow">
        <div className="absolute inset-0 border-t-8 border-b-8 border-black top-1/2 -translate-y-1/2"></div>
        <div className="absolute w-10 h-10 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-black z-10"></div>
      </div>
      <p className="mt-8 text-xl font-pokemon text-pokemon-blue dark:text-pokemon-yellow">Loading Pokémon...</p>
    </div>
  )
}
