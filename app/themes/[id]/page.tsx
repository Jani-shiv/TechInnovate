"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Users, Lightbulb, TrendingUp } from "lucide-react"
import Button from "@/components/Button"

const themeData: Record<string, any> = {
  "future-work-ai": {
    title: "Future of Work & AI Productivity",
    description: "Revolutionizing how we work with AI-powered tools, automation, and human-AI collaboration solutions.",
    icon: "🤖",
    color: "from-blue-400 to-blue-600",
    challenges: [
      "AI-powered productivity tools",
      "Remote work optimization",
      "Human-AI collaboration interfaces",
      "Automated workflow systems",
    ],
    stats: {
      projects: 45,
      contributors: 230,
      solutions: 12,
    },
  },
  "sustainable-tech": {
    title: "Sustainable Tech & Climate Solutions",
    description: "Developing green technologies, renewable energy solutions, and climate-positive innovations.",
    icon: "🌱",
    color: "from-green-400 to-green-600",
    challenges: [
      "Renewable energy systems",
      "Carbon footprint tracking",
      "Sustainable manufacturing",
      "Green transportation",
    ],
    stats: {
      projects: 38,
      contributors: 195,
      solutions: 8,
    },
  },
  "digital-health": {
    title: "Digital Health & Wellbeing",
    description: "Transforming healthcare through telemedicine, health monitoring, and wellness technologies.",
    icon: "💚",
    color: "from-teal-400 to-teal-600",
    challenges: [
      "Telemedicine platforms",
      "Health monitoring devices",
      "Mental wellness apps",
      "Medical data analytics",
    ],
    stats: {
      projects: 52,
      contributors: 310,
      solutions: 15,
    },
  },
}

export default function ThemeDetail() {
  const params = useParams()
  const themeId = params.id as string
  const theme = themeData[themeId]

  if (!theme) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Theme not found</h1>
          <Link href="/themes">
            <Button variant="primary">Back to Themes</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 gradient-bg min-h-screen">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/themes" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Themes
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div
              className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center text-4xl`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {theme.icon}
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{theme.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{theme.description}</p>
              <Link href="/submit-idea">
                <Button variant="primary" size="lg">
                  Submit Your Idea <Lightbulb className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                label: "Active Projects",
                value: theme.stats.projects,
              },
              {
                icon: <Users className="w-8 h-8 text-green-500" />,
                label: "Contributors",
                value: theme.stats.contributors,
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
                label: "Solutions Deployed",
                value: theme.stats.solutions,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Key Challenge Areas</h2>
            <p className="text-xl text-gray-600">Focus areas where we need innovative solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {theme.challenges.map((challenge: string, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{challenge}</h3>
                <p className="text-gray-600">
                  Explore innovative approaches and contribute your ideas to solve this challenge.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
