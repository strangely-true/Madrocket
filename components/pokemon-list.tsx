import { PokemonCard } from "@/components/pokemon-card"
import type { Pokemon } from "@/components/pokemon-explorer"

interface PokemonListProps {
  pokemon: Pokemon[]
}

export function PokemonList({ pokemon }: PokemonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
