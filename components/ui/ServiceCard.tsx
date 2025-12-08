'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: string
  delay?: number
  imageUrl?: string
}

const ServiceCard = ({ title, description, href, icon, delay = 0, imageUrl }: ServiceCardProps) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ]
  
  const image = imageUrl || defaultImages[Math.floor(Math.random() * defaultImages.length)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-hover h-full"
    >
      <Link href={href}>
        <motion.div
          whileHover={{ y: -8 }}
          className="relative bg-white rounded-xl shadow-lg p-0 h-full border border-gray-200 hover:border-primary-300 overflow-hidden group"
        >
          {/* Image Background */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Icon Overlay */}
            {icon && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.2, type: "spring" }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg"
              >
                {icon}
              </motion.div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
            >
              Learn more
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.span>
          </div>
          
          {/* Hover Effect Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard

