'use client'

import { useState } from 'react'

// Data extracted from LinkedIn Basic Export — 2026-02-26
const profile = {
  name: 'Mark Nicholson',
  headline: 'iAm a Programmer of Things in Digital Realms, on a Quest to infuse Technology with Soul, to Transcend function, Awaken purpose, and Evolve through Change',
  location: 'Toronto, Ontario, Canada',
  connections: 2477,
  industry: 'Software Development',
  twitter: 'MarkusNicholson',
  website: 'https://re2me.xyz',
  summary: `I'm a programmer of people and things in digital universe's.

Mark has a passion for technology; specifically software, communications and their collective ability to infuse digital life into things. His career spans three phases: (1) the evolution from mainframes to personal computing, (2) from personal computing to cloud computing, and now (3) from cloud computing to thing computing/data.

With uncommon, hands-on technology range in stewardship (CTO), product management (SVP Product), software development (VP Engineering), entrepreneurship (Founder) and investor (venture partner), his ability to create solutions infused with software and communications has resulted in successful product portfolios delivering value to enterprises and users globally.

Now focused on distributed computing, specifically the evolution of cloud to edge/local computing — and the sovereignty of people's data and intelligence.`,
}

const positions = [
  { company: 're2me, Inc.', title: 'Programmer', location: 'Toronto, Canada', start: 'Apr 2025', end: 'Present', desc: '' },
  { company: 're2me, Inc.', title: 'Founder', location: 'Toronto, Canada', start: 'Jan 2016', end: 'Apr 2025', desc: 'Technology evangelist. Fusion of telecoms, compute and store. Focus on human augmentation and sovereign infrastructure.' },
  { company: 'Altura', title: 'Head of Cyber Security', location: 'Global', start: 'Jan 2022', end: 'Jul 2022', desc: 'SecDevOps, Cloud/Web3 architecture at the fusion of Web3 and Gaming.' },
  { company: 'First Ascent Ventures', title: 'Venture Partner', location: 'Toronto, Canada', start: 'Jun 2015', end: 'Dec 2018', desc: 'Founding member. Canadian thesis-driven VC fund. Enterprise software, big data, ML, IoT.' },
  { company: 'ScribbleLive', title: 'Global Head of Product, Engineering & Technology', location: 'Toronto, Canada', start: 'Jul 2017', end: 'Mar 2018', desc: 'Global head of Engineering across 9 product lines. 7 acquisitions consolidated into an integrated Content Marketing platform.' },
  { company: 'Subex', title: 'CTO & SVP PLM', location: 'Bengaluru, India', start: 'Apr 2007', end: 'Sep 2011', desc: 'Global OSS/BSS company. Predictive analytics, AI/ML, operations intelligence. Emerging markets: India, China, Latin America.' },
  { company: 'TM Forum', title: 'Advisory Director', location: 'Toronto, Canada', start: 'Jan 2007', end: 'Sep 2011', desc: 'Digital transformation architectural patterns and OpenAPIs for global communications service providers.' },
  { company: 'Syndesis', title: 'CTO & SVP PLM', location: 'Toronto, Canada', start: 'Nov 2000', end: 'Mar 2007', desc: 'Executive Leadership Team. 185 staff. Service management, IP and content services. Survived dot-com collapse. Exited to Subex.' },
  { company: 'Nortel', title: 'CTO, eBusiness Solutions', location: 'Toronto, Canada', start: 'Jul 2000', end: 'Nov 2000', desc: 'Software product division with $300M run rate. Integrated Architel\'s portfolio into Nortel. Assets still operational within Oracle Communications.' },
  { company: 'Architel', title: 'CTO, Head of PLM', location: 'Toronto, Canada', start: 'Jun 1995', end: 'Jul 2000', desc: 'Initial employee. 10× growth in employees and revenue. NASDAQ and TSE listing. Acquired by Nortel. OSS provisioning for Tier 1–3 operators globally.' },
  { company: 'Rogers Communications / AT&T', title: 'Technology Advisor & Senior Technology Architect', location: 'Toronto/Seattle', start: 'Mar 1992', end: 'Jun 1995', desc: 'Canadian lead on joint AT&T/Rogers/Accenture initiative. 2G/2.5G Customer Care and Billing. C++, CORBA, NeXTSTEP/Objective-C.' },
  { company: 'Sybis', title: 'Founder', location: '', start: 'Sep 1987', end: 'Dec 1991', desc: 'Built DFMS/CMS: a concurrent database system for VM OS. Full commit/rollback, APPC communications, data security. Sold to Gallup Poll 1988.' },
  { company: 'Thomson Reuters (Extel Financial)', title: 'Project Manager (Architecture)', location: 'London, England', start: 'Sep 1988', end: 'Jun 1991', desc: 'Project Manager of the Extel Workstation — one of the first PC-based financial information terminals. Now part of Thomson Reuters Eikon.' },
  { company: 'Harlequin / Mills & Boon', title: 'Senior Analyst/Programmer; System Administrator', location: 'London, England', start: 'May 1983', end: 'Sep 1987', desc: 'Publishing industry. Direct marketing, retail marketing and royalties. VM/SP systems programming.' },
  { company: 'The Guyana Mining Enterprise Ltd (Guymine)', title: 'Technical Programmer', location: 'Linden, Guyana', start: 'Sep 1981', end: 'Dec 1982', desc: 'Assembler, Fortran, COBOL, PL/1. Ground water flow analysis, statistical distribution fitting, payroll, inventory. IBM 370/Apple II Plus.' },
]

