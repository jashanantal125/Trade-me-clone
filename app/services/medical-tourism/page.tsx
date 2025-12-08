'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const treatments = [
  'Orthopaedic surgery and joint replacements',
  'Dental procedures and cosmetic dentistry',
  'Cardiac procedures',
  'Plastic and reconstructive surgery',
  'Fertility treatments',
  'Eye surgery and vision correction',
  'Wellness and preventive health programs',
]

const faqs = [
  {
    question: 'What makes New Zealand healthcare attractive for medical tourism?',
    answer: 'New Zealand offers world-class healthcare facilities with internationally trained doctors, modern medical technology, and high standards of care. The country is known for its clean environment, safety, and excellent post-operative recovery conditions.',
  },
  {
    question: 'What is the typical process for medical tourism?',
    answer: 'The process typically involves: initial consultation (can be remote), medical assessment and documentation, visa application support, travel arrangements, treatment in New Zealand, and follow-up care. We guide you through each step.',
  },
  {
    question: 'How long do I need to stay in New Zealand?',
    answer: 'The length of stay depends on the procedure. Minor procedures may require 1-2 weeks, while major surgeries might need 4-8 weeks including recovery time. We help plan your stay based on your specific treatment.',
  },
  {
    question: 'What about costs and insurance?',
    answer: 'Medical tourism costs vary by procedure. We provide transparent cost estimates and can help with payment plans. Some procedures may be covered by international insurance, and we can assist with insurance verification.',
  },
  {
    question: 'Do I need a special visa for medical treatment?',
    answer: 'Yes, you may need a medical treatment visa or visitor visa depending on the length of stay and procedure. We provide guidance on visa requirements and can assist with the application process.',
  },
]

export default function MedicalTourismPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Tourism</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              Access world-class healthcare in New Zealand. Experience high-quality medical treatment 
              in a safe, clean, and beautiful environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose New Zealand for Medical Treatment"
            subtitle="World-class healthcare in a world-class destination"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Healthcare</h3>
              <p className="text-gray-600">
                Internationally accredited hospitals and clinics with experienced medical professionals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Clean Environment</h3>
              <p className="text-gray-600">
                Fresh air, natural beauty, and a peaceful setting ideal for recovery and healing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Access</h3>
              <p className="text-gray-600">
                Well-connected international airports and straightforward visa processes for medical visitors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Types of Treatments"
            subtitle="Comprehensive medical services available in New Zealand"
            center
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <p className="text-gray-700">{treatment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="Step-by-step guidance from consultation to recovery"
            center
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: '1', title: 'Initial Consultation', description: 'We discuss your medical needs, review your medical history, and identify suitable treatment options in New Zealand.' },
                { step: '2', title: 'Documentation & Assessment', description: 'We help gather necessary medical documents, arrange consultations with New Zealand medical professionals, and obtain treatment plans.' },
                { step: '3', title: 'Travel Arrangements', description: 'We assist with visa applications, flight bookings, accommodation near medical facilities, and travel logistics.' },
                { step: '4', title: 'Treatment in New Zealand', description: 'You receive treatment at accredited facilities with ongoing support and translation services if needed.' },
                { step: '5', title: 'Recovery & Follow-up', description: 'Post-treatment care, recovery support, follow-up consultations, and assistance with returning home when ready.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about medical tourism in New Zealand"
            center
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-primary-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Medical Journey?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your medical tourism needs and start planning your treatment in New Zealand.
            </p>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

