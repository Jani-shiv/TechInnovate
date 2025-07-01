"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Theme {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

interface ThemeCardProps {
  theme: Theme
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-32 bg-gradient-to-br ${theme.color} flex items-center justify-center`}>
        <span className="text-4xl">{theme.icon}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{theme.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{theme.description}</p>

        <Link href={`/themes/${theme.id}`}>
          <motion.div
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Explore Theme
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
