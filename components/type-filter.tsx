"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TypeFilterProps {
  types: string[]
  selectedType: string | null
  onSelectType: (type: string | null) => void
}

// Map of Pokémon types to colors for the dropdown
const typeColors: Record<string, { bg: string; text: string }> = {
  normal: { bg: "bg-gray-200", text: "text-gray-800" },
  fire: { bg: "bg-pokemon-red/80", text: "text-white" },
  water: { bg: "bg-pokemon-blue/80", text: "text-white" },
  electric: { bg: "bg-pokemon-yellow/90", text: "text-gray-800" },
  grass: { bg: "bg-green-500", text: "text-white" },
  ice: { bg: "bg-blue-300", text: "text-blue-900" },
  fighting: { bg: "bg-red-700", text: "text-white" },
  poison: { bg: "bg-purple-500", text: "text-white" },
  ground: { bg: "bg-amber-600", text: "text-white" },
  flying: { bg: "bg-indigo-400", text: "text-white" },
  psychic: { bg: "bg-pink-500", text: "text-white" },
  bug: { bg: "bg-lime-500", text: "text-white" },
  rock: { bg: "bg-stone-500", text: "text-white" },
  ghost: { bg: "bg-purple-700", text: "text-white" },
  dragon: { bg: "bg-indigo-700", text: "text-white" },
  dark: { bg: "bg-gray-700", text: "text-white" },
  steel: { bg: "bg-gray-400", text: "text-white" },
  fairy: { bg: "bg-pink-300", text: "text-pink-900" },
}

export function TypeFilter({ types, selectedType, onSelectType }: TypeFilterProps) {
  return (
    <Select value={selectedType || "all"} onValueChange={(value) => onSelectType(value === "all" ? null : value)}>
      <SelectTrigger className="capitalize border-2 border-black bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-pokemon-blue dark:focus:ring-pokemon-yellow">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent className="border-2 border-black">
        <SelectItem value="all" className="font-medium">
          All Types
        </SelectItem>
        {types.map((type) => {
          const style = typeColors[type] || typeColors.normal
          return (
            <SelectItem
              key={type}
              value={type}
              className={`capitalize font-medium my-1 ${style.bg} ${style.text} rounded`}
            >
              {type}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
