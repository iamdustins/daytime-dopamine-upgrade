import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Coffee, Award, CheckCircle2, ShieldCheck, 
  FileText, MapPin, Mail, ShoppingBag, Compass, 
  ArrowUpRight, Code2, Check, Trees, Terminal, Layers
} from 'lucide-react';

const personas = {
  deadline: {
    id: 'deadline',
    title: 'Deadline Darling',
    role: 'Enterprise Project Manager & AI Evaluation Specialist',
    emblem: '/images/deadline_darling.png',
    accent: 'from-zinc-200/20 via-zinc-400/10 to-transparent',
    badgeText: 'Technical PM & System Architecture',
    tagline: 'Bridging high-stakes regulated field operations and testable code behavior.',
    narrative: `Managing enterprise delivery from blueprint through execution. With deep background handling complex claims exposure, I specialize in translating ambiguous business rules into deterministic validation models, JSON output contracts, and reproducible failure-mode test suites.`,
    stats: [
      { label: 'Claim Exposure Managed', value: '$7.5M+' },
      { label: 'Catastrophe Claims Resolved', value: '7,000+' },
      { label: 'Cross-Functional Scale', value: '10+ Years' },
      { label: 'Audit Compliance', value: '100%' },
    ],
    highlights: [
      'Python-based schema validation & explicit state contracts',
      'Forensic evaluation across insurance, finance & supply chain',
      'Cybersecurity posture: access enforcement, retry idempotency & audit logs',
      'Statutory compliance: Texas P&C All-Lines claims adjusting rigor'
    ],
    links: [
      { label: 'GitHub Specs', url: 'https://github.com/rebeccafayeblasco', icon: Code2 },
      { label: 'Handshake AI', url: 'https://app.joinhandshake.com/profiles/ymzsrj', icon: ArrowUpRight },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rebecca-blasco-b6123025a', icon: ArrowUpRight },
    ]
  },
  signing: {
    id: 'signing',
    title: 'Signing Sweetheart',
    role: 'Texas Notary Public',
    emblem: '/images/signing_sweetheart.png',
    accent: 'from-amber-200/20 via-zinc-400/10 to-transparent',
    badgeText: 'Texas Statutory Notary',
    tagline: 'Part paperwork pro, part professional sparkle.',
    narrative: `Making document execution seamless, elevated, and legally impeccable. Loud sparkle, legit stamp. Everything is bigger in Texas—especially my dedication to getting your critical deeds, affidavits, and transactions done right the first time.`,
    stats: [
      { label: 'Jurisdiction', value: 'Texas Statewide' },
      { label: 'Signature Execution', value: 'Flawless' },
      { label: 'Manicure', value: 'Always Fresh' },
      { label: 'Oath Ready', value: 'On Demand' },
    ],
    highlights: [
      'Real estate deeds, mortgages, closing packets & titles',
      'Statutory affidavits, power of attorney & medical directives',
      'Mobile appointments & on-site travel across Texas',
      'Valid state/federal ID required; smooth experience guaranteed'
    ],
    interactive: true,
  },
  wanderlust: {
    id: 'wanderlust',
    title: 'Wanderlust Wildflower',
    role: 'Catastrophe Operations & Field Deployments',
    emblem: '/images/wanderlust_wildflower.png',
    accent: 'from-stone-300/20 via-zinc-500/10 to-transparent',
    badgeText: 'Field Readiness & Adventure',
    tagline: 'Remote-first velocity, on-site agility.',
    narrative: `“It is in all of us to defy expectations, to go into the world and to be brave, and to want, to need, to hunger for adventures. To embrace the chance and risk so that we may breathe and know what it is to be free.” — Mae Chevrette`,
    stats: [
      { label: 'Deployment Posture', value: 'Rapid' },
      { label: 'Mobility', value: 'Unbounded' },
      { label: 'Catastrophe Ready', value: 'Yes' },
      { label: 'Coffee Sourced', value: 'Worldwide' },
    ],
    highlights: [
      'Rapid catastrophe team deployments in crisis conditions',
      'Remote-first asynchronous cross-functional leadership',
      'Deep adaptability across diverse geographical and regulatory landscapes',
      'Endless curiosity and passion for exploration'
    ],
    links: [
      { label: 'Explore Daytime Dopamine', url: 'https://daytimedopamine.com', icon: ArrowUpRight },
      { label: 'Digital Hub', url: 'https://rebeccafayeblasco.link', icon: ArrowUpRight }
    ]
  }
};

