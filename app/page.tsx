'use client'

import { useState } from 'react'

const firstLife = [
  {
    years: '1981–1983',
    place: 'Georgetown, Guyana',
    role: 'Technical Programmer — Guymine',
    body: 'First code. State mining company. Punch cards, mainframes, the weight of real systems. Guyana taught me that technology either serves people or it serves someone else\'s interests. Nothing in between.',
  },
  {
    years: '1983–1988',
    place: 'London, England',
    role: 'Senior Analyst — Mills & Boon',
    body: 'Crossed the Atlantic. Wrote code for one of the world\'s largest romance publishers. Then university — BSc Computer Science, University of Greenwich. Learned that software is always about human stories, never about the technology itself.',
  },
  {
    years: '1988–1991',
    place: 'London, England',
    role: 'Project Manager — Extel Financial',
    body: 'Helped build the world\'s first PC-based financial analyst workstation. The Extel Workstation became the foundation of what is now Thomson Reuters Eikon. The trading desks of every major bank ran on it. That\'s when I understood scale.',
  },
  {
    years: '1991–1995',
    place: 'London → Toronto',
    role: 'Consultant/Architect — NMW-Charterhouse, Gallup, Rogers/AT&T',
    body: 'Moved to Canada. Three continents in a decade. Gallup taught me data. Rogers/AT&T put me inside telecoms for the first time. The network was becoming something. I wanted to be inside it.',
  },
  {
    years: '1995–2000',
    place: 'Toronto, Canada',
    role: 'CTO — Architel/Nortel',
    body: 'One of the first employees. Grew from startup to NASDAQ listing. 10× employees, 10× revenue in five years. Built the OSS provisioning systems that helped wire the world for 3G. Exited to Nortel. My first exit.',
  },
  {
    years: '2000–2007',
    place: 'Toronto → Global',
    role: 'CTO/SVP — Syndesis Limited',
    body: '185-person team. Service management software for Tier 1 operators across North America, Europe, India. Led through the dot-com collapse — kept the company alive through a 50% staff reduction. Built it back. Sold to Subex. My second exit.',
  },
  {
    years: '2007–2011',
    place: 'Toronto → Bangalore',
    role: 'CTO/SVP — Subex (post-acquisition)',
    body: 'Led product globally for a BSS/OSS company headquartered in India. Predictive analytics and AI on telecom networks before "AI" was a product category. Operators used these systems to find billions in revenue leakage annually.',
  },
  {
    years: '2012–2020',
    place: 'Toronto, Canada',
    role: 'Venture Partner / Fractional CTO / Builder',
    body: 'Founding partner at First Ascent Ventures. Fractional leadership for pre-Series B companies. Coaching CTOs and CIOs. Three citizenships. Lived and built on four continents. Started asking: what comes after cloud? Started building theCy.',
  },
]

const platforms = [
  {
    name: 'LinkedIn',
    handle: 'markusnicholson',
    url: 'https://linkedin.com/in/markusnicholson',
    archiveUrl: '/linkedin',
    since: '2004',
    status: 'active',
    note: '2,477 connections. Last 90 days on LinkedIn. Full profile + articles repatriated.',
    archiveNote: 'Full position history 1981–2026, 2 published articles, skills, education — all rendered sovereignly from official export.',
    highlight: '2,477 connections · Export 2026-02-26',
  },
  {
    name: 'Instagram',
    handle: 'mno127x',
    url: null,
    archiveUrl: '/instagram',
    since: '2013',
    status: 'active',
    note: '10,165 advertisers used your data. See the full extraction receipt.',
    archiveNote: 'Ad targeting categories, advertiser list, follower/following graph — rendered from official Meta export. The extraction is documented.',
    highlight: '10,165 advertisers had your data',
  },
  {
    name: 'X / Twitter',
    handle: '@marknicholson',
    url: null,
    archiveUrl: null,
    since: '2009',
    status: 'repatriating',
    note: '15 years of posts. Export requested. Migrating to Chronicle.',
    archiveNote: '15 years of posts, threads, and conversations — being processed into sovereign archive.',
    highlight: null,
  },
  {
    name: 'Facebook / Meta',
    handle: 'marknicholson',
    url: null,
    archiveUrl: null,
    since: '2008',
    status: 'repatriating',
    note: '18 years. Year-by-year exports from 2004. Migrating.',
    archiveNote: 'Photos, posts, connections, events — exported and being ingested into local Chronicle.',
    highlight: null,
  },
]

