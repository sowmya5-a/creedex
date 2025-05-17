'use client'

import { motion } from 'framer-motion'
import {
  BoltIcon,
  ShieldCheckIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'

const containerVariants = {
  hidden: { },
  visible: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20">
      <h2 className="text-4xl font-semibold text-center text-white mb-12">
        Why Choose Us
      </h2>

      {/* motion.ul as the parent to stagger its children */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="bg-[#17171e]/50 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <BoltIcon className="w-10 h-10 mb-4 text-indigo-500" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Fast & Secure
          </h3>
          <p className="text-gray-300">
            Lightning-fast payouts with bank-grade security.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="bg-[#17171e]/50 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <ShieldCheckIcon className="w-10 h-10 mb-4 text-green-400" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Buyer Protection
          </h3>
          <p className="text-gray-300">
            Secure transactions guaranteed for buyers and sellers.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="bg-[#17171e]/50 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <CreditCardIcon className="w-10 h-10 mb-4 text-yellow-400" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Flexible Options
          </h3>
          <p className="text-gray-300">
            Multiple payment and license transfer methods.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
