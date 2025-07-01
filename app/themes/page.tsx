"use client"

import { motion } from "framer-motion"
import ThemeCard from "@/components/ThemeCard"

const themes = [
  {
    id: "future-work-ai",
    title: "Future of Work & AI Productivity",
    description: "Revolutionizing how we work with AI-powered tools, automation, and human-AI collaboration solutions.",
    icon: "🤖",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "sustainable-tech",
    title: "Sustainable Tech & Climate Solutions",
    description: "Developing green technologies, renewable energy solutions, and climate-positive innovations.",
    icon: "🌱",
    color: "from-green-400 to-green-600",
  },
  {
    id: "digital-health",
    title: "Digital Health & Wellbeing",
    description: "Transforming healthcare through telemedicine, health monitoring, and wellness technologies.",
    icon: "💚",
    color: "from-teal-400 to-teal-600",
  },
  {
    id: "smart-bharat",
    title: "Smart Bharat (Rural Innovation)",
    description: "Bridging the digital divide with solutions for rural communities and emerging markets.",
    icon: "🏘️",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Digital Trust",
    description: "Building secure digital infrastructure, privacy protection, and trust in digital systems.",
    icon: "🔒",
    color: "from-red-400 to-red-600",
  },
  {
    id: "cloud-scale",
    title: "Cloud-First Scale Solutions",
    description: "Scalable cloud architectures, distributed systems, and next-generation infrastructure.",
    icon: "☁️",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "open-innovation",
    title: "Open Innovation",
    description: "Community-driven problem solving and user-submitted challenges across all domains.",
    icon: "🌟",
    color: "from-pink-400 to-pink-600",
  },
]

export default function Themes() {
  return (
    <div className="pt-20 gradient-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovation Themes
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our seven key domains driving technological advancement and shaping the future of innovation.
          </motion.p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ThemeCard theme={theme} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