const education = [
  {
    school: 'University of Greenwich',
    degree: "Bachelor's Degree, Computer Science (Hons)",
    years: '1985–1988',
    notes: 'Focused on databases and AI/Expert Systems. Negotiated IP rights to thesis; built and sold first product (DFMS/CMS for IBM VM/370). Studied Prolog, Lisp, semantic nets, fuzzy logic.',
  },
  {
    school: 'Transformational Arts',
    degree: 'Coaching Certificate Program',
    years: '2011–2012',
    notes: 'Psycho-spiritual coaching integrating psychology and spiritual experience. Increases capacity to engage people at profound depth.',
  },
]

const skills = [
  'Telecommunications', 'Product Management', 'Software Development', 'Cloud Computing',
  'Product Lifecycle Management', 'Strategy', 'Start-ups', 'Coaching', 'Deep Learning',
  'Go-to-market Strategy', 'Enterprise Architecture', 'Revenue Assurance', 'Wireless',
  'BSS/OSS', 'SaaS', 'Strategic Partnerships', 'Public Speaking', 'Exits', 'Venture Capital',
]

const articles = [
  {
    title: 'Blockchain, Women and Structured Disruption',
    date: 'April 5, 2018',
    slug: 'blockchain-women-structured-disruption-mark-nicholson',
    excerpt: 'Excited to be a judge at the CryptoChicks Conference and All-female Hackathon. Blockchain has the power to span jurisdictional and network boundaries — removing cost and inertia. CryptoTokens quantify transferable value based on collective belief and trust.',
  },
  {
    title: 'Human versus AI',
    date: 'August 15, 2017',
    slug: 'human-versus-ai-mark-nicholson',
    excerpt: 'As a human, you see a Stop sign with stickers on it. The current state of AI for autonomous vehicles sees a speed limit of 45mph. Humans: 1 / AI: 0. On the limits and vulnerabilities of machine perception.',
  },
]

