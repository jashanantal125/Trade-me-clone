'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const values = [
  {
    title: 'Trust',
    description: 'Building long-term relationships based on transparency and integrity.',
  },
  {
    title: 'Experience',
    description: 'Deep knowledge of global business, property, and immigration landscape.',
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
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Rotating Torch Effect */}
        <div className="torch-container absolute inset-0 flex items-center justify-center">
          <div className="torch-light" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              Your trusted partner for business investment and immigration services worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experienced professionals behind FBIS"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-200 shadow-lg">
                  <Image
                    src="/images/tarsem.png"
                    alt="Mr. Tarsem Singh"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Tarsem Singh</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Education</h4>
                  <p className="text-sm text-gray-600">
                    M-Tech. in Electronics and Communication from KUK University
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Experience</h4>
                  <p className="text-sm text-gray-600">
                    Co-founder and Director of Ganpati House of Achievers, an overseas education consultancy (Est. 2014)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-200 shadow-lg">
                  <Image
                    src="/images/sanjeev.png"
                    alt="Mr. Sanjeev Saini"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Sanjeev Saini</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Education</h4>
                  <p className="text-sm text-gray-600">
                    Master&apos;s degree in International Business from Kurukshetra University
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Experience</h4>
                  <p className="text-sm text-gray-600">
                    Founder and CEO of Ganpati House of Achievers, an overseas education consultancy (Est. 2014)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-200 shadow-lg">
                  <Image
                    src="/images/arun.jpeg"
                    alt="Mr. Arun Kumar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Arun Kumar</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Education</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bachelor in Commerce (Punjab University)</li>
                    <li>• MBA in Finance and Sales</li>
                    <li>• PGDBA Level-8 (Auckland University) - Logistics and Supply Chain Management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-2">Experience</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sales & Marketing</li>
                    <li>• Finance & Logistics</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
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
                        At FBIS, we are dedicated to helping migrants and investors successfully navigate 
                the global business and property landscape. We understand that investing in a 
                new country can be complex, and we&apos;re here to provide expert guidance every step of the way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to connect ambitious individuals with opportunities that align with 
                their goals, whether that&apos;s purchasing a business, investing in property, finding 
                employment, or accessing quality healthcare worldwide.
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
                We envision a future where global markets continue to be destinations of choice for 
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
                  With years of experience in global business and property markets, our team 
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
              Contact us today to discuss how we can help you achieve your goals worldwide.
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

