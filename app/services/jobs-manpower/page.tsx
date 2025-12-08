'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const industries = [
  {
    name: 'Hospitality',
    description: 'Restaurants, hotels, cafes, and tourism-related positions.',
  },
  {
    name: 'Retail',
    description: 'Store management, sales, and customer service roles.',
  },
  {
    name: 'Construction',
    description: 'Skilled trades, project management, and construction workers.',
  },
  {
    name: 'Healthcare',
    description: 'Nurses, caregivers, and healthcare support staff.',
  },
  {
    name: 'Agriculture',
    description: 'Farm workers, agricultural technicians, and related roles.',
  },
  {
    name: 'Technology',
    description: 'Software developers, IT support, and tech professionals.',
  },
]

export default function JobsManpowerPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Jobs & Manpower</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              Connecting New Zealand businesses with skilled workers, and helping candidates find 
              rewarding opportunities across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Recruitment Services"
            subtitle="Supporting both employers and job seekers in New Zealand"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-6 rounded-lg border border-primary-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">For Employers</h3>
              <p className="text-gray-700 mb-4">
                We help New Zealand businesses find qualified candidates for their workforce needs. 
                Our recruitment process includes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Job requirement analysis and position profiling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Candidate sourcing and screening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Visa and work permit guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Onboarding support</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-accent-50 p-6 rounded-lg border border-accent-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">For Candidates</h3>
              <p className="text-gray-700 mb-4">
                We assist job seekers in finding opportunities that match their skills and career goals. 
                Our services include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">•</span>
                  <span>Career counseling and job matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">•</span>
                  <span>Resume and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">•</span>
                  <span>Work visa application support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">•</span>
                  <span>Relocation assistance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Recruitment across diverse sectors in New Zealand"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">New Zealand Work Culture</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  New Zealand workplaces are known for their collaborative, inclusive, and balanced approach. 
                  The country values work-life balance, diversity, and respect in the workplace.
                </p>
                <p>
                  Employment standards are well-regulated, with minimum wage laws, fair working conditions, 
                  and strong worker protections. Most employers offer competitive packages including annual 
                  leave, sick leave, and professional development opportunities.
                </p>
                <p>
                  For migrants, understanding New Zealand&apos;s work culture and compliance requirements is 
                  essential. We provide guidance on employment contracts, rights, and workplace expectations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an employer seeking talent or a candidate looking for opportunities, 
              we&apos;re here to help.
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

