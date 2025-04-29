import Image from "next/image"

interface EmptyStateProps {
  searchTerm: string
  selectedType: string | null
}

export function EmptyState({ searchTerm, selectedType }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-white dark:bg-gray-800 rounded-xl border-4 border-black shadow-lg p-8">
      <div className="w-32 h-32 relative mb-6">
        <Image src="/sad-pikachu.png" alt="Sad Pikachu" width={128} height={128} className="object-contain" />
      </div>
      <h3 className="text-xl font-pokemon text-pokemon-blue dark:text-pokemon-yellow mb-3">No Pokémon Found!</h3>
      <p className="text-gray-700 dark:text-gray-300 max-w-md">
        {searchTerm && selectedType
          ? `No Pokémon match "${searchTerm}" with type "${selectedType}".`
          : searchTerm
            ? `No Pokémon match "${searchTerm}".`
            : selectedType
              ? `No Pokémon found with type "${selectedType}".`
              : "No Pokémon found."}
      </p>
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-black text-sm">
        <p className="font-medium">Professor Oak says:</p>
        <p className="italic">"Try adjusting your search or filter to find what you're looking for!"</p>
      </div>
    </div>
  )
}
