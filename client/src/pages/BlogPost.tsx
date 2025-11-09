import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { CheckCircle2 } from "lucide-react";
import { SEO, organizationSchema, createBlogPostSchema } from "@/components/SEO";
import searchResultsImage from "@assets/generated_images/Google_search_Silverado_results_47f1aa37.png";
import adsResultsImage from "@assets/generated_images/Google_Ads_automotive_search_a2017ee9.png";
import shoppingResultsImage from "@assets/generated_images/Google_Shopping_vehicle_listings_614ed11c.png";

const blogSchema = createBlogPostSchema({
  headline: "How Dealers Should Evaluate Marketing ROI and Agencies: 12 Practical Moves",
  description:
    "Focus your spend on shoppers who are ready right now, validate with human-readable metrics, and tie every campaign to calls and conversations. A practical guide for automotive dealers.",
  url: "/blog/marketing-roi-evaluation",
  publishedDate: "2025-01-15",
  author: "Savvy Dealer Team",
});

export default function BlogPost() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="How Dealers Should Evaluate Marketing ROI and Agencies"
        description="Focus your spend on shoppers who are ready right now. 12 practical moves for evaluating marketing ROI, validating agency performance, and driving real conversations that lead to sales."
        canonical="https://savvydealer.com/blog/marketing-roi-evaluation"
        ogType="article"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Savvy Dealer Team",
          section: "Marketing Strategy",
        }}
        schemas={[organizationSchema, blogSchema]}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-24">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                The Savvy Blog
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                How Dealers Should Evaluate Marketing ROI and Agencies
              </h1>
              <p className="text-xl text-muted-foreground">
                12 Practical Moves
              </p>
            </div>
          </div>
        </section>

        {/* Quick Hits */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary/5 p-8 dark:bg-primary/10">
              <h2 className="mb-4 font-serif text-2xl font-bold">Quick Hits</h2>
              <p className="text-lg leading-relaxed text-foreground">
                Focus your spend on shoppers who are ready <strong>right now</strong>, validate it with simple, 
                human-readable metrics (time on site, pages viewed, funnel progression), and tie every campaign 
                to <strong>calls and conversations</strong>—not vanity conversions. Meet your agency twice a month: 
                first to set the plan, second to pivot against competitors. Guard your data, mystery-shop your own 
                site, and pay for <strong>real content</strong>, not monthly metadata tinkering.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {/* Move 1 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  1) Aim first at "ready-to-buy" shoppers (then brand later)
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  There are two audiences:
                </p>
                <ul className="mb-4 space-y-2">
                  <li><strong>Now buyers</strong> (high intent): people searching "new Silverado," "Camry," "F-150," etc.</li>
                  <li><strong>Sometime buyers</strong> (awareness): people who may buy in months.</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed">
                  Put your <strong>first dollars</strong> where purchase intent is strongest—core model terms on Google. 
                  Then layer awareness.
                </p>
                <div className="rounded-lg bg-muted/50 p-6">
                  <p className="font-semibold text-foreground">Quick test:</p>
                  <p className="mt-2">
                    On a clean browser (or using Google Ads' <strong>Ad Preview</strong> tool), search your top 
                    models—e.g., "new Silverado."
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Are you visible in <strong>Search</strong> and <strong>Shopping</strong>?</li>
                    <li>• Is the Shopping placement yours—or is a third-party (AutoTrader, Cars.com) outranking you for your <strong>own</strong> inventory?</li>
                  </ul>
                  <p className="mt-2">
                    If you're invisible on your money terms, fix that before anything else.
                  </p>
                </div>
                
                <div className="my-8 overflow-hidden rounded-xl border">
                  <img 
                    src={searchResultsImage} 
                    alt="Example Google search results showing automotive search visibility in both Search and Shopping results"
                    className="w-full"
                  />
                  <p className="bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                    Example: Strong visibility across both organic search and Google Shopping for model searches
                  </p>
                </div>
              </section>

              {/* Move 2 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  2) Don't let "store visits" hide bad spend
                </h2>
                <p className="text-lg leading-relaxed">
                  When agencies optimize only for "get people into the dealership," algorithms often find the 
                  <strong> cheapest</strong> path—service traffic. That yields a packed service lane and a quiet showroom.
                </p>
                <p className="mt-4 mb-6 text-lg leading-relaxed">
                  Make sure your campaigns, goals, and bidding strategies are aligned to <strong>sales</strong> intent 
                  (model terms, SRP → VDP engagement, phone calls, forms), not generic "store visits."
                </p>
                
                <div className="my-8 overflow-hidden rounded-xl border">
                  <img 
                    src={shoppingResultsImage} 
                    alt="Example Google Shopping results showing vehicle inventory listings with photos, pricing, and dealer information"
                    className="w-full"
                  />
                  <p className="bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                    Google Shopping: Your inventory should be prominently displayed for high-intent model searches
                  </p>
                </div>
              </section>

              {/* Move 3 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  3) GA4: keep it simple and watch what matters
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Yes, GA4 is complex. Start with two low-noise signals:
                </p>
                <ul className="mb-4 space-y-2">
                  <li><strong>Average time on site</strong> (are visitors staying long enough to shop?)</li>
                  <li><strong>Pages per session</strong> (are they exploring inventory?)</li>
                </ul>
                <div className="rounded-lg bg-muted/50 p-6">
                  <p className="font-semibold text-foreground">Adam's tip:</p>
                  <p className="mt-2">
                    <strong>Send paid traffic to SRPs, not directly to VDPs.</strong>
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• It's harder to fake "SRP → VDP" clicks than it is to spoof a single VDP visit.</li>
                    <li>• That SRP→VDP ratio exposes pricing issues (e.g., if people bounce from SRPs without opening any vehicles).</li>
                  </ul>
                </div>
                <p className="mt-4 text-lg leading-relaxed">
                  When you can, export GA4 to BigQuery (or your BI tool) and build a simple <strong>funnel</strong>:
                </p>
                <blockquote className="my-4 border-l-4 border-primary pl-4 italic">
                  Users → Stayed 30+ seconds → SRP → VDP → Lead/Call
                </blockquote>
                <p className="text-lg leading-relaxed">
                  Where the drop widens, investigate there first (pricing, "call for price," out-of-stock trims, 
                  in-transit inventory, page speed, pop-ups, etc.).
                </p>
              </section>

              {/* Move 4 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  4) Track phone calls the right way (dynamic numbers)
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Most modern call-tracking platforms use <strong>dynamic number insertion (DNI)</strong> so each 
                  visitor sees a unique number. That allows you to map the call back to:
                </p>
                <ul className="mb-4 space-y-2">
                  <li>• the <strong>source/keyword/ad</strong>, and</li>
                  <li>• the <strong>pages</strong> they viewed before dialing.</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed">Use it to:</p>
                <ul className="mb-4 space-y-2">
                  <li>• Separate <strong>sales</strong> vs. <strong>service</strong> impact (you'll learn "dealership near me" skews heavily to service).</li>
                  <li>• Capture missed calls (and route to a backup line if phones go down).</li>
                  <li>• Validate platform claims ("Did Facebook actually drive inbound calls last week?").</li>
                </ul>
                <div className="rounded-lg bg-muted/50 p-6">
                  <p className="font-semibold text-foreground">Pro tip:</p>
                  <p className="mt-2">
                    Keep the website simple with <strong>one visible number</strong> and let routing logic do the rest.
                  </p>
                </div>
              </section>

              {/* Move 5 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  5) Mystery-shop yourself (and your rivals)
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Spend five minutes a week doing exactly what customers do:
                </p>
                <ul className="mb-4 space-y-2">
                  <li>• Search "new [top model]" in your market (use Ad Preview for neutral results).</li>
                  <li>• Click your ad and your competitor's ad.</li>
                  <li>• Count the <strong>pop-ups</strong>. Do widgets interrupt the purchase path?</li>
                  <li>• Try to submit a lead. How many steps/fields? Any dead ends on mobile?</li>
                </ul>
                <p className="mb-6 text-lg leading-relaxed">
                  You'll quickly see friction you stopped noticing—and tricks some third parties use (e.g., their 
                  search bars sitting on top of your SRP to drive <em>their</em> leads, not your sales).
                </p>
                
                <div className="my-8 overflow-hidden rounded-xl border">
                  <img 
                    src={adsResultsImage} 
                    alt="Example Google Ads search results showing multiple dealership PPC ads competing for visibility"
                    className="w-full"
                  />
                  <p className="bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                    Mystery shop your ads: Are you visible for your top model searches? How do your ads compare to competitors?
                  </p>
                </div>
              </section>

              {/* Move 6 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  6) Guard your data from third-party widgets
                </h2>
                <p className="text-lg leading-relaxed">
                  Any widget you embed (badges, chats, trade-tools) can see a <strong>lot</strong> of your traffic. 
                  That has competitive implications: You might be telegraphing your <strong>active shoppers</strong> to 
                  vendors who also serve nearby stores. Be selective and configure tools to <strong>minimize data 
                  leakage</strong>.
                </p>
              </section>

              {/* Move 7 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  7) SEO you should pay for (and what you shouldn't)
                </h2>
                <ul className="mb-4 space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Pay for tangible pages</strong> every month—model pages, local content, comparisons, financing FAQs, service explainer pages.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">❌</span>
                    <span><strong>Don't</strong> pay monthly for endless metadata tweaks. On a modern site, title/description clean-up is a <strong>periodic</strong> task, not a retainer.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">❌</span>
                    <span>Avoid one-click, AI-generated articles. Duplicate/low-quality content tends to <strong>underperform</strong>. Have a human edit for substance and local specificity.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
                    <span>Spot-check originality: paste your opening sentences into Google; if 20 sites show the same copy, rewrite.</span>
                  </li>
                </ul>
              </section>

              {/* Move 8 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  8) Run a twice-monthly marketing cadence (strategy, then counter-moves)
                </h2>
                <div className="mb-6 rounded-lg bg-primary/5 p-6 dark:bg-primary/10">
                  <h3 className="mb-2 font-bold">Meeting 1 (week 1): Plan</h3>
                  <ul className="space-y-1">
                    <li>• What we're pushing (e.g., leases on specific trims).</li>
                    <li>• Budgets, geos, and creative.</li>
                  </ul>
                </div>
                <div className="mb-4 rounded-lg bg-primary/5 p-6 dark:bg-primary/10">
                  <h3 className="mb-2 font-bold">Meeting 2 (week 3): Pivot</h3>
                  <ul className="space-y-1">
                    <li>• Review performance and <strong>Auction Insights</strong> (Google Ads) to see who's ramping spend in your backyard.</li>
                    <li>• If a rival boosts F-150 aggressively, decide: match, shift budget, or move to a different profit pocket.</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed">
                  Agencies lose accounts not because the initial plan was bad—but because they didn't <strong>pivot</strong> when the market countered.
                </p>
              </section>

              {/* Move 9 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  9) Build a simple "where did this lead come from?" habit
                </h2>
                <p className="text-lg leading-relaxed">
                  If lead sources are a mystery, assume cannibalization. Example Adam shared: a vendor "proved" value 
                  by calling the store's <strong>existing CRM leads</strong> earlier than the BDC, then claiming those 
                  sales as theirs. Your process should make double-counting <strong>impossible</strong>.
                </p>
              </section>

              {/* Move 10 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  10) Validate with the sales floor
                </h2>
                <p className="text-lg leading-relaxed">
                  If you're spending seriously on a platform (e.g., Facebook), you should <strong>occasionally hear</strong> 
                  customers mention it in-store. If your team never hears it, investigate the landing pages, targeting, 
                  and creative.
                </p>
              </section>

              {/* Move 11 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  11) Master Google + Facebook before chasing shiny objects
                </h2>
                <p className="text-lg leading-relaxed">
                  Geofencing, display, OTT, and YouTube are <strong>amplifiers</strong>, not foundations. Nail intent 
                  (Search & Shopping) and high-quality paid social first. Avoid auto-generated ads with stock photos—weak 
                  signals in competitive markets.
                </p>
              </section>

              {/* Move 12 */}
              <section className="mb-16">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  12) Sometimes the month just stinks (don't panic-spend)
                </h2>
                <p className="text-lg leading-relaxed">
                  Not every slump is a media problem. If the campaigns are correctly configured and the market is soft, 
                  resist the urge to "spend your way out." Optimize price/merchandising and stay disciplined.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Weekly Checklist */}
        <section className="bg-card py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">
              A 10-minute weekly checklist
            </h2>
            <div className="space-y-3">
              {[
                "Model search visibility: Are we present on \"[top model]\" in Search & Shopping?",
                "Auction Insights: Who's invading our zip codes this week?",
                "Funnel health: Users → 30s+ → SRP → VDP → Lead/Call. Where's the biggest drop?",
                "Time on site & pages/session: Trending up, flat, or down by source?",
                "Call tracking review: Sales vs. service calls; missed calls; keyword/source matchback.",
                "Mystery shop: Your ad → your SRP → your VDP → your lead form (on mobile).",
                "Widget audit: Any third-party interruptions or leaks?",
                "Content cadence: Which pages went live this month? What's scheduled next?",
                "Sales floor signal: Did anyone mention seeing our Facebook/YouTube ad?",
                "Budget sanity: Any channel growing spend without corresponding engagement gains?"
              ].map((item, index) => (
                <div key={index} className="flex gap-3 rounded-lg bg-background p-4">
                  <span className="font-bold text-primary">{String(index + 1).padStart(2, '0')}.</span>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Questions */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">
              What to ask your agency—every meeting
            </h2>
            <div className="space-y-4">
              {[
                "Show me where we rank/appear for our top model searches right now.",
                "What changed in Auction Insights since last meeting?",
                "SRP→VDP rate by channel last week?",
                "Calls by source and missed calls?",
                "New content URLs published this month?",
                "What will we stop doing next month—and why?"
              ].map((question, index) => (
                <div key={index} className="flex gap-3 rounded-lg border-l-4 border-primary bg-primary/5 p-4 dark:bg-primary/10">
                  <span className="italic text-foreground">"{question}"</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
              Ready to Optimize Your Marketing ROI?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's evaluate your current strategy and identify opportunities for improvement
            </p>
            <Button onClick={openLeadForm} size="lg" data-testid="button-request-audit">
              Request Free Marketing Audit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
