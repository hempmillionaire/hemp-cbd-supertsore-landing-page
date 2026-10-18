import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu, X, FileText, ExternalLink } from 'lucide-react';

const HEMP_MEDIA_URL = 'https://www.hemp.media/';
const CRS_URL = 'https://www.congress.gov/crs-product/IF13136';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Hemp & CBD', href: '#hemp-cbd' },
  { label: 'About', href: '#about' },
  { label: 'Federal Updates', href: '#federal-updates' },
];

const HEMP_FIELD_IMG =
  'https://images.pexels.com/photos/33325758/pexels-photo-33325758.jpeg?auto=compress&cs=tinysrgb&w=1600';
const HEMP_DRONE_IMG =
  'https://images.pexels.com/photos/6079101/pexels-photo-6079101.jpeg?auto=compress&cs=tinysrgb&w=1600';
const HEMP_LEAF_PORTRAIT =
  'https://images.pexels.com/photos/11980597/pexels-photo-11980597.jpeg?auto=compress&cs=tinysrgb&w=1200';
const HEMP_LEAF_CLOSEUP =
  'https://images.pexels.com/photos/4862808/pexels-photo-4862808.jpeg?auto=compress&cs=tinysrgb&w=1200';
const HEMP_FIBER_IMG =
  'https://images.pexels.com/photos/27007162/pexels-photo-27007162.jpeg?auto=compress&cs=tinysrgb&w=1600';
