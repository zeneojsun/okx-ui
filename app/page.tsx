import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFAA20] to-transparent" />
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#00AAFF20] to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1 border border-[#00FFAA] text-[#00FFAA] text-sm font-medium rounded-full mb-4">
                CASE STUDY
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                OKX Lite Platform <span className="text-[#00FFAA]">&</span> Design System
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-300 mt-4">
                Launched new Lite Product to target user globally
              </h2>
              <p className="text-gray-400 max-w-xl">
                Successfully built the OKX Lite product from 0 to 1, achieving a 90% positive feedback rating following
                its launch.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#00FFAA] text-black hover:bg-[#00FFAA]/90">
                  Launch Press <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#00FFAA] text-[#00FFAA] hover:bg-[#00FFAA]/10">
                  Product Preview <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[500px] w-full md:w-[400px] mx-auto">
                <Image
                  src="/okx-hero-mockup.png"
                  alt="OKX Lite Platform Mobile UI"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00FFAA] rounded-full blur-[100px] opacity-30" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00AAFF] rounded-full blur-[100px] opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Foundation */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Crafted a Streamlined Design System Widely Adopted by Users
              </h2>
              <p className="text-gray-400">Developed from scratch for Lite product launch in 4 months, achieving</p>
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-[#00FFAA]">95%</span>
                  <span className="text-gray-300">adoption</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-[#00FFAA]">20–40%</span>
                  <span className="text-gray-300">efficiency boost</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-[#00FFAA]">1.5x</span>
                  <span className="text-gray-300">faster delivery</span>
                </div>
              </div>
              <p className="text-gray-400">
                Led the creation of a unified system: tokens, components, documentation, governance, and education.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/design-system-grid.png"
                alt="Design System Components Grid"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Multi-Brand System */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <Image src="/multi-brand-system.png" alt="Multi-Brand Design System" fill className="object-contain" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Engineered a Scalable Multi-Brand Design System for Group-Level Expansion
              </h2>
              <p className="text-gray-400">
                Merged 3 systems into one robust framework with a shared component library, style foundations, and
                pattern assets.
              </p>
              <p className="text-gray-400">Co-led rollout with 10–12 domain experts across 3 major phases.</p>
              <div className="pt-4">
                <Link href="#" className="text-[#00FFAA] flex items-center group">
                  View system architecture
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Theming Rollout */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Delivered Dark & Light Mode Theming for 50M Global Users
              </h2>
              <p className="text-gray-400">Led end-to-end theming—from technical audit to QA and launch—in 1 month.</p>
              <p className="text-gray-400">
                Ensured accessibility compliance and branding alignment for a seamless toggle experience.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-black"></div>
                </div>
                <div className="h-12 w-12 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image src="/theming-showcase.png" alt="Dark and Light Mode Theming" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Scaling */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Standardized Product Enhancement Process</h2>
              <p className="text-gray-400">Systematized iteration with:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00FFAA] transition-colors">
                <div className="h-12 w-12 rounded-full bg-[#00FFAA]/10 flex items-center justify-center mb-4">
                  <span className="text-[#00FFAA] font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Governance workflows</h3>
                <p className="text-gray-400">Structured approach to system changes and updates</p>
              </div>

              <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00FFAA] transition-colors">
                <div className="h-12 w-12 rounded-full bg-[#00FFAA]/10 flex items-center justify-center mb-4">
                  <span className="text-[#00FFAA] font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Contribution model</h3>
                <p className="text-gray-400">Clear pathways for team members to enhance the system</p>
              </div>

              <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00FFAA] transition-colors">
                <div className="h-12 w-12 rounded-full bg-[#00FFAA]/10 flex items-center justify-center mb-4">
                  <span className="text-[#00FFAA] font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Async design reviews</h3>
                <p className="text-gray-400">Efficient feedback cycles and office hours support</p>
              </div>
            </div>

            <p className="text-center text-gray-400">
              Improved consistency and reduced process friction across all product teams.
            </p>
          </div>
        </div>
      </section>

      {/* KYC & Compliance */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image src="/kyc-flow.png" alt="KYC Flow Redesign" fill className="object-contain" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Unified OKX KYC for Improved UX and Compliance</h2>
              <p className="text-gray-400">Revamped the KYC flow to meet platform standards and enhance usability.</p>
              <p className="text-gray-400">Supported legal compliance with a unified, cross-platform system.</p>
              <div className="flex gap-2 pt-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Compliance</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">User Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Illustration */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  OKX Rebranding: From OKEx to a Digital Asset Ecosystem
                </h2>
                <p className="text-gray-400">Refreshed branding, UI, and UX across Lite and Web.</p>
                <p className="text-gray-400">Resulted in 70–80% team adoption post-rebrand.</p>
              </div>
              <div className="relative h-[300px]">
                <Image src="/rebrand-showcase.png" alt="OKX Rebranding" fill className="object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[300px]">
                <Image src="/illustration-system.png" alt="Illustration System" fill className="object-contain" />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Co-led Illustration Integration for Cohesive Visual Guidance
                </h2>
                <p className="text-gray-400">
                  Directed cross-platform visual guidance, embedding illustration into onboarding and product journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to see more?</h2>
            <p className="text-gray-400 text-xl">Explore the complete OKX Lite Design System case study</p>
            <div className="pt-4">
              <Button className="bg-[#00FFAA] text-black hover:bg-[#00FFAA]/90 px-8 py-6 text-lg">
                View Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