const beliefs = [
  {
    number: '01',
    title: 'Data is autobiography.',
    body: 'Everything digital you\'ve ever done is your story. Your searches, your messages, your movements, your purchases. That story belongs to you — not to the platform that recorded it.',
  },
  {
    number: '02',
    title: 'The internet was designed to be distributed.',
    body: 'Tim Berners-Lee\'s original vision had no centre. No hyperscaler. No single company that owns your identity, your storage, your compute. We lost that thread somewhere. I\'m helping to find it again.',
  },
  {
    number: '03',
    title: 'Technology serves people — or it serves someone else.',
    body: 'I learned this in Guyana in 1981. Every technology decision is a power decision. Who benefits? Who controls? Who can exit? These aren\'t technical questions. They\'re human ones.',
  },
  {
    number: '04',
    title: 'The second life is a gift.',
    body: 'I retired at 45 with enough. Two exits, four continents, 40 years of building. Then I realised: the people who\'ve actually built the infrastructure have an obligation to fix what\'s broken about it. This is my second life\'s work.',
  },
  {
    number: '05',
    title: 'Until 90.',
    body: 'I intend to work until 2052. Not because I have to — because building things that matter is not work. It\'s the point. The sovereignty movement is a 25-year project. I\'m in.',
  },
]

export default function Home() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null)

  return (
    <div className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">markus.marknicholson.org</span>
          <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <a href="#second-life" className="hidden sm:block transition-colors hover:text-foreground">Second Life</a>
            <a href="#first-life" className="hidden sm:block transition-colors hover:text-foreground">First Life</a>
            <a href="#archive" className="hidden sm:block transition-colors hover:text-foreground">Archive</a>
            <a href="https://re2me.xyz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">re2me ↗</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen flex-col justify-center px-6 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">MARKUS NICHOLSON — SECOND LIFE</div>
          <h1 className="mb-8 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[120px]">
            Mark
            <br />
            Nicholson.
          </h1>
          <p className="mb-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Programmer. Builder. Telecom veteran. Venture partner.
            <br />
            Three citizenships. Four continents. Two exits.
          </p>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed" style={{color: 'rgb(0,229,255)'}}>
            Retired mid-life. Now in my second life — building the sovereignty infrastructure
            I wish had existed during the first one. Working until 2052.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <a href="#second-life" className="font-mono text-sm text-foreground transition-colors hover:text-primary">
              The second life →
            </a>
            <a href="#first-life" className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              45 years of first life ↓
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 01 — Second Life */}
      <section id="second-life" className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">01 — SECOND LIFE</div>
        <h2 className="mb-12 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          What I&apos;m
          <br />
          Building Now.
        </h2>
        <p className="mb-16 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I spent 40 years building infrastructure for corporations and operators.
          The second life is about building it for people. For you. For your children.
          For the operators who want to own what they built.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              label: 'theCy',
              tagline: 'The infrastructure telecoms own.',
              body: 'Sovereign compute on operator-owned hardware. The 6G substrate that stops the $2.1B–$5.25B/year cloud rent. $34.4B in new annual value per 100M subscribers.',
              url: 'https://thecy.io',
              color: 'primary',
            },
            {
              label: 'reBe',
              tagline: 'Your data. Your AI. Your sovereignty.',
              body: '50+ services are extracting $742/year from you right now. Aegis shows you exactly what they have. Guardian protects your children. You take it back.',
              url: 'https://rebe.life',
              color: 'secondary',
            },
            {
              label: 're2me',
              tagline: 'The consulting layer.',
              body: 'For operators and enterprises who need someone who\'s actually built this. Fixed engagements. Emergency rescue to full sovereign migration.',
              url: 'https://re2me.xyz',
              color: 'primary',
            },
          ].map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border p-6 transition-colors hover:border-primary block"
            >
              <div className="mb-2 font-mono text-xs uppercase tracking-wider" style={p.color === 'primary' ? {color:'rgb(0,229,255)'} : {color:'rgb(255,215,0)'}}>
                {p.label}
              </div>
              <div className="mb-3 font-display text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                {p.tagline}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 02 — What I Believe */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">02 — PHILOSOPHY</div>
        <h2 className="mb-16 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          What I
          <br />
          Believe.
        </h2>
        <div className="space-y-0">
          {beliefs.map((b, i) => (
            <div key={b.number} className={`flex gap-8 border-b border-border py-10 ${i === 0 ? 'border-t' : ''}`}>
              <div className="w-12 shrink-0 font-mono text-sm font-bold" style={{color:'rgb(255,215,0)'}}>{b.number}</div>
              <div>
                <div className="mb-3 font-display text-xl font-extrabold text-foreground">{b.title}</div>
                <p className="text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 03 — First Life */}
      <section id="first-life" className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">03 — FIRST LIFE</div>
        <h2 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          1981–2020.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          Guyana to England. England to Canada. Canada to everywhere.
          40 years building software, products, and teams across four continents.
          Click any role for the full story.
        </p>
        <div className="space-y-0">
          {firstLife.map((item, i) => (
            <div
              key={item.years}
              className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}
            >
              <button
                className="w-full flex items-start gap-6 py-8 text-left transition-colors hover:text-primary group"
                onClick={() => setExpandedJob(expandedJob === item.years ? null : item.years)}
              >
                <div className="w-32 shrink-0">
                  <div className="font-mono text-xs font-bold" style={{color:'rgb(0,229,255)'}}>{item.years}</div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-1">{item.place}</div>
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {item.role}
                  </div>
                  {expandedJob === item.years && (
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  )}
                </div>
                <div className="font-mono text-xs text-muted-foreground shrink-0 mt-1">
                  {expandedJob === item.years ? '↑' : '↓'}
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04 — The Transition */}
      <section className="flex min-h-[70vh] flex-col justify-center px-6 py-32" style={{background: 'linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.03) 50%, transparent 100%)'}}>
        <div className="mx-auto max-w-5xl w-full">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">04 — THE TRANSITION</div>
          <h2 className="mb-12 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
            I retired at 45.
            <br />
            <span className="text-muted-foreground">Then I came back.</span>
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 max-w-4xl">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Why I left</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Two exits. Enough runway. 40 years of complex software across every continent.
                I had built things. I had proven things. I had earned the pause.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                So I stopped. Mid-life. By choice. While I still had the energy to enjoy it.
              </p>
            </div>
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Why I came back</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Because I couldn&apos;t stop thinking about the extraction. The centralisation.
                The way the internet — which was supposed to be ours — had become someone else&apos;s asset.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{color: 'rgb(0,229,255)'}}>
                The people who built the infrastructure have an obligation to fix what&apos;s broken about it.
                That&apos;s not ambition. That&apos;s responsibility.
              </p>
            </div>
          </div>
          <div className="mt-16 border-l-4 border-secondary pl-8 max-w-2xl">
            <p className="font-display text-2xl font-extrabold italic" style={{color:'rgb(255,215,0)'}}>
              &ldquo;I intend to work until 2052. Not because I have to.
              Because building things that matter is not work — it&apos;s the point.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — Sovereign Archive */}
      <section id="archive" className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">05 — SOVEREIGN ARCHIVE</div>
        <h2 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          40+ Years.
          <br />
          Repatriated.
        </h2>
        <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
          Digital and scanned analog data accumulating since the early 1980s — all of it
          sovereign, local, owned by me. This is reBe eating its own cooking.
        </p>
        <p className="mb-16 max-w-2xl text-base text-muted-foreground">
          Every social platform shows 90 days of recent posts publicly.
          Click through to reach my sovereign archive — rendered locally, owned entirely,
          the full history intact and immutable.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="border border-border p-6 cursor-pointer transition-colors hover:border-primary"
              onClick={() => setExpandedPlatform(expandedPlatform === p.name ? null : p.name)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-display text-xl font-extrabold text-foreground">{p.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">since {p.since}</div>
                </div>
                <div className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 border ${
                  p.status === 'active'
                    ? 'border-primary text-primary'
                    : 'border-muted-foreground text-muted-foreground'
                }`}>
                  {p.status === 'active' ? 'live' : 'repatriating'}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.note}</p>
              {expandedPlatform === p.name && (
                <p className="text-xs text-muted-foreground border-t border-border pt-4 mb-4 leading-relaxed">
                  {p.archiveNote}
                </p>
              )}
              {p.highlight && (
                <div className="mb-3 font-mono text-xs font-bold" style={{color:'rgb(255,215,0)'}}>{p.highlight}</div>
              )}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex gap-4">
                  {p.archiveUrl && (
                    <a
                      href={p.archiveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-xs transition-colors hover:text-foreground"
                      style={{color:'rgb(0,229,255)'}}
                    >
                      View sovereign archive →
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Live profile ↗
                    </a>
                  )}
                  {!p.archiveUrl && !p.url && (
                    <span className="font-mono text-xs text-muted-foreground">Migration in progress</span>
                  )}
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {expandedPlatform === p.name ? '↑' : '↓'}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border border-border p-8">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">The analog archive</div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beyond the digital — scanned letters, documents, photographs, and records going back to the 1980s.
            Employment records from Guymine. CVs typed on word processors in 1991.
            The complete paper trail of a life, digitised and stored sovereignly.
          </p>
          <p className="text-sm text-muted-foreground">
            This is the Chronicle that reBe is built for. Not a product demo —
            a <span style={{color:'rgb(0,229,255)'}}>lived example</span> of what sovereign data looks like at 40 years of depth.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="flex min-h-[50vh] flex-col justify-center px-6 py-32">
        <div className="mx-auto max-w-3xl w-full">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">06 — CONTACT</div>
          <h2 className="mb-8 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
            I respond to
            <br />
            every message.
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted-foreground leading-relaxed">
            If you&apos;re building something in the sovereignty space, need a conversation about
            telecoms and 6G, or just want to understand what this second life is about —
            write to me.
          </p>
          <a
            href="mailto:mark@marknicholson.org"
            className="font-mono text-xl transition-colors hover:text-foreground"
            style={{color:'rgb(0,229,255)'}}
          >
            mark@marknicholson.org →
          </a>
          <div className="mt-8 flex gap-8 font-mono text-xs text-muted-foreground">
            <a href="https://thecy.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">theCy ↗</a>
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">reBe ↗</a>
            <a href="https://re2me.xyz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">re2me ↗</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] mb-1" style={{color:'rgb(0,229,255)'}}>Mark Nicholson</div>
            <p className="text-sm text-muted-foreground">Second life. Sovereignty movement. Working until 2052.</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="https://thecy.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">theCy ↗</a>
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">reBe ↗</a>
            <a href="https://re2me.xyz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">re2me ↗</a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-border flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Mark Nicholson. Sovereign by design.</p>
          <p className="text-xs text-muted-foreground">All data repatriated. No trackers. No third-party analytics.</p>
        </div>
      </footer>

    </div>
  )
}
