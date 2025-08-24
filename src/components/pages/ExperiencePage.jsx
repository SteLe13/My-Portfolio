import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  Briefcase, 
  Calendar,
  MapPin,
  Building,
  TrendingUp,
  Award,
  Users,
  Edit
} from 'lucide-react'

const ExperiencePage = () => {
  const { portfolioData, isAdmin } = usePortfolio()
  const { experiences } = portfolioData

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const calculateDuration = (startDate, endDate, isCurrent) => {
    const start = new Date(startDate)
    const end = isCurrent ? new Date() : new Date(endDate)
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`
    return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
              <Briefcase className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A journey through my career, highlighting key roles, achievements, and the technologies 
            I've worked with to deliver impactful solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card className="md:ml-20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Main Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">
                              {exp.positionTitle}
                            </h2>
                            <div className="flex items-center gap-2 mb-3">
                              <Building className="w-5 h-5 text-blue-600" />
                              <h3 className="text-xl font-semibold text-blue-600">
                                {exp.companyName}
                              </h3>
                            </div>
                          </div>
                          {isAdmin && (
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-slate-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                              {formatDate(exp.startDate)} - {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm">
                              {calculateDuration(exp.startDate, exp.endDate, exp.isCurrent)}
                            </span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          )}
                          {exp.isCurrent && (
                            <Badge className="bg-green-100 text-green-800">
                              Current Role
                            </Badge>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="w-5 h-5 text-orange-500" />
                              <h4 className="text-lg font-semibold text-slate-900">
                                Key Achievements
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-600 leading-relaxed">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-purple-500" />
                            <h4 className="text-lg font-semibold text-slate-900">
                              Technologies & Tools
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Side Stats */}
                      <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
                          <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-slate-900">
                              #{experiences.length - index}
                            </div>
                            <div className="text-sm text-slate-600">Experience</div>
                          </div>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Duration:</span>
                              <span className="font-medium">
                                {calculateDuration(exp.startDate, exp.endDate, exp.isCurrent)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Technologies:</span>
                              <span className="font-medium">{exp.technologies.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Achievements:</span>
                              <span className="font-medium">{exp.achievements?.length || 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {experiences.length}
              </div>
              <div className="text-slate-600">Companies</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {new Date().getFullYear() - new Date(experiences[experiences.length - 1]?.startDate).getFullYear()}+
              </div>
              <div className="text-slate-600">Years Experience</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {[...new Set(experiences.flatMap(exp => exp.technologies))].length}
              </div>
              <div className="text-slate-600">Technologies Used</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage

