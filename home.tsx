/**
 * Public landing page (Home)
 * --------------------------
 * Marketing entry-point that introduces XpressPro FX, showcases the live
 * market ticker, account tiers, supported asset classes, platform features,
 * and social proof. Designed to be the first impression for prospects.
 *
 * Sections (order):
 *  1. Live ticker tape
 *  2. Hero + live markets card
 *  3. Stats row
 *  4. Services grid (6 cards)
 *  5. Why traders choose us (6 cards)
 *  6. How It Works (4 steps)
 *  7. Account types / pricing (3 tiers)
 *  8. Platforms
 *  9. Testimonials
 * 10. CTA banner
 * 11. Contact info row
 * 12. Risk disclaimer
 */
import { Link } from "wouter";
import {
  TrendingUp, ShieldCheck, Zap, Globe2, BarChart3, Layers,
  Headphones, Award, Lock, Wallet, ArrowRight, Check,
  ChartLine, Coins, Repeat2, Bot, BriefcaseBusiness, PiggyBank,
  UserPlus, CreditCard, ListChecks, Rocket,
  Mail, Phone, MapPin, MessageSquare,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLiveMarkets, formatPrice } from "@/lib/market-data";

export function PublicHome() {
  const ticker = useLiveMarkets().slice(0, 12);

  return (
    <div>
      {/* ── Live ticker ── */}
      <div className="border-b border-border bg-card/40 overflow-hidden">
        <div className="flex gap-8 px-4 md:px-6 py-2 whitespace-nowrap animate-[scroll_40s_linear_infinite]">
          {[...ticker, ...ticker].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="font-mono font-semibold">{t.symbol}</span>
              <span className="font-mono">{formatPrice(t.bid)}</span>
              <span className={`font-mono text-xs ${t.changePct >= 0 ? "text-primary" : "text-destructive"}`}>
                {t.changePct >= 0 ? "+" : ""}{t.changePct.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Regulated multi-asset broker</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Trade the world's<br />
              markets, the smart way.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Forex, crypto, stocks, indices and commodities — all on one account, with deep liquidity, ultra-tight spreads from 0.0 pips and lightning-fast execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" data-testid="button-hero-signup">
                <Link href="/signup">Open free account <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-hero-demo">
                <Link href="/login">Try demo account</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="2.5M+" label="Active traders" />
              <Stat value="180+" label="Countries" />
              <Stat value="$4.2B" label="Daily volume" />
            </div>
            {/* Risk disclosure note in hero */}
            <div className="mt-6 p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <AlertTriangle className="w-3 h-3 inline text-amber-400 mr-1" />
                <strong className="text-amber-400">Risk Disclosure:</strong> Trading in financial instruments involves a high level of risk and may not be suitable for all investors. 74% of retail accounts lose money.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="border-primary/20 shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Live markets</CardTitle>
                  <Badge variant="secondary" className="font-mono">LIVE</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {ticker.slice(0, 6).map((t) => (
                    <div key={t.symbol} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <div className="font-mono font-semibold text-sm">{t.symbol}</div>
                        <div className="text-xs text-muted-foreground">{t.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-sm">{formatPrice(t.bid)}</div>
                        <div className={`text-xs font-mono ${t.changePct >= 0 ? "text-primary" : "text-destructive"}`}>
                          {t.changePct >= 0 ? "+" : ""}{t.changePct.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="border-y border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "$2.4B+", label: "Assets Under Management" },
            { value: "500K+", label: "Active Investors" },
            { value: "150+", label: "Countries Supported" },
            { value: "99.98%", label: "Platform Uptime" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Services grid ── */}
      <Section title="Everything You Need to Invest" subtitle="From beginner portfolios to advanced algorithmic trading — one platform, limitless potential." tag="What We Offer">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: ChartLine, title: "Stock Trading", desc: "Trade thousands of global equities with real-time quotes, fractional shares, and commission-free execution on major exchanges." },
            { icon: Coins, title: "Crypto Trading", desc: "Buy, sell, and hold 200+ cryptocurrencies 24/7. Secure cold storage, instant settlement, and deep liquidity." },
            { icon: Repeat2, title: "Forex & CFDs", desc: "Access 60+ currency pairs and CFDs on indices, commodities, and ETFs with up to 1:500 leverage and tight spreads." },
            { icon: Bot, title: "Algo Trading", desc: "Build, backtest, and deploy automated strategies using our REST API and Python SDK. No-code bots also available." },
            { icon: BriefcaseBusiness, title: "Managed Portfolios", desc: "Let our AI-driven robo-advisor or certified portfolio managers grow your wealth with risk-adjusted strategies." },
            { icon: PiggyBank, title: "Retirement & ISA", desc: "Tax-advantaged accounts for long-term wealth building — ISA, SIPP, Roth IRA, and more depending on your region." },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:border-primary/40 transition-colors group">
              <CardContent className="p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold mb-2">{title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Asset classes ── */}
      <Section title="Markets you can trade" subtitle="One account, every major asset class.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: Globe2, label: "Forex", desc: "60+ pairs" },
            { icon: BarChart3, label: "Crypto", desc: "200+ coins" },
            { icon: Layers, label: "Indices", desc: "Global indices" },
            { icon: TrendingUp, label: "Stocks", desc: "5,000+ shares" },
            { icon: Award, label: "Commodities", desc: "Metals & energy" },
          ].map(({ icon: Icon, label, desc }) => (
            <Card key={label} className="hover-elevate">
              <CardContent className="p-5 text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">{label}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Why us ── */}
      <Section title="Why traders choose XpressPro FX" subtitle="Built for professionals, accessible to beginners.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Zap, title: "Lightning execution", desc: "Average order execution under 14 ms with no requotes." },
            { icon: ShieldCheck, title: "Regulated & insured", desc: "Segregated client funds across tier-1 banks." },
            { icon: Wallet, title: "Tight spreads", desc: "Spreads from 0.0 pips on raw accounts." },
            { icon: Layers, title: "Deep liquidity", desc: "Aggregated quotes from 25+ tier-1 venues." },
            { icon: Headphones, title: "24/7 support", desc: "Multilingual specialists, every day of the year." },
            { icon: Lock, title: "Bank-grade security", desc: "2FA, biometric login, cold-storage custody." },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <CardContent className="p-6">
                <Icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-semibold mb-1">{title}</div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">Getting Started</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Up & Running in Minutes</h2>
            <p className="mt-2 text-muted-foreground">No paperwork, no waiting. Open your account and start investing today.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, icon: UserPlus, title: "Create Account", desc: "Sign up in under 2 minutes. Verify your identity with a government ID and selfie." },
              { num: 2, icon: CreditCard, title: "Fund Your Account", desc: "Deposit via bank transfer, card, or crypto. Minimum deposit from just $10." },
              { num: 3, icon: ListChecks, title: "Choose Your Strategy", desc: "Pick from self-directed trading, copy trading, or our managed portfolio service." },
              { num: 4, icon: Rocket, title: "Start Investing", desc: "Go live with real funds or practice on a $100K demo account — risk free." },
            ].map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="text-center">
                <div className="relative mx-auto w-16 h-16 mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-card border-2 border-primary text-[10px] font-black text-primary flex items-center justify-center">
                    {num}
                  </span>
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Account types / pricing ── */}
      <Section title="Choose your account" subtitle="Plans that scale with your trading style.">
        <div className="grid md:grid-cols-3 gap-4">
          {ACCOUNTS.map((a) => (
            <Card key={a.name} className={a.featured ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{a.name}</CardTitle>
                  {a.featured && <Badge>Most popular</Badge>}
                </div>
                <div className="mt-2">
                  <div className="text-3xl font-bold">${a.minDeposit}</div>
                  <div className="text-xs text-muted-foreground">minimum deposit</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-5" variant={a.featured ? "default" : "outline"}>
                  <Link href="/signup">Open {a.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Platforms ── */}
      <Section title="Trade anywhere" subtitle="Web, desktop and mobile — your account, synchronized.">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Web platform", desc: "Full-featured charting and order management in your browser. No download required." },
            { title: "Mobile app", desc: "Native iOS & Android apps with biometric login, push price alerts and one-tap trading." },
            { title: "MT4 / MT5 bridge", desc: "Connect your favorite MetaTrader build via our FIX/REST bridge." },
          ].map((p) => (
            <Card key={p.title}>
              <CardContent className="p-6">
                <div className="font-semibold mb-1">{p.title}</div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section title="Trusted by traders worldwide">
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <CardContent className="p-6">
                <div className="text-amber-400 mb-2">★★★★★</div>
                <p className="text-sm mb-4">"{t.quote}"</p>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-6 my-16">
        <div className="max-w-7xl mx-auto rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to start trading?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Open a free account in under 3 minutes. No commitment, no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg"><Link href="/signup">Create live account</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/login">Try demo</Link></Button>
          </div>
        </div>
      </section>

      {/* ── Contact info row ── */}
      <section className="px-4 md:px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">We're Here to Help</h2>
            <p className="mt-2 text-muted-foreground">Our support team is available around the clock, every day of the year.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: "Email Support", value: "support@xpressprofx.com" },
              { icon: Phone, label: "Phone", value: "+1 (800) 555-XPFX" },
              { icon: MessageSquare, label: "Live Chat", value: "Available 24/7 via chat widget" },
              { icon: MapPin, label: "Headquarters", value: "200 Financial District, NY 10005" },
            ].map(({ icon: Icon, label, value }) => (
              <Card key={label}>
                <CardContent className="p-5 flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                    <div className="text-sm font-medium">{value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk Disclaimer ── */}
      <div className="border-t border-border bg-destructive/5 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <AlertTriangle className="w-3.5 h-3.5 inline text-amber-400 mr-1 -mt-0.5" />
            <strong className="text-foreground">Risk Warning:</strong> CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.{" "}
            <strong>74% of retail investor accounts lose money when trading CFDs with XpressPro FX.</strong>{" "}
            You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
            XpressPro FX is authorised and regulated. Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function Section({
  title, subtitle, tag, children,
}: {
  title: string; subtitle?: string; tag?: string; children: React.ReactNode;
}) {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          {tag && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              {tag}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

const ACCOUNTS = [
  {
    name: "Standard",
    minDeposit: 100,
    featured: false,
    features: [
      "Spreads from 1.2 pips",
      "Up to 1:200 leverage",
      "All asset classes",
      "Free demo account",
      "Email support",
    ],
  },
  {
    name: "Pro",
    minDeposit: 1000,
    featured: true,
    features: [
      "Spreads from 0.2 pips",
      "Up to 1:500 leverage",
      "Priority execution",
      "Free VPS hosting",
      "24/7 priority support",
      "Personal account manager",
    ],
  },
  {
    name: "VIP",
    minDeposit: 25000,
    featured: false,
    features: [
      "Spreads from 0.0 pips",
      "Custom leverage",
      "Direct market access",
      "Dedicated dealer",
      "Reduced commissions",
      "Exclusive market reports",
    ],
  },
];

const TESTIMONIALS = [
  { name: "Sarah K.", role: "Day trader, UK", quote: "Execution speed is night-and-day vs my old broker. The mobile app is genuinely usable for managing live trades." },
  { name: "Marcus T.", role: "Swing trader, US", quote: "Tight spreads, fast withdrawals, no nonsense. I've been trading here for two years and have never had a payout delayed." },
  { name: "Aisha M.", role: "Crypto trader, UAE", quote: "Best of both worlds — I can hedge crypto positions against fiat pairs in the same account. Game changer." },
];
