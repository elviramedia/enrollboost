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
    slug: "riverside-charter",
    school: "Riverside Charter Academy",
    type: "Charter · K-8",
    challenge: "Declining enrollment for three straight years and a new competing charter opening nearby.",
    campaign: "Always-on Meta awareness campaign + short-form video showcasing the STEM program, backed by CRM follow-up.",
    results: [
      { value: "+118", label: "new applications" },
      { value: "3.2x", label: "tour bookings" },
      { value: "41 days", label: "to full waitlist" },
    ],
  },
  {
    slug: "st-agnes",
    school: "St. Agnes Private School",
    type: "Private · PreK-12",
    challenge: "Beautiful campus and strong academics, but almost no digital presence and poorly attended open houses.",
    campaign: "Enrollment funnel + landing pages tied to the application window, with automated parent nurture sequences.",
    results: [
      { value: "+64%", label: "open house attendance" },
      { value: "$0.71", label: "cost per lead" },
      { value: "+52", label: "enrollments YoY" },
    ],
  },
  {
    slug: "mountain-view-district",
    school: "Mountain View USD",
    type: "Public District · K-12",
    challenge: "Losing students to neighboring districts and unaware families choosing schools out of area.",
    campaign: "District-wide awareness strategy highlighting signature programs, with per-school landing pages and analytics.",
    results: [
      { value: "+230", label: "inquiries in Q1" },
      { value: "6 schools", label: "above target" },
      { value: "+$1.9M", label: "projected funding" },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We didn't have a marketing problem — we had an awareness problem, and we didn't even know it. EnrollBoost showed us exactly where families were falling out of the funnel.",
    name: "Dr. Lena Ortiz",
    role: "Superintendent, Mountain View USD",
  },
  {
    quote:
      "For the first time our open house had a waiting list. The follow-up system alone paid for itself in a single enrollment cycle.",
    name: "Marcus Bell",
    role: "Head of School, St. Agnes",
  },
  {
    quote:
      "They understand school funding and enrollment windows better than any agency we've talked to. It never felt like marketing — it felt like strategy.",
    name: "Priya Nair",
    role: "Enrollment Director, Riverside Charter",
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
