'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { propertyTypes } from '@/constants/content'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertyTypes.find(p => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-700/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/services/property" 
              className="text-primary-200 hover:text-white mb-4 inline-block transition-colors"
            >
              ← Back to Property
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {property.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg">
              {property.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">About {property.name} in New Zealand</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {property.name} represents a significant opportunity in New Zealand's property market. 
                    These properties offer diverse investment potential, from capital appreciation to rental 
                    income, depending on your investment strategy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The New Zealand market for {property.name.toLowerCase()} offers unique advantages including 
                    regulatory stability, strong demand, and potential for growth. Whether you're looking to 
                    purchase for personal use, rental income, or long-term investment, we can help you find 
                    the right opportunity.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why It's Attractive for Investors</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {property.name} in New Zealand offer several compelling reasons for investment:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {property.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary-600 mr-3 text-xl flex-shrink-0">✓</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Property Examples</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.examples.map((example, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-primary-50 p-4 rounded-lg border border-primary-200 text-center"
                      >
                        <p className="font-semibold text-primary-700">{example}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 p-6 rounded-xl border border-primary-200 sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Highlights</h3>
                <ul className="space-y-3 mb-6">
                  {property.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 pt-4 border-t border-primary-200">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Price Range</p>
                    <p className="text-2xl font-bold text-primary-700">{property.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples Include:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.examples.slice(0, 3).map((example, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white text-primary-700 rounded text-xs font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" className="w-full">
                    Contact Us for Opportunities
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in {property.name}?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss available opportunities and learn more about investing in 
              {property.name.toLowerCase()} in New Zealand.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

