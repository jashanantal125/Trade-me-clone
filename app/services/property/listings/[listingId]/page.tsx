import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import { propertyExampleListings, propertyTypes } from '@/constants/content'

type Listing = (typeof propertyExampleListings)[keyof typeof propertyExampleListings][number] & {
  images?: readonly string[]
  description?: string
  details?: readonly string[]
  highlights?: readonly string[]
  features?: readonly string[]
  bedrooms?: string
  bathrooms?: string
  garage?: string
  floorArea?: string
  landArea?: string
  titleType?: string
  listingNumber?: string
  listingDate?: string
  openHomes?: readonly { day: string; time: string; date: string }[]
  deadlineSale?: { day: string; time: string; date: string }
  marketInsights?: {
    heading: string
    period: string
    medianSalePrice: string
    medianChange: string
    activeListings: string
  }
  marketEstimate?: {
    heading: string
    subheading: string
    low: string
    med: string
    high: string
    capitalValue: string
    capitalValueDate: string
  }
  capitalValueBreakdown?: {
    landValue: string
    improvementValue: string
  }
  propertyHistory?: readonly {
    date: string
    event: string
    price: string
    daysOnMarket?: string
  }[]
  additionalFeatures?: readonly string[]
  schools?: readonly {
    name: string
    distance: string
    type: string
    zoning: string
    zoneStatus: string
  }[]
}

const getAllListings = (): Listing[] => {
  return Object.values(propertyExampleListings).flat()
}

export async function generateStaticParams() {
  const fallbackIds = [
    '145-albany-highway-albany',
    '32a-okains-bay-road-robinsons-bay',
    'boutique-tourist-accommodation-west-coast',
    '277-thames-st-oamaru',
    '83-87-port-road-whangarei',
    '78-delta-avenue-new-lynn',
  ]

  const listingIds = Object.values(propertyExampleListings)
    .flatMap((listings) => listings.map((listing) => listing.id))

  return Array.from(new Set([...fallbackIds, ...listingIds])).map((listingId) => ({
    listingId,
  }))
}