const HEMP_HARVEST_IMG =
  'https://images.pexels.com/photos/33325762/pexels-photo-33325762.jpeg?auto=compress&cs=tinysrgb&w=1600';

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      requestAnimationFrame(() => scrollToId(id));
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-md border-b border-hemp/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
            aria-label="Hemp CBD Superstore home"
          >
            <img
              src="/hempcbdsuperstore_logo_new_transparent.png"
              alt="Hemp CBD Superstore logo"
              className="h-11 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(n.href);
                }}
                className="text-sm font-medium text-cream/80 hover:text-hemp transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-hemp after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {n.label}
              </a>
            ))}
            <a
              href={HEMP_MEDIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-hemp text-ink px-4 py-2 text-sm font-semibold rounded-full hover:bg-cream transition-colors"
            >
              HEMP.MEDIA
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          <button
            className="md:hidden text-cream p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-lg border-t border-hemp/15">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(n.href);
                }}
                className="py-3 text-lg font-medium text-cream/90 border-b border-cream/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href={HEMP_MEDIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-hemp text-ink px-4 py-3 text-base font-semibold rounded-full"
            >
              HEMP.MEDIA
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background imagery */}
      <div className="absolute inset-0">
        <img
          src={HEMP_FIELD_IMG}
          alt="Industrial hemp field under a bright sky"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      {/* Floating botanical accent */}
      <div className="absolute -right-20 sm:right-10 top-24 sm:top-32 pointer-events-none">
        <img
          src={HEMP_LEAF_PORTRAIT}
          alt=""
          aria-hidden="true"
          className="w-72 sm:w-[28rem] rounded-3xl object-cover opacity-25 animate-floatySlow"
        />
      </div>

      {/* Decorative green orb */}
      <div className="absolute -left-40 -bottom-40 w-[28rem] h-[28rem] rounded-full bg-hemp/20 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 top-10 w-72 h-72 rounded-full bg-botanical/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24 w-full">
        <p className="text-hemp font-semibold tracking-[0.32em] text-xs sm:text-sm mb-6 reveal in">
          HEMP CBD SUPERSTORE
        </p>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-cream text-5xl sm:text-7xl lg:text-8xl max-w-5xl">
          DISCOVER <span className="text-hemp">HEMP</span>.
          <br />
          UNDERSTAND <span className="text-stroke-hemp">CBD</span>.
        </h1>

        <p className="mt-8 max-w-xl text-cream/75 text-lg sm:text-xl leading-relaxed">
          Explore the hemp plant, its industrial possibilities, and the basics of CBD.
          Discover news, policy, and industry developments through Hemp.Media.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={HEMP_MEDIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-hemp text-ink px-7 py-4 rounded-full font-semibold text-base hover:bg-cream transition-colors"
          >
            EXPLORE HEMP.MEDIA
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#hemp-cbd"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('hemp-cbd');
            }}
            className="group inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-4 rounded-full font-semibold text-base hover:border-hemp hover:text-hemp transition-colors"
          >
            DISCOVER HEMP &amp; CBD
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-hemp/15 bg-ink/60 backdrop-blur-sm overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-cream/50 text-xs sm:text-sm font-medium tracking-widest uppercase">
              <span>Industrial Hemp</span><span className="text-hemp">/</span>
              <span>CBD Education</span><span className="text-hemp">/</span>
              <span>Hemp.Media News</span><span className="text-hemp">/</span>
              <span>Federal Policy</span><span className="text-hemp">/</span>
              <span>Agriculture</span><span className="text-hemp">/</span>
              <span>Botanical Science</span><span className="text-hemp">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HempMediaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="hemp-media" className="relative bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none" />
      <div className="absolute -right-32 -top-32 w-[34rem] h-[34rem] rounded-full bg-hemp/15 blur-3xl pointer-events-none" />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-hemp font-semibold tracking-[0.32em] text-xs sm:text-sm mb-6 uppercase">
              Featured Media Destination
            </p>
            <h2 className="font-display font-extrabold leading-[0.9] tracking-tight text-7xl sm:text-8xl lg:text-9xl">
              <span className="block text-cream">HEMP</span>
              <span className="block text-hemp">.MEDIA</span>
            </h2>
            <p className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-cream/90 tracking-tight">
              NEWS. <span className="text-stroke-cream">POLICY.</span> INDUSTRY.
            </p>
            <p className="mt-6 max-w-lg text-cream/70 text-lg leading-relaxed">
              Explore hemp news, policy coverage, and industry stories at Hemp.Media.
            </p>
            <a
              href={HEMP_MEDIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 bg-hemp text-ink px-7 py-4 rounded-full font-semibold text-base hover:bg-cream transition-colors"
            >
              VISIT HEMP.MEDIA
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-hemp/20 shadow-2xl">
              <img
                src={HEMP_HARVEST_IMG}
                alt="Hemp harvest in a lush field"
                className="w-full h-[26rem] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="text-cream/90 text-xs tracking-widest uppercase font-medium">
                  Hemp Industry Coverage
                </span>
                <ExternalLink className="w-5 h-5 text-hemp" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-hemp/30 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HempCbdSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="hemp-cbd" className="relative bg-cream text-ink overflow-hidden">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mb-20">
          <p className="text-botanical font-semibold tracking-[0.32em] text-xs sm:text-sm mb-6 uppercase">
            Industrial Hemp &amp; CBD Education
          </p>
          <h2 className="font-display font-extrabold leading-[0.92] tracking-tight text-5xl sm:text-7xl">
            THE PLANT.
            <br />
            THE COMPOUND.
            <br />
            <span className="text-stroke-hemp">THE POSSIBILITIES.</span>
          </h2>
        </div>

        {/* Industrial Hemp — image right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <div>
            <span className="inline-block text-botanical text-xs font-semibold tracking-widest uppercase mb-4 border border-botanical/30 rounded-full px-3 py-1">
              01 / Industrial
            </span>
            <h3 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-5">
              Industrial Hemp
            </h3>
            <p className="text-ink/70 text-lg leading-relaxed max-w-md">
              Industrial hemp is cultivated for its stalks, fibers, and seeds.
              These materials have applications across textiles, agriculture, and
              manufacturing.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[24rem] sm:h-[30rem] shadow-xl group">
            <img
              src={HEMP_DRONE_IMG}
              alt="Aerial view of an industrial hemp field"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 rounded-3xl" />
          </div>
        </div>

        {/* Understanding CBD — image left, contrasting layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[24rem] sm:h-[30rem] shadow-xl group order-1 lg:order-none bg-forest">
            <img
              src={HEMP_LEAF_CLOSEUP}
              alt="Close up of a sunlit hemp leaf"
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest/60 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-3xl" />
          </div>
          <div>
            <span className="inline-block text-hemp text-xs font-semibold tracking-widest uppercase mb-4 border border-hemp rounded-full px-3 py-1 bg-ink text-hemp">
              02 / Compound
            </span>
            <h3 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-5">
              Understanding CBD
            </h3>
            <p className="text-ink/70 text-lg leading-relaxed max-w-md">
              CBD stands for cannabidiol, a naturally occurring compound found in
              the hemp plant.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-hemp" />
              <span className="text-botanical text-sm font-medium tracking-wide">
                Botanical. Agricultural. Factual.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fiber strip */}
      <div className="relative h-40 sm:h-56 overflow-hidden">
        <img
          src={HEMP_FIBER_IMG}
          alt="Close up of natural hemp fibers"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display font-bold text-cream text-2xl sm:text-4xl tracking-tight">
            FIBERS. STALKS. SEEDS.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-forest/40 blur-3xl pointer-events-none" />
      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-hemp/15">
              <img
                src={HEMP_LEAF_PORTRAIT}
                alt="Industrial hemp plant with green leaves"
                className="w-full h-[28rem] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-hemp font-semibold tracking-[0.32em] text-xs sm:text-sm mb-6 uppercase">
              About
            </p>
            <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-6xl mb-8">
              ABOUT <span className="text-hemp">HEMP CBD</span>
              <br />
              SUPERSTORE
            </h2>
            <p className="text-cream/75 text-xl leading-relaxed max-w-xl">
              Hemp CBD Superstore is an informational resource about CBD,
              industrial hemp, and hemp&apos;s role in agriculture and industry.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: 'Hemp', v: 'The Plant' },
                { k: 'CBD', v: 'The Compound' },
                { k: 'Media', v: 'The Stories' },
              ].map((s) => (
                <div key={s.k} className="border-t border-hemp/30 pt-3">
                  <p className="font-display text-hemp font-bold text-xl">{s.k}</p>
                  <p className="text-cream/60 text-xs mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FederalUpdatesSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="federal-updates" className="relative bg-hemp text-ink overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div ref={ref} className="reveal relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-forest font-semibold tracking-[0.32em] text-xs sm:text-sm mb-6 uppercase">
              Official Resource
            </p>
            <h2 className="font-display font-extrabold leading-[0.92] tracking-tight text-5xl sm:text-7xl">
              FEDERAL
              <br />
              HEMP UPDATES
            </h2>
            <p className="mt-6 max-w-lg text-ink/75 text-lg leading-relaxed">
              Federal hemp law is changing. Explore the Congressional Research
              Service overview of the upcoming changes and effective dates.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink text-cream rounded-3xl p-8 shadow-2xl border border-ink/20">
              <div className="flex items-center gap-3 text-hemp mb-6">
                <FileText className="w-6 h-6" />
                <span className="text-xs font-semibold tracking-widest uppercase">
                  Resource Panel
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl leading-tight mb-3">
                Congressional Research Service
              </h3>
              <p className="text-cream/60 text-sm mb-2">
                Source: Congressional Research Service
              </p>
              <p className="text-cream/70 text-sm leading-relaxed mb-8">
                An official overview of upcoming federal hemp legislation changes
                and their effective dates.
              </p>
              <a
                href={CRS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-hemp text-ink px-6 py-3.5 rounded-full font-semibold text-base hover:bg-cream transition-colors w-full"
              >
                READ THE FEDERAL HEMP UPDATE
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream border-t border-hemp/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <img
              src="/hempcbdsuperstore_logo_new_transparent.png"
              alt="Hemp CBD Superstore logo"
              className="h-12 w-auto mb-5"
            />
            <p className="text-cream/60 text-sm max-w-sm leading-relaxed">
              An informational resource about CBD, industrial hemp, and hemp&apos;s
              role in agriculture and industry.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-hemp text-xs font-semibold tracking-widest uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(n.href.slice(1));
                    }}
                    className="text-cream/70 hover:text-hemp text-sm transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={HEMP_MEDIA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cream/70 hover:text-hemp text-sm transition-colors"
                >
                  Hemp.Media
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-hemp text-xs font-semibold tracking-widest uppercase mb-4">
              Official Resource
            </h3>
            <a
              href={CRS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-cream/70 hover:text-hemp text-sm transition-colors"
            >
              Congressional Research Service
              <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-cream/40 text-xs">
            &copy; {year} Hemp CBD Superstore
          </p>
          <p className="text-cream/40 text-xs">
            Informational resource. Not a store.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-cream font-sans">
      <Header />
      <main>
        <Hero />
        <HempMediaSection />
        <HempCbdSection />
        <AboutSection />
        <FederalUpdatesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
