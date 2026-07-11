# Weight Wingman — App Profile & SEO Keyword Research

> Source of truth for site copy and SEO targeting. Pulled from the App Store listing,
> the current site, and live SERP research (July 2026).

---

## 1. App profile (from the App Store listing)

- **Name:** Weight Wingman
- **Subtitle:** Weight Cuts & Bulks Made Easy
- **App Store URL:** https://apps.apple.com/us/app/weight-wingman/id6740700573
- **Developer / Seller:** Zacherl Investments LLC
- **Category:** Health & Fitness · Age rating 9+ · 15.1 MB · English
- **Platforms:** iPhone, iPad, Mac (Apple Silicon), Apple Vision — requires iOS/iPadOS/macOS/visionOS 26.0+
- **Rating:** 3.5 ★ (4 ratings)
- **Price:** Free with in-app purchases
  - Weight Wingman – Monthly: **$4.99/mo**
  - Weight Wingman – Yearly: **$19.99/yr**
  - Small Team Yearly (up to 15 athletes): **$224.99/yr**
  - Full Roster Yearly (up to 40 athletes): **$479.99/yr**
  - Unlimited Plan: **$799.99/yr**
- **Privacy:** Data Not Collected — everything runs on-device (genuine differentiator; competitors are cloud/AI-subscription apps)

### Store description (current, verbatim highlights)

> "Whether you're aiming to shed those extra pounds, pack on some muscle, or maintain your
> current physique, let the Weight Cut Wingman guide your journey.
> — Personalized Meal Plans Tailored Just For You!
> — Handcrafted Shopping Lists for Hassle-Free Grocery Runs!
> — Track Progress and Achieve Your Fitness Goals This Season!
> For just $34.99 a year or $4.99 a month…"

### Key features (from version history + site)

1. AI food logging — type a meal in plain English, get calories/protein/carbs/fat (on-device Apple Foundation Models, works offline)
2. AI meal generation — "high-protein lunch under 600 cals" → full meal with portions and macros
3. Daily calorie + water targets that recalculate toward weigh-in date, incl. 5-phase water-loading protocol
4. Danger flags at NCAA/NFHS weekly weight-loss thresholds
5. Recovery Mode — post-weigh-in refuel/rehydration guidance
6. Coach team dashboard (v2.1.5) — live roster weights, color-coded risk tiers, real-time sync, PDF/CSV compliance export, 6-character invite codes
7. Free tier: weight logging, water tracking, hydration generation, progress

### ⚠️ ASO findings (App Store, not the website — but this is where downloads happen)

- The store description **never says "wrestling" or "wrestler"** — the single highest-intent
  keyword for this app. It reads like a generic diet app.
- The description quotes an **outdated price ($34.99/yr; actual is $19.99/yr)**.
- The subtitle "Weight Cuts & Bulks Made Easy" spends characters on "bulks" instead of
  "wrestling". Suggested: **"Wrestling Weight Cut & Coach App"** or "Make Weight for Wrestling".
- Team/coach functionality (the highest-priced product) isn't in the description at all.
- Recommendation: rewrite the store description around the same keyword set below.
  App Store search is likely a bigger download channel than Google for this product.

---

## 2. Search landscape (who ranks today)

Checked July 2026 SERPs:

| Query | Who ranks | Opening |
|---|---|---|
| "weight cutting app for wrestlers" | Instagram/ATAC, CutPro (combat-generic), Reddit threads, Bullard Nutrition guide, CutCoach | No wrestler-specific app site ranks with focused copy — winnable |
| "wrestling weight management app" | Cliff Keen chart, Takedown/LevelChanger, Facebook groups, NWCA OPC, state PDFs | Coach-intent SERP; nobody markets a live roster dashboard well |
| "best app to cut weight for wrestling" | Reddit, CutCoach App Store page | Reddit dominance = content/community gap |
| "wrestling weight cut plan / calculator" | combatsportsweightcut.com, MAGNVS, Bullard, NWCA | Calculator-intent — blog + app can capture |

**Competitors:** ATAC (broad athlete training), CutPro (elite combat), CutCoach (combat, "cut up to 10%"),
Takedown Scoring & Stats (coach admin), NWCA OPC (institutional). **None combine wrestler + parent + coach
messaging, NCAA/NFHS safety framing, and an offline/no-data-collected AI app.** That's the positioning wedge.

**Site status:** weightwingman.com is indexed and healthy (sitemap, jekyll-seo-tag, blog ranking for some
long-tails). The problem is on-page targeting: keyword-free H1/H2s, duplicated brand in the title tag,
generic blog-index meta, and a thin homepage with no FAQ/long-tail coverage.

