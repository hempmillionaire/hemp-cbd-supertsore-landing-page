import { useEffect, useState } from 'react';
import { ShieldCheck, Microscope, Truck, Award, CheckCircle2 } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <img
                src="/hemp_cbd_supestore_logo_png.png"
                alt="Hemp CBD Superstore"
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href="https://shop.hempcbdsuperstore.com" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Shop
                </a>
                <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Wholesale / B2B
                </a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  About
                </a>
                <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Contact
                </a>
              </nav>
              <a
                href="https://shop.hempcbdsuperstore.com"
                className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 text-sm font-medium transition-colors"
              >
                Enter Store
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Premium Hemp Products.<br />
              Delivered to Your Door.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Hemp CBD Superstore is a trusted marketplace for hemp-derived cannabinoids — including CBD, hemp-derived Delta-9 THC, THCa, CBN, and CBG — plus hemp Delta-9 THC beverages, serving consumers and businesses nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://shop.hempcbdsuperstore.com"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base font-medium transition-colors inline-block"
              >
                Enter the Store
              </a>
              <a
                href="https://shop.hempcbdsuperstore.com/pages/contact"
                className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors"
              >
                Wholesale & B2B Solutions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <ShieldCheck className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Farm Bill Compliant</h3>
              <p className="text-xs text-gray-600">≤0.3% Delta-9 THC by dry weight</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Microscope className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Third-Party Lab Tested</h3>
              <p className="text-xs text-gray-600">Verified quality & purity</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Truck className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Nationwide Shipping*</h3>
              <p className="text-xs text-gray-600">Fast & discreet delivery</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Trusted Brands & Manufacturers</h3>
              <p className="text-xs text-gray-600">Carefully vetted partners</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">*Shipping subject to state and local laws.</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              What We Offer
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hemp CBD Superstore is a curated marketplace for high-quality hemp-derived products.
              From everyday wellness to functional beverages, we bring together trusted brands,
              transparent lab testing, competitive pricing, and reliable fulfillment — all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-2xl mx-auto">
            <div className="border-l-2 border-gray-900 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Products</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Oils, tinctures, gummies, topicals, and daily wellness essentials.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hemp-Derived Delta-9 THC</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Federally compliant Delta-9 THC products sourced from hemp.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">THCa, CBN & CBG</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Popular and emerging cannabinoids with growing demand.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hemp Delta-9 THC Drinks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Precisely dosed beverages and seltzers with consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Consumers and Businesses */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Built for Consumers and Businesses
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The platform supports direct-to-consumer fulfillment, wholesale and bulk purchasing, and retail, hospitality, and distribution partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct-to-Consumer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Easy online ordering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Discreet, fast shipping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Clear lab results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Trusted national brands</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2B / Wholesale</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Bulk and wholesale pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Retail-ready products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Distribution-friendly SKUs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Scalable supply for retailers, bars, and hospitality</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://shop.hempcbdsuperstore.com"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base font-medium transition-colors inline-block"
            >
              Access the Marketplace
            </a>
          </div>
        </div>
      </section>

      {/* Why Hemp CBD Superstore */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Hemp CBD Superstore
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl mx-auto">
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">Carefully vetted brands and manufacturers</p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">Transparent compliance standards</p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">Consistent quality and testing</p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">Competitive pricing</p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">Reliable fulfillment</p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">One platform for multiple cannabinoids</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Hemp Wellness, Simplified.
          </h2>
          <p className="text-base text-gray-300 mb-10 leading-relaxed">
            Whether you're shopping for yourself or sourcing for your business, Hemp CBD Superstore
            makes it easy to access compliant, high-quality hemp products in one trusted marketplace.
          </p>
          <a
            href="https://shop.hempcbdsuperstore.com"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-medium transition-colors inline-block"
          >
            Shop Hemp Products
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img
                src="/hemp_cbd_supestore_logo_png.png"
                alt="Hemp CBD Superstore"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Your trusted marketplace for premium hemp-derived products, serving consumers and businesses nationwide.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://shop.hempcbdsuperstore.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Wholesale / B2B
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/policies/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/policies/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              <strong className="text-gray-700">Compliance Disclaimer:</strong> All products sold are derived from hemp and comply with federal law.
              These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure,
              or prevent any disease. Product availability and legality may vary by state.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Hemp CBD Superstore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
