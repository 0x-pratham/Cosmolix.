export interface InternshipDomain {
  id: string
  title: string
  description: string
  icon: string
}

export const internshipDomains: InternshipDomain[] = [
  {
    id: "web",
    title: "Full Stack Web Development",
    description:
      "Build real-world SaaS applications using React, Node.js, APIs, and modern cloud infrastructure.",
    icon: "code"
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Work on ML models, AI agents, and real-world AI systems including automation and predictive models.",
    icon: "brain"
  },
  {
    id: "cyber",
    title: "Cyber Security & Ethical Hacking",
    description:
      "Learn penetration testing, vulnerability analysis, and modern cybersecurity defense techniques.",
    icon: "shield"
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    description:
      "Work with real datasets using Python, data visualization, and machine learning techniques.",
    icon: "chart"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Develop modern mobile applications using Flutter or React Native with real backend integration.",
    icon: "mobile"
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Deploy and manage scalable infrastructure using AWS, containers, and cloud-native architectures.",
    icon: "cloud"
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    description:
      "Design modern user experiences using Figma, design systems, and real product workflows.",
    icon: "design"
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Learn software engineering practices including system design, architecture, and scalable coding.",
    icon: "cpu"
  }
]