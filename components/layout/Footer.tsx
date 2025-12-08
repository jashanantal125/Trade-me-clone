import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BFIS</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for business investment and immigration services worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/property" className="hover:text-white transition-colors">
                  Property
                </Link>
              </li>
              <li>
                <Link href="/services/business-investment" className="hover:text-white transition-colors">
                  Business Investment
                </Link>
              </li>
              <li>
                <Link href="/services/jobs-manpower" className="hover:text-white transition-colors">
                  Jobs & Manpower
                </Link>
              </li>
              <li>
                <Link href="/services/medical-tourism" className="hover:text-white transition-colors">
                  Medical Tourism
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@bfis.co.nz</li>
              <li>Phone: +64 9 XXX XXXX</li>
              <li>Worldwide Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BFIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

