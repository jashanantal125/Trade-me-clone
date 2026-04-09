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

type BusinessDetailPageParams = { id: string } | Promise<{ id: string }>

export default async function BusinessDetailPage({ params }: { params: BusinessDetailPageParams }) {
  const resolvedParams = await params
  return <BusinessDetailClient id={resolvedParams.id} />
}
