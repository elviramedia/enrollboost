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
