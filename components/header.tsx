import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col items-center justify-center relative">
        {/* Pokémon Logo */}
        <div className="w-full max-w-xs mb-6">
          <Image src="/pokemon-logo.png" alt="Pokémon Logo" width={300} height={110} className="w-full h-auto" />
        </div>

        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}
