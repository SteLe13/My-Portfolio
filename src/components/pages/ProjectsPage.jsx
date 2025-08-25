import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  FolderOpen, 
  ExternalLink,
  Github,
  Calendar,
  Star,
  Filter,
  Grid,
  List,
  Code,
  Lightbulb,
  Target
} from 'lucide-react'

const ProjectsPage = () => {
  const { portfolioData } = usePortfolio()
  const { projects } = portfolioData
  
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    if (filter === 'ongoing') return project.isOngoing
    if (filter === 'completed') return !project.isOngoing
    return true
  })

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))]

  const ProjectCard = ({ project, isListView = false }) => (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${isListView ? 'mb-6' : ''}`}>
      <CardContent className={`${isListView ? 'p-6' : 'p-6'}`}>
        <div className={`${isListView ? 'flex gap-6' : 'space-y-4'}`}>
          {/* Project Icon/Image */}
          <div className={`${isListView ? 'flex-shrink-0' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className={`${isListView ? 'flex-1' : ''}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.projectName}
                  </h3>
                  {project.featured && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(project.startDate)} - {project.isOngoing ? 'Ongoing' : formatDate(project.endDate)}
                  </div>
                  <Badge variant={project.isOngoing ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-4">
              {isListView ? project.longDescription || project.description : project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, isListView ? 10 : 6).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > (isListView ? 10 : 6) && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - (isListView ? 10 : 6)} more
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.projectUrl && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>

            {/* Additional Info for List View */}
            {isListView && project.challenges && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Challenges & Solutions
                </h4>
                <p className="text-sm text-slate-600">{project.challenges}</p>
              </div>
            )}

            {isListView && project.learnings && (
              <div className="mt-3 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Key Learnings
                </h4>
                <p className="text-sm text-slate-600">{project.learnings}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl">
              <FolderOpen className="w-12 h-12 text-purple-600" />
            </div>
          </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Web3 Projects Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of decentralized applications and blockchain innovations, featuring the Aptos Billboard dApp 
            and this dynamic portfolio website. Each project demonstrates my ability to bridge complex Web3 technology 
            with exceptional user experiences, leveraging my unique background in business and finance.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Filters */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'featured', label: 'Featured' },
                { key: 'ongoing', label: 'Ongoing' },
                { key: 'completed', label: 'Completed' }
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  variant={filter === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isListView={viewMode === 'list'} 
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <FolderOpen className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-600">Try adjusting your filter to see more projects.</p>
          </div>
        )}

        {/* Technology Cloud */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Web3 & Development Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTechnologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {projects.length}
              </div>
              <div className="text-slate-600">Total Projects</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-slate-600">Featured</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter(p => p.isOngoing).length}
              </div>
              <div className="text-slate-600">Ongoing</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {allTechnologies.length}
              </div>
              <div className="text-slate-600">Technologies</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

