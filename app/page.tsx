"use client"

import { useState } from "react"
import { Toast } from "@/components/ui/toast"

export default function Home() {
  const [state, setState] = useState<"initial" | "loading" | "success">("initial")

  const handleSave = () => {
    setState("loading")
    setTimeout(() => {
      setState("success")
      setTimeout(() => {
        setState("initial")
      }, 2000)
    }, 1500)
  }

  const handleReset = () => {
    setState("initial")
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(64, 64, 64, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(64, 64, 64, 0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated corner marks - top left */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500/30 animate-corner-pulse" />
        </div>

        {/* Animated corner marks - top right */}
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-500/30 animate-corner-pulse-delay" />
        </div>

        {/* Animated corner marks - bottom left */}
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-500/30 animate-corner-pulse-delay" />
        </div>

        {/* Animated corner marks - bottom right */}
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/30 animate-corner-pulse" />
        </div>

        {/* Subtle centered glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Toast state={state} onSave={handleSave} onReset={handleReset} />
      </div>
    </div>
  )
}
