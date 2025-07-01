"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Button from "@/components/Button"

export default function Contact() {
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
            Get In Touch
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about our platform? Want to collaborate? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-blue-500" />,
                    title: "Email",
                    content: "hello@techinnovate.com",
                    subtitle: "We'll respond within 24 hours",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-green-500" />,
                    title: "Phone",
                    content: "+91 11111 11111",
                    subtitle: "Mon-Fri, 9AM-6PM PST",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-purple-500" />,
                    title: "Address",
                    content: "123 Innovation Street",
                    subtitle: "Ahmedabad, Gujarat..",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-orange-500" />,
                    title: "Business Hours",
                    content: "Monday - Friday",
                    subtitle: "9:00 AM - 6:00 PM PST",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
