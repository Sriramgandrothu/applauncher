"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LaunchPage() {
  const router = useRouter()

  const handleClick = () => {
    const sound = new Audio("/sounds/launch.mp3")
    sound.play().catch(() => {})
    router.push("/celebrations")
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-center text-white">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Image
          src="/saptarishi.png"
          alt="logo"
          width={180}
          height={180}
          priority
          className="mb-6 drop-shadow-2xl"
        />

        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6 tracking-wide">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>

        <p className="text-gray-300 max-w-xl mb-10 text-lg">
          Experience the grand celebration. A new beginning starts here.
        </p>

        <Button
          size="lg"
          onClick={handleClick}
          className="relative text-lg px-14 py-6 bg-blue-600 hover:bg-blue-800 transition-all duration-300 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50"
        >
          {process.env.NEXT_PUBLIC_BUTTON}
        </Button>
      </motion.div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-white rounded-full top-10 left-20 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full bottom-20 right-32 animate-ping delay-200"></div>
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/3 right-10 animate-ping delay-500"></div>
      </div>

    </div>
  )
}