"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { TypeFilter } from "@/components/type-filter"
import { PokemonList } from "@/components/pokemon-list"
import { LoadingState } from "@/components/loading-state"
import { ErrorState } from "@/components/error-state"
import { EmptyState } from "@/components/empty-state"

export interface Pokemon {
  id: number
  name: string
  types: string[]
  image: string
}

export default function PokemonExplorer() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        // Fetch the first 150 Pokémon
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        const data = await response.json()

        // Fetch detailed information for each Pokémon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: { name: string; url: string }) => {
            const res = await fetch(pokemon.url)
            return await res.json()
          }),
        )

        // Extract the required information
        const formattedPokemon = pokemonDetails.map((details: any) => {
          return {
            id: details.id,
            name: details.name,
            types: details.types.map((type: any) => type.type.name),
            image: details.sprites.front_default,
          }
        })

        // Extract all unique types for the filter dropdown
        const allTypes = new Set<string>()
        formattedPokemon.forEach((pokemon: Pokemon) => {
          pokemon.types.forEach((type) => allTypes.add(type))
        })

        setPokemon(formattedPokemon)
        setFilteredPokemon(formattedPokemon)
        setPokemonTypes(Array.from(allTypes).sort())
        setLoading(false)
      } catch (error) {
        console.error("Error fetching Pokémon:", error)
        setError("Failed to fetch Pokémon data. Please try again later.")
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  useEffect(() => {
    // Filter Pokémon based on search term and selected type
    let filtered = pokemon

    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (selectedType) {
      filtered = filtered.filter((p) => p.types.includes(selectedType))
    }

    setFilteredPokemon(filtered)
  }, [searchTerm, selectedType, pokemon])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleTypeFilter = (type: string | null) => {
    setSelectedType(type)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <Header />

        <div className="bg-white dark:bg-gray-800 rounded-xl border-4 border-black shadow-lg p-6 mb-8 relative overflow-hidden">
          {/* Decorative Pokéballs in the background */}
          <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full border-8 border-pokemon-red opacity-10"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full border-8 border-pokemon-blue opacity-10"></div>

          <div className="flex flex-col md:flex-row gap-4 mb-4 relative z-10">
            <div className="w-full md:w-2/3">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="w-full md:w-1/3">
              <TypeFilter types={pokemonTypes} selectedType={selectedType} onSelectType={handleTypeFilter} />
            </div>
          </div>

          {filteredPokemon.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pokemon-red animate-pulse"></div>
              <p className="text-sm font-mono">
                Showing {filteredPokemon.length} of {pokemon.length} Pokémon
              </p>
            </div>
          )}
        </div>

        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} />
        ) : filteredPokemon.length === 0 ? (
          <EmptyState searchTerm={searchTerm} selectedType={selectedType} />
        ) : (
          <PokemonList pokemon={filteredPokemon} />
        )}
      </div>
    </div>
  )
}
