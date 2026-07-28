export const PROBLEMS = [
  {
    title: "Empty Seats. Empty Budgets.",
    body: "Every unfilled seat is lost per-pupil funding. Under-enrollment quietly erodes the budget that pays for the programs families actually want.",
    stat: "1 seat",
    statLabel: "= thousands in annual funding",
  },
  {
    title: "Parents Don't Know You Exist.",
    body: "Families can't choose a school they've never discovered. Most enrollment gaps aren't a quality problem — they're a visibility problem.",
    stat: "63%",
    statLabel: "of parents research online first",
  },
  {
    title: "Staff Wearing Five Hats.",
    body: "Your enrollment director is also the tour guide, the social media manager, and the event planner. Marketing becomes whatever's left at 5pm.",
    stat: "5 roles",
    statLabel: "one overloaded person",
  },
  {
    title: "Competing Schools Advertise.",
    body: "Charter, private, and neighboring districts are already running ads for the exact families you want. Silence is a decision — and it costs you.",
    stat: "Always-on",
    statLabel: "competitor campaigns",
  },
  {
    title: "Great Programs, Hidden.",
    body: "Award-winning arts, STEM, dual-language, athletics — invisible to the community. The best story in town that no one has heard.",
    stat: "0 reach",
    statLabel: "for your best programs",
  },
  {
    title: "Open Houses Nobody Attends.",
    body: "You plan the event, print the flyers, and twelve people show up. Without awareness upstream, no event fills the room.",
    stat: "Low turnout",
    statLabel: "no pipeline feeding it",
  },
] as const;

export const FUNNEL = [
  { label: "Community Awareness", note: "Families discover your school for the first time." },
  { label: "Interest", note: "Programs and outcomes capture attention." },
  { label: "Inquiry", note: "Parents raise their hand and ask questions." },
  { label: "Tour", note: "Families visit and picture their child there." },
  { label: "Application", note: "Interest converts into a submitted application." },
  { label: "Enrollment", note: "A new student — and sustained funding." },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Awareness Campaigns",
    body: "Targeted Meta advertising and short-form video put your school in front of the right families in your community.",
  },
  {
    step: "02",
    title: "Parent Leads",
    body: "Purpose-built landing pages and funnels turn attention into inquiries from parents actively considering a school.",
  },
  {
    step: "03",
    title: "Instant Follow-up",
    body: "CRM automation responds in seconds — text, email, and reminders — so no interested family ever slips through the cracks.",
  },
  {
    step: "04",
    title: "Tours",
    body: "Nurtured leads are guided to book a tour, the single highest-converting moment in the enrollment journey.",
  },
  {
    step: "05",
    title: "Enrollment",
    body: "Families apply and enroll — and you get a measurable, repeatable system instead of relying on word-of-mouth.",
  },
] as const;

export const WHY_US = [
  { title: "School Choice", body: "We understand open-enrollment dynamics and how families weigh their options." },
  { title: "LCFF & Funding", body: "We speak the language of per-pupil funding and how enrollment drives your budget." },
  { title: "Open Houses", body: "We fill events by building awareness upstream, not just printing more flyers." },
  { title: "Application Windows", body: "Campaigns are timed to your enrollment calendar, not a generic marketing one." },
  { title: "Community Awareness", body: "We make your school a known, trusted name across your attendance area." },
  { title: "Meta Advertising", body: "Precision targeting of parents by geography, life stage, and intent." },
  { title: "CRM Automation", body: "Every lead is captured, nurtured, and followed up automatically." },
  { title: "Parent Psychology", body: "Messaging built around how families actually choose a school for their child." },
] as const;

