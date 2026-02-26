'use client'

import { useState } from 'react'

// Data extracted from Instagram export — mno127x — 2026-02-26
const profile = {
  handle: 'mno127x',
  email: 'markus.nicholson@gmail.com',
  country: 'CA',
  followers: 91,
  following: 82,
  exportDate: '2026-02-26',
}

const advertiserCount = 10165

const adCategories = [
  'Birthday in July',
  'Facebook Page admins',
  'Frequent Travelers',
  'Frequent international travelers',
  'Friends of Men with a Birthday in 0-7 days',
  'Friends of Recently Moved',
  'Friends of Soccer fans',
  'Friends of those who live abroad',
  'Mobile network or device users',
  'New Page Admins',
  'Potential mobile network or device change',
  'Recent mobile network or device change',
  'Uses a mobile device (25 months+)',
  'Wi-Fi Usage',
  'Facebook access (mobile): Apple (iOS) devices',
  'Facebook access (mobile): all mobile devices',
  'Facebook access (network type): WiFi',
]

const sampleAdvertisers = [
  'Forbes Media LLC', 'Harley-Davidson', 'KAYAK', 'Air Canada', 'OpenTable',
  'Meta Quest', 'Perplexity AI', 'DataCamp', 'Bookshop.org', 'Backstage',
  'Dassault Systèmes', 'SatoshiLabs', 'Veeam Software', 'Time Inc. UK',
  'WPP Thailand - MediaCom', 'On Location', 'Augment Code', 'KiloCode',
  'Who What Wear', 'The Quality Edit',
]

const extractionBreakdown = [
  { label: 'Advertisers with your data', value: '10,165', note: 'Companies that purchased or used your activity/information to target you' },
  { label: 'Ad targeting categories', value: '17', note: 'Meta-defined interest/behaviour segments you were placed in' },
  { label: 'Contact sync enabled', value: 'Yes', note: 'Your phone contacts uploaded to Meta\'s servers' },
  { label: 'Off-Meta activity tracked', value: 'Yes', note: 'Your activity on other websites and apps reported back to Instagram' },
  { label: 'Profile country', value: 'Canada', note: 'Geolocation data retained' },
  { label: 'Followers', value: '91', note: 'Social graph mapped and used for targeting' },
]