export default function LinkedInArchive() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">← markus.marknicholson.org</a>
            <span className="font-mono text-xs text-muted-foreground">/</span>
            <span className="font-mono text-xs" style={{color:'rgb(0,166,255)'}}>LinkedIn Archive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border" style={{borderColor:'rgb(0,166,255)', color:'rgb(0,166,255)'}}>Sovereign</span>
            <span className="font-mono text-[10px] text-muted-foreground">Export: 2026-02-26</span>
          </div>
        </div>
      </nav>

      {/* SOVEREIGNTY NOTICE */}
      <div className="pt-16">
        <div className="border-b border-border px-6 py-3" style={{backgroundColor:'rgba(0,166,255,0.05)'}}>
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              This is a sovereign rendering of Mark Nicholson's LinkedIn profile — hosted locally, owned entirely.
              LinkedIn shows the most recent 90 days publicly.
              <a href="https://linkedin.com/in/markusnicholson" target="_blank" rel="noopener noreferrer"
                className="ml-2 transition-colors hover:text-foreground" style={{color:'rgb(0,166,255)'}}>
                View on LinkedIn →
              </a>
            </p>
            <span className="font-mono text-[10px] text-muted-foreground hidden sm:block">
              {profile.connections.toLocaleString()} connections · Full history repatriated
            </span>
          </div>
        </div>
      </div>

      {/* PROFILE HEADER */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            {/* Avatar placeholder */}
            <div className="shrink-0 h-24 w-24 border-2 border-border flex items-center justify-center"
              style={{background:'linear-gradient(135deg, rgb(0,166,255,0.2), rgb(0,229,255,0.1))'}}>
              <span className="font-display text-3xl font-extrabold" style={{color:'rgb(0,166,255)'}}>MN</span>
            </div>
            <div className="flex-1">
              <h1 className="mb-1 font-display text-3xl font-extrabold text-foreground">{profile.name}</h1>
              <p className="mb-3 text-base text-muted-foreground leading-snug max-w-2xl">{profile.headline}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
                <span>{profile.location}</span>
                <span style={{color:'rgb(0,166,255)'}}>{profile.connections.toLocaleString()} connections</span>
                <a href={profile.website} target="_blank" rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground" style={{color:'rgb(0,166,255)'}}>
                  {profile.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-16">

        {/* ABOUT */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-extrabold text-foreground">About</h2>
          <div className="space-y-4">
            {profile.summary.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-extrabold text-foreground">Experience</h2>
          <div className="space-y-0">
            {positions.map((pos, i) => (
              <div key={`${pos.company}-${pos.start}`}
                className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}>
                <button
                  className="w-full flex items-start gap-4 py-6 text-left group"
                  onClick={() => setExpanded(expanded === `${pos.company}-${pos.start}` ? null : `${pos.company}-${pos.start}`)}
                >
                  {/* Company dot */}
                  <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-border group-hover:border-primary transition-colors" />
                  <div className="flex-1">
                    <div className="font-display text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {pos.title}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground mt-0.5">
                      {pos.company} · {pos.location && `${pos.location} · `}{pos.start} – {pos.end}
                    </div>
                    {expanded === `${pos.company}-${pos.start}` && pos.desc && (
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pos.desc}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0 mt-1">
                    {expanded === `${pos.company}-${pos.start}` ? '↑' : '↓'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-extrabold text-foreground">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="border border-border p-6">
                <div className="font-display text-lg font-extrabold text-foreground mb-1">{edu.school}</div>
                <div className="font-mono text-xs text-muted-foreground mb-3">{edu.degree} · {edu.years}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICLES */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-extrabold text-foreground">Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((a) => (
              <div key={a.slug} className="border border-border p-6">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{a.date}</div>
                <h3 className="font-display text-lg font-extrabold text-foreground mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Posts and activity feed: LinkedIn Basic export does not include posts.
            <a href="https://linkedin.com/in/markusnicholson" target="_blank" rel="noopener noreferrer"
              className="ml-2 transition-colors hover:text-foreground" style={{color:'rgb(0,166,255)'}}>
              View recent posts on LinkedIn →
            </a>
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-extrabold text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* SOVEREIGNTY NOTE */}
        <section className="border border-border p-8" style={{borderColor:'rgba(0,166,255,0.3)'}}>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-wider" style={{color:'rgb(0,166,255)'}}>
            What you're looking at
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This page renders Mark's LinkedIn data from a local export — not from LinkedIn's servers.
            The data is owned, stored, and served from sovereign infrastructure.
            No LinkedIn tracking pixel. No LinkedIn algorithm. No LinkedIn advertising profile built from your visit here.
          </p>
          <p className="text-sm text-muted-foreground">
            This is what reBe does for everyone.{' '}
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer"
              className="transition-colors hover:text-foreground" style={{color:'rgb(0,229,255)'}}>
              rebe.life →
            </a>
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-8 mt-16">
        <div className="mx-auto max-w-5xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">← markus.marknicholson.org</a>
            <a href="/instagram" className="transition-colors hover:text-foreground">Instagram Archive →</a>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Sovereign rendering · Export 2026-02-26 · Owned by Mark Nicholson</p>
        </div>
      </footer>

    </div>
  )
}