export const CASE_STUDIES = [
  {
    slug: "ace-amandla",
    school: "ACE Amandla Charter High School",
    type: "Public Charter · Chicago, IL",
    challenge: "A STEM-focused charter on Chicago's Southwest Side needed to fill seats in a competitive school-choice market — and every empty seat meant a full year of per-pupil funding left on the table.",
    campaign: "A three-month Meta (Facebook & Instagram) lead campaign reached 83,000+ local households and generated 66 qualified enrollment leads, anchored by a student testimonial video and fast follow-up.",
    results: [
      { value: "6", label: "new students enrolled" },
      { value: "$400", label: "all-in cost per enrollment" },
      { value: "30×", label: "first-year return" },
    ],
  },
  {
    slug: "elba-public-schools",
    school: "Elba Public Schools",
    type: "Rural Public District · Elba, NE",
    challenge: "A small rural Nebraska district competing for students across a wide, sparsely populated region, where distance and low awareness kept nearby families from ever considering Elba.",
    campaign: "Six months of geo-targeted Meta campaigns reached tens of thousands of families across central Nebraska and generated 59 enrollment leads, with messaging built around small classes and teachers who know every child.",
    results: [
      { value: "8", label: "new students enrolled" },
      { value: "$216", label: "cost per enrollment" },
      { value: "76×", label: "first-year return" },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "If everyone follows through, we will have 8 new students this year because of your ads. So thank you for all the work you did for us!",
    name: "Superintendent",
    role: "Elba Public Schools, Nebraska",
  },
] as const;

export const FAQS = [
  {
    q: "Are you a marketing agency?",
    a: "Not in the way you're thinking. We're enrollment consultants who happen to use digital marketing. The goal isn't impressions or likes — it's filled seats and sustained funding.",
  },
  {
    q: "How is this different from boosting posts or running our own ads?",
    a: "Boosting posts creates activity, not enrollment. We build a complete system: awareness, funnels, instant follow-up, and analytics — all timed to your application windows and measured against enrolled students.",
  },
  {
    q: "Do you work with public, charter, and private schools?",
    a: "Yes. We work with superintendents, charter leaders, private school heads, principals, and enrollment and marketing directors across K-12.",
  },
  {
    q: "How quickly will we see results?",
    a: "Awareness begins immediately. Inquiries and tour bookings typically build over the first several weeks, with the biggest impact aligned to your enrollment and application calendar.",
  },
  {
    q: "What does a Strategy Session involve?",
    a: "A focused 30 minutes. We review your current awareness, identify where families are being lost in the funnel, and outline what a system to fix it looks like. No obligation.",
  },
  {
    q: "Do we need staff or technical resources to run this?",
    a: "No. The point is to take work off your team's plate. We handle the campaigns, funnels, and automation, and give you clear reporting on what matters.",
  },
] as const;

export const CASE_STUDY_DETAILS = {
  "ace-amandla": {
    slug: "ace-amandla",
    school: "ACE Amandla Charter High School",
    type: "Public Charter · Chicago, IL",
    period: "60-day enrollment pilot",
    channel: "Meta · Facebook & Instagram",
    headline: "A 60-day pilot enrolled 6 new students — at just $400 each.",
    intro:
      "ACE Amandla partnered with EnrollBoost to run a lead-generation campaign across Facebook and Instagram targeting local families. In 60 days, the pilot reached tens of thousands of Chicago households, generated 66 qualified enrollment leads, and converted 6 of them into enrolled students — each worth roughly a full year of per-pupil funding.",
    heroStats: [
      { value: "$2,400", label: "Total pilot investment", note: "incl. all ad spend & management" },
      { value: "6", label: "New students enrolled", note: "from 66 qualified leads" },
      { value: "$400", label: "Cost per enrollment", note: "all-in acquisition cost" },
      { value: "~$72K", label: "First-year funding generated", note: "6 students × ~$12K per pupil", highlight: true },
    ],
    funnel: [
      { label: "Impressions delivered", value: "83,083" },
      { label: "Link clicks to landing", value: "1,765", note: "2.12% click-through rate" },
      { label: "Qualified enrollment leads", value: "66", note: "3.7% of clicks → lead · $18.63 per lead" },
      { label: "Students enrolled", value: "6", note: "9.1% lead-to-enrollment conversion" },
    ],
    metrics: [
      { label: "Media spend (Meta)", value: "$1,229" },
      { label: "Impressions", value: "83,083" },
      { label: "Link clicks", value: "1,765" },
      { label: "Click-through rate", value: "2.12%" },
      { label: "Cost per click", value: "$0.70" },
      { label: "Cost per 1,000 impr. (CPM)", value: "$14.80" },
      { label: "Qualified leads", value: "66" },
      { label: "Cost per lead", value: "$18.63" },
      { label: "Creatives tested", value: "17 ads" },
    ],
    roi: {
      formula: "Invest $2,400 → 6 students × ~$12,000 = ~$72,000 = +$69,600 net",
      note: "Per-student value based on a conservative estimate of CPS charter per-pupil funding (Per Capita Tuition Charge, FY2026). If these students remain through graduation, the four-year value approaches ~$288,000.",
      multiple: "30×",
      subtitle: "First-year return · ~2,900% ROI",
    },
    creatives: [
      { rank: "1", name: "Student testimonial (video)", leads: "33 leads" },
    ],
    quote: null,
    disclaimer:
      "Figures sourced from the client's Meta Ads Manager reporting. Per-student value reflects a conservative estimate of CPS charter per-pupil funding (Per Capita Tuition Charge, FY2026); ROI figures are illustrative of first-year funding, not guaranteed.",
  },
  "elba-public-schools": {
    slug: "elba-public-schools",
    school: "Elba Public Schools",
    type: "Rural Public District · Elba, NE",
    period: "60-day enrollment pilot",
    channel: "Meta · Facebook & Instagram",
    headline: "A 60-day ad campaign brought 8 new students to a rural Nebraska district.",
    intro:
      "Elba Public Schools partnered with EnrollBoost to recruit students from Elba and the surrounding towns. In 60 days, geo-targeted Facebook and Instagram campaigns reached tens of thousands of families across central Nebraska, generated 59 enrollment leads, and brought 8 new students into the district — with a 9th still pending. Each new student represents roughly a full year of state per-pupil funding.",
    heroStats: [
      { value: "$1,724", label: "Total ad spend", note: "60-day enrollment pilot" },
      { value: "8", label: "New students enrolled", note: "up to 9 pending follow-through" },
      { value: "$216", label: "Cost per enrollment", note: "from 59 qualified leads" },
      { value: "~$131K", label: "First-year funding generated", note: "8 students × ~$16.4K per pupil", highlight: true },
    ],
    funnel: [
      { label: "Impressions delivered", value: "147,013" },
      { label: "Link clicks to landing", value: "1,844", note: "1.25% click-through rate" },
      { label: "Qualified enrollment leads", value: "59", note: "$29.23 per lead" },
      { label: "Students enrolled", value: "8", note: "13.6% lead-to-enrollment conversion" },
    ],
    metrics: [
      { label: "Ad spend (Meta)", value: "$1,724" },
      { label: "Impressions", value: "147,013" },
      { label: "Link clicks", value: "1,844" },
      { label: "Click-through rate", value: "1.25%" },
      { label: "Cost per click", value: "$0.94" },
      { label: "Cost per 1,000 impr. (CPM)", value: "$11.73" },
      { label: "Qualified leads", value: "59" },
      { label: "Cost per lead", value: "$29.23" },
      { label: "Creatives tested", value: "20 ads" },
    ],
    roi: {
      formula: "Invest $1,724 → 8 students × ~$16,400 = ~$131,200 = +$129,476 net",
      note: "Per-student value based on Nebraska's statewide average per-pupil funding (~$16,400). K-12 students often stay enrolled for years, so the multi-year value of these 8 students compounds well beyond the first year.",
      multiple: "76×",
      subtitle: "First-year return · ~7,500% ROI",
    },
    creatives: [
      { rank: "1", name: "Video ad", leads: "25 leads" },
      { rank: "2", name: "Video ad – copy", leads: "8 leads" },
      { rank: "3", name: "\"WANTED – Grand Island\" (geo)", leads: "5 leads" },
      { rank: "4", name: "Teachers truly know their child", leads: "5 leads" },
      { rank: "5", name: "Distance shouldn't limit opportunity", leads: "5 leads" },
    ],
    quote: {
      text: "If everyone follows through, we will have 8 new students this year because of your ads. So thank you for all the work you did for us!",
      role: "Superintendent, Elba Public Schools, Nebraska",
    },
    disclaimer:
      "Figures sourced from the client's Meta Ads Manager reporting. Per-student value reflects Nebraska's statewide average per-pupil funding (~$16,400, 2021–22; source: USAFacts) and will vary by district; ROI figures are illustrative of first-year funding, not guaranteed. A 9th enrollment was pending at time of reporting.",
  },
} as const;
