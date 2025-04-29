import Image from "next/image"
import type { Pokemon } from "@/components/pokemon-explorer"

interface PokemonCardProps {
  pokemon: Pokemon
}

// Map of Pokémon types to colors
const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  normal: { bg: "bg-gray-200", border: "border-gray-400", text: "text-gray-800" },
  fire: { bg: "bg-pokemon-red/80", border: "border-pokemon-red", text: "text-white" },
  water: { bg: "bg-pokemon-blue/80", border: "border-pokemon-blue", text: "text-white" },
  electric: { bg: "bg-pokemon-yellow/90", border: "border-pokemon-yellow", text: "text-gray-800" },
  grass: { bg: "bg-green-500", border: "border-green-700", text: "text-white" },
  ice: { bg: "bg-blue-300", border: "border-blue-500", text: "text-blue-900" },
  fighting: { bg: "bg-red-700", border: "border-red-900", text: "text-white" },
  poison: { bg: "bg-purple-500", border: "border-purple-700", text: "text-white" },
  ground: { bg: "bg-amber-600", border: "border-amber-800", text: "text-white" },
  flying: { bg: "bg-indigo-400", border: "border-indigo-600", text: "text-white" },
  psychic: { bg: "bg-pink-500", border: "border-pink-700", text: "text-white" },
  bug: { bg: "bg-lime-500", border: "border-lime-700", text: "text-white" },
  rock: { bg: "bg-stone-500", border: "border-stone-700", text: "text-white" },
  ghost: { bg: "bg-purple-700", border: "border-purple-900", text: "text-white" },
  dragon: { bg: "bg-indigo-700", border: "border-indigo-900", text: "text-white" },
  dark: { bg: "bg-gray-700", border: "border-gray-900", text: "text-white" },
  steel: { bg: "bg-gray-400", border: "border-gray-600", text: "text-white" },
  fairy: { bg: "bg-pink-300", border: "border-pink-500", text: "text-pink-900" },
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const primaryType = pokemon.types[0] || "normal"
  const typeStyle = typeColors[primaryType] || typeColors.normal

  return (
    <div className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-4 border-black shadow-lg transform transition-transform group-hover:scale-105 group-hover:rotate-1">
        {/* Top red section with lights */}
        <div className="bg-pokemon-red h-10 flex items-center px-3 border-b-4 border-black relative">
          <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white mr-2 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-red-400 border border-white mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 border border-white"></div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs text-white font-bold">
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
        </div>

        {/* Main content */}
        <div className="p-4">
          {/* Pokemon image with screen effect */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg border-2 border-black mb-3 p-2 relative overflow-hidden">
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-500"></div>
            <div className="relative w-full aspect-square flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 rounded overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <Image
                src={pokemon.image || "/placeholder.svg"}
                alt={pokemon.name}
                width={120}
                height={120}
                className="object-contain z-10 pixelated transition-all group-hover:scale-110"
              />
            </div>
          </div>

          {/* Pokemon name */}
          <h3 className="text-lg font-pokemon text-center capitalize mb-2 text-pokemon-blue dark:text-pokemon-yellow">
            {pokemon.name}
          </h3>

          {/* Pokemon types */}
          <div className="flex gap-2 justify-center">
            {pokemon.types.map((type) => {
              const style = typeColors[type] || typeColors.normal
              return (
                <span
                  key={type}
                  className={`${style.bg} ${style.text} px-3 py-1 rounded-full text-xs font-bold uppercase border-2 ${style.border}`}
                >
                  {type}
                </span>
              )
            })}
          </div>
        </div>

        {/* Bottom section with buttons */}
        <div className="bg-gray-200 dark:bg-gray-700 p-2 border-t-4 border-black flex justify-between">
          <div className="flex gap-1">
            <div className="w-6 h-3 bg-gray-400 dark:bg-gray-500 rounded-sm border border-black"></div>
            <div className="w-6 h-3 bg-gray-400 dark:bg-gray-500 rounded-sm border border-black"></div>
          </div>
          <div className="w-12 h-3 bg-gray-400 dark:bg-gray-500 rounded-sm border border-black"></div>
        </div>
      </div>
    </div>
  )
}