export default function InstagramArchive() {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllAdvertisers, setShowAllAdvertisers] = useState(false)
  const [receiptVisible, setReceiptVisible] = useState(false)

  return (
    <div className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">← markus.marknicholson.org</a>
            <span className="font-mono text-xs text-muted-foreground">/</span>
            <span className="font-mono text-xs" style={{color:'rgb(225,48,108)'}}>Instagram Archive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border" style={{borderColor:'rgb(225,48,108)', color:'rgb(225,48,108)'}}>Sovereign</span>
            <span className="font-mono text-[10px] text-muted-foreground">Export: {profile.exportDate}</span>
          </div>
        </div>
      </nav>

      {/* SOVEREIGNTY NOTICE */}
      <div className="pt-16">
        <div className="border-b border-border px-6 py-3" style={{backgroundColor:'rgba(225,48,108,0.05)'}}>
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              Sovereign rendering of @{profile.handle}'s Instagram data — hosted locally, not on Meta's servers.
            </p>
            <span className="font-mono text-[10px] text-muted-foreground hidden sm:block">
              {profile.followers} followers · {advertiserCount.toLocaleString()} advertisers had your data
            </span>
          </div>
        </div>
      </div>

      {/* PROFILE HEADER */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <div className="shrink-0 h-24 w-24 rounded-full border-2 flex items-center justify-center"
              style={{background:'linear-gradient(135deg, rgb(225,48,108,0.3), rgb(193,15,255,0.2))', borderColor:'rgb(225,48,108)'}}>
              <span className="font-display text-3xl font-extrabold" style={{color:'rgb(225,48,108)'}}>MN</span>
            </div>
            <div className="flex-1">
              <h1 className="mb-1 font-display text-3xl font-extrabold text-foreground">@{profile.handle}</h1>
              <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-sm text-muted-foreground mb-3">
                <span><strong className="text-foreground">{profile.following}</strong> following</span>
                <span><strong className="text-foreground">{profile.followers}</strong> followers</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {profile.country} · {profile.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-16">

        {/* THE EXTRACTION — hero stat */}
        <section>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em]" style={{color:'rgb(225,48,108)'}}>
            What Meta extracted from this account
          </div>
          <div className="border p-8 mb-6" style={{borderColor:'rgb(225,48,108,0.4)', background:'rgba(225,48,108,0.03)'}}>
            <div className="text-center mb-8">
              <div className="font-display text-8xl font-extrabold mb-2" style={{color:'rgb(225,48,108)'}}>
                {advertiserCount.toLocaleString()}
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                companies purchased or used @{profile.handle}'s activity and information to target them with ads
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extractionBreakdown.map((item) => (
                <div key={item.label} className="border border-border p-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-display text-xl font-extrabold text-foreground mb-1">{item.value}</div>
                  <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Receipt toggle */}
          <button
            onClick={() => setReceiptVisible(!receiptVisible)}
            className="w-full border border-border p-4 text-left font-mono text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground flex items-center justify-between"
          >
            <span>What does 10,165 advertisers actually mean?</span>
            <span>{receiptVisible ? '↑' : '↓'}</span>
          </button>
          {receiptVisible && (
            <div className="border border-t-0 border-border p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every time you used Instagram — every post you liked, every story you watched, every hashtag you followed,
                every website you visited that had a Meta pixel — Meta packaged that signal and sold access to it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                10,165 companies paid Meta to target you specifically. Not "people like you." You.
                They uploaded their customer lists, their website visitors, their app users —
                and Meta matched them to your profile.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Forbes. Harley-Davidson. Air Canada. KAYAK. Meta Quest. Perplexity AI.
                Every brand that has ever appeared in your feed paid for the privilege, using data you provided for free.
              </p>
              <p className="leading-relaxed" style={{color:'rgb(0,229,255)'}}>
                This is not hypothetical. This is your export. This happened to your account.
              </p>
            </div>
          )}
        </section>

        {/* AD TARGETING CATEGORIES */}
        <section>
          <h2 className="mb-2 font-display text-2xl font-extrabold text-foreground">How Meta categorised you</h2>
          <p className="mb-6 text-muted-foreground text-sm">
            Meta placed @{profile.handle} in these interest and behaviour segments — used to decide which ads to show and which advertisers could reach them.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(showAllCategories ? adCategories : adCategories.slice(0, 8)).map((cat) => (
              <span key={cat} className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
                {cat}
              </span>
            ))}
          </div>
          {adCategories.length > 8 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="font-mono text-xs transition-colors hover:text-foreground" style={{color:'rgb(225,48,108)'}}>
              {showAllCategories ? 'Show less ↑' : `Show all ${adCategories.length} categories ↓`}
            </button>
          )}
        </section>

        {/* SAMPLE ADVERTISERS */}
        <section>
          <h2 className="mb-2 font-display text-2xl font-extrabold text-foreground">Sample of advertisers</h2>
          <p className="mb-6 text-muted-foreground text-sm">
            A sample of the {advertiserCount.toLocaleString()} companies that used @{profile.handle}'s data.
            The full list spans every industry, every geography, every product category imaginable.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(showAllAdvertisers ? sampleAdvertisers : sampleAdvertisers.slice(0, 10)).map((a) => (
              <span key={a} className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">{a}</span>
            ))}
            {!showAllAdvertisers && (
              <span className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
                + {(advertiserCount - 10).toLocaleString()} more...
              </span>
            )}
          </div>
          {sampleAdvertisers.length > 10 && (
            <button
              onClick={() => setShowAllAdvertisers(!showAllAdvertisers)}
              className="font-mono text-xs transition-colors hover:text-foreground" style={{color:'rgb(225,48,108)'}}>
              {showAllAdvertisers ? 'Show less ↑' : 'Show sample ↓'}
            </button>
          )}
        </section>

        {/* POSTS */}
        <section>
          <h2 className="mb-2 font-display text-2xl font-extrabold text-foreground">Posts</h2>
          <div className="border border-border p-8 text-center">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Post content</div>
            <p className="text-muted-foreground mb-4">
              Instagram's export does not include post content or captions in the standard data download.
              A "Photos & Videos" export is required to retrieve the full post archive.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Status: pending full media export · Will render here when available
            </p>
          </div>
        </section>

        {/* SOVEREIGNTY NOTE */}
        <section className="border p-8" style={{borderColor:'rgba(0,229,255,0.3)'}}>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-wider" style={{color:'rgb(0,229,255)'}}>
            What this demonstrates
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This page renders @{profile.handle}'s Instagram data from a sovereign export.
            It lives on Mark's infrastructure — not Meta's. No tracking pixel from Instagram loaded when you visited this page.
            Meta does not know you read this.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The 10,165 advertisers are a fact extracted directly from the official Instagram data export.
            This is what every Instagram user's data looks like — most people just never see it.
          </p>
          <p className="text-sm text-muted-foreground">
            Run the same scan on your own account in 90 seconds.{' '}
            <a href="https://rebe.life" target="_blank" rel="noopener noreferrer"
              className="transition-colors hover:text-foreground" style={{color:'rgb(0,229,255)'}}>
              rebe.life — Aegis →
            </a>
          </p>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-8 mt-16">
        <div className="mx-auto max-w-5xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">← markus.marknicholson.org</a>
            <a href="/linkedin" className="transition-colors hover:text-foreground">LinkedIn Archive →</a>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Sovereign rendering · Export 2026-02-26 · Owned by Mark Nicholson</p>
        </div>
      </footer>

    </div>
  )
}
