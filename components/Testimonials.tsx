'use client'

import Image from 'next/image'

const reviews = [
  {
    name: 'Alice Johnson',
    role: 'CTO',
    company: 'TechCorp',
    text: 'SoftSell streamlined our license resale process!',
    avatarId: 32,
  },
  {
    name: 'Mark Lee',
    role: 'CEO',
    company: 'DevWare',
    text: 'Fast, secure, and easy. Highly recommend.',
    avatarId: 47,
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager',
    company: 'SoftWorks',
    text: 'Great support and quick payouts.',
    avatarId: 55,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Engineer',
    company: 'DevLoop',
    text: 'Transparent valuations and fast transactions.',
    avatarId: 65,
  },
]

// duplicate for seamless loop
const looped = [...reviews, ...reviews]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 ">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        What Our Customers Say
      </h2>

      <div className="relative overflow-hidden max-w-3xl mx-auto h-64">
        {/* This inner div scrolls upward */}
        <div className="scroll-vert space-y-8">
          {looped.map((r, i) => (
            <div
              key={i}
              className="flex items-center p-6 bg-[#111218] rounded-lg border border-[#2a2b35]"
            >
              <Image
                src={`https://i.pravatar.cc/64?img=${r.avatarId}`}
                alt={r.name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-white mb-2">"{r.text}"</p>
                <p className="text-gray-400 text-sm">
                  — {r.name}, {r.role} at {r.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