---

## 3. Keyword strategy

### Primary keywords (money terms — download intent)

| Keyword | Intent | Target page |
|---|---|---|
| **weight cutting app for wrestlers** | Buy/download | Homepage (title, H1, hero) |
| **wrestling weight cutting app** | Buy/download | Homepage |
| **wrestling weight management app** | Coach/download | Homepage coaches section |
| **weight cut app** | Buy/download (broader combat) | Homepage secondary |
| **make weight (for) wrestling** | Mixed | Hero + blog |

### Secondary keywords

- wrestling weight tracker / wrestling weight loss app
- app for wrestling coaches to track weights
- wrestling team weight tracking / roster weight management
- wrestling macro tracker / calorie tracker for wrestlers
- weight cut plan for wrestling
- safe weight cutting for wrestlers (NCAA / NFHS / high school)

### Long-tail keywords (conversion + FAQ/blog capture)

Already covered by existing posts (keep, interlink from homepage):
- how much weight can a wrestler safely cut per week → post 2026-06-04
- water loading wrestling weight cut → post 2026-06-11 (canonical; 04-13 post consolidated)
- what to eat before wrestling practice / night before weigh-ins → posts
- how to cut weight without losing strength wrestling → post 2026-04-23
- how many calories should a wrestler eat per day → post 2026-06-22
- how to choose the right wrestling weight class → post 2026-06-08

New long-tails targeted via homepage FAQ (FAQPage schema):
- is there an app to track wrestling weight cuts
- how do wrestlers cut weight safely
- app for coaches to monitor wrestlers' weight
- weight cutting app for high school wrestlers
- does Weight Wingman work offline / collect data
- how much does a wrestling weight cutting app cost

### Audience modifiers to weave in naturally

high school wrestlers · college wrestlers · youth wrestling · folkstyle/freestyle/greco ·
combat athletes (MMA, BJJ, boxing — secondary net) · coaches · parents

---

## 4. On-page placement map (what was changed and why)

| Page | Change |
|---|---|
| `index.html` | Title → "Weight Cutting App for Wrestlers — Make Weight Safely" (seo-tag appends "\| Weight Wingman"; old title duplicated the brand). Keyword-front-loaded meta description. |
| `_includes/hero.html` | H1 now carries the primary keyword ("The weight cutting app built for wrestlers.") while keeping the punchy sub-line. Hero copy carries "make weight", "weight cut plan", NCAA/NFHS. |
| `_includes/athletes.html` | H2/H3s carry "wrestling weight cut", "macro tracking", "water loading", "weigh-in"; body copy links to relevant blog posts (internal links with keyword anchors). |
| `_includes/coaches.html` | H2/H3s carry "wrestling weight management", "team weight tracking", "compliance"; copy targets coach queries. |
| `index.html` + `_includes/faq.html` | New FAQ section (design-system styled) + FAQPage JSON-LD for long-tail questions. |
| `blog/index.html` | Title/H1/meta rewritten from generic "fitness journey" to wrestling nutrition & weight cutting. |
| `_layouts/post.html` | CTA copy now names the primary keyword. |
| `_config.yml` | Description keyword-tuned; `logo` added for Organization schema. |
| `_posts/2026-04-13-water-loading…` | Collided with the 06-11 post on the same URL (both slugged `water-loading-wrestling-weight-cut`). Given a distinct permalink + canonical to the 06-11 post to consolidate ranking signals. |

### Writing rules going forward

- Every page: one target keyword in title (front-loaded), H1, first 100 words, one H2, meta description.
- Titles ≤ 60 chars before the "| Weight Wingman" suffix; descriptions 140–160 chars with a verb + benefit.
- Blog post slugs = exact long-tail query; never reuse a slug (Jekyll silently overwrites).
- Internally link every new post to the homepage sections and 2–3 sibling posts with keyword anchors.
- Publish cadence is fine; prioritize coach-intent posts next (nothing ranks well for
  "wrestling team weight tracking app" yet): e.g. "How Coaches Track Wrestler Weight Cuts",
  "NFHS Weight Management Rules Explained", "Wrestling Weight Certification (Alpha Weigh-In) Guide".

---

## 5. Off-page playbook (what actually moves rankings for a young domain)

