-- ===================================================================
-- SAVVY DEALER BLOG POSTS - PRODUCTION DATABASE EXPORT
-- ===================================================================
-- Instructions:
-- 1. Copy ALL of this SQL code
-- 2. Open Replit Database pane → Switch to PRODUCTION tab
-- 3. Paste and execute in the SQL query editor
-- ===================================================================

-- Insert all 6 blog posts
INSERT INTO blog_posts (id, title, slug, excerpt, content, featured_image, author, author_role, published_at, updated_at, is_published, reading_time, category) VALUES

-- Post 1: Marketing ROI
('fc31aebe-ab8f-4f7f-ae32-399fdd19f1bb', 
 'How Dealers Should Evaluate Marketing ROI and Agencies: 12 Practical Moves', 
 'how-dealers-should-evaluate-marketing-roi-and-agencies-12-practical-moves', 
 'Focus your spend on shoppers who are ready right now, validate it with simple, human‑readable metrics (time on site, pages viewed, funnel progression), and tie every campaign to calls and conversations—not vanity conversions.', 
 E'# Free Marketing Meeting Checklist Here\n\n**Quick Hits:** Focus your spend on shoppers who are ready **right now**, validate it with simple, human‑readable metrics (time on site, pages viewed, funnel progression), and tie every campaign to **calls and conversations**—not vanity conversions. Meet your agency twice a month: first to set the plan, second to pivot against competitors. Guard your data, mystery‑shop your own site, and pay for **real content**, not monthly metadata tinkering.\n\n* * *\n\n## 1) Aim first at ""ready‑to‑buy"" shoppers (then brand later)\n\nThere are two audiences:\n\n- **Now buyers** (high intent): people searching ""new Silverado,"" ""Camry,"" ""F‑150,"" etc.\n- **Sometime buyers** (awareness): people who may buy in months.\n\nPut your **first dollars** where purchase intent is strongest—core model terms on Google. Then layer awareness.\n\n**Quick test:** On a clean browser (or using Google Ads\' **Ad Preview** tool), search your top models—e.g., ""new Silverado.""\n\n- Are you visible in **Search** and **Shopping**?\n- Is the Shopping placement yours—or is a third‑party (AutoTrader, Cars.com) outranking you for your **own** inventory?\n\nIf you\'re invisible on your money terms, fix that before anything else.\n\n* * *\n\n## 2) Don\'t let ""store visits"" hide bad spend\n\nWhen agencies optimize only for ""get people into the dealership,"" algorithms often find the **cheapest** path—service traffic. That yields a packed service lane and a quiet showroom.\n\nMake sure your campaigns, goals, and bidding strategies are aligned to **sales** intent (model terms, SRP → VDP engagement, phone calls, forms), not generic ""store visits.""\n\n* * *\n\n## 3) GA4: keep it simple and watch what matters\n\nYes, GA4 is complex. Start with two low‑noise signals:\n\n- **Average time on site** (are visitors staying long enough to shop?)\n- **Pages per session** (are they exploring inventory?)\n\nAdam\'s tip: **Send paid traffic to SRPs, not directly to VDPs.**\n\n- It\'s harder to fake ""SRP → VDP"" clicks than it is to spoof a single VDP visit.\n- That SRP→VDP ratio exposes pricing issues (e.g., if people bounce from SRPs without opening any vehicles).\n\nWhen you can, export GA4 to BigQuery (or your BI tool) and build a simple **funnel**:\n\n> Users → Stayed 30+ seconds → SRP → VDP → Lead/Call\n\nWhere the drop widens, investigate there first (pricing, ""call for price,"" out‑of‑stock trims, in‑transit inventory, page speed, pop‑ups, etc.).\n\n* * *\n\n## 4) Track phone calls the right way (dynamic numbers)\n\nMost modern call‑tracking platforms use **dynamic number insertion (DNI)** so each visitor sees a unique number. That allows you to map the call back to:\n\n- the **source/keyword/ad**, and\n- the **pages** they viewed before dialing.\n\nUse it to:\n\n- Separate **sales** vs. **service** impact (you\'ll learn ""dealership near me"" skews heavily to service).\n- Capture missed calls (and route to a backup line if phones go down).\n- Validate platform claims (""Did Facebook actually drive inbound calls last week?"").\n\n**Pro tip:** Keep the website simple with **one visible number** and let routing logic do the rest.\n\n* * *\n\n## 5) Mystery‑shop yourself (and your rivals)\n\nSpend five minutes a week doing exactly what customers do:\n\n- Search ""new \\[top model\\]"" in your market (use Ad Preview for neutral results).\n- Click your ad and your competitor\'s ad.\n- Count the **pop‑ups**. Do widgets interrupt the purchase path?\n- Try to submit a lead. How many steps/fields? Any dead ends on mobile?\n\nYou\'ll quickly see friction you stopped noticing—and tricks some third parties use (e.g., their search bars sitting on top of your SRP to drive _their_ leads, not your sales).\n\n* * *\n\n## 6) Guard your data from third‑party widgets\n\nAny widget you embed (badges, chats, trade‑tools) can see a **lot** of your traffic. That has competitive implications: You might be telegraphing your **active shoppers** to vendors who also serve nearby stores. Be selective and configure tools to **minimize data leakage**.\n\n* * *\n\n## 7) SEO you should pay for (and what you shouldn\'t)\n\n- **Pay for tangible pages** every month—model pages, local content, comparisons, financing FAQs, service explainer pages.\n- **Don\'t** pay monthly for endless metadata tweaks. On a modern site, title/description clean‑up is a **periodic** task, not a retainer.\n- Avoid one‑click, AI‑generated articles. Duplicate/low‑quality content tends to **underperform**. Have a human edit for substance and local specificity.\n- Spot‑check originality: paste your opening sentences into Google; if 20 sites show the same copy, rewrite.\n\n* * *\n\n## 8) Run a twice‑monthly marketing cadence (strategy, then counter‑moves)\n\n**Meeting 1 (week 1):** Plan\n\n- What we\'re pushing (e.g., leases on specific trims).\n- Budgets, geos, and creative.\n\n**Meeting 2 (week 3):** Pivot\n\n- Review performance and **Auction Insights** (Google Ads) to see who\'s ramping spend in your backyard.\n- If a rival boosts F‑150 aggressively, decide: match, shift budget, or move to a different profit pocket.\n\nAgencies lose accounts not because the initial plan was bad—but because they didn\'t **pivot** when the market countered.\n\n* * *\n\n## 9) Build a simple ""where did this lead come from?"" habit\n\nIf lead sources are a mystery, assume cannibalization. Example Adam shared: a vendor ""proved"" value by calling the store\'s **existing CRM leads** earlier than the BDC, then claiming those sales as theirs. Your process should make double‑counting **impossible**.\n\n* * *\n\n## 10) Validate with the sales floor\n\nIf you\'re spending seriously on a platform (e.g., Facebook), you should **occasionally hear** customers mention it in‑store. If your team never hears it, investigate the landing pages, targeting, and creative.\n\n* * *\n\n## 11) Master Google + Facebook before chasing shiny objects\n\nGeofencing, display, OTT, and YouTube are **amplifiers**, not foundations. Nail intent (Search & Shopping) and high‑quality paid social first. Avoid auto‑generated ads with stock photos—weak signals in competitive markets.\n\n* * *\n\n## 12) Sometimes the month just stinks (don\'t panic‑spend)\n\nNot every slump is a media problem. If the campaigns are correctly configured and the market is soft, resist the urge to ""spend your way out."" Optimize price/merchandising and stay disciplined.\n\n* * *\n\n## A 10‑minute weekly checklist\n\n01. **Model search visibility:** Are we present on ""\\[top model\\]"" in Search & Shopping?\n02. **Auction Insights:** Who\'s invading our zip codes this week?\n03. **Funnel health:** Users → 30s+ → SRP → VDP → Lead/Call. Where\'s the biggest drop?\n04. **Time on site & pages/session:** Trending up, flat, or down by source?\n05. **Call tracking review:** Sales vs. service calls; missed calls; keyword/source matchback.\n06. **Mystery shop:** Your ad → your SRP → your VDP → your lead form (on mobile).\n07. **Widget audit:** Any third‑party interruptions or leaks?\n08. **Content cadence:** Which pages went live this month? What\'s scheduled next?\n09. **Sales floor signal:** Did anyone mention seeing our Facebook/YouTube ad?\n10. **Budget sanity:** Any channel growing spend without corresponding **engagement** gains?\n\n* * *\n\n## What to ask your agency—every meeting\n\n- _Show me where we rank/appear for our top model searches right now._\n- _What changed in Auction Insights since last meeting?_\n- _SRP→VDP rate by channel last week?_\n- _Calls by source and missed calls?_\n- _New content URLs published this month?_\n- _What will we **stop** doing next month—and why?_\n\n* * *\n\n## Marketing Meeting Check List PDF Here:\n\n[Download Checklist](https://drive.google.com/drive/u/0/home)', 
 '/attached_assets/how Dealers Should Evaluate_1762984180908.jpg', 
 'Savvy Dealer Team', 
 'Marketing Strategy', 
 '2025-10-15 00:00:00'::timestamp, 
 NOW(), 
 true, 
 7, 
 'Marketing Strategy'),

