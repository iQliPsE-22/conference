import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlideUp } from "@/components/SlideUp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="mesh-gradient">
      {/* Shared Component: TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-[0_20px_40px_rgba(10,17,40,0.05)]">
        {/* Top Bar for Contact Info */}
        <div className="bg-[#1B2A4A] text-white py-2 px-10">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center text-xs font-sans tracking-wider">
            <div className="flex items-center gap-6">
              <a
                href="mailto:rssdi2026@gmail.com"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>{" "}
                rssdi2026@gmail.com
              </a>
              <a
                href="tel:+919099331371"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  call
                </span>{" "}
                +91 90993 31371
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>{" "}
              Aldovia - Resort &amp; Convention
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="bg-[#F9F6F0]/90 backdrop-blur-md dark:bg-slate-900/90 border-b border-[#D4AF37]/20 w-full transition-all">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center px-10 py-4 w-full">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="RSSDI 2026 Logo"
                className="h-16 w-auto object-contain"
                src="/logo.png"
              />
            </div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {[
                "Home",
                "RSSDI 2026",
                "Committee",
                "Scientific Program",
                "Abstract",
                "Faculty",
                "Downloads",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  className="font-nav-link text-nav-link text-[#1B2A4A] dark:text-slate-300 hover:text-[#D4AF37] transition-all duration-300 ease-in-out whitespace-nowrap"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button className="bg-[#1B2A4A] !text-white px-6 py-2.5 h-auto rounded-none font-nav-link text-nav-link uppercase tracking-widest hover:bg-[#1B2A4A]/90 hover:scale-95 transition-all duration-300">
              Register
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-10 lg:px-16 ">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Vidhana Soudha, Bengaluru"
              className="w-full h-full object-cover"
              src="/hero.png"
            />
            {/* Multi-layer gradient overlay for text legibility while keeping the "Heritage Modernist" feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f0] via-[#fff8f0]/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/5 z-0"></div>
          </div>
          <div className="relative z-20 max-w-[1440px] mx-auto w-full grid items-center">
            <div className="space-y-12">
              <SlideUp delay={0.1} className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#735c00]"></span>
                <span className="font-label-caps text-label-caps text-[#735c00] uppercase">
                  19th - 22nd November 2026
                </span>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h1 className="font-display-hero text-[64px] md:text-[84px] leading-[1.1] text-[#1B2A4A] tracking-[-0.02em]">
                  54th Annual
                  <br />
                  Conference of <i className="text-[#d4af37]">RSSDI</i>
                </h1>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="font-body-lg text-lg text-[#4d4635] max-w-xl leading-[1.6]">
                  Join us in Bengaluru for the premier gathering of
                  diabetologists, researchers, and healthcare professionals.
                  Explore pioneering research, evidence-based practices, and the
                  future of diabetes care at the heart of Karnataka.
                </p>
              </SlideUp>
              <SlideUp delay={0.4} className="flex flex-wrap gap-6 pt-2">
                <Button className="bg-[#1B2A4A] text-[#D4AF37] px-8 py-6 h-auto rounded-none font-semibold tracking-[0.2em] uppercase text-sm hover:-translate-y-0.5 transition-transform shadow-[0_20px_40px_rgba(10,17,40,0.05)] hover:bg-[#1B2A4A]/90">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="border border-[#1B2A4A] text-[#1B2A4A] bg-transparent px-8 py-6 h-auto rounded-none font-semibold tracking-[0.2em] uppercase text-sm hover:bg-[#1B2A4A]/5 transition-colors"
                >
                  Explore Program
                </Button>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* About RSSDI 2026 Welcome Section */}
        <section className="bg-[#1B2A4A] py-32 mb-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-[#D4AF37]/10 -mr-32 -mt-32 rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#D4AF37]/10 -ml-32 -mb-32 rotate-45"></div>
          <div className="max-w-[1000px] mx-auto px-10 text-center relative z-10">
            <SlideUp>
              <span className="font-label-caps text-label-caps text-[#D4AF37] mb-8 block">
                WELCOME MESSAGE
              </span>
              <h2 className="font-display-hero text-4xl md:text-5xl mb-12 leading-tight">
                &quot;It gives me immense pleasure to welcome you to the{" "}
                <span className="italic text-[#D4AF37]">
                  54th Annual Conference
                </span>{" "}
                of the Research Society for the Study of Diabetes in
                India...&quot;
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="font-body-lg text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                The RSSDI Annual Conference has grown over the decades to become
                India&apos;s largest and most prestigious academic gathering in
                the field of diabetes, attracting thousands of physicians,
                researchers, healthcare professionals, and industry partners
                from across the country and around the globe. Each year, the
                conference serves as a dynamic platform for sharing cutting-edge
                research, clinical experiences and innovations that aim to
                improve diabetes prevention, diagnosis, and management.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="flex flex-col items-center">
                <span className="font-sans font-semibold text-xl tracking-wide mb-1">
                  Dr. K M Prasanna Kumar
                </span>
                <span className="font-label-caps text-label-caps text-[#D4AF37]">
                  CHAIRMAN &amp; NATIONAL PATRON
                </span>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Conference Highlights */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <SlideUp className="flex flex-col items-center mb-16 text-center">
            <span className="font-label-caps text-label-caps text-[#D4AF37] mb-4">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="font-headline-md text-headline-md">
              Conference <span className="italic">Highlights</span>
            </h2>
            <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
          </SlideUp>
          <SlideUp
            delay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  record_voice_over
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                National &amp; International Pioneer Speakers
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Engage with globally renowned experts shaping the future of
                diabetes research and clinical practice.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Special Events &amp; Professionals Networking
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Curated networking sessions designed to foster collaboration
                between researchers and clinicians.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  biotech
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Core Scientific Session
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In-depth exploration of metabolic pathways, pharmacological
                breakthroughs, and patient management.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  description
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Oral &amp; Poster Research Presentation
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Showcasing the latest original research from the next generation
                of endocrine specialists.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  science
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Science, Technology &amp; Panel Discussion
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Interactive forums addressing the intersection of digital health
                and diabetology.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  front_hand
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Hands-on &amp; Demonstration
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Practical workshops relevant to daily clinical practice and
                patient care techniques.
              </p>
            </div>
            <div className="bg-white/50 border border-primary-container/10 p-8 hover:bg-white transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h4 className="font-sans font-semibold text-lg mb-4 text-[#1B2A4A]">
                Updated Evidence Based Practices
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Review and application of the latest clinical guidelines in
                diabetes management.
              </p>
            </div>
          </SlideUp>
        </section>

        {/* Organizing Committee */}
        <section className="bg-surface-container/30 py-32 mb-32">
          <div className="max-w-[1440px] mx-auto px-10">
            <SlideUp className="flex flex-col items-center mb-20 text-center">
              <span className="font-label-caps text-label-caps text-[#D4AF37] mb-4">
                THE LEADERSHIP
              </span>
              <h2 className="font-headline-md text-headline-md">
                The <span className="italic">Organizing</span> Committee
              </h2>
              <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
            </SlideUp>
            <SlideUp
              delay={0.2}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            >
              {/* Member 1 */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-6 overflow-hidden aspect-[4/5] w-full border border-primary-container/10">
                  <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center text-slate-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Dr. K M Prasanna Kumar"
                      className="w-full h-full object-cover object-top"
                      src="/km.png"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-xl text-[#1B2A4A]">
                  Dr. K M Prasanna Kumar
                </h3>
                <p className="font-label-caps text-label-caps text-[#D4AF37] mt-1">
                  CHAIRMAN &amp; NATIONAL PATRON
                </p>
              </div>
              {/* Member 2 */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-6 overflow-hidden aspect-[4/5] w-full border border-primary-container/10">
                  <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center text-slate-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Dr. L Sreenivasamurthy"
                      className="w-full h-full object-cover object-top"
                      src="/lsree.jpg"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-xl text-[#1B2A4A]">
                  Dr. L Sreenivasamurthy
                </h3>
                <p className="font-label-caps text-label-caps text-[#D4AF37] mt-1">
                  ORGANISING SECRETARY
                </p>
              </div>
              {/* Member 3 */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-6 overflow-hidden aspect-[4/5] w-full border border-primary-container/10">
                  <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center text-slate-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Dr. Karthik Munichoodappa"
                      className="w-full h-full object-cover object-top"
                      src="/kartik.jpg"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-xl text-[#1B2A4A]">
                  Dr. Karthik Munichoodappa
                </h3>
                <p className="font-label-caps text-label-caps text-[#D4AF37] mt-1">
                  ORGANISING SECRETARY
                </p>
              </div>
              {/* Member 4 */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-6 overflow-hidden aspect-[4/5] w-full border border-primary-container/10">
                  <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center text-slate-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Dr. Sridhar K"
                      className="w-full h-full object-cover object-top"
                      src="/sri.jpg"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-xl text-[#1B2A4A]">
                  Dr. Sridhar K
                </h3>
                <p className="font-label-caps text-label-caps text-[#D4AF37] mt-1">
                  TREASURER
                </p>
              </div>
            </SlideUp>
            <SlideUp delay={0.4} className="mt-20 flex justify-center">
              <Button
                variant="outline"
                className="border border-[#1B2A4A] h-auto rounded-none text-[#1B2A4A] px-12 py-4 font-label-caps text-label-caps tracking-widest hover:bg-[#1B2A4A] hover:text-white transition-all duration-300"
              >
                VIEW FULL COMMITTEE
              </Button>
            </SlideUp>
          </div>
        </section>

        {/* Venue Details */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <SlideUp className="relative order-2 md:order-1">
              <div className="aspect-[16/10] overflow-hidden border border-primary-container/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Aldovia - Resort & Convention"
                  className="w-full h-full object-cover"
                  src="/venue.jpg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[#D4AF37] -z-10"></div>
            </SlideUp>
            <SlideUp delay={0.2} className="order-1 md:order-2">
              <span className="font-label-caps text-label-caps text-[#D4AF37] block mb-4">
                THE VENUE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4 italic">
                Aldovia - Resort &amp; Convention
              </h2>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-sans">
                <span className="font-semibold text-lg text-amber-600">
                  4.3
                </span>
                <div className="flex text-amber-500 text-lg">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star_half
                  </span>
                </div>
                <span className="text-sm">(18,009)</span>
              </div>
              <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed italic border-l-2 border-[#D4AF37] pl-8">
                &quot;Aldovia Resort and Convention, Swiss Town, Sadahalli Post,
                Taluk, Devanahalli, Bengaluru, Karnataka 562110. A premier
                destination offering the perfect blend of luxury and functional
                precision for our 54th academic assembly.&quot;
              </p>
              <div className="flex items-center gap-6">
                <Link
                  className="font-label-caps text-label-caps text-[#1B2A4A] flex items-center gap-2 hover:gap-4 transition-all font-bold"
                  href="#"
                >
                  DIRECTIONS TO VENUE{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Registration Registry */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <SlideUp className="bg-white border border-[#1B2A4A]/5 shadow-2xl overflow-hidden">
            <div className="bg-[#1B2A4A] p-12 text-center text-white">
              <span className="font-label-caps text-label-caps text-[#D4AF37] block mb-4">
                DELEGATE ENROLLMENT
              </span>
              <h2 className="font-display-hero text-5xl">
                Registration{" "}
                <span className="italic text-[#D4AF37]">Registry</span>
              </h2>
            </div>
            <div className="p-8 md:p-12 overflow-x-auto">
              <Table className="w-full text-left min-w-[800px] border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-[#D4AF37]/20 hover:bg-transparent">
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      CATEGORY
                    </TableHead>
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      EARLY BIRD{" "}
                      <span className="block text-[8px] font-normal italic lowercase mt-1">
                        Till 9 Nov &apos;25
                      </span>
                    </TableHead>
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      FIRST SLAB{" "}
                      <span className="block text-[8px] font-normal italic lowercase mt-1">
                        10 Nov &apos;25 - 31 Mar &apos;26
                      </span>
                    </TableHead>
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      SECOND SLAB{" "}
                      <span className="block text-[8px] font-normal italic lowercase mt-1">
                        1 Apr - 30 Jun &apos;26
                      </span>
                    </TableHead>
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      THIRD SLAB{" "}
                      <span className="block text-[8px] font-normal italic lowercase mt-1">
                        1 Jul - 31 Oct &apos;26
                      </span>
                    </TableHead>
                    <TableHead className="py-6 font-label-caps text-label-caps text-on-surface-variant h-auto">
                      SPOT
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-body-lg text-on-surface">
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Members
                    </TableCell>
                    <TableCell className="py-6">₹13,000</TableCell>
                    <TableCell className="py-6">₹16,000</TableCell>
                    <TableCell className="py-6">₹21,000</TableCell>
                    <TableCell className="py-6">₹26,000</TableCell>
                    <TableCell className="py-6">₹35,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Non-Members
                    </TableCell>
                    <TableCell className="py-6">₹19,000</TableCell>
                    <TableCell className="py-6">₹24,000</TableCell>
                    <TableCell className="py-6">₹29,000</TableCell>
                    <TableCell className="py-6">₹34,000</TableCell>
                    <TableCell className="py-6">₹43,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      PG Students
                    </TableCell>
                    <TableCell className="py-6">₹6,000</TableCell>
                    <TableCell className="py-6">₹8,000</TableCell>
                    <TableCell className="py-6">₹12,000</TableCell>
                    <TableCell className="py-6">₹14,000</TableCell>
                    <TableCell className="py-6">₹18,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Diabetes Educators / Dietitians
                    </TableCell>
                    <TableCell className="py-6">₹6,000</TableCell>
                    <TableCell className="py-6">₹8,000</TableCell>
                    <TableCell className="py-6">₹12,000</TableCell>
                    <TableCell className="py-6">₹14,000</TableCell>
                    <TableCell className="py-6">₹18,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Accompanying Delegates
                    </TableCell>
                    <TableCell className="py-6">₹13,000</TableCell>
                    <TableCell className="py-6">₹16,000</TableCell>
                    <TableCell className="py-6">₹21,000</TableCell>
                    <TableCell className="py-6">₹26,000</TableCell>
                    <TableCell className="py-6">₹35,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#D4AF37]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Corporate Delegates
                    </TableCell>
                    <TableCell className="py-6">₹20,000</TableCell>
                    <TableCell className="py-6">₹24,000</TableCell>
                    <TableCell className="py-6">₹30,000</TableCell>
                    <TableCell className="py-6">₹36,000</TableCell>
                    <TableCell className="py-6">₹43,000</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold border-b-0">
                      International Delegates
                    </TableCell>
                    <TableCell className="py-6 border-b-0">$250</TableCell>
                    <TableCell className="py-6 border-b-0">$300</TableCell>
                    <TableCell className="py-6 border-b-0">$400</TableCell>
                    <TableCell className="py-6 border-b-0">$450</TableCell>
                    <TableCell className="py-6 border-b-0">$550</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="bg-surface-container-highest p-8 text-center">
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-6">
                * REGISTRATION FEE INCLUDES 18% GST
              </p>
              <Button className="bg-[#D4AF37] text-[#1B2A4A] h-auto rounded-none px-16 py-5 font-nav-link text-nav-link uppercase tracking-[0.2em] font-bold hover:bg-[#1B2A4A] hover:text-[#D4AF37] transition-all duration-300 shadow-lg">
                PROCEDURE TO REGISTER
              </Button>
            </div>
          </SlideUp>
        </section>

        {/* Dates and Quick Stats */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <SlideUp className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-transparent">
            <div className="p-12 flex flex-col justify-center items-center text-center">
              <span className="font-sans font-bold text-6xl text-[#1B2A4A] mb-4">
                6000
              </span>
              <h4 className="font-sans font-semibold text-lg text-[#1B2A4A]">
                Delegates
              </h4>
            </div>
            <div className="p-12 flex flex-col justify-center items-center text-center">
              <span className="font-sans font-bold text-6xl text-[#1B2A4A] mb-4">
                700
              </span>
              <h4 className="font-sans font-semibold text-lg text-[#1B2A4A]">
                Faculties
              </h4>
            </div>
            <div className="p-12 flex flex-col justify-center items-center text-center">
              <span className="font-sans font-bold text-6xl text-[#1B2A4A] mb-4">
                125
              </span>
              <h4 className="font-sans font-semibold text-lg text-[#1B2A4A]">
                Corporate Participation
              </h4>
            </div>
          </SlideUp>
        </section>

        {/* Explore Bengaluru Section */}
        <section className="bg-surface-container/30 py-32 mb-32 border-y border-primary-container/10">
          <div className="max-w-[1440px] mx-auto px-10">
            <SlideUp className="flex flex-col items-center mb-16 text-center">
              <span className="font-label-caps text-label-caps text-[#D4AF37] mb-4">
                POPULAR DESTINATIONS
              </span>
              <h2 className="font-headline-md text-headline-md">
                Explore <span className="italic">Bengaluru</span>
              </h2>
              <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
            </SlideUp>
            <SlideUp
              delay={0.2}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
            >
              {[
                "Iskon Bengaluru",
                "Lalbagh Botanical Garden",
                "UB City",
                "Cubbon Park",
                "Phoenix Mall",
                "The Bangalore Palace",
              ].map((place) => (
                <div
                  key={place}
                  className="relative aspect-video group overflow-hidden border border-primary-container/20"
                >
                  <div className="absolute inset-0 bg-[#1B2A4A]/80 group-hover:bg-[#1B2A4A]/60 transition-colors z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 p-4 text-center">
                    <span className="font-sans font-semibold text-white tracking-wide text-sm md:text-lg">
                      {place}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={place}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGruWcLXpC4T9p9Rf_5SfjQrQGPk1e-EnmpjrM0lFGNimW8ve9IBc_tgmjOwqnf1NMZYRS4uIhEBikKTtSR041iNpKaASBsq5_iSdsfc1vsRxMF2ujiNfQZh7jyYVrMSVwckTiMzjau1nxtGBI9aCzdBYl8orIE5SUSar_XnjAGr_TwGUCh21m6STRtrcBBQkLd02QH41iiMOLqZ3Srhh6zSpnp4zDjYZl5JpzjPkev8V08j96GW-KiL-wN_JWYtgiVi-MHLngJpN6"
                  />
                </div>
              ))}
            </SlideUp>
          </div>
        </section>

        {/* Contact Us Form */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <SlideUp className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white shadow-[0_20px_40px_rgba(10,17,40,0.05)] border border-primary-container/10">
            <div className="bg-[#1B2A4A] p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 border border-[#D4AF37]/10 -ml-32 -mt-32 rotate-45"></div>
              <span className="font-label-caps text-label-caps text-[#D4AF37] mb-4">
                GET IN TOUCH
              </span>
              <h2 className="font-display-hero text-4xl mb-6">
                Contact <span className="italic text-[#D4AF37]">Us</span>
              </h2>
              <p className="font-sans text-slate-300 leading-relaxed mb-10 max-w-md">
                Have questions about the 54th Annual RSSDI Conference? Reach out
                to our secretariat for assistance with registration, abstracts,
                or accommodation.
              </p>
              <div className="flex flex-col gap-6 font-sans text-sm text-slate-300">
                <a
                  href="mailto:contact@rxevents.co.in"
                  className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">
                    mail
                  </span>{" "}
                  contact@rxevents.co.in
                </a>
                <a
                  href="tel:+919099331371"
                  className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">
                    call
                  </span>{" "}
                  +91 90993 31371
                </a>
                <div className="flex items-start gap-4 mt-2">
                  <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">
                    location_on
                  </span>
                  <span className="leading-relaxed text-base max-w-[250px]">
                    Aldovia Resort and Convention,
                    <br />
                    Swiss Town, Sadahalli Post, Taluk,
                    <br />
                    Devanahalli, Bengaluru, Karnataka 562110
                  </span>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-16">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                      FIRST NAME
                    </label>
                    <Input
                      className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#D4AF37] shadow-none font-sans text-lg h-auto"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                      LAST NAME
                    </label>
                    <Input
                      className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#D4AF37] shadow-none font-sans text-lg h-auto"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                    EMAIL ADDRESS
                  </label>
                  <Input
                    type="email"
                    className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#D4AF37] shadow-none font-sans text-lg h-auto"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus:ring-0 focus:border-[#D4AF37] shadow-none font-sans text-lg bg-transparent resize-none w-full outline-none transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button
                  type="button"
                  className="bg-[#1B2A4A] !text-white rounded-none px-10 py-6 mt-4 font-label-caps text-label-caps font-bold hover:bg-[#1B2A4A]/90 transition-colors self-start w-full md:w-auto"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </SlideUp>
        </section>

        {/* Newsletter / Invitation */}
        <section className="max-w-[1440px] mx-auto px-10 mb-32">
          <SlideUp className="bg-[#1B2A4A] p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 border border-[#D4AF37]/10 -mr-32 -mt-32 rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#D4AF37]/10 -ml-32 -mb-32 rotate-45"></div>
            <h2 className="font-display-hero text-5xl text-white mb-6">
              Receive the Formal{" "}
              <span className="italic text-[#D4AF37]">Invitation</span>
            </h2>
            <p className="font-body-lg text-slate-400 max-w-xl mx-auto mb-10">
              Subscribe to receive the scientific prospectus, keynote
              announcements, and exclusive early-registration access codes.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <Input
                className="flex-grow bg-transparent border-0 border-b border-[#D4AF37]/40 rounded-none text-white font-body-lg focus-visible:ring-0 focus-visible:border-[#D4AF37] placeholder:text-slate-600 transition-colors"
                placeholder="Email Address"
                type="email"
              />
              <Button className="bg-[#D4AF37] text-[#1B2A4A] rounded-none px-8 py-3 h-auto font-label-caps text-label-caps font-bold hover:bg-white transition-colors">
                SUBMIT
              </Button>
            </form>
          </SlideUp>
        </section>
      </main>

      {/* Shared Component: Footer */}
      <footer className="bg-[#1B2A4A] border-t border-[#D4AF37]/30 text-white">
        <div className="max-w-[1440px] mx-auto px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            {/* Logo & Contact */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="RSSDI 2026 Logo"
                className="h-16 w-auto object-contain brightness-0 invert mb-6"
                src="/logo.png"
              />
              <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
                54th Annual Conference of the Research Society for the Study of
                Diabetes in India.
              </p>
              <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
                <a
                  href="mailto:contact@rxevents.co.in"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>{" "}
                  contact@rxevents.co.in
                </a>
                <a
                  href="tel:+919099331371"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>{" "}
                  +91 90993 31371
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-label-caps text-label-caps text-[#D4AF37] mb-6">
                QUICK LINKS
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-slate-300">
                <Link
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all"
                >
                  Committee
                </Link>
                <Link
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all"
                >
                  About Venue
                </Link>
                <Link
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all"
                >
                  Abstract
                </Link>
                <Link
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Support Queries */}
            <div>
              <h4 className="font-label-caps text-label-caps text-[#D4AF37] mb-6">
                QUERIES
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>{" "}
                  Registration Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>{" "}
                  Scientific Program Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>{" "}
                  Abstract Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>{" "}
                  Contact Query
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="font-sans text-xs uppercase tracking-widest text-slate-400">
              © {new Date().getFullYear()} RSSDI 2026. All Rights Reserved.
            </div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#D4AF37]">
              Design and Developed by Enlacecode Technology Pvt. Ltd.
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -ml-12 hidden lg:flex flex-col gap-4">
        <span className="font-label-caps text-label-caps rotate-90 text-primary-container tracking-[0.5em]">
          SCROLL
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-primary-container to-transparent ml-[26px]"></div>
      </div>
    </div>
  );
}
