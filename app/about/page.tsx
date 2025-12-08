'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const values = [
  {
    title: 'Trust',
    description: 'Building long-term relationships based on transparency and integrity.',
  },
  {
    title: 'Experience',
    description: 'Deep knowledge of New Zealand business, property, and immigration landscape.',
  },
  {
    title: 'Network',
    description: 'Extensive connections with sellers, agents, legal professionals, and service providers.',
  },
  {
    title: 'Guidance',
    description: 'Personalized support from initial inquiry through to successful settlement.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              Your trusted partner for business investment and immigration services in New Zealand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Trade-me, we are dedicated to helping migrants and investors successfully navigate 
                the New Zealand business and property landscape. We understand that investing in a 
                new country can be complex, and we&apos;re here to provide expert guidance every step of the way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to connect ambitious individuals with opportunities that align with 
                their goals, whether that&apos;s purchasing a business, investing in property, finding 
                employment, or accessing quality healthcare in New Zealand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a future where New Zealand continues to be a destination of choice for 
                investors and migrants seeking quality of life, business opportunities, and a 
                stable environment. Through our services, we aim to contribute to this vision by 
                facilitating successful investments and smooth transitions for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-50 p-6 rounded-lg border border-primary-200 text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Experience</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With years of experience in New Zealand&apos;s business and property markets, our team 
                  has helped numerous clients successfully invest, migrate, and establish themselves 
                  in the country. We understand the nuances of different business types, property 
                  markets, and immigration pathways.
                </p>
                <p>
                  Our expertise spans across various sectors including retail, hospitality, agriculture, 
                  and professional services. We maintain strong relationships with business brokers, 
                  real estate agents, legal professionals, and immigration advisors to provide 
                  comprehensive support to our clients.
                </p>
                <p>
                  Whether you&apos;re looking to purchase a petrol station, invest in commercial property, 
                  find employment opportunities, or access medical services, we have the knowledge and 
                  network to help you succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your goals in New Zealand.
            </p>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

