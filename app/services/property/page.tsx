'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { propertyTypes } from '@/constants/content'

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Property"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-700/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
            >
              Property Advisory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg"
            >
              Expert guidance on residential, commercial, and industrial property investments in New Zealand. 
              Helping migrants and investors make informed property decisions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Property Types"
            subtitle="Explore different property investment opportunities in New Zealand"
            center
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {propertyTypes.map((property, index) => (
              <motion.div
                key={property.id}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full"
              >
                <Link href={`/services/property/${property.id}`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative bg-white rounded-xl shadow-lg p-0 h-full border border-gray-200 hover:border-primary-300 overflow-hidden group"
                  >
                    {/* Image Background */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={property.imageUrl}
                        alt={property.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg">
                        <p className="text-sm font-bold">{property.priceRange}</p>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                          {property.name}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {property.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {property.examples.map((example, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                      >
                        Learn more
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    {/* Hover Effect Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500 pointer-events-none" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Invest in New Zealand Property?</h2>
              <p className="text-lg text-gray-600 mb-8">
                New Zealand offers a stable property market with transparent regulations, strong property rights, 
                and excellent growth potential. Whether you're looking for residential homes, commercial spaces, 
                or industrial facilities, we help you navigate the entire investment process.
              </p>
              <p className="text-lg text-gray-600">
                Our team provides comprehensive guidance from property selection to transaction completion, 
                ensuring you make informed decisions that align with your investment goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
