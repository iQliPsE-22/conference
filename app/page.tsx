import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SlideUp,
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/SlideUp";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import logo from "@/public/logo.png";
import heroImage from "@/public/hero.png";
import kmImage from "@/public/km.png";
import lsreeImage from "@/public/lsree.jpg";
import kartikImage from "@/public/kartik.jpg";
import sriImage from "@/public/sri.jpg";
import venueImage from "@/public/venue.jpg";
import iskonImage from "@/public/iskon.png";
import lalbaghImage from "@/public/lalbagh.png";
import ubImage from "@/public/ub.png";
import chubbonImage from "@/public/chubbon.png";
import phoenixImage from "@/public/phoenix.png";
import palaceImage from "@/public/palace.png";

const NAV_ITEMS = [
  "Home",
  "RSSDI 2026",
  "Committee",
  "Scientific Program",
  "Abstract",
  "Faculty",
  "Downloads",
  "Contact",
];

const COMMITTEE_MEMBERS = [
  {
    name: "Dr. K M Prasanna Kumar",
    role: "CHAIRMAN & NATIONAL PATRON",
    img: kmImage,
  },
  {
    name: "Dr. L Sreenivasamurthy",
    role: "ORGANISING SECRETARY",
    img: lsreeImage,
  },
  {
    name: "Dr. Karthik Munichoodappa",
    role: "ORGANISING SECRETARY",
    img: kartikImage,
  },
  { name: "Dr. Sridhar K", role: "TREASURER", img: sriImage },
];

const BENGALURU_PLACES = [
  { name: "Iskon Bengaluru", img: iskonImage },
  { name: "Lalbagh Botanical Garden", img: lalbaghImage },
  { name: "UB City", img: ubImage },
  { name: "Cubbon Park", img: chubbonImage },
  { name: "Phoenix Mall", img: phoenixImage },
  { name: "The Bangalore Palace", img: palaceImage },
];