-- Post 2: Pop-ups
('85e2227f-0332-4ea5-b797-af9836fd8c28', 
 'Pop‑ups on Dealer Websites: Do They Help or Hurt? (2025)', 
 'pop-ups-on-dealer-websites-do-they-help-or-hurt-2025', 
 'Most shoppers don't want pop‑ups, especially on phones. They interrupt the task (price, payments, call/text, directions) and feel pushy. Google explicitly says to avoid intrusive interstitials.', 
 E'**Audience:** Dealer principals, GMs, GSMs, Internet directors\n\n**Reading time:** ~7 minutes\n\n## **The Short Read**\n\n- **Most shoppers don't want pop‑ups, especially on phones.** They interrupt the task (price, payments, call/text, directions) and feel pushy. NN/g's long‑running usability research labels modal pop‑ups among the most disliked patterns on the web.\n\n- **Google explicitly says to avoid intrusive interstitials/pop‑ups.** Their guidance recommends small, dismissible banners instead of content‑blocking dialogs. Intrusive interstitials on mobile have been a ranking concern since **January 10, 2017** and the documentation was updated **June 17, 2025**.\n\n- **Performance matters more than ever.** Google's responsiveness metric **INP** (Interaction to Next Paint) replaced FID in **March 2024**. Aim for **INP ≤ 200 ms** at the 75th percentile. Pop‑ups and heavy third‑party scripts (chat, consent, behavior tracking) commonly slow INP and cause layout shift (CLS).\n\n- **Industry standards back this up.** The Coalition for Better Ads lists **mobile pop‑up ads** among the **least‑preferred** experiences globally.\n\n**Bottom line:** Replace auto‑open pop‑ups with lighter, **non‑modal** prompts tied to real engagement. You'll protect mobile conversions, speed, and SEO—without sacrificing lead volume or quality.\n\n## **What shoppers actually do on your mobile site**\n\nWhen a shopper lands on your homepage, SRP, or VDP on their phone, they usually want to:\n\n- Check **price & payments**\n- Tap **call/text**\n- Look at **photos/video**\n- Get **directions** or **hours**\n- Start **trade** or **credit** flows\n\nA pop‑up that immediately covers the screen slows them down, raises frustration, and often leads to mis‑taps or bounces—especially if there are **multiple** overlays (cookie, chat, promo) stacked together. Decades of UX research show people dislike pop‑ups and rate modal versions as the **most disruptive**.\n\n## **What Google says (plain English)**\n\n- **Avoid intrusive interstitials and dialogs.** These block content, frustrate users, and can hurt search performance. Prefer **small banners** that don't block the page. (Updated **June 17, 2025**.)\n\n- **Mobile ranking context:** Since **Jan 10, 2017**, pages where content isn't easily accessible from the mobile search results **may not rank as highly**. Legal notices and login gates are exceptions; small, dismissible banners are fine.\n\n## **Why pop‑ups often hurt performance (and conversions)**\n\n1. **Responsiveness (INP):** INP measures how fast pages respond to taps/clicks across the whole visit. It became a Core Web Vital on **March 12, 2024**; **≤ 200 ms** at p75 is considered **good**. Extra scripts, event handlers, and modal frameworks increase main‑thread work, pushing INP higher—precisely when shoppers try to interact.\n\n2. **Third‑party scripts:** Chat widgets, behavior tracking, tag managers, and consent tools commonly add long tasks. The **2024 Web Almanac** notes scripts from behavior tracking, **consent providers**, and CDNs are major contributors to **poor INP**, especially on mobile.\n\n3. **Visual stability (CLS):** Cookie notices and top‑of‑screen banners frequently **shift the layout**, causing mis‑taps. web.dev calls cookie notices a **common source of CLS**, and warns that clicking ""Accept"" often triggers **heavy processing** that worsens **INP**.\n\n## **""But pop‑ups get me more leads…"" (The quality trap)**\n\nAuto‑open pop‑ups can bump raw submit counts, but they also:\n\n- Drive **fake/low‑intent** emails and phone numbers\n- Hurt **mobile UX**, leading to more bounces and fewer VDP interactions\n- Risk **SEO** headwinds if they block content\n- Degrade **INP/CLS**, which correlates with worse user experience\n\nWhen dealers replace pop‑ups with **well‑timed, non‑modal prompts**, lead _quality_ and downstream actions (calls, appointments set) typically improve. You'll also reduce support time spent on junk leads.\n\n## **What to do instead (a simple playbook)**\n\n**Use lightweight, non‑modal prompts that appear after engagement—not on page load.**\n\n1. **Replace pop‑ups with a slim sticky bar** (footer or header)\n\n    Examples: ""Get E‑Price,"" ""Check Availability,"" ""Save Vehicle,"" ""See Payment Options."" Only show after the shopper scrolls, swipes gallery images, or opens payments.\n\n2. **Make chat manual‑open** Show a small chat bubble; load the heavy SDK after the user taps it. This reduces script cost and responsiveness issues.\n\n3. **Keep cookie consent small and stable** Prefer a **footer banner** that doesn't shift content. Load CMP scripts **asynchronously** and ensure the **Accept** click doesn't trigger a big processing spike.\n\n4. **One prompt at a time** Never stack cookie + promo + chat on first paint. It feels aggressive and increases bounce risk. NN/g's testing shows pop‑ups—especially modal—are the most disliked.\n\n5. **Trim third‑party code** Remove low‑ROI tags, and load necessary scripts with async/defer to reduce main‑thread blocking. Chrome/Lighthouse explicitly warns about the impact of third‑party code.\n\n## **Quick wins you can do this week**\n\n- **Audit scripts** in Chrome DevTools → Performance. Remove or defer anything non‑essential.', 
 '/attached_assets/Gemini_Generated_Image_ii2kxoii2kxoii2k_1762962689719.png', 
 'Savvy Dealer Team', 
 'Website Optimization', 
 '2025-10-01 00:00:00'::timestamp, 
 NOW(), 
 true, 
 7, 
 'Website Optimization'),

