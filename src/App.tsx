import { useEffect, useState } from 'react';
import { ShieldCheck, Microscope, Truck, Award, CheckCircle2, Users, Store, Leaf, Droplet, Sparkles, Wine } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Hemp CBD Superstore"
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="https://shop.hempcbdsuperstore.com" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Shop Now
              </a>
              <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Wholesale / B2B
              </a>
              <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
            <a
              href="https://shop.hempcbdsuperstore.com"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Shop Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Hemp Products.<br />
              <span className="text-teal-600">Delivered to Your Door.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              A trusted marketplace for hemp-derived cannabinoids including CBD, Delta-9 THC (hemp-derived),
              THCa, CBN, and CBG, plus hemp Delta-9 THC beverages — serving consumers and businesses nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://shop.hempcbdsuperstore.com"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
              >
                Shop Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://shop.hempcbdsuperstore.com/pages/contact"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Wholesale & B2B
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Bar */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <ShieldCheck className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Farm Bill Compliant</h3>
              <p className="text-sm text-gray-600">≤0.3% Delta-9 THC by dry weight</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Microscope className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Third-Party Lab Tested</h3>
              <p className="text-sm text-gray-600">Verified quality & purity</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Truck className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Nationwide Shipping*</h3>
              <p className="text-sm text-gray-600">Fast & discreet delivery</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Trusted Brands</h3>
              <p className="text-sm text-gray-600">Carefully vetted manufacturers</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">*Shipping subject to state and local laws.</p>
        </div>
      </section>

      {/* One-Stop Hemp Marketplace */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Complete Hemp Wellness Destination
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hemp CBD Superstore is a curated marketplace for high-quality hemp-derived products.
              From everyday wellness to functional beverages, we bring together trusted brands,
              transparent lab testing, competitive pricing, and reliable fulfillment — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Droplet className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CBD Products</h3>
              <p className="text-gray-600">
                Oils, tinctures, gummies, topicals, and daily wellness essentials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Leaf className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hemp-Derived Delta-9 THC</h3>
              <p className="text-gray-600">
                Federally compliant Delta-9 THC products sourced from hemp.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Sparkles className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">THCa, CBN & CBG</h3>
              <p className="text-gray-600">
                Popular and emerging cannabinoids with growing demand.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Wine className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hemp Delta-9 THC Drinks</h3>
              <p className="text-gray-600">
                Precisely dosed beverages and seltzers with consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Consumers and Businesses */}
      <section id="b2b" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Direct-to-Consumer and B2B Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Direct-to-Consumer</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Easy online ordering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discreet, fast shipping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clear lab results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Trusted national brands</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">B2B / Wholesale</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk and wholesale pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Retail-ready products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Distribution-friendly SKUs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scalable supply for retailers, bars, and hospitality</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://shop.hempcbdsuperstore.com"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
            >
              Enter the Store
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Hemp CBD Superstore */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Hemp CBD Superstore
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Carefully vetted brands and manufacturers</h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent compliance standards</h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistent quality and testing</h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive pricing</h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable fulfillment</h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">One platform for multiple cannabinoids</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hemp Wellness, Simplified.
          </h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Whether you're shopping for yourself or sourcing for your business, Hemp CBD Superstore
            makes it easy to access compliant, high-quality hemp products in one trusted marketplace.
          </p>
          <a
            href="https://shop.hempcbdsuperstore.com"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
          >
            Shop Hemp Products
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <img
                src="/logo.svg"
                alt="Hemp CBD Superstore"
                className="h-12 w-auto mb-6"
              />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted marketplace for premium hemp-derived products, serving consumers and businesses nationwide.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://shop.hempcbdsuperstore.com" className="hover:text-teal-400 transition-colors">
                    Shop Now
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="hover:text-teal-400 transition-colors">
                    Wholesale / B2B
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/pages/contact" className="hover:text-teal-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/policies/privacy-policy" className="hover:text-teal-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://shop.hempcbdsuperstore.com/policies/terms-of-service" className="hover:text-teal-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Compliance Disclaimer:</strong> All products sold are derived from hemp and comply with federal law.
              These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure,
              or prevent any disease. Product availability and legality may vary by state.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © 2026 Hemp CBD Superstore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