export default function PropertyListingDetailPage({
  params,
}: {
  params: { listingId: string }
}) {
  const listing = getAllListings().find((item) => item.id === params.listingId)

  if (!listing) {
    notFound()
  }

  const propertyType = propertyTypes.find((type) => type.id === listing.type)
  const galleryImages = (listing.images?.length ? listing.images : [listing.imageUrl]) as readonly string[]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-700/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={propertyType ? `/services/property/${propertyType.id}` : '/services/property'}
            className="text-primary-200 hover:text-white mb-4 inline-block transition-colors"
          >
            ← Back to {propertyType?.name ?? 'Property'}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
            {listing.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg">
            {listing.location}
          </p>
          <p className="mt-4 text-2xl font-bold text-white">{listing.priceRange}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {listing.deadlineSale ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Deadline sale</h2>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{listing.deadlineSale.day}</p>
                      <p className="text-sm text-gray-600">{listing.deadlineSale.time}</p>
                      <p className="text-sm text-gray-600">{listing.deadlineSale.date}</p>
                    </div>
                    <button
                      type="button"
                      className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                    >
                      Add to calendar
                    </button>
                  </div>
                </div>
              ) : null}

              {listing.openHomes?.length ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Open homes</h2>
                  <div className="space-y-4">
                    {listing.openHomes.map((openHome, index) => (
                      <div
                        key={`${listing.id}-openhome-${index}`}
                        className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{openHome.day}</p>
                          <p className="text-sm text-gray-600">{openHome.time}</p>
                          <p className="text-sm text-gray-600">{openHome.date}</p>
                        </div>
                        <button
                          type="button"
                          className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                        >
                          Add to calendar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Property details</h2>
                <p className="text-gray-700 leading-relaxed">{listing.description}</p>
                {listing.details?.length ? (
                  <div className="mt-6 space-y-4 text-gray-700">
                    {listing.details.map((detail, index) => (
                      <p key={`${listing.id}-detail-${index}`}>{detail}</p>
                    ))}
                  </div>
                ) : null}
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Photo Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={`${listing.id}-img-${index}`}
                      className="relative h-56 rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={image}
                        alt={`${listing.title} photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Highlights</h2>
                <ul className="space-y-2 text-gray-700">
                  {listing.highlights?.map((highlight, index) => (
                    <li key={`${listing.id}-highlight-${index}`} className="flex items-start">
                      <span className="text-primary-600 mr-3 text-lg">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {listing.additionalFeatures?.length ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Additional features</h2>
                  <ul className="space-y-2 text-gray-700">
                    {listing.additionalFeatures.map((feature, index) => (
                      <li key={`${listing.id}-feature-${index}`} className="flex items-start">
                        <span className="text-primary-600 mr-3 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {listing.marketInsights && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">{listing.marketInsights.heading}</h2>
                  <p className="text-sm text-gray-600 mb-4">{listing.marketInsights.period}</p>
                  {(() => {
                    const areaLabel = listing.marketInsights.heading.replace(/ insights$/i, '')
                    return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Median sale price in {areaLabel}:</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.marketInsights.medianSalePrice}</p>
                      <p className="text-sm text-primary-600">{listing.marketInsights.medianChange}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active sale listings in {areaLabel}:</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.marketInsights.activeListings}</p>
                    </div>
                  </div>
                    )
                  })()}
                </div>
              )}

              {listing.marketEstimate && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">{listing.marketEstimate.heading}</h2>
                  <p className="text-sm text-gray-600 mb-4">{listing.marketEstimate.subheading}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Low</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.marketEstimate.low}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Med</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.marketEstimate.med}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">High</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.marketEstimate.high}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-600">Capital value</p>
                    <p className="text-lg font-semibold text-gray-900">{listing.marketEstimate.capitalValue}</p>
                    <p className="text-xs text-gray-500">Updated {listing.marketEstimate.capitalValueDate}</p>
                  </div>
                </div>
              )}

              {listing.capitalValueBreakdown && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Capital value breakdown</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                    <div>
                      <p className="text-sm text-gray-600">Land value</p>
                      <p className="text-lg font-semibold text-gray-900">{listing.capitalValueBreakdown.landValue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Improvement value</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {listing.capitalValueBreakdown.improvementValue}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {listing.propertyHistory?.length ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Property history</h2>
                  <div className="space-y-4">
                    {listing.propertyHistory.map((history, index) => (
                      <div
                        key={`${listing.id}-history-${index}`}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-gray-900">{history.date}</p>
                          <p className="text-sm text-gray-600">{history.event}</p>
                        </div>
                        <p className="text-base font-semibold text-gray-900">{history.price}</p>
                        {history.daysOnMarket ? (
                          <p className="text-xs text-gray-500">{history.daysOnMarket}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {listing.schools?.length ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Schools and childcare in the area</h2>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-50 text-gray-600">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Name</th>
                          <th className="px-4 py-3 text-left font-semibold">Distance</th>
                          <th className="px-4 py-3 text-left font-semibold">Type</th>
                          <th className="px-4 py-3 text-left font-semibold">Zoning</th>
                          <th className="px-4 py-3 text-left font-semibold">Zone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        {listing.schools.map((school, index) => (
                          <tr key={`${listing.id}-school-${index}`}>
                            <td className="px-4 py-3">{school.name}</td>
                            <td className="px-4 py-3">{school.distance}</td>
                            <td className="px-4 py-3">{school.type}</td>
                            <td className="px-4 py-3">{school.zoning}</td>
                            <td className="px-4 py-3">{school.zoneStatus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Property Details</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {listing.bedrooms && (
                    <li className="flex items-center justify-between">
                      <span>Bedrooms</span>
                      <span className="font-semibold text-gray-900">{listing.bedrooms}</span>
                    </li>
                  )}
                  {listing.bathrooms && (
                    <li className="flex items-center justify-between">
                      <span>Bathrooms</span>
                      <span className="font-semibold text-gray-900">{listing.bathrooms}</span>
                    </li>
                  )}
                  {listing.garage && (
                    <li className="flex items-center justify-between">
                      <span>Garage</span>
                      <span className="font-semibold text-gray-900">{listing.garage}</span>
                    </li>
                  )}
                  {listing.floorArea && (
                    <li className="flex items-center justify-between">
                      <span>Floor Area</span>
                      <span className="font-semibold text-gray-900">{listing.floorArea}</span>
                    </li>
                  )}
                  {listing.landArea && (
                    <li className="flex items-center justify-between">
                      <span>Land Area</span>
                      <span className="font-semibold text-gray-900">{listing.landArea}</span>
                    </li>
                  )}
                  {listing.titleType && (
                    <li className="flex items-center justify-between">
                      <span>Title Type</span>
                      <span className="font-semibold text-gray-900">{listing.titleType}</span>
                    </li>
                  )}
                </ul>

                <div className="mt-6">
                  <Button href="/contact" variant="primary" className="w-full">
                    Enquire About This Property
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