-- Post 3: Auto Market Sept 24
('c7b7e1b9-8a58-4ef3-84f5-ad9722dd2212', 
 'Auto Market Insights: September 24th, 2025', 
 'auto-market-insights-september-24th-2025', 
 'Navigating the Shifting Gears of Q3', 
 E'## Navigating the Shifting Gears of Q3\n\nThe third quarter of 2025 has been a whirlwind for auto dealers, with evolving consumer preferences, shifting market dynamics, and technological advancements creating both challenges and opportunities.', 
 '/attached_assets/image_1762961018792.png', 
 'Savvy Dealer Team', 
 'Market Analysis', 
 '2025-09-24 00:00:00'::timestamp, 
 NOW(), 
 true, 
 5, 
 'Market Analysis'),

-- Post 4: Auto Market Sept 15
('874876ad-88ef-4bc2-a191-a432421170cc', 
 'Auto Market Insights: September 15th, 2025', 
 'auto-market-insights-september-15th-2025', 
 'Weekly market analysis and trends', 
 E'## Weekly market analysis and trends for September 15th, 2025\n\nKey insights into the automotive market this week.', 
 '/attached_assets/generated_images/automotive-market-dashboard_b1c2d3e4.png', 
 'Savvy Dealer Team', 
 'Market Analysis', 
 '2025-09-15 00:00:00'::timestamp, 
 NOW(), 
 true, 
 5, 
 'Market Analysis'),

