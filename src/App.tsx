import { useEffect, useState } from 'react';
import { ShieldCheck, Microscope, Globe as Globe2, Award, CheckCircle2, ShoppingBag, Building2, Store, Users, Wine, Truck, Sparkles, Factory, ChevronDown } from 'lucide-react';

const SHOP_URL = 'https://shop.hempcbdsuperstore.com';
const ACCOUNTS_URL = 'https://accounts.hempcbdsuperstore.com/authentication/login';
const HEMP_CAPITAL_URL = 'https://hemp.capital';

const audiences = [
  { icon: Users, label: 'Consumers', desc: 'Everyday hemp products for wellness and lifestyle.' },
  { icon: Store, label: 'Retailers', desc: 'Retail-ready SKUs for shelves and storefronts.' },
  { icon: ShoppingBag, label: 'Smoke Shops', desc: 'Proven cannabinoid categories with steady demand.' },
  { icon: Sparkles, label: 'Wellness Stores', desc: 'Clean-label CBD and functional hemp options.' },
  { icon: Wine, label: 'Bars & Hospitality', desc: 'Hemp-derived Delta-9 beverages for on-premise.' },
  { icon: Truck, label: 'Distributors', desc: 'Distribution-friendly SKUs and pricing.' },
  { icon: Building2, label: 'Hemp Brands', desc: 'Marketplace visibility and partner support.' },
  { icon: Factory, label: 'Manufacturers', desc: 'Channel access and downstream commerce.' },
];

