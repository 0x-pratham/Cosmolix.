export interface InternshipDomain {
  id: string
  title: string
  description: string
  icon: string
  skills: string[]
  outcome: string
}

export const internshipDomains: InternshipDomain[] = [
  {
  id: "web",
  title: "Full Stack Web Development",
  description:
    "Build real-world SaaS applications using React, Node.js, APIs, and modern cloud infrastructure.",
  icon: "code",
  skills: ["React", "Node.js", "APIs"],
  outcome: "Build a complete SaaS application"
},
  {
  id: "ai",
  title: "Artificial Intelligence & Machine Learning",
  description:
    "Work on ML models, AI agents, and real-world AI systems including automation and predictive models.",
  icon: "brain",
  skills: ["Python", "TensorFlow", "ML Models"],
  outcome: "Train and deploy an ML system"
},
 {
  id: "cyber",
  title: "Cyber Security & Ethical Hacking",
  description:
    "Learn penetration testing, vulnerability analysis, and modern cybersecurity defense techniques.",
  icon: "shield",
  skills: ["Kali Linux", "Pentesting", "Network Security"],
  outcome: "Perform real vulnerability analysis"
},
  {
  id: "data",
  title: "Data Science & Analytics",
  description:
    "Work with real datasets using Python, data visualization, and machine learning techniques.",
  icon: "chart",
  skills: ["Python", "Pandas", "Data Visualization"],
  outcome: "Build a real data analysis pipeline"
},
  {
  id: "mobile",
  title: "Mobile App Development",
  description:
    "Develop modern mobile applications using Flutter or React Native with real backend integration.",
  icon: "mobile",
  skills: ["Flutter", "React Native", "Firebase"],
  outcome: "Launch a production-ready mobile app"
},
  {
  id: "cloud",
  title: "Cloud Computing",
  description:
    "Deploy and manage scalable infrastructure using AWS, containers, and cloud-native architectures.",
  icon: "cloud",
  skills: ["AWS", "Docker", "DevOps"],
  outcome: "Deploy a scalable cloud system"
},
  {
  id: "uiux",
  title: "UI / UX Design",
  description:
    "Design modern user experiences using Figma, design systems, and real product workflows.",
  icon: "design",
  skills: ["Figma", "Design Systems", "Prototyping"],
  outcome: "Design a complete product interface"
},
  {
  id: "software",
  title: "Software Development",
  description:
    "Learn software engineering practices including system design, architecture, and scalable coding.",
  icon: "cpu",
  skills: ["System Design", "OOP", "Clean Architecture"],
  outcome: "Build scalable backend systems"
}
]