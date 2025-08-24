import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react'

const HomePage = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo, experiences, projects, skills } = portfolioData

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)
  
  // Get recent experience
  const recentExperience = experiences[0]
  
  // Get top skills by category
  const topSkills = skills
    .filter(skill => skill.proficiencyLevel === 'EXPERT' || skill.proficiencyLevel === 'ADVANCED')
    .slice(0, 8)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{personalInfo.availability}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.fullName.split(' ')[0]}
                  </span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-slate-600 font-medium">
                  {personalInfo.title}
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto">
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
                
                {personalInfo.resumeUrl && (
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                )}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">Connect with me:</span>
                <div className="flex items-center gap-3">
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer"
                     className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.websiteUrl} target="_blank" rel="noopener noreferrer"
                     className="p-2 text-slate-600 hover:text-purple-600 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <div className="space-y-6">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {personalInfo.fullName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-slate-900">{experiences.length}+</div>
                        <div className="text-sm text-slate-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">{projects.length}+</div>
                        <div className="text-sm text-slate-600">Projects Built</div>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge variant={project.isOngoing ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.projectName}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-4 pt-2">
                      {project.projectUrl && (
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1 text-slate-600 hover:text-slate-700 text-sm font-medium">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I specialize in modern web technologies and have extensive experience
              across the full development stack.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {topSkills.map((skill) => (
              <Card key={skill.id} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{skill.skillName}</h3>
                    <p className="text-sm text-slate-600">{skill.yearsExperience} years</p>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${
                        i < (skill.proficiencyLevel === 'EXPERT' ? 5 : skill.proficiencyLevel === 'ADVANCED' ? 4 : 3)
                          ? 'text-yellow-400 fill-current' 
                          : 'text-slate-300'
                      }`} />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/skills">
              <Button variant="outline" size="lg">
                View All Skills
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Role Section */}
      {recentExperience && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm font-medium">Current Role</span>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      {recentExperience.positionTitle}
                    </h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-2">
                      {recentExperience.companyName}
                    </h3>
                    <div className="flex items-center gap-4 text-slate-600 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(recentExperience.startDate).getFullYear()} - Present
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{recentExperience.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {recentExperience.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {recentExperience.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Professional Experience
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{experiences.length}</div>
                        <div className="text-sm text-slate-600">Companies</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">8+</div>
                        <div className="text-sm text-slate-600">Years</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Link to="/experience">
                        <Button className="w-full">
                          View Full Experience
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </Button>
            </Link>
            <a href={`mailto:${personalInfo.email}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                Send Email Directly
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

