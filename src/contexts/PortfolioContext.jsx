import { createContext, useContext, useState, useEffect } from 'react'

const PortfolioContext = createContext()

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}

const initialPortfolioData = {
  personalInfo: {
    fullName: "Huu Tai Le",
    title: "Senior Full-Stack Software Engineer",
    tagline: "Building scalable web applications with modern technologies",
    summary: "Passionate full-stack developer with 8+ years of experience in creating robust, scalable web applications. Specialized in React, Node.js, Java, and cloud technologies. I love solving complex problems and building products that make a difference.",
    email: "huutai.le@example.com",
    phone: "+1-555-0123",
    location: "San Francisco, CA",
    linkedinUrl: "https://linkedin.com/in/huutaile",
    githubUrl: "https://github.com/huutaile",
    websiteUrl: "https://huutaile.com",
    profileImageUrl: "",
    resumeUrl: "/resume.pdf",
    availability: "Open to new opportunities"
  },
  experiences: [
    {
      id: 1,
      companyName: "Tech Innovations Inc.",
      positionTitle: "Senior Full-Stack Engineer",
      startDate: "2022-01-15",
      endDate: null,
      isCurrent: true,
      location: "San Francisco, CA",
      description: "Lead development of scalable web applications serving 100K+ users. Architect and implement full-stack solutions using React, Node.js, and cloud technologies.",
      achievements: [
        "Increased system performance by 40% through optimization and caching strategies",
        "Led team of 5 developers on major product redesign, improving user engagement by 60%",
        "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
        "Mentored 3 junior developers, helping them advance to mid-level positions"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "GraphQL"]
    },
    {
      id: 2,
      companyName: "Digital Solutions LLC",
      positionTitle: "Full-Stack Developer",
      startDate: "2020-06-01",
      endDate: "2021-12-31",
      isCurrent: false,
      location: "Remote",
      description: "Developed and maintained web applications for various clients. Collaborated with designers and product managers to deliver user-friendly solutions.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Reduced bug reports by 30% through improved testing practices and code reviews",
        "Built responsive web applications with 99.9% uptime",
        "Implemented automated testing reducing QA time by 50%"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Jest"]
    },
    {
      id: 3,
      companyName: "StartupXYZ",
      positionTitle: "Frontend Developer",
      startDate: "2023-03-01",
      endDate: "2020-05-31",
      isCurrent: false,
      location: "San Francisco, CA",
      description: "Built modern, responsive web interfaces for a fast-growing fintech startup. Worked closely with UX designers to create intuitive user experiences.",
      achievements: [
        "Developed the company's main dashboard used by 10K+ daily active users",
        "Improved page load times by 50% through code splitting and optimization",
        "Created reusable component library adopted across 5 different products",
        "Collaborated with backend team to design RESTful APIs"
      ],
      technologies: ["React", "Redux", "JavaScript", "SASS", "Webpack", "REST APIs"]
    }
  ],
  education: [
    {
      id: 1,
      institutionName: "University of California, Berkeley",
      degreeType: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2016-08-01",
      endDate: "2020-05-15",
      gpa: "3.8",
      location: "Berkeley, CA",
      description: "Focused on software engineering, algorithms, and data structures. Participated in hackathons and coding competitions. Member of Computer Science Honor Society.",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Computer Networks", "Machine Learning"]
    }
  ],
  skills: [
    // Frontend
    { id: 1, skillName: "React", proficiencyLevel: "EXPERT", category: "Frontend", yearsExperience: 6 },
    { id: 2, skillName: "Next.js", proficiencyLevel: "ADVANCED", category: "Frontend", yearsExperience: 3 },
    { id: 3, skillName: "Vue.js", proficiencyLevel: "INTERMEDIATE", category: "Frontend", yearsExperience: 2 },
    { id: 4, skillName: "TypeScript", proficiencyLevel: "ADVANCED", category: "Frontend", yearsExperience: 4 },
    { id: 5, skillName: "JavaScript", proficiencyLevel: "EXPERT", category: "Frontend", yearsExperience: 8 },
    { id: 6, skillName: "HTML/CSS", proficiencyLevel: "EXPERT", category: "Frontend", yearsExperience: 8 },
    { id: 7, skillName: "Tailwind CSS", proficiencyLevel: "ADVANCED", category: "Frontend", yearsExperience: 3 },
    
    // Backend
    { id: 8, skillName: "Node.js", proficiencyLevel: "EXPERT", category: "Backend", yearsExperience: 6 },
    { id: 9, skillName: "Express.js", proficiencyLevel: "EXPERT", category: "Backend", yearsExperience: 6 },
    { id: 10, skillName: "Java", proficiencyLevel: "ADVANCED", category: "Backend", yearsExperience: 5 },
    { id: 11, skillName: "Spring Boot", proficiencyLevel: "ADVANCED", category: "Backend", yearsExperience: 4 },
    { id: 12, skillName: "Python", proficiencyLevel: "INTERMEDIATE", category: "Backend", yearsExperience: 3 },
    
    // Database
    { id: 13, skillName: "PostgreSQL", proficiencyLevel: "ADVANCED", category: "Database", yearsExperience: 5 },
    { id: 14, skillName: "MongoDB", proficiencyLevel: "ADVANCED", category: "Database", yearsExperience: 4 },
    { id: 15, skillName: "Redis", proficiencyLevel: "INTERMEDIATE", category: "Database", yearsExperience: 3 },
    
    // DevOps & Cloud
    { id: 16, skillName: "Docker", proficiencyLevel: "ADVANCED", category: "DevOps", yearsExperience: 4 },
    { id: 17, skillName: "AWS", proficiencyLevel: "ADVANCED", category: "Cloud", yearsExperience: 4 },
    { id: 18, skillName: "Kubernetes", proficiencyLevel: "INTERMEDIATE", category: "DevOps", yearsExperience: 2 },
    { id: 19, skillName: "CI/CD", proficiencyLevel: "ADVANCED", category: "DevOps", yearsExperience: 4 },
    
    // Tools
    { id: 20, skillName: "Git", proficiencyLevel: "EXPERT", category: "Tools", yearsExperience: 8 },
    { id: 21, skillName: "VS Code", proficiencyLevel: "EXPERT", category: "Tools", yearsExperience: 6 },
    { id: 22, skillName: "Figma", proficiencyLevel: "INTERMEDIATE", category: "Tools", yearsExperience: 3 }
  ],
  projects: [
    {
      id: 1,
      projectName: "Dynamic Portfolio Website",
      description: "A full-stack portfolio website with admin authentication and real-time editing capabilities. Built with modern technologies and deployed on cloud infrastructure.",
      longDescription: "This project showcases my full-stack development skills by creating a comprehensive portfolio website. Features include admin authentication, real-time content editing, responsive design, and cloud deployment. The backend provides RESTful APIs for content management, while the frontend offers an intuitive user experience.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS", "Docker", "AWS"],
      projectUrl: "https://huutaile-portfolio.vercel.app",
      githubUrl: "https://github.com/huutaile/portfolio-website",
      startDate: "2025-08-01",
      endDate: null,
      isOngoing: true,
      status: "In Development",
      featured: true,
      images: ["/project1-1.jpg", "/project1-2.jpg"],
      challenges: "Implementing real-time editing while maintaining data consistency and security.",
      learnings: "Gained deeper understanding of JWT authentication and state management patterns."
    },
    {
      id: 2,
      projectName: "E-commerce Platform",
      description: "A scalable e-commerce platform with microservices architecture, supporting multiple vendors and payment gateways.",
      longDescription: "Built a comprehensive e-commerce solution from the ground up, featuring vendor management, product catalog, shopping cart, payment processing, and order management. Implemented microservices architecture for scalability and maintainability.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe API", "Docker", "Kubernetes"],
      projectUrl: "https://ecommerce-demo.huutaile.com",
      githubUrl: "https://github.com/huutaile/ecommerce-platform",
      startDate: "2024-03-01",
      endDate: "2024-11-30",
      isOngoing: false,
      status: "Completed",
      featured: true,
      images: ["/project2-1.jpg", "/project2-2.jpg"],
      challenges: "Handling high traffic loads and ensuring payment security across multiple vendors.",
      learnings: "Mastered microservices architecture and payment gateway integration."
    },
    {
      id: 3,
      projectName: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
      longDescription: "Developed a comprehensive task management solution for teams, featuring real-time collaboration, project tracking, time logging, and reporting. Includes drag-and-drop interface, notifications, and integration with popular tools.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
      projectUrl: "https://taskmanager.huutaile.com",
      githubUrl: "https://github.com/huutaile/task-manager",
      startDate: "2023-09-01",
      endDate: "2024-01-15",
      isOngoing: false,
      status: "Completed",
      featured: false,
      images: ["/project3-1.jpg"],
      challenges: "Implementing real-time collaboration features with conflict resolution.",
      learnings: "Gained expertise in WebSocket implementation and real-time data synchronization."
    }
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023-06-15",
      expiryDate: "2026-06-15",
      credentialId: "AWS-SAA-123456",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta",
      issueDate: "2022-11-20",
      expiryDate: null,
      credentialId: "META-REACT-789012",
      credentialUrl: "https://coursera.org/verify/meta-react"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "Tech Innovations Inc.",
      content: "Huu Tai is an exceptional developer who consistently delivers high-quality solutions. His ability to understand complex requirements and translate them into elegant code is remarkable.",
      avatar: "/testimonial1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Solutions LLC",
      content: "Working with Huu Tai was a pleasure. He's not just a skilled developer but also a great team player who mentors others and drives technical excellence.",
      avatar: "/testimonial2.jpg",
      rating: 5
    }
  ],
  settings: {
    theme: "light",
    showEmail: true,
    showPhone: true,
    allowDownloadResume: true,
    maintenanceMode: false
  }
}

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData')
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData))
      } catch (error) {
        console.error('Error loading saved data:', error)
      }
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData))
  }, [portfolioData])

  const updatePersonalInfo = (newInfo) => {
    setPortfolioData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...newInfo }
    }))
  }

  const updateExperiences = (experiences) => {
    setPortfolioData(prev => ({
      ...prev,
      experiences
    }))
  }

  const addExperience = (experience) => {
    const newExperience = {
      ...experience,
      id: Date.now()
    }
    setPortfolioData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience]
    }))
  }

  const updateExperience = (id, updatedExperience) => {
    setPortfolioData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, ...updatedExperience } : exp
      )
    }))
  }

  const deleteExperience = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }))
  }

  const updateProjects = (projects) => {
    setPortfolioData(prev => ({
      ...prev,
      projects
    }))
  }

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now()
    }
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }))
  }

  const updateProject = (id, updatedProject) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, ...updatedProject } : project
      )
    }))
  }

  const deleteProject = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  const updateSkills = (skills) => {
    setPortfolioData(prev => ({
      ...prev,
      skills
    }))
  }

  const addSkill = (skill) => {
    const newSkill = {
      ...skill,
      id: Date.now()
    }
    setPortfolioData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }))
  }

  const updateSkill = (id, updatedSkill) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, ...updatedSkill } : skill
      )
    }))
  }

  const deleteSkill = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }))
  }

  const updateEducation = (education) => {
    setPortfolioData(prev => ({
      ...prev,
      education
    }))
  }

  const login = (credentials) => {
    // In a real app, this would validate against a backend
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  // Check if user is admin on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin')
    if (adminStatus === 'true') {
      setIsAdmin(true)
    }
  }, [])

  const value = {
    portfolioData,
    setPortfolioData,
    isAdmin,
    isLoading,
    setIsLoading,
    
    // Personal Info
    updatePersonalInfo,
    
    // Experiences
    updateExperiences,
    addExperience,
    updateExperience,
    deleteExperience,
    
    // Projects
    updateProjects,
    addProject,
    updateProject,
    deleteProject,
    
    // Skills
    updateSkills,
    addSkill,
    updateSkill,
    deleteSkill,
    
    // Education
    updateEducation,
    
    // Auth
    login,
    logout
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

