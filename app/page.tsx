import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <h1 style={inter.style}>Working...</h1>
    </main>
  )
}
