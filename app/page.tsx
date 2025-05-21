import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Play,
  Calendar,
  Mail,
  ChevronRight,
  Zap,
  Globe,
  Palette,
  Users,
  Shield,
  Code,
} from "lucide-react"

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
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-400">Staff Product Designer / Design System Lead</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Global-Ready Design System for OKX Lite</h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-300 mt-4">
                Led the end-to-end development of a scalable design system adopted across global markets — driving
                consistency, performance, and team efficiency.
              </h2>
              <div className="flex flex-wrap gap-6 pt-4 items-center">
                <Image src="/okx-logo.png" width={80} height={40} alt="OKX Logo" className="object-contain" />
                <div className="flex gap-3">
                  <Image
                    src="/india-flag.png"
                    width={24}
                    height={24}
                    alt="India Flag"
                    className="rounded-full object-cover"
                  />
                  <Image
                    src="/sea-flag.png"
                    width={24}
                    height={24}
                    alt="SEA Flag"
                    className="rounded-full object-cover"
                  />
                  <Image
                    src="/global-icon.png"
                    width={24}
                    height={24}
                    alt="Global Icon"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
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

      {/* Impact Highlights */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Highlights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Measurable results that transformed the product development process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">40%</span>
                    <span className="text-gray-400">cost saving</span>
                  </div>
                  <p className="text-gray-400 mt-2">Reduced development time and resource allocation</p>
                  <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-[#00FFAA] h-full w-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">1000+</span>
                    <span className="text-gray-400">components</span>
                  </div>
                  <p className="text-gray-400 mt-2">Comprehensive library of reusable UI elements</p>
                  <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-[#00FFAA] h-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">Global</span>
                    <span className="text-gray-400">support</span>
                  </div>
                  <p className="text-gray-400 mt-2">Multi-brand system with localization capabilities</p>
                  <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-[#00FFAA] h-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Palette className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">Light/Dark</span>
                    <span className="text-gray-400">theming</span>
                  </div>
                  <p className="text-gray-400 mt-2">Complete theming system with accessibility compliance</p>
                  <div className="mt-4 flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-white"></div>
                    <div className="h-4 w-4 rounded-full bg-gray-900 border border-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">95%</span>
                    <span className="text-gray-400">adoption</span>
                  </div>
                  <p className="text-gray-400 mt-2">High team adoption rate across all product areas</p>
                  <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-[#00FFAA] h-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00FFAA] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFAA]/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-[#00FFAA]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#00FFAA]">Governance</span>
                    <span className="text-gray-400">model</span>
                  </div>
                  <p className="text-gray-400 mt-2">Structured contribution and maintenance process</p>
                  <div className="mt-4 flex gap-1">
                    <div className="h-1 w-4 bg-[#00FFAA]"></div>
                    <div className="h-1 w-8 bg-[#00FFAA]"></div>
                    <div className="h-1 w-12 bg-[#00FFAA]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Gallery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of the design system components, tokens, and implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/token-system.png"
                alt="Token System Preview"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Token System</h3>
                  <p className="text-gray-300">Unified design tokens for colors, typography, and spacing</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/theming-showcase.png"
                alt="UI Theming"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Light & Dark Theming</h3>
                  <p className="text-gray-300">Complete theming system with accessibility compliance</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/component-library.png"
                alt="Component Library in Figma"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Component Library</h3>
                  <p className="text-gray-300">Comprehensive Figma component system with variants</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/implementation.png"
                alt="Implementation Screenshots"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Implementation</h3>
                  <p className="text-gray-300">Code implementation and developer handoff process</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/governance-diagram.png"
                alt="Governance Diagram"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Governance Model</h3>
                  <p className="text-gray-300">Structured contribution and maintenance process</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <Image
                src="/mobile-ui.png"
                alt="Mobile UI Examples"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Mobile UI</h3>
                  <p className="text-gray-300">Real-world application of the design system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story: How You Built It */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we built a comprehensive design system from the ground up
            </p>
          </div>

          {/* Phase 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1 bg-[#00FFAA]/10 text-[#00FFAA] text-sm font-medium rounded-full">
                PHASE 1
              </div>
              <h2 className="text-3xl font-bold">Audit & Alignment</h2>
              <p className="text-gray-400">
                We began with a comprehensive audit of existing UI patterns and inconsistencies across the platform.
                This phase involved close collaboration with product teams to understand their needs and pain points. We
                established clear goals and metrics for the design system, ensuring alignment with business objectives
                and technical constraints.
              </p>
              <div className="flex items-center gap-2 text-[#00FFAA]">
                <span className="text-sm font-medium">Key outcome: Unified vision and roadmap</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/audit-phase.png"
                alt="Audit and Alignment Phase"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-[300px]">
              <Image src="/system-build.png" alt="System Build Phase" fill className="object-contain rounded-lg" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center px-4 py-1 bg-[#00FFAA]/10 text-[#00FFAA] text-sm font-medium rounded-full">
                PHASE 2
              </div>
              <h2 className="text-3xl font-bold">System Build</h2>
              <p className="text-gray-400">
                With a clear direction established, we created a comprehensive token architecture as the foundation of
                our system. We developed component libraries with careful attention to variants, states, and
                accessibility. This phase involved close collaboration with engineering to ensure technical feasibility
                and implementation efficiency. We documented everything meticulously to support adoption.
              </p>
              <div className="flex items-center gap-2 text-[#00FFAA]">
                <span className="text-sm font-medium">Key outcome: 1000+ components and patterns</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1 bg-[#00FFAA]/10 text-[#00FFAA] text-sm font-medium rounded-full">
                PHASE 3
              </div>
              <h2 className="text-3xl font-bold">Rollout & Governance</h2>
              <p className="text-gray-400">
                The final phase focused on driving adoption across teams through education, workshops, and support. We
                established a clear governance model with contribution guidelines, review processes, and maintenance
                procedures. We implemented feedback loops to continuously improve the system based on real-world usage.
                This phase was critical for ensuring long-term sustainability.
              </p>
              <div className="flex items-center gap-2 text-[#00FFAA]">
                <span className="text-sm font-medium">Key outcome: 95% adoption across teams</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/rollout-phase.png"
                alt="Rollout and Governance Phase"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing / Call to Action */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              More than just a design system — a product foundation that scales.
            </h2>
            <p className="text-xl text-gray-300">
              Built for global consistency, local flexibility, and design-engineering harmony.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00FFAA] text-black hover:bg-[#00FFAA]/90 px-8 py-6 text-lg">
                Let's work together <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#00FFAA] text-[#00FFAA] hover:bg-[#00FFAA]/10 px-8 py-6 text-lg"
              >
                Contact me <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
