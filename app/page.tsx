'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  HomeIcon,
  BuildingOffice2Icon,
  UsersIcon,
  HeartIcon,
  ChartBarSquareIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  StarIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  HandThumbUpIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { services, whyNewZealand, whyChooseUs, statistics, testimonials, processSteps } from '@/constants/content'

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 150])
  const y2 = useTransform(scrollY, [0, 300], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Business investment and property opportunities"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/80" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {/* Rotating Torch Effect */}
          <div className="torch-container absolute inset-0 flex items-center justify-center">
            <div className="torch-light" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
              >
                Business & Investment
                <br />
                <span className="text-accent-300">Opportunities Worldwide</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg"
              >
                Expert guidance for migrants and investors seeking business purchases, property investments, 
                recruitment services, and medical tourism worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button onClick={scrollToContact} variant="secondary" className="text-lg px-8 py-4 pulse-glow">
                  Enquire Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-primary-50 mb-3 flex items-center justify-center"
                >
                  {index === 0 && <ChartBarSquareIcon className="w-10 h-10" />}
                  {index === 1 && <ClockIcon className="w-10 h-10" />}
                  {index === 2 && <BuildingStorefrontIcon className="w-10 h-10" />}
                  {index === 3 && <StarIcon className="w-10 h-10" />}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-primary-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive services to help you succeed worldwide"
            center
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard
                title={services.property.title}
                description={services.property.description}
                href="/services/property"
                icon={<HomeIcon className="w-7 h-7" />}
                delay={0}
                imageUrl="/images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard
                title={services.businessInvestment.title}
                description={services.businessInvestment.description}
                href="/services/business-investment"
                icon={<BuildingOffice2Icon className="w-7 h-7" />}
                delay={0}
                imageUrl="/images/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard
                title={services.jobsManpower.title}
                description={services.jobsManpower.description}
                href="/services/jobs-manpower"
                icon={<UsersIcon className="w-7 h-7" />}
                delay={0}
                imageUrl="/images/tristan-ruark-UO2_cLRI4YE-unsplash.jpg"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard
                title={services.medicalTourism.title}
                description={services.medicalTourism.description}
                href="/services/medical-tourism"
                icon={<HeartIcon className="w-7 h-7" />}
                delay={0}
                imageUrl="/images/mina-rad-UYBAbwaqNIg-unsplash.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Worldwide Section with Images */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Worldwide"
            subtitle="Discover what makes global markets ideal destinations for investment and migration"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNewZealand.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white p-6 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <Image
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : index === 1
                      ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : index === 2
                      ? "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Icon/Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-4 float-animation"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -ml-48 -mt-48" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Our proven 5-step process to help you succeed in New Zealand"
            center
          />
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />
            
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
              className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-primary-300 transition-all hover:shadow-xl text-center h-full">
                    {/* Step Number Badge */}
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <div className="absolute inset-0 bg-primary-100 rounded-full blur-md opacity-50" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-primary-600 mb-3 flex justify-center">
                      {step.step === 1 && <PhoneIcon className="w-8 h-8" />}
                      {step.step === 2 && <MagnifyingGlassIcon className="w-8 h-8" />}
                      {step.step === 3 && <ClipboardDocumentCheckIcon className="w-8 h-8" />}
                      {step.step === 4 && <HandThumbUpIcon className="w-8 h-8" />}
                      {step.step === 5 && <CheckCircleIcon className="w-8 h-8" />}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real stories from successful investors and migrants"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Professional business consultation and partnership"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Your trusted partner for success worldwide"
            center
          />
          <div className="max-w-3xl mx-auto">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="space-y-4"
            >
              {whyChooseUs.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100
                      }
                    }
                  }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="text-accent-400 mr-3 text-2xl font-bold flex-shrink-0"
                  >
                    ✓
                  </motion.span>
                  <span className="text-white text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="mt-8 text-center"
            >
              <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Stay Updated with NZ Investment Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest business opportunities, property listings, and immigration updates.
            </p>
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <Button variant="primary" className="px-6 py-3">
                Subscribe
              </Button>
            </motion.form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600 text-sm uppercase tracking-wide font-semibold mb-4">
              Trusted & Certified
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
              <div className="flex items-center space-x-2 text-gray-700">
                <BuildingOfficeIcon className="w-6 h-6 text-primary-600" />
                <span className="font-medium">NZ Registered</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
                <span className="font-medium">Licensed Advisors</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                  <HandThumbUpIcon className="w-6 h-6 text-primary-600" />
                <span className="font-medium">Trusted Partners</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <StarIcon className="w-6 h-6 text-primary-600" />
                <span className="font-medium">5-Star Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-section" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
            alt="Contact us for business investment opportunities"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Contact us today to discuss your business investment or immigration needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link href="/contact">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white rounded-full p-4 shadow-2xl flex items-center space-x-2 hover:bg-primary-700 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="hidden md:inline font-medium">Get Help</span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

