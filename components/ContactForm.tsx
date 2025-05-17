'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

/** 
 * A reusable floating‐label field that works for <input>, <textarea>, or <select>.
 */
function FloatingField({
  id,
  label,
  as = 'input',
  type = 'text',
  children,
  ...props
}: {
  id: string
  label: string
  as?: 'input' | 'textarea' | 'select'
  type?: string
  children?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>) {
const Tag = as as React.ElementType
  return (
    <div className="relative">
      <Tag
        id={id}
        type={type}
        placeholder={label}
        className={`
          peer block w-full bg-white/5 backdrop-blur-sm px-4
          ${as === 'textarea' ? 'pt-6 pb-20' : 'pt-6 pb-2'}
          rounded-lg border-2 transition
          focus:border-indigo-400 focus:outline-none
          text-white placeholder-transparent
          
        `}
        {...props}
      >
        {children}
      </Tag>
      <label
        htmlFor={id}
        className="
          absolute left-4 top-2 text-sm text-gray-300
          transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
          peer-focus:top-2 peer-focus:text-sm
        "
      >
        {label}
      </label>
      { 
        <p className="mt-1 text-xs text-red-400"></p>
      }
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = 'Please enter a valid email'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      alert('Thank you! Your message has been sent.')
      setForm({ name: '', email: '', company: '', license: '', message: '' })
    }
  }

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.12,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  }

  return (
    <motion.section
      id="contact"
      className="py-12 px-4 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.div
        className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl"
        variants={item}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-8"
          variants={item}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={item}
        >
          {/* Row 1 */}
          <motion.div variants={item}>
            <FloatingField
              id="name"
              label="Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              data-has-error={errors.name}
            />
          </motion.div>
          <motion.div variants={item}>
            <FloatingField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              data-has-error={errors.email}
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={item}>
            <FloatingField
              id="company"
              label="Company"
              value={form.company}
              onChange={e =>
                setForm(f => ({ ...f, company: e.target.value }))
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <FloatingField
              id="license"
              label="License Type"
              as="select"
              value={form.license}
              onChange={e =>
                setForm(f => ({ ...f, license: e.target.value }))
              }
            >
              <option value="" hidden>
                
              </option>
              <option value="single" className="text-black">Single User</option>
              <option value="enterprise" className="text-black">Enterprise</option>
            </FloatingField>
          </motion.div>

          {/* Row 3: full width message */}
          <motion.div className="md:col-span-2" variants={item}>
            <FloatingField
              id="message"
              label="Message"
              as="textarea"
              rows={4}
              value={form.message}
              onChange={e =>
                setForm(f => ({ ...f, message: e.target.value }))
              }
            />
          </motion.div>

          {/* Row 4: centered button */}
          <motion.div
            className="md:col-span-2 flex justify-center mt-4"
            variants={item}
          >
            <button
              type="submit"
              className="
                inline-block px-20 py-4
                bg-gray-900/60 backdrop-blur-lg
                rounded-2xl
                text-white font-semibold
                shadow-[0_0_20px_rgba(94,117,255,0.25)]
                ring-1 ring-white/10
                hover:shadow-[0_0_25px_rgba(94,117,255,0.35)]
                transition
              "
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