export default function App() {
  const [activePersona, setActivePersona] = useState('deadline');
  const [logicMode, setLogicMode] = useState('inspected');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [stampedCount, setStampedCount] = useState(0);

  const current = personas[activePersona];

  const triggerNotaryStamp = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Platinum, champagne, liquid silver confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#ffffff', '#e2e8f0', '#cbd5e1', '#f1f5f9', '#d4af37', '#94a3b8'],
      shapes: ['circle', 'square'],
      ticks: 200,
      gravity: 0.8,
      scalar: 0.9
    });
    setStampedCount(prev => prev + 1);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('rebeccafayeblasco@daytimedopamine.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-matte-canvas text-[#e2e1e6] relative overflow-hidden font-sans">
      
      {/* Liquid Organic Floating Ambient Light Fields */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/[0.04] via-zinc-400/[0.02] to-transparent blur-3xl opacity-80"
        />
        <motion.div 
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-zinc-200/[0.03] via-amber-200/[0.015] to-transparent blur-3xl opacity-70"
        />
        <motion.div 
          animate={{
            x: [0, 30, -40, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-[10%] left-[25%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-zinc-300/[0.03] to-transparent blur-3xl opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 sm:py-12 flex flex-col gap-14 sm:gap-20">

        {/* Floating Glossy Matte Nav Capsule */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-6 z-50 self-center w-full max-w-4xl"
        >
          <div className="glossy-matte-capsule specular-rim rounded-full px-5 py-3 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-3.5">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md bg-zinc-900">
                  <img 
                    src="/images/avatar.png" 
                    alt="Rebecca Faye Blasco" 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => { e.target.src = '/images/signing_sweetheart.png'; }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/50 transition-all" />
              </div>
              <div>
                <span className="font-editorial text-lg tracking-wide text-white block leading-none font-medium">
                  Rebecca Faye Blasco
                </span>
                <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase mt-0.5 block">
                  Daytime Dopamine
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="https://rebeccafayeblasco.link"
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all duration-300"
              >
                <span>Bio Link</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-white/15 hover:border-white/30 transition-all duration-300 shadow-md active:scale-95"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-zinc-200" /> : <Mail className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copiedEmail ? 'Email Copied' : 'Contact'}</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Hero Section — Seamless, Liquid, Non-Blocky */}
        <section className="relative text-center sm:text-left pt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 max-w-4xl"
          >
            {/* Coffee Motto Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-400 self-center sm:self-start backdrop-blur-xl">
              <Coffee className="w-3.5 h-3.5 text-zinc-300" />
              <span className="tracking-wide">If I’m not drinking coffee, I’m wearing it.</span>
            </div>

            {/* Editorial Liquid Title */}
            <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[1.02] font-normal">
              Deadlines, Data, <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                &amp; Destinations.
              </span>
            </h1>

            {/* Flowing Narrative Body */}
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
              Enterprise Project Manager and Texas-licensed P&amp;C All-Lines adjuster. Over the past decade, I’ve navigated high-stakes operational workflows for startups, career networks, and Fortune 500 enterprises—specializing in translating complex business logic into precise, testable software behavior.
            </p>

            {/* Seamless Liquid Metrics Ribbon */}
            <div className="mt-4 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="space-y-1">
                <div className="font-editorial text-3xl sm:text-4xl text-white font-medium">$7.5M+</div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">Claim Exposure</div>
              </div>
              <div className="space-y-1">
                <div className="font-editorial text-3xl sm:text-4xl text-white font-medium">7,000+</div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">Catastrophe Claims</div>
              </div>
              <div className="space-y-1">
                <div className="font-editorial text-3xl sm:text-4xl text-white font-medium">10+ Yrs</div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">Regulated Delivery</div>
              </div>
              <div className="space-y-1">
                <div className="font-editorial text-3xl sm:text-4xl text-white font-medium">100%</div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">Audit Compliance</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Seamless Persona Flow — "Falling Into Itself" */}
        <section className="relative">
          {/* Fluid Interactive Persona Controller */}
          <div className="flex items-center justify-center mb-8">
            <div className="glossy-matte-capsule specular-rim rounded-full p-1.5 flex items-center gap-1 shadow-xl">
              {Object.keys(personas).map((key) => {
                const item = personas[key];
                const isSelected = activePersona === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActivePersona(key)}
                    className="relative px-5 py-2 rounded-full text-xs font-medium transition-colors duration-300 z-10"
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.12] to-white/[0.05] border border-white/25 shadow-inner"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={isSelected ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Morphing Liquid Persona Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glossy-matte-capsule specular-rim rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-2xl"
            >
              {/* Subtle top liquid gradient highlight */}
              <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br ${current.accent} blur-3xl pointer-events-none opacity-60`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Emblem Visual */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative group">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border border-white/15 bg-zinc-950/80 shadow-2xl p-2 relative">
                      <img 
                        src={current.emblem} 
                        alt={current.title} 
                        className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                    </div>
                  </div>

                  <span className="mt-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/[0.04] border border-white/10 text-zinc-300">
                    {current.badgeText}
                  </span>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div>
                    <h2 className="font-editorial text-4xl sm:text-5xl text-white font-normal mb-2">
                      {current.title}
                    </h2>
                    <p className="text-sm font-mono-code text-zinc-400">
                      {current.role}
                    </p>
                  </div>

                  <blockquote className="text-base sm:text-lg text-zinc-200/90 leading-relaxed font-light border-l border-white/20 pl-4 italic">
                    {current.narrative}
                  </blockquote>

                  {/* Highlights List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Bar (Links or Interactive Notary Button) */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    {current.interactive ? (
                      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={triggerNotaryStamp}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 text-zinc-900 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                        >
                          <Award className="w-4 h-4 text-zinc-800" />
                          <span>Apply Official Texas Notary Seal</span>
                          {stampedCount > 0 && (
                            <span className="ml-1 px-2 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-mono">
                              {stampedCount}
                            </span>
                          )}
                        </motion.button>
                        <span className="text-xs text-zinc-400 font-mono">
                          Loud Sparkle. Legit Stamp.
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-3">
                        {current.links?.map((link, idx) => {
                          const Icon = link.icon;
                          return (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
                            >
                              <Icon className="w-3.5 h-3.5 text-zinc-400" />
                              <span>{link.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Forensic Systems & AI Evaluation Sandbox */}
        <section className="relative">
          <div className="glossy-matte-capsule specular-rim rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-400 mb-4 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                <span>Forensic Logic Architecture</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal mb-3">
                Why Regulated Field Discipline Matters in Tech
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                In complex insurance, finance, and AI workflows, a purely technical code review often misses catastrophic business flaws. Toggle below to inspect how an ambiguous data state is handled:
              </p>
            </div>

            {/* Seamless Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-950/70 border border-white/10 mb-6">
              <button
                onClick={() => setLogicMode('naive')}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  logicMode === 'naive' 
                    ? 'bg-zinc-800 text-white font-medium border border-white/20 shadow' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Standard Dev Default
              </button>
              <button
                onClick={() => setLogicMode('inspected')}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  logicMode === 'inspected' 
                    ? 'bg-white text-zinc-950 font-semibold shadow' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Rebecca's Evaluated Spec
              </button>
            </div>

            {/* Code / Logic Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 rounded-2xl bg-[#050507] border border-white/10 p-5 font-mono text-xs overflow-x-auto shadow-inner relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-zinc-400">
                  <span>claim_evaluation_contract.json</span>
                  <span className={logicMode === 'naive' ? 'text-amber-400' : 'text-emerald-400 font-semibold'}>
                    {logicMode === 'naive' ? 'FAULT: UNCHECKED COLLAPSE' : 'VERIFIED: AUDIT-READY'}
                  </span>
                </div>
                <pre className="text-zinc-300 leading-relaxed">
{logicMode === 'naive' ? `// NAIVE DEV: Collapses missing input into default 0
{
  "claim_id": "CAT-7049",
  "jurisdiction": "TX",
  "deductible_applied": 0,    // Missing value collapsed to $0
  "actual_cash_value": 0,     // Denies legitimate coverage without warning!
  "decision_valid": false     // Code executes 200 OK, but produces illegal settlement
}` : `// REBECCA'S SPEC: Explicit state definitions & validation contracts
{
  "claim_id": "CAT-7049",
  "jurisdiction": "TX_P&C_ALL_LINES",
  "deductible_state": {
    "status": "EXPLICIT_CONFIRMED_ZERO",
    "waiver_verified": true,
    "audit_reference": "TX-INS-2026-F"
  },
  "acv_valuation": {
    "status": "PENDING_FIELD_ESTIMATE",
    "hold_settlement_gate": true
  },
  "idempotency_key": "7b82f-2026-eval",
  "compliance_verified": true
}`}
                </pre>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-sm font-medium text-white mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                    <span>The Forensic Difference</span>
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    A missing financial value, a confirmed zero, and an unapplied field mean three completely different operations. Collapsing them into a default produces fatal real-world errors.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-sm font-medium text-white mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-zinc-300" />
                    <span>Operational &amp; Security Lens</span>
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Trained in digital forensics, incident response, and cloud infrastructure. Ensuring server-side authorization enforcement, retry idempotency, and audit trails complete enough to reconstruct any decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* eBay Revival Spotlight — Smoked Obsidian Capsule */}
        <section className="relative">
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="glossy-matte-capsule specular-rim rounded-[2.5rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white shrink-0 shadow-inner">
                <ShoppingBag className="w-7 h-7 text-zinc-200" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 mb-1.5">
                  <span>The eBay Revival Drop</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  Touching eBay Again
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mt-1 font-light">
                  Curated desk dopamine, aesthetic vintage technology finds, and rare treasures listed under <strong className="text-zinc-200 font-medium">daytime_dopamine</strong>.
                </p>
              </div>
            </div>

            <a 
              href="https://www.ebay.com/usr/daytime_dopamine" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold tracking-wider uppercase transition-all shadow-xl hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <span>Visit eBay Store</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </section>

        {/* The Lorax Easter Egg — Seamless Whisper Pill */}
        <section className="text-center pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 font-light">
            <Trees className="w-3.5 h-3.5 text-zinc-300" />
            <span>“Unless someone like you cares a whole awful lot, nothing is going to get better. It’s not.” — The Lorax</span>
          </div>
        </section>

        {/* Fluid Footer */}
        <footer className="pt-8 pb-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-light">
          <div>
            <span className="text-zinc-300 font-medium">Rebecca Faye Blasco</span> • Founder of Daytime Dopamine
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://daytimedopamine.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              daytimedopamine.com
            </a>
            <span className="text-zinc-700">•</span>
            <a href="https://rebeccafayeblasco.link" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              rebeccafayeblasco.link
            </a>
            <span className="text-zinc-700">•</span>
            <a href="https://linkedin.com/in/rebecca-blasco-b6123025a" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              LinkedIn
            </a>
            <span className="text-zinc-700">•</span>
            <a href="https://github.com/rebeccafayeblasco" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Daytime Dopamine
          </div>
        </footer>

      </div>
    </div>
  );
}
