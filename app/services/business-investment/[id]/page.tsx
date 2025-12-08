import { businessTypesWithImages, businessTypes } from '@/constants/content'
import BusinessDetailClient from './BusinessDetailClient'

// Generate static params for all business types
export async function generateStaticParams() {
  // Combine both arrays and get unique IDs
  const allBusinessIds = [
    ...businessTypesWithImages.map(b => b.id),
    ...businessTypes.map(b => b.id)
  ]
  const uniqueIds = Array.from(new Set(allBusinessIds))
  
  return uniqueIds.map((id) => ({
    id: id,
  }))
}

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  return <BusinessDetailClient id={params.id} />
}