1. **Coach-intent content** (in priority order — these SERPs have no real competition):
   - "How Wrestling Coaches Track Weight Cuts (Paper Chart vs. App)"
   - "NFHS Wrestling Weight Management Rules, Explained for Parents & Coaches"
   - "Wrestling Weight Certification / Alpha Weigh-In Guide" (seasonal spike every November)
   - "How Much Should a High School Wrestler Cut? A Coach's Guide"
   End each with the coach-dashboard CTA — these readers buy the $224–$799 team plans.
2. **Backlinks via the founder's coaching credibility** (assistant coach, Clarion):
   - Pitch FloWrestling / WIN / Intermat / state wrestling sites: angle = "D1 coach builds
     app that flags dangerous weight cuts using NCAA/NFHS thresholds" (safety story, not app promo)
   - Wrestling podcasts (guest spots = backlinks), NWCA + state coaching association
     newsletters, coaching clinics
   - Give team plans free to 3–5 programs for a testimonial/case-study page (content + link + proof)
   - Be the genuinely helpful answer in r/wrestling and coach Facebook groups — Reddit
     currently ranks for the money keywords
3. **Google Search Console**: verify domain, submit sitemap, review the Queries report monthly;
   strengthen whatever sits on page 2–3 first.
4. **Timeline**: long-tail wins in 4–8 weeks; primary keyword top-10 in 3–6 months with links.
   Peak search season is October–January — publish ahead of it.

---

## 6. ASO rewrite (App Store Connect)

Apple search indexes **name > subtitle > keyword field** (description is conversion-only).
Never repeat a word across the three fields.

- **App name (30):** `Weight Wingman: Wrestling Cut`
- **Subtitle (30):** `Make Weight. Coach Your Team.`
- **Keyword field (100):** `wrestler,weigh,in,macros,calorie,tracker,mma,bjj,boxing,team,roster,meal,plan,diet,water,hydration`
- **Promotional text (170, updatable anytime):**
  > The weight cutting app built for wrestlers. AI meal tracking, daily targets, NCAA/NFHS
  > danger flags — and a live dashboard so coaches see every weigh-in. Free to start.

### Draft description (replaces current — fixes wrong $34.99 price, adds wrestling + coach copy)

> Never lose a match to a bad weight cut.
>
> Weight Wingman is the weight cutting app built for wrestlers — folkstyle, freestyle, and
> greco, from youth to high school to college. It plans your cut, builds your meals, and
> flags danger before it costs you a match.
>
> FOR WRESTLERS
> • AI FOOD LOG — Type what you ate in plain English. Get exact calories, protein, carbs,
>   and fat. No barcode scanning, no database scrolling.
> • AI MEAL BUILDER — "High-protein lunch under 600 cals" → a full meal with portions and
>   macros that fit your cut.
> • DAILY TARGETS — Calorie and water goals recalculate every day toward your weigh-in,
>   including a 5-phase water loading protocol.
> • DANGER FLAGS — Tracks your weekly loss rate against NCAA/NFHS thresholds and warns you
>   before your cut turns unsafe.
> • RECOVERY MODE — Made weight? It tells you exactly how to refuel and rehydrate between
>   matches.
>
> FOR COACHES
> • Live roster dashboard — every wrestler's weight, color-coded by risk
> • Real-time sync every time an athlete logs a weigh-in
> • Two-tap PDF/CSV compliance export for your AD or training room
> • Athletes join with a 6-character invite code — team set up in 5 minutes
>
> PRIVATE BY DESIGN
> No account. No data collected. The AI runs on-device with Apple Intelligence — works in
> the wrestling room, on the bus, anywhere. No internet needed.
>
> FREE to log weigh-ins, track water, and see progress. Wingman Pro: $4.99/month or
> $19.99/year. Team plans from $224.99/year include Pro for every athlete.

### Non-metadata ASO levers

- **Ratings (3.5★/4 is the #1 conversion killer):** trigger `SKStoreReviewController.requestReview()`
  at a win moment — the day a wrestler makes weight, or a 7-day logging streak. Target 25–30
  ratings at 4.5+.
- **Respond to the 1-star "can't log anything" review** in App Store Connect (public developer
  response) and fix the onboarding gap it points to.
- **Screenshots:** add caption text ("Tell it what you ate — get the macros", "Every wrestler's
  weight. One screen."). Lead with danger-flag + coach-dashboard shots; add an app preview video
  of the AI food log.
- **IAP display names are indexed:** rename e.g. "Small Team Yearly Plan" → "Wrestling Team Plan (15)".
- **Extra keyword fields free:** add English (UK) / (Canada) / (Australia) localizations — each
  gets its own 100-char keyword field for the same market.
