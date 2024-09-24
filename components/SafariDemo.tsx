"use client"

import { useState, ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the prop types for the Safari component
interface SafariProps {
  url: string
  className?: string
  children: ReactNode
}

const Safari = ({ url, className = "", children }: SafariProps) => (
  <div className={`border rounded-lg overflow-hidden ${className}`}>
    <div className="bg-gray-200 p-2 flex items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="mx-auto bg-white rounded px-2 py-1 text-sm">{url}</div>
    </div>
    <div className="bg-white">{children}</div>
  </div>
)

const slides = [
  "https://via.placeholder.com/1200x750",
  "https://via.placeholder.com/1200x750",
  "https://via.placeholder.com/1200x750",
  "https://via.placeholder.com/1200x750?text=GIF", // Placeholder for GIF
]

export function SafariDemo() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <Safari url="growtechie.ed" className="w-full aspect-[16/10] md:aspect-[16/9]">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover rounded-md" // Added rounded corners for aesthetics
        />
      </Safari>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* "..." indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">
        ...
      </div>
    </div>
  )
}