export default function Home() {
  return (
    <div className="mesh-gradient">
      {/* Glassmorphism Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-white/70 backdrop-blur-xl border-b border-[#7F56D9]/8 shadow-[0_4px_30px_rgba(45,27,105,0.06)]">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-10 py-3">
            <div className="flex items-center gap-4">
              <Image
                alt="RSSDI 2026 Logo"
                className="h-12 md:h-14 w-auto object-contain"
                src={logo}
                preload
                sizes="(max-width: 768px) 96px, 120px"
              />
            </div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  className="font-nav-link text-nav-link text-slate-500 hover:text-[#FBBF24] transition-all duration-300 whitespace-nowrap relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FBBF24] after:transition-all after:duration-300 hover:after:w-full"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-3 text-xs text-slate-500 font-sans">
                <a
                  href="mailto:rssdi2026@gmail.com"
                  className="hover:text-[#FBBF24] transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    mail
                  </span>
                  rssdi2026@gmail.com
                </a>
              </div>
              <Button className="shimmer-btn bg-[#42307D] !text-white px-6 py-2.5 h-auto rounded-full font-nav-link text-nav-link uppercase tracking-widest hover:bg-[#FBBF24] hover:!text-slate-700 transition-all duration-500 shadow-lg">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 md:px-10 lg:px-16">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Vidhana Soudha, Bengaluru"
              className="w-full h-full object-cover scale-105 grayscale"
              src={heroImage}
              fill
              preload
              placeholder="blur"
              quality={80}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf8ff] via-[#faf8ff]/90 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf8ff]/40 to-transparent z-10"></div>
            {/* Gradient orbs */}
            <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-[#7F56D9]/[0.08] blur-3xl gradient-orb z-10"></div>
            <div
              className="absolute bottom-32 right-[40%] w-48 h-48 rounded-full bg-[#FBBF24]/[0.06] blur-3xl gradient-orb z-10"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
          <div className="relative z-20 max-w-[1440px] mx-auto w-full grid items-center">
            <div className="space-y-8 md:space-y-10">
              <SlideUp delay={0.1} className="flex items-center gap-4">
                <span className="w-12 h-px bg-gradient-to-r from-[#7F56D9] to-[#FBBF24]"></span>
                <span className="font-label-caps text-label-caps text-[#7F56D9] uppercase">
                  19th - 22nd November 2026 · Bengaluru
                </span>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h1 className="font-display-hero text-[52px] md:text-[72px] lg:text-[84px] leading-[1.05] text-slate-700 tracking-[-0.02em]">
                  54th Annual
                  <br />
                  Conference of <i className="text-[#7F56D9]">RSSDI</i>
                </h1>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="font-body-lg text-base md:text-lg text-slate-500 max-w-xl leading-[1.7]">
                  Join 6,000+ delegates in Bengaluru for the premier gathering
                  of diabetologists, researchers, and healthcare professionals.
                </p>
              </SlideUp>
              <SlideUp
                delay={0.4}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button className="shimmer-btn bg-[#7F56D9] hover:bg-[#6941C6] shadow-md shadow-[#7F56D9]/20 text-white px-8 py-6 h-auto rounded-full font-semibold tracking-[0.15em] uppercase text-sm hover:-translate-y-1 transition-all duration-500 shadow-[0_12px_40px_rgba(124,58,237,0.3)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.4)]">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#7F56D9]/20 text-slate-700 bg-white/50 backdrop-blur-sm px-8 py-6 h-auto rounded-full font-semibold tracking-[0.15em] uppercase text-sm hover:bg-[#42307D] hover:!text-white hover:border-[#42307D] transition-all duration-500"
                >
                  Explore Program
                </Button>
                <span className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#7F56D9]/10 to-[#9E77ED]/10 text-[#7F56D9] rounded-full px-5 py-2.5 text-xs font-sans font-semibold tracking-wide pulse-glow">
                  <span className="material-symbols-outlined text-[16px]">
                    local_fire_department
                  </span>
                  Early Bird — Save up to 40%
                </span>
              </SlideUp>
              <SlideUp delay={0.5}>
                <div className="pt-4 flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#7F56D9] text-2xl">
                      calendar_month
                    </span>
                    <div>
                      <p className="font-sans font-bold text-slate-700 text-lg">
                        Nov 19–22, 2026
                      </p>
                      <p className="text-xs text-slate-500 font-sans">
                        Bengaluru, India
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#6941C6] text-2xl">
                      groups
                    </span>
                    <div>
                      <p className="font-sans font-bold text-slate-700 text-lg">
                        6,000+ Delegates
                      </p>
                      <p className="text-xs text-slate-500 font-sans">
                        From across the globe
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* About RSSDI 2026 Welcome Section */}
        <section className="bg-gradient-to-br from-[#42307D] via-[#53389E] to-[#42307D] py-28 md:py-32 mb-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 border border-[#9E77ED]/10 -mr-36 -mt-36 rotate-45 float-slow"></div>
          <div
            className="absolute bottom-0 left-0 w-72 h-72 border border-[#FBBF24]/10 -ml-36 -mb-36 rotate-45 float-slow"
            style={{ animationDelay: "3s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7F56D9]/[0.08] blur-3xl gradient-orb"></div>
          <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
            <SlideUp>
              <span className="font-label-caps text-label-caps text-[#FBBF24] mb-8 block">
                WELCOME MESSAGE
              </span>
              <h2 className="font-display-hero text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight">
                &quot;It gives me immense pleasure to welcome you to the{" "}
                <span className="italic text-[#FBBF24]">
                  54th Annual Conference
                </span>{" "}
                of the Research Society for the Study of Diabetes in
                India...&quot;
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="font-body-lg text-slate-300/90 max-w-3xl mx-auto mb-16 leading-relaxed">
                The RSSDI Annual Conference has grown over the decades to become
                India&apos;s largest and most prestigious academic gathering in
                the field of diabetes, attracting thousands of physicians,
                researchers, healthcare professionals, and industry partners
                from across the country and around the globe.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="flex flex-col items-center">
                <span className="font-sans font-semibold text-xl tracking-wide mb-1">
                  Dr. K M Prasanna Kumar
                </span>
                <span className="font-label-caps text-label-caps text-[#FBBF24]">
                  CHAIRMAN &amp; NATIONAL PATRON
                </span>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Conference Highlights — Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <SlideUp className="flex flex-col items-center mb-16 text-center">
            <span className="font-label-caps text-label-caps text-[#FBBF24] mb-4">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="font-headline-md text-headline-md">
              Conference <span className="italic">Highlights</span>
            </h2>
            <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
          </SlideUp>

          {/* Bento Grid */}
          <StaggerChildren
            staggerDelay={0.07}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {/* Hero card — spans 2 cols */}
            <StaggerItem className="md:col-span-2">
              <div className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group gradient-border h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FBBF24]/[0.04] blur-2xl pointer-events-none" />
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7F56D9] to-[#6941C6] flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rounded-2xl transition-all duration-500 shadow-lg">
                    <span className="material-symbols-outlined text-2xl">
                      record_voice_over
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-xl md:text-2xl mb-3 text-slate-700">
                    National & International Pioneer Speakers
                  </h4>
                  <p className="text-sm text-on-surface-variant/80 leading-relaxed max-w-lg">
                    Engage with globally renowned experts shaping the future of
                    diabetes research and clinical practice. Hear from thought
                    leaders driving groundbreaking innovations.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Standard cards */}
            {[
              {
                icon: "hub",
                title: "Special Events & Networking",
                desc: "Curated sessions to foster collaboration between researchers and clinicians.",
              },
              {
                icon: "biotech",
                title: "Core Scientific Session",
                desc: "In-depth exploration of metabolic pathways and pharmacological breakthroughs.",
              },
            ].map((item) => (
              <StaggerItem key={item.icon}>
                <div className="glass-card rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group gradient-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F56D9] to-[#6941C6] flex items-center justify-center mb-5 text-white group-hover:scale-110 group-hover:rounded-2xl transition-all duration-500 shadow-lg">
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-lg mb-2 text-slate-700">
                    {item.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}

            {/* Row 2 */}
            {[
              {
                icon: "description",
                title: "Research Presentations",
                desc: "Original research from the next generation of endocrine specialists.",
              },
              {
                icon: "science",
                title: "Technology & Panel Discussion",
                desc: "Forums at the intersection of digital health and diabetology.",
              },
            ].map((item) => (
              <StaggerItem key={item.icon}>
                <div className="glass-card rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group gradient-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F56D9] to-[#6941C6] flex items-center justify-center mb-5 text-white group-hover:scale-110 group-hover:rounded-2xl transition-all duration-500 shadow-lg">
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-lg mb-2 text-slate-700">
                    {item.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}

            {/* Hero card 2 — spans 2 cols */}
            <StaggerItem className="md:col-span-2">
              <div className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group gradient-border h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#42307D]/[0.03] blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7F56D9] to-[#6941C6] flex items-center justify-center text-white group-hover:scale-110 group-hover:rounded-2xl transition-all duration-500 shadow-lg">
                      <span className="material-symbols-outlined text-2xl">
                        front_hand
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-[#9E77ED]/10 flex items-center justify-center text-[#6941C6] group-hover:scale-110 group-hover:rounded-2xl transition-all duration-500">
                      <span className="material-symbols-outlined text-2xl">
                        verified
                      </span>
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-xl md:text-2xl mb-3 text-slate-700">
                    Hands-on Workshops & Evidence-Based Practices
                  </h4>
                  <p className="text-sm text-on-surface-variant/80 leading-relaxed max-w-lg">
                    Practical workshops for daily clinical practice and patient
                    care techniques, combined with the latest clinical
                    guidelines in diabetes management.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* Organizing Committee */}
        <section className="bg-surface-container/30 py-28 md:py-32 mb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <SlideUp className="flex flex-col items-center mb-20 text-center">
              <span className="font-label-caps text-label-caps text-[#FBBF24] mb-4">
                THE LEADERSHIP
              </span>
              <h2 className="font-headline-md text-headline-md">
                The <span className="italic">Organizing</span> Committee
              </h2>
              <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
            </SlideUp>
            <StaggerChildren
              staggerDelay={0.12}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
            >
              {COMMITTEE_MEMBERS.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="flex flex-col items-center group">
                    <div className="relative mb-6 overflow-hidden aspect-[4/5] w-full rounded-2xl border-2 border-transparent group-hover:border-[#FBBF24]/50 transition-all duration-700 shadow-lg group-hover:shadow-xl">
                      <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                        <Image
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          src={member.img}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-slate-700">
                      {member.name}
                    </h3>
                    <p className="font-label-caps text-label-caps text-[#FBBF24] mt-1">
                      {member.role}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <SlideUp delay={0.4} className="mt-20 flex justify-center">
              <Button
                variant="outline"
                className="border-2 border-[#42307D]/20 h-auto rounded-full text-slate-700 px-12 py-4 font-label-caps text-label-caps tracking-widest hover:bg-[#42307D] hover:text-white hover:border-[#42307D] transition-all duration-500"
              >
                VIEW FULL COMMITTEE
              </Button>
            </SlideUp>
          </div>
        </section>

        {/* The Venue */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <div className="relative flex min-h-[700px] md:min-h-[540px] items-center">
            {/* Background Image */}
            <FadeIn className="absolute right-0 top-0 h-[420px] w-full overflow-hidden rounded-3xl shadow-[0_30px_80px_-25px_rgba(25,20,60,0.35)] md:h-full md:w-[70%]">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#24124d]/30 via-[#42307D]/14 to-transparent"></div>
              <div className="absolute inset-0 z-10 bg-[#42307D]/16 mix-blend-multiply"></div>
              <Image
                alt="Aldovia - Resort & Convention"
                className="w-full h-full object-cover scale-[1.015] transition-transform duration-1000 ease-out"
                src={venueImage}
                fill
                placeholder="blur"
                quality={75}
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </FadeIn>

            {/* Floating Glass Card Content */}
            <SlideUp
              className="relative z-20 mt-[260px] w-full md:mt-0 md:w-[50%] md:ml-12"
              yOffset={22}
              duration={0.9}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/88 p-8 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.24)] backdrop-blur-2xl transition-all duration-700 md:p-14">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7F56D9] to-[#FBBF24]"></div>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FBBF24]/10 blur-3xl"></div>
                <div className="absolute -bottom-20 left-8 h-32 w-32 rounded-full bg-[#7F56D9]/10 blur-3xl"></div>

                <span className="relative block mb-4 font-label-caps text-label-caps tracking-[0.2em] text-[#7F56D9]">
                  THE VENUE
                </span>

                <h2 className="relative mb-4 font-display-hero text-4xl leading-tight text-slate-800 md:text-5xl">
                  Aldovia{" "}
                  <span className="font-light italic text-slate-500">
                    Resort &amp; Convention
                  </span>
                </h2>

                <div className="relative mb-8 flex items-center gap-3">
                  <div className="flex text-[#FBBF24] text-lg">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star_half
                    </span>
                  </div>
                  <span className="font-semibold text-slate-700">4.3</span>
                  <span className="text-sm text-slate-400">
                    (18,009 reviews)
                  </span>
                </div>

                <p className="relative mb-10 font-sans text-lg leading-relaxed text-slate-600">
                  Swiss Town, Sadahalli Post, Taluk, Devanahalli, Bengaluru,
                  Karnataka 562110. A premier destination offering the perfect
                  blend of luxury and functional precision for our 54th academic
                  assembly.
                </p>

                <Link
                  className="relative inline-flex items-center gap-3 rounded-full border border-[#53389E]/20 bg-white px-8 py-4 text-sm font-bold tracking-widest text-[#53389E] shadow-sm transition-all duration-500 group hover:border-[#53389E] hover:bg-[#F9F5FF] hover:shadow-lg hover:-translate-y-0.5"
                  href="#"
                >
                  DIRECTIONS TO VENUE
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Registration Registry */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <SlideUp className="bg-white rounded-3xl border border-[#7F56D9]/10 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#42307D] via-[#53389E] to-[#7F56D9] p-10 md:p-12 text-center text-white">
              <span className="font-label-caps text-label-caps text-[#FBBF24] block mb-4">
                DELEGATE ENROLLMENT
              </span>
              <h2 className="font-display-hero text-4xl md:text-5xl">
                Registration{" "}
                <span className="italic text-[#FBBF24]">Registry</span>
              </h2>
            </div>
            <div className="p-8 md:p-12 overflow-x-auto">
              <Table className="w-full text-left min-w-[800px] border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-[#FBBF24]/20 hover:bg-transparent">
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
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Members
                    </TableCell>
                    <TableCell className="py-6">₹13,000</TableCell>
                    <TableCell className="py-6">₹16,000</TableCell>
                    <TableCell className="py-6">₹21,000</TableCell>
                    <TableCell className="py-6">₹26,000</TableCell>
                    <TableCell className="py-6">₹35,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Non-Members
                    </TableCell>
                    <TableCell className="py-6">₹19,000</TableCell>
                    <TableCell className="py-6">₹24,000</TableCell>
                    <TableCell className="py-6">₹29,000</TableCell>
                    <TableCell className="py-6">₹34,000</TableCell>
                    <TableCell className="py-6">₹43,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      PG Students
                    </TableCell>
                    <TableCell className="py-6">₹6,000</TableCell>
                    <TableCell className="py-6">₹8,000</TableCell>
                    <TableCell className="py-6">₹12,000</TableCell>
                    <TableCell className="py-6">₹14,000</TableCell>
                    <TableCell className="py-6">₹18,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Diabetes Educators / Dietitians
                    </TableCell>
                    <TableCell className="py-6">₹6,000</TableCell>
                    <TableCell className="py-6">₹8,000</TableCell>
                    <TableCell className="py-6">₹12,000</TableCell>
                    <TableCell className="py-6">₹14,000</TableCell>
                    <TableCell className="py-6">₹18,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
                    <TableCell className="py-6 font-semibold">
                      Accompanying Delegates
                    </TableCell>
                    <TableCell className="py-6">₹13,000</TableCell>
                    <TableCell className="py-6">₹16,000</TableCell>
                    <TableCell className="py-6">₹21,000</TableCell>
                    <TableCell className="py-6">₹26,000</TableCell>
                    <TableCell className="py-6">₹35,000</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-[#FBBF24]/10 hover:bg-surface-container-low transition-colors">
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
              <Button className="shimmer-btn !text-white bg-[#7F56D9] hover:bg-[#6941C6] shadow-md shadow-[#7F56D9]/20 text-white h-auto rounded-full px-12 md:px-16 py-5 font-nav-link text-nav-link uppercase tracking-[0.2em] font-bold hover:from-[#6941C6] hover:to-[#DB2777] transition-all duration-500 shadow-[0_8px_30px_rgba(124,58,237,0.3)]">
                PROCEDURE TO REGISTER
              </Button>
            </div>
          </SlideUp>
        </section>

        {/* Dates and Quick Stats */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <StaggerItem>
              <div className="glass-card rounded-2xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
                <AnimatedCounter
                  target={6000}
                  suffix="+"
                  className="font-sans font-bold text-5xl md:text-6xl text-slate-700 mb-3"
                />
                <h4 className="font-sans font-medium text-base text-slate-500 tracking-wide">
                  Delegates
                </h4>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card rounded-2xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
                <AnimatedCounter
                  target={700}
                  suffix="+"
                  className="font-sans font-bold text-5xl md:text-6xl text-slate-700 mb-3"
                />
                <h4 className="font-sans font-medium text-base text-slate-500 tracking-wide">
                  Faculties
                </h4>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card rounded-2xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
                <AnimatedCounter
                  target={125}
                  suffix="+"
                  className="font-sans font-bold text-5xl md:text-6xl text-slate-700 mb-3"
                />
                <h4 className="font-sans font-medium text-base text-slate-500 tracking-wide">
                  Corporate Participation
                </h4>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* Explore Bengaluru Section */}
        <section className="bg-surface-container/30 py-32 mb-32 border-y border-primary-container/10">
          <div className="max-w-[1440px] mx-auto px-10">
            <SlideUp className="flex flex-col items-center mb-16 text-center">
              <span className="font-label-caps text-label-caps text-[#FBBF24] mb-4">
                POPULAR DESTINATIONS
              </span>
              <h2 className="font-headline-md text-headline-md">
                Explore <span className="italic">Bengaluru</span>
              </h2>
              <div className="w-24 h-[1px] bg-primary-container mt-6"></div>
            </SlideUp>
            <StaggerChildren
              staggerDelay={0.06}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            >
              {BENGALURU_PLACES.map((place) => (
                <StaggerItem key={place.name}>
                  <div className="relative aspect-video group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#42307D]/70 to-[#53389E]/80 group-hover:from-[#42307D]/50 group-hover:to-[#7F56D9]/60 transition-all duration-500 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20 p-4 text-center">
                      <span className="font-sans font-semibold text-white tracking-wide text-sm md:text-lg">
                        {place.name}
                      </span>
                    </div>
                    <Image
                      alt={place.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                      src={place.img}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Us Form */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <SlideUp className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-[0_20px_60px_rgba(10,17,40,0.08)] overflow-hidden">
            <div className="bg-gradient-to-br from-[#42307D] via-[#53389E] to-[#42307D] p-10 md:p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 border border-[#9E77ED]/10 -ml-32 -mt-32 rotate-45 float-slow"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#7F56D9]/20 blur-2xl gradient-orb"></div>
              <span className="font-label-caps text-label-caps text-[#FBBF24] mb-4">
                GET IN TOUCH
              </span>
              <h2 className="font-display-hero text-4xl mb-6">
                Contact <span className="italic text-[#FBBF24]">Us</span>
              </h2>
              <p className="font-sans text-slate-300 leading-relaxed mb-10 max-w-md">
                Have questions about the 54th Annual RSSDI Conference? Reach out
                to our secretariat for assistance with registration, abstracts,
                or accommodation.
              </p>
              <div className="flex flex-col gap-6 font-sans text-sm text-slate-300">
                <a
                  href="mailto:contact@rxevents.co.in"
                  className="flex items-center gap-4 hover:text-[#FBBF24] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#FBBF24]">
                    mail
                  </span>{" "}
                  contact@rxevents.co.in
                </a>
                <a
                  href="tel:+919099331371"
                  className="flex items-center gap-4 hover:text-[#FBBF24] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#FBBF24]">
                    call
                  </span>{" "}
                  +91 90993 31371
                </a>
                <div className="flex items-start gap-4 mt-2">
                  <span className="material-symbols-outlined text-[24px] text-[#FBBF24]">
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
            <div className="p-8 md:p-12 lg:p-16">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                      FIRST NAME
                    </label>
                    <Input
                      className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#FBBF24] shadow-none font-sans text-lg h-auto"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                      LAST NAME
                    </label>
                    <Input
                      className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#FBBF24] shadow-none font-sans text-lg h-auto"
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
                    className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#FBBF24] shadow-none font-sans text-lg h-auto"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface-variant font-semibold tracking-widest">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    className="border-0 border-b border-primary-container/20 rounded-none px-0 py-2 focus:ring-0 focus:border-[#FBBF24] shadow-none font-sans text-lg bg-transparent resize-none w-full outline-none transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button
                  type="button"
                  className="shimmer-btn bg-[#42307D] !text-white rounded-full px-10 py-6 mt-4 font-label-caps text-label-caps font-bold hover:bg-[#42307D]/90 transition-all duration-500 self-start w-full md:w-auto shadow-lg"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </SlideUp>
        </section>

        {/* Newsletter / Invitation */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32">
          <SlideUp className="bg-gradient-to-br from-[#42307D] via-[#53389E] to-[#7F56D9] p-12 md:p-20 text-center relative overflow-hidden rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 border border-[#9E77ED]/10 -mr-32 -mt-32 rotate-45 float-slow"></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 border border-[#FBBF24]/10 -ml-32 -mb-32 rotate-45 float-slow"
              style={{ animationDelay: "3s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#9E77ED]/[0.06] blur-3xl gradient-orb"></div>
            <div className="relative z-10">
              <h2 className="font-display-hero text-4xl md:text-5xl text-white mb-6">
                Receive the Formal{" "}
                <span className="italic text-[#FBBF24]">Invitation</span>
              </h2>
              <p className="font-body-lg text-slate-400 max-w-xl mx-auto mb-10">
                Subscribe to receive the scientific prospectus, keynote
                announcements, and exclusive early-registration access codes.
              </p>
              <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <Input
                  className="flex-grow bg-white/10 border border-[#FBBF24]/20 rounded-full text-white font-body-lg focus-visible:ring-0 focus-visible:border-[#FBBF24] placeholder:text-slate-500 transition-colors px-6 py-3 h-auto backdrop-blur-sm"
                  placeholder="Email Address"
                  type="email"
                />
                <Button className="shimmer-btn bg-[#FBBF24] text-slate-700 rounded-full px-8 py-3 h-auto font-label-caps text-label-caps font-bold hover:bg-white transition-all duration-500">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </SlideUp>
        </section>
      </main>

      {/* Shared Component: Footer */}
      <footer className="bg-gradient-to-b from-[#42307D] to-[#0f0720] border-t border-[#7F56D9]/20 text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            {/* Logo & Contact */}
            <div>
              <Image
                alt="RSSDI 2026 Logo"
                className="h-16 w-auto object-contain brightness-0 invert mb-6"
                src={logo}
                sizes="148px"
              />
              <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
                54th Annual Conference of the Research Society for the Study of
                Diabetes in India.
              </p>
              <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
                <a
                  href="mailto:contact@rxevents.co.in"
                  className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>{" "}
                  contact@rxevents.co.in
                </a>
                <a
                  href="tel:+919099331371"
                  className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
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
              <h4 className="font-label-caps text-label-caps text-[#FBBF24] mb-6">
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
              <h4 className="font-label-caps text-label-caps text-[#FBBF24] mb-6">
                QUERIES
              </h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#FBBF24]"></span>{" "}
                  Registration Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#FBBF24]"></span>{" "}
                  Scientific Program Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#FBBF24]"></span>{" "}
                  Abstract Query
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#FBBF24]"></span>{" "}
                  Contact Query
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="font-sans text-xs uppercase tracking-widest text-slate-400">
              © {new Date().getFullYear()} RSSDI 2026. All Rights Reserved.
            </div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#FBBF24]">
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
