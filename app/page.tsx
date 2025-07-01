"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Lightbulb, Users, Zap } from "lucide-react"
import Button from "@/components/Button"
import ThemeCard from "@/components/ThemeCard"

const themes = [
  {
    id: "future-work-ai",
    title: "Future of Work & AI",
    description: "Revolutionizing productivity with AI-powered solutions",
    icon: "🤖",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "sustainable-tech",
    title: "Sustainable Tech",
    description: "Climate solutions through innovative technology",
    icon: "🌱",
    color: "from-green-400 to-green-600",
  },
  {
    id: "digital-health",
    title: "Digital Health",
    description: "Transforming healthcare with digital innovation",
    icon: "💚",
    color: "from-teal-400 to-teal-600",
  },
]

export default function Home() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              TechInnovate
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering innovation across 7 key technology domains. Join us in shaping the future of technology and
              society.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/themes">
                <Button variant="primary" size="lg">
                  Explore Themes <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/submit-idea">
                <Button variant="secondary" size="lg">
                  Submit Your Idea <Lightbulb className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose TechInnovate?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building the future through collaborative innovation and cutting-edge technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-blue-500" />,
                title: "Innovation First",
                description: "Cutting-edge solutions for tomorrow's challenges",
              },
              {
                icon: <Users className="w-12 h-12 text-green-500" />,
                title: "Collaborative Platform",
                description: "Connect with innovators and industry experts",
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
                title: "Idea to Reality",
                description: "Transform concepts into impactful solutions",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Themes */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Innovation Themes</h2>
            <p className="text-xl text-gray-600">Explore our key focus areas driving technological advancement</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ThemeCard theme={theme} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/themes">
              <Button variant="primary" size="lg">
                View All Themes <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
