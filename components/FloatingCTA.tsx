"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function FloatingCTA() {
  return (
    <Link href="/submit-idea">
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </Link>
  )
}
