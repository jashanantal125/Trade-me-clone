import { propertyTypes } from '@/constants/content'
import PropertyDetailClient from './PropertyDetailClient'

// Generate static params for all property types
export async function generateStaticParams() {
  return propertyTypes.map((property) => ({
    id: property.id,
  }))
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return <PropertyDetailClient id={params.id} />
}
