import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  Code, 
  Star,
  TrendingUp,
  Award,
  Target,
  Zap
} from 'lucide-react'

const SkillsPage = () => {
  const { portfolioData } = usePortfolio()
  const { skills } = portfolioData

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'EXPERT': return { bg: 'bg-green-500', text: 'text-green-700', bgLight: 'bg-green-100' }
      case 'ADVANCED': return { bg: 'bg-blue-500', text: 'text-blue-700', bgLight: 'bg-blue-100' }
      case 'INTERMEDIATE': return { bg: 'bg-yellow-500', text: 'text-yellow-700', bgLight: 'bg-yellow-100' }
      case 'BEGINNER': return { bg: 'bg-gray-500', text: 'text-gray-700', bgLight: 'bg-gray-100' }
      default: return { bg: 'bg-gray-500', text: 'text-gray-700', bgLight: 'bg-gray-100' }
    }
  }

  const getProficiencyStars = (level) => {
    switch (level) {
      case 'EXPERT': return 5
      case 'ADVANCED': return 4
      case 'INTERMEDIATE': return 3
      case 'BEGINNER': return 2
      default: return 1
    }
  }

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  const categoryIcons = {
    'Frontend': Code,
    'Backend': Code,
    'Database': Code,
    'DevOps': Zap,
    'Cloud': Zap,
    'Tools': Target,
    'Programming Languages': Code
  }

  const categoryColors = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-purple-500 to-violet-500',
    'DevOps': 'from-orange-500 to-red-500',
    'Cloud': 'from-sky-500 to-blue-500',
    'Tools': 'from-slate-500 to-gray-500',
    'Programming Languages': 'from-indigo-500 to-purple-500'
  }

  const SkillCard = ({ skill }) => {
    const colors = getProficiencyColor(skill.proficiencyLevel)
    const stars = getProficiencyStars(skill.proficiencyLevel)

    return (
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {skill.skillName}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${colors.bgLight} ${colors.text} border-0`}>
                  {skill.proficiencyLevel}
                </Badge>
                <span className="text-sm text-slate-600">
                  {skill.yearsExperience} year{skill.yearsExperience !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < stars ? 'text-yellow-400 fill-current' : 'text-slate-300'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
            <div 
              className={`${colors.bg} h-2 rounded-full transition-all duration-500 group-hover:scale-x-105`}
              style={{ width: `${(stars / 5) * 100}%` }}
            ></div>
          </div>

          {/* Experience Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Experience Level</span>
            <span>{skill.proficiencyLevel.toLowerCase()}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const CategorySection = ({ category, categorySkills }) => {
    const IconComponent = categoryIcons[category] || Code
    const gradientClass = categoryColors[category] || 'from-slate-500 to-gray-500'

    return (
      <div className="mb-12">
        <Card className="mb-6">
          <CardHeader className={`bg-gradient-to-r ${gradientClass} text-white`}>
            <CardTitle className="flex items-center gap-3">
              <IconComponent className="w-6 h-6" />
              <span>{category}</span>
              <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-0">
                {categorySkills.length} skills
              </Badge>
            </CardTitle>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorySkills
            .sort((a, b) => {
              // Sort by proficiency level first, then by years of experience
              const proficiencyOrder = { 'EXPERT': 4, 'ADVANCED': 3, 'INTERMEDIATE': 2, 'BEGINNER': 1 }
              const proficiencyDiff = proficiencyOrder[b.proficiencyLevel] - proficiencyOrder[a.proficiencyLevel]
              if (proficiencyDiff !== 0) return proficiencyDiff
              return b.yearsExperience - a.yearsExperience
            })
            .map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
      </div>
    )
  }

  // Calculate statistics
  const totalSkills = skills.length
  const expertSkills = skills.filter(s => s.proficiencyLevel === 'EXPERT').length
  const advancedSkills = skills.filter(s => s.proficiencyLevel === 'ADVANCED').length
  const averageExperience = Math.round(skills.reduce((sum, skill) => sum + skill.yearsExperience, 0) / skills.length)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl">
              <Code className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise, from programming languages and frameworks 
            to Web3 & blockchain technologies. This represents my full-stack development capabilities 
            with specialized focus on decentralized applications and smart contract development.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {totalSkills}
              </div>
              <div className="text-slate-600">Total Skills</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {expertSkills}
              </div>
              <div className="text-slate-600">Expert Level</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {advancedSkills}
              </div>
              <div className="text-slate-600">Advanced Level</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {averageExperience}
              </div>
              <div className="text-slate-600">Avg. Years Exp.</div>
            </CardContent>
          </Card>
        </div>

        {/* Skills by Category */}
        <div>
          {Object.entries(skillsByCategory)
            .sort(([, a], [, b]) => b.length - a.length) // Sort categories by number of skills
            .map(([category, categorySkills]) => (
              <CategorySection 
                key={category} 
                category={category} 
                categorySkills={categorySkills} 
              />
            ))}
        </div>

        {/* Proficiency Legend */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Proficiency Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { level: 'EXPERT', description: '5+ years, can mentor others, deep understanding' },
                { level: 'ADVANCED', description: '3-5 years, can work independently, solid knowledge' },
                { level: 'INTERMEDIATE', description: '1-3 years, can contribute effectively with guidance' },
                { level: 'BEGINNER', description: 'Less than 1 year, learning and gaining experience' }
              ].map(({ level, description }) => {
                const colors = getProficiencyColor(level)
                const stars = getProficiencyStars(level)
                
                return (
                  <div key={level} className="text-center">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bgLight} ${colors.text} font-medium mb-2`}>
                      {level}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < stars ? 'text-yellow-400 fill-current' : 'text-slate-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Continuous Learning
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The Web3 landscape evolves at lightning speed, and staying ahead requires constant learning and adaptation. 
              I'm passionate about mastering emerging blockchain protocols, contributing to DeFi innovations, 
              and sharing knowledge within the cryptocurrency community. My hospitality background taught me that 
              success comes from continuously improving the user experience—a principle I apply to every dApp I build.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SkillsPage

