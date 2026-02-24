'use client'

const TIMELINE = [
  { decade: '1980s', desc: 'Early software. Assembler, C, embedded systems. Hardware still fought back.' },
  { decade: '1990s', desc: 'Complex enterprise software. Early internet. Built things before the playbook existed.' },
  { decade: '2000s', desc: 'Global telecom. 2G, 3G rollouts across continents. Operator-scale for the first time.' },
  { decade: '2010s', desc: '4G, 5G architecture. Designed systems used by hundreds of millions.' },
  { decade: '2020s', desc: 'Retired. Thought about 6G. Built theCy. Now finishing what the internet started.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">markus.marknicholson.org</span>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="https://thecy.io" className="transition-colors hover:text-foreground">theCy ↗</a>
            <a href="https://rebe.life" className="transition-colors hover:text-foreground">reBe ↗</a>
            <a href="https://re2me.xyz" className="transition-colors hover:text-foreground">re2me ↗</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen flex-col justify-center px-6 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h1 className="mb-6 font-display text-7xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-8xl md:text-[120px]">
            Mark
            <br />
            Nicholson.
          </h1>
          <p className="mb-12 text-xl text-muted-foreground">Builder. Telecom veteran. Founder of theCy and reBe.</p>
          <div className="flex gap-8 font-mono text-sm text-muted-foreground">
            <a href="https://thecy.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">theCy ↗</a>
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">reBe ↗</a>
            <a href="https://re2me.xyz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">re2me ↗</a>
          </div>
        </div>
      </section>

      {/* SECTION 01 — The Work */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">01 —</div>
        <h2 className="mb-16 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          What I&apos;m Building.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <a href="https://thecy.io" target="_blank" rel="noopener noreferrer"
            className="group border border-border p-8 transition-colors hover:border-primary">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">theCy</div>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
              The infrastructure telecoms own.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The 6G substrate. Distributed OS for post-cloud telecommunications.
              After $100B in 5G investment, operators still pay Amazon to run their networks.
              theCy ends this.
            </p>
          </a>
          <a href="https://rebe.life" target="_blank" rel="noopener noreferrer"
            className="group border border-border p-8 transition-colors hover:border-primary">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">reBe</div>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
              Your data. Your AI. Your device.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Data sovereignty for everyone. Your digital identity is scattered across 50+ services.
              They profit from it. You receive nothing. reBe returns it to you.
            </p>
          </a>
        </div>
      </section>

      {/* SECTION 02 — 45 Years */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">02 —</div>
        <h2 className="mb-16 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          45 Years.
        </h2>
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <div key={item.decade} className={`flex gap-8 border-b border-border py-8 ${i === 0 ? 'border-t' : ''}`}>
              <div className="w-20 shrink-0 font-mono text-sm font-bold text-secondary">{item.decade}</div>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 03 — Philosophy */}
      <section className="flex min-h-screen flex-col justify-center px-6 py-32">
        <div className="mx-auto max-w-5xl w-full">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">03 —</div>
          <h2 className="mb-12 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
            Why This Matters.
          </h2>
          <blockquote className="mb-16 border-l-2 border-secondary pl-8 font-display text-3xl font-extrabold text-secondary italic leading-tight">
            &ldquo;The internet was supposed to be distributed.
            I&apos;m finishing what it started.&rdquo;
          </blockquote>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The hyperscaler model centralised what was designed to be distributed. One company owns your data.
            Another owns your compute. A third owns your identity. None of them are you.
            theCy is the gravitational correction.
          </p>
        </div>
      </section>

      {/* SECTION 04 — Network */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">04 —</div>
        <h2 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          2,475 Connections.
        </h2>
        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          30 years of curated relationships across telecom, cloud, and enterprise.
          LinkedIn since beta. Most of them have become global leaders.
        </p>
        <a
          href="https://linkedin.com/in/marknicholson"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Connect on LinkedIn →
        </a>
      </section>

      {/* CONTACT */}
      <section className="flex min-h-[50vh] flex-col justify-center px-6 py-32">
        <div className="mx-auto max-w-3xl w-full text-center">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">CONTACT</div>
          <p className="mb-8 text-lg text-muted-foreground">
            I respond to every message. Eventually.
          </p>
          <a
            href="mailto:mark@marknicholson.org"
            className="font-mono text-xl text-primary transition-colors hover:text-foreground"
          >
            mark@marknicholson.org →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-1">Mark Nicholson</div>
            <p className="text-sm text-muted-foreground">Builder of things that take 15 years to build.</p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="https://thecy.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">theCy ↗</a>
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">reBe ↗</a>
            <a href="https://re2me.xyz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">re2me ↗</a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2026 Mark Nicholson.</p>
        </div>
      </footer>

    </div>
  )
}
