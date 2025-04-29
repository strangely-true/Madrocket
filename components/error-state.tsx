import Image from "next/image"

interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-white dark:bg-gray-800 rounded-xl border-4 border-black shadow-lg p-8">
      <div className="w-32 h-32 relative mb-6">
        <Image src="/team-rocket.png" alt="Team Rocket" width={128} height={128} className="object-contain" />
      </div>
      <h3 className="text-xl font-pokemon text-pokemon-red mb-3">Team Rocket Trouble!</h3>
      <p className="text-gray-700 dark:text-gray-300 max-w-md mb-4">{message}</p>
      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-black text-sm">
        <p className="italic">"Looks like Team Rocket's blasting off again!"</p>
      </div>
    </div>
  )
}
