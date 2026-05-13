// ── Shared types ──
// This shape will match your backend API response.
// When backend is ready, remove SEED_ARTICLES and fetch from API instead.

export type NewsArticleBlock = {
  heading?: string
  body: string
}

export type NewsArticle = {
  id: string
  tag: string
  tagColor: string
  date: string
  readTime: string
  headline: string
  summary: string
  featured?: boolean
  // Full article content — will come from backend CMS/DB
  content?: NewsArticleBlock[]
  ctaText?: string
  ctaHash?: string
}

// ── Seed data ──
// Replace this export with an API call when backend is ready:
// export async function fetchArticles(): Promise<NewsArticle[]> {
//   const res = await fetch('/api/news')
//   return res.json()
// }

export const SEED_ARTICLES: NewsArticle[] = [
  {
    id: 'intern-2026',
    tag: 'Careers',
    tagColor: '#10B981',
    date: 'April 1, 2026',
    readTime: '3 min read',
    headline: 'Cosmolix Opens Internship Applications for 2026',
    summary:
      'Applications are now open for our 2026 Internship Program. Work on live products alongside engineers and AI researchers. Tracks available in Software, ML, Cloud, and Design.',
    featured: true,
    ctaText: 'Apply for Internship',
    ctaHash: 'internships',
    content: [
      {
        body: `We are thrilled to announce that Cosmolix is officially opening applications for our 2026 Internship Program, starting April 1, 2026. This is your opportunity to work on real products alongside a team of engineers, AI researchers, and product leaders building the next generation of enterprise technology.`,
      },
      {
        heading: 'What You Will Work On',
        body: `Interns are embedded directly into product teams. Depending on your track, you may contribute to CosmoWork, CosmoAnalytics, or CosmoCyber — live platforms serving enterprise customers across 42+ countries. You will write production code, join design reviews, and present your work to leadership.`,
      },
      {
        heading: 'Who We Are Looking For',
        body: `Motivated students and recent graduates across Software Engineering, Data Science, AI/ML, Cloud Infrastructure, and Product Design. Curiosity and the drive to build things that matter is what counts.`,
      },
      {
        heading: 'Program Details',
        body: `3-month program running May – July 2026. Possibility of extension or full-time offer. Open globally with remote and hybrid options available.`,
      },
      {
        heading: 'How to Apply',
        body: `Navigate to the Careers tab in the top navigation, select Internships from the dropdown, and submit your application. Shortlisted candidates will be contacted within 7 business days.`,
      },
    ],
  },
  {
    id: 'cosmowork-beta',
    tag: 'Product',
    tagColor: '#2563EB',
    date: 'March 20, 2026',
    readTime: '2 min read',
    headline: 'CosmoWork Enters Private Beta',
    summary:
      'Our AI-powered workspace booking platform CosmoWork is now live in private beta. Select enterprise partners are onboarding. Public launch coming Q2 2026.',
    featured: false,
    content: [
      {
        body: `We are pleased to announce that CosmoWork, our next-generation coworking marketplace, has entered private beta as of March 20, 2026. A select group of enterprise partners are now onboarding and using the platform in live environments.`,
      },
      {
        heading: 'What is CosmoWork',
        body: `CosmoWork is an AI-powered workspace booking platform where niche workspace owners list their spaces and professionals book on demand. The platform uses smart scheduling and AI-driven matching to connect teams with the right workspaces based on size, location, amenities, and budget.`,
      },
      {
        heading: 'Beta Program',
        body: `The private beta is currently invite-only. Enterprise organizations interested in early access can reach out to our team via the Contact page. We are targeting a full public launch in Q2 2026.`,
      },
      {
        heading: 'What Comes Next',
        body: `Following the beta, we will open CosmoWork to all users with a self-service onboarding flow. Workspace owners will be able to list spaces directly, and organizations can manage team bookings through a unified dashboard.`,
      },
    ],
  },
]