-- Post 5: AI Dead Zone
('d261dc95-20db-4950-b4f8-8f3f102d04b2', 
 'Are You Accidentally Blocking Your Future Customers? The AI Dead Zone Problem', 
 'are-you-accidentally-blocking-your-future-customers-the-ai-dead-zone-problem', 
 'Most dealer websites are invisible to AI chatbots and voice assistants. Here's why that matters and what to do about it.', 
 E'## The Problem\n\nMost dealer websites are invisible to AI chatbots and voice assistants. Here's why that matters and what to do about it.\n\n## Why This Matters\n\nConsumers are increasingly using AI assistants to research vehicles and dealers. If your site isn't optimized for AI, you're missing potential customers.', 
 '/attached_assets/image_1762961027131.png', 
 'Savvy Dealer Team', 
 'Technology', 
 '2025-09-10 00:00:00'::timestamp, 
 NOW(), 
 true, 
 6, 
 'Technology'),

-- Post 6: Ford EV
('a4acb3ed-ef66-4546-9704-25a69018cb7e', 
 'Will Ford''s Separating of the EV Business Be Cancer for Ford Dealers?', 
 'will-fords-separating-of-the-ev-business-be-cancer-for-ford-dealers', 
 'Analyzing the impact of Ford''s EV strategy split on dealership operations and profitability.', 
 E'## Ford''s Big Move\n\nFord''s decision to separate its EV business has significant implications for dealers.\n\n## What This Means for Dealers\n\nAnalyzing the short and long-term impacts on dealership operations, training requirements, and profitability.', 
 '/attached_assets/generated_images/ford-ev-dealership-split_f5g6h7i8.png', 
 'Savvy Dealer Team', 
 'Industry News', 
 '2025-08-20 00:00:00'::timestamp, 
 NOW(), 
 true, 
 6, 
 'Industry News');

-- ===================================================================
-- DONE! All 6 blog posts inserted
-- ===================================================================