const faqs = [
  {
    q: 'What is Hemp CBD Superstore?',
    a: 'Hemp CBD Superstore is a hemp marketplace connecting consumers, retailers, wholesale buyers, distributors, and brands with compliant hemp-derived products.',
  },
  {
    q: 'Does Hemp CBD Superstore sell CBD products?',
    a: 'Yes. Hemp CBD Superstore supports CBD products including oils, tinctures, gummies, topicals, capsules, and other hemp wellness products.',
  },
  {
    q: 'Does Hemp CBD Superstore offer hemp-derived Delta-9 THC products?',
    a: 'Yes. The marketplace supports hemp-derived Delta-9 THC products where permitted by applicable federal, state, and local law.',
  },
  {
    q: 'Does Hemp CBD Superstore offer wholesale or B2B hemp products?',
    a: 'Yes. Hemp CBD Superstore supports wholesale, retail, hospitality, distribution, and brand partnership opportunities through its business account portal.',
  },
  {
    q: 'Where do I shop for products?',
    a: 'Retail customers can shop directly at shop.hempcbdsuperstore.com.',
  },
  {
    q: 'Where do wholesale buyers or business partners create an account?',
    a: 'Wholesale buyers, retailers, distributors, and brand partners can create or access a business account at accounts.hempcbdsuperstore.com.',
  },
  {
    q: 'Is Hemp CBD Superstore part of Hemp Capital?',
    a: 'Yes. Hemp CBD Superstore is a Hemp Capital company and part of the broader Hemp Capital ecosystem.',
  },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Hemp Capital Badge */}
      <a
        href={HEMP_CAPITAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <img
          src="/20260430_171316092_iOS.png"
          alt="Hemp Capital"
          className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-sm"
        />
        <span className="text-[10px] sm:text-xs font-medium text-gray-600 pr-1">
          A <span className="font-semibold text-gray-900">Hemp Capital</span> Company
        </span>
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <a href="/">
              <img src="/hempcbdsuperstore_logo_new_transparent.png" alt="Hemp CBD Superstore" className="h-10 w-auto" />
            </a>
            <div className="flex items-center gap-6 sm:gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href={SHOP_URL} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Shop
                </a>
                <a href={ACCOUNTS_URL} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Wholesale / B2B
                </a>
                <a href={ACCOUNTS_URL} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  Account Login
                </a>
                <a href="#about" onClick={scrollTo('about')} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                  About
                </a>
              </nav>
              <a
                href={SHOP_URL}
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-5 py-2 text-sm font-medium transition-colors"
              >
                Enter Store
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Your Trusted Hemp Marketplace for Consumers, Retailers, and Brands.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hemp CBD Superstore connects consumers and businesses with compliant, lab-tested hemp-derived products including CBD, hemp-derived Delta-9 THC, THCa, CBN, CBG, and functional hemp beverages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SHOP_URL}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 text-base font-medium transition-colors"
            >
              Enter Retail Store
            </a>
            <a
              href={ACCOUNTS_URL}
              className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3.5 text-base font-medium transition-colors text-center"
            >
              Create Business Account
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            <div>
              <ShieldCheck className="w-7 h-7 text-gray-700 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Farm Bill Compliant</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hemp-derived products sourced from federally compliant suppliers.
              </p>
            </div>
            <div>
              <Microscope className="w-7 h-7 text-gray-700 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Third-Party Lab Tested</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Products selected with quality, transparency, and testing standards in mind.
              </p>
            </div>
            <div>
              <Globe2 className="w-7 h-7 text-gray-700 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Nationwide Marketplace</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Serving consumers and businesses across the United States where permitted.
              </p>
            </div>
            <div>
              <Award className="w-7 h-7 text-gray-700 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Trusted Brands &amp; Manufacturers</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Built around vetted hemp companies, retailers, and suppliers.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-10">
            Product availability and shipping eligibility may vary by state and local law.
          </p>
        </div>
      </section>

      {/* More Than a Store */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              More Than a Store. A Hemp Marketplace.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Hemp CBD Superstore was built to simplify access to premium hemp-derived products for both everyday consumers and business buyers. The platform serves as a trusted gateway for retail shopping, wholesale sourcing, brand discovery, and compliant hemp commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <ShoppingBag className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail Customers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Easy access to trusted hemp products, wellness essentials, beverages, and cannabinoid categories.
              </p>
            </div>
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <Building2 className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wholesale &amp; B2B Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Business account access for bulk purchasing, retailer-ready products, distribution-friendly SKUs, and business support.
              </p>
            </div>
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <Sparkles className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brands &amp; Manufacturers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Marketplace visibility, distribution support, and access to a growing Hemp Capital ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Every Side */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Built for Every Side of the Hemp Industry
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              From individual shoppers to national distributors, Hemp CBD Superstore supports the full hemp commerce chain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {audiences.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white border border-gray-200 p-5 sm:p-6">
                <Icon className="w-6 h-6 text-gray-900 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Hemp Product Categories We Support
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The marketplace spans the most in-demand hemp product categories for retail and business buyers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            <div className="border-l-2 border-gray-900 pl-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Products</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Oils, tinctures, gummies, topicals, capsules, and everyday wellness essentials.
              </p>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hemp-Derived Delta-9 THC</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Federally compliant hemp-derived Delta-9 products where permitted by law.
              </p>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">THCa, CBN &amp; CBG</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Emerging cannabinoid categories with growing consumer and retailer demand.
              </p>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hemp Delta-9 THC Drinks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Functional hemp beverages and seltzers for retail, hospitality, and adult consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale / B2B */}
      <section id="wholesale" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
                Wholesale, Retail, and Distribution Support
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                For retailers, distributors, and hospitality buyers, Hemp CBD Superstore helps simplify sourcing with access to trusted brands, competitive pricing, and products built for real-world demand.
              </p>
              <a
                href={ACCOUNTS_URL}
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 text-base font-medium transition-colors"
              >
                Create Business Account
              </a>
            </div>

            <ul className="space-y-4">
              {[
                'Bulk and wholesale pricing',
                'Retail-ready products',
                'Distribution-friendly SKUs',
                'Beverage and functional product options',
                'Support for stores, bars, events, and hospitality buyers',
                'Brand and manufacturer partnership opportunities',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hemp Capital */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
            Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">
            A Hemp Capital Company
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
            Hemp CBD Superstore is part of the Hemp Capital ecosystem, built to support the next era of compliant hemp commerce, media, distribution, technology, and market access.
          </p>
          <a
            href={ACCOUNTS_URL}
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 text-base font-medium transition-colors"
          >
            Business Account Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">
            Access the Hemp Marketplace
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
            Whether you're shopping for yourself, sourcing for your store, or looking to partner with a growing hemp platform, Hemp CBD Superstore gives you a trusted place to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SHOP_URL}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 text-base font-medium transition-colors"
            >
              Enter Retail Store
            </a>
            <a
              href={ACCOUNTS_URL}
              className="border border-white/50 hover:border-white text-white px-8 py-3.5 text-base font-medium transition-colors text-center"
            >
              Create Business Account
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <img src="/hempcbdsuperstore_logo_new_transparent.png" alt="Hemp CBD Superstore" className="h-10 w-auto mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Your trusted hemp marketplace for retail, wholesale, and B2B commerce.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#about" onClick={scrollTo('about')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href={HEMP_CAPITAL_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Hemp Capital
                  </a>
                </li>
                <li>
                  <a href="https://hemp.media" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Hemp.Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Marketplace</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href={SHOP_URL} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href={ACCOUNTS_URL} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Wholesale / B2B
                  </a>
                </li>
                <li>
                  <a href="#categories" onClick={scrollTo('categories')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Product Categories
                  </a>
                </li>
                <li>
                  <a href={ACCOUNTS_URL} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Account Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href={`${SHOP_URL}/policies/privacy-policy`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={`${SHOP_URL}/policies/terms-of-service`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#compliance" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Compliance Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="compliance" className="border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-4xl">
              <strong className="text-gray-700">Compliance Disclaimer:</strong> Products sold through Hemp CBD Superstore are intended for adults 21+ or 18+ where permitted by applicable law. Products are derived from hemp and are intended to comply with federal law where applicable. These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease. Product availability, legality, and shipping eligibility may vary by state and local law.
            </p>
            <p className="text-xs text-gray-500">
              &copy; 2026 Hemp CBD Superstore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
