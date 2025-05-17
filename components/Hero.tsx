'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  // The full text to type out
  const fullText = '  Softsell - Sell Your Software Licenses Fastly '
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typewriter effect: add one character every 100ms
  useEffect(() => {
    let idx = 0
    const interval = setInterval(() => {
      if (idx < fullText.length-1) {
        setDisplayed((prev) => prev + fullText[idx])
        idx++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Blinking cursor every 500ms
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <section className="w-full text-center py-16 " id="hero">
      <h1 className="mx-auto max-w-3xl text-4xl md:text-5xl lg:text-3xl font-extrabold leading-tight text-white">
        {displayed}
        <span className="inline-block w-[1ch]">
          {cursorVisible ? '|' : '\u00A0'}
        </span>
      </h1>
       <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 1.6 }}
        className="mt-4 text-lg text-gray-300 max-w-xl mx-auto"
      >
        Monetize unused licenses with just a few clicks.
      </motion.p>

      <button
        onClick={() =>
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="
          inline-block mt-8 px-8 py-4
          bg-gray-900/60 backdrop-blur-lg
          rounded-2xl
          text-white font-semibold
          shadow-[0_0_20px_rgba(94,117,255,0.25)]
          ring-1 ring-white/10
          hover:shadow-[0_0_25px_rgba(94,117,255,0.35)]
          transition
        "
      >
        Get a Quote
      </button>
    </section>
  )
}
