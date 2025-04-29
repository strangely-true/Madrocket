"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (term: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      <Input
        type="text"
        placeholder="Search Pokémon by name..."
        className="pl-10 bg-gray-100 dark:bg-gray-700 border-2 border-black focus:ring-2 focus:ring-pokemon-blue dark:focus:ring-pokemon-yellow transition-all font-medium rounded-md"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
