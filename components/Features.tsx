'use client'

import { motion } from 'framer-motion'

const features = [
  { icon: '⬆️', title: 'Upload License' },
  { icon: '🔍', title: 'Get Valuation' },
  { icon: '💸', title: 'Receive Payment' },
  { icon: '⚡', title: 'Fast & Secure' },
]

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

const iconVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

const titleVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="how" className="w-full text-center py-16">
      {/* Section heading */}
      <motion.h3
        className="text-3xl font-bold mb-8"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        How It Works
      </motion.h3>

      {/* Features grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="flex flex-col items-center">
            {/* Icon slides down */}
            <motion.div
              variants={iconVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-4xl mb-2"
            >
              {f.icon}
            </motion.div>

            {/* Title slides up */}
            <motion.span
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
              className="text-xl font-medium"
            >
              {f.title}
            </motion.span>
          </div>
        ))}
      </div>
    </section>
  )
}
