import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  User, 
  MapPin, 
  Calendar,
  Award,
  Heart,
  Target,
  Lightbulb
} from 'lucide-react'

const AboutPage = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo, experiences, education, certifications } = portfolioData

  const totalYearsExperience = experiences.length > 0 
    ? new Date().getFullYear() - new Date(experiences[experiences.length - 1].startDate).getFullYear()
    : 0

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {personalInfo.fullName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About {personalInfo.fullName.split(' ')[0]}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Professional Summary */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-8 h-8 text-blue-600" />
                Professional Summary
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p className="leading-relaxed">
                  {personalInfo.summary}
                </p>
                <p className="leading-relaxed mt-4">
                  With over {totalYearsExperience} years of experience in software development, I've had the privilege 
                  of working with diverse teams and technologies to build solutions that make a real impact. 
                  My journey has taken me from frontend development to full-stack architecture, always with 
                  a focus on clean code, user experience, and scalable solutions.
                </p>
                <p className="leading-relaxed mt-4">
                  I believe in continuous learning and staying current with emerging technologies. Whether it's 
                  exploring new frameworks, contributing to open-source projects, or mentoring fellow developers, 
                  I'm always looking for ways to grow and give back to the community.
                </p>
              </div>
            </section>

            {/* Values & Approach */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                Values & Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Quality First</h3>
                    </div>
                    <p className="text-slate-600">
                      I believe in writing clean, maintainable code that stands the test of time. 
                      Every line of code should serve a purpose and be easy to understand.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Innovation</h3>
                    </div>
                    <p className="text-slate-600">
                      Technology evolves rapidly, and I embrace new tools and methodologies 
                      that can improve efficiency and deliver better user experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Collaboration</h3>
                    </div>
                    <p className="text-slate-600">
                      The best solutions come from diverse perspectives. I value teamwork, 
                      open communication, and knowledge sharing.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold">User-Centric</h3>
                    </div>
                    <p className="text-slate-600">
                      Every technical decision should ultimately serve the end user. 
                      I prioritize usability, accessibility, and performance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Background */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Background</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  My journey into software development began during my studies at {education[0]?.institutionName}, 
                  where I discovered my passion for problem-solving through code. What started as curiosity 
                  about how websites work evolved into a deep appreciation for the craft of software development.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Over the years, I've had the opportunity to work on diverse projects ranging from 
                  small business websites to large-scale enterprise applications. Each project has taught me 
                  something new and reinforced my belief that technology should serve people, not the other way around.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge through blog posts and mentoring. I believe in giving back to the community 
                  that has given me so much.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-600">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-600">{totalYearsExperience}+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-600">{certifications?.length || 0} certifications</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-600">{personalInfo.availability}</span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Currently working as {experiences[0]?.positionTitle} at {experiences[0]?.companyName}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Cloud Architecture</Badge>
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="outline">Mentoring</Badge>
                  <Badge variant="outline">Tech Innovation</Badge>
                  <Badge variant="outline">UI/UX Design</Badge>
                  <Badge variant="outline">DevOps</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Started coding at age 16 with HTML and CSS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coffee enthusiast - can't code without it ☕</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contributed to 20+ open-source projects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Speaks 3 programming languages fluently</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

