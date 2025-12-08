'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { businessTypesWithImages } from '@/constants/content'

export default function BusinessInvestmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Business investment"
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
              Business Investment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg"
            >
              Explore diverse business opportunities across New Zealand. From petrol stations to farms, 
              find the right investment that matches your goals and experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Business Types Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business Opportunities"
            subtitle="Browse our catalogue of business types available in New Zealand"
            center
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {businessTypesWithImages.map((business, index) => (
              <motion.div
                key={business.id}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full"
              >
                <Link href={`/services/business-investment/${business.id}`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative bg-white rounded-xl shadow-lg p-0 h-full border border-gray-200 hover:border-primary-300 overflow-hidden group"
                  >
                    {/* Image Background */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={business.imageUrl}
                        alt={business.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg">
                        <p className="text-sm font-bold">{business.priceRange}</p>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                          {business.name}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {business.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Suitable For:</p>
                        <p className="text-gray-600 text-sm">{business.suitableFor}</p>
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Invest in New Zealand Businesses?</h2>
              <p className="text-lg text-gray-600 mb-8">
                New Zealand offers a stable business environment with transparent regulations, strong property rights, 
                and access to global markets. Many business investments can also support immigration pathways for 
                investors and entrepreneurs.
              </p>
              <p className="text-lg text-gray-600">
                Our team helps you navigate the entire process, from identifying suitable opportunities to 
                completing transactions and understanding compliance requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

