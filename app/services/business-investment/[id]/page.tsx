'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { businessTypesWithImages, businessTypes } from '@/constants/content'

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  // Try new structure first, then fall back to old structure for compatibility
  let business = businessTypesWithImages.find(b => b.id === params.id)
  
  // Handle legacy IDs
  if (!business) {
    const legacyBusiness = businessTypes.find(b => b.id === params.id)
    if (legacyBusiness) {
      // Convert legacy to new format
      business = {
        ...legacyBusiness,
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    }
  }

  if (!business) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={business.imageUrl || 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
            alt={business.name}
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
              href="/services/business-investment" 
              className="text-primary-200 hover:text-white mb-4 inline-block transition-colors"
            >
              ← Back to Business Investment
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {business.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg">
              {business.description}
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
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">About {business.name} in New Zealand</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {business.name} represent a significant opportunity in New Zealand's business landscape. 
                    These businesses often provide stable cash flow, established customer bases, and 
                    opportunities for both hands-on operators and passive investors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The New Zealand market for {business.name.toLowerCase()} offers unique advantages including 
                    regulatory stability, strong local demand, and potential for growth. Whether you're 
                    looking to operate the business yourself or invest with management in place, we can 
                    help you find the right opportunity.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why It's Attractive for Investors</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {business.name} in New Zealand offer several compelling reasons for investment:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {business.highlights.map((highlight, index) => (
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
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Typical Price Ranges</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Investment levels for {business.name.toLowerCase()} typically range from:
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-300 shadow-lg"
                  >
                    <p className="text-3xl font-bold text-primary-700 mb-2">{business.priceRange}</p>
                    <p className="text-gray-600 text-sm">
                      Prices vary based on location, size, profitability, and business assets. 
                      We can provide detailed information on specific opportunities.
                    </p>
                  </motion.div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Suitable For</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {business.name} are particularly well-suited for {business.suitableFor}. 
                    These businesses may also align with New Zealand immigration pathways for 
                    investors and entrepreneurs, though specific requirements should be discussed 
                    with immigration advisors.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 p-6 rounded-lg border border-primary-200 sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Highlights</h3>
                <ul className="space-y-3 mb-6">
                  {business.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Price Range</p>
                    <p className="text-lg font-bold text-primary-700">{business.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Suitable For</p>
                    <p className="text-sm text-gray-600">{business.suitableFor}</p>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in {business.name}?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss available opportunities and learn more about investing in 
              {business.name.toLowerCase()} in New Zealand.
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

