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
            A passionate Web3 & Blockchain Engineer driven by cryptocurrency innovation and decentralized technology. 
            My unique journey from Hospitality Management to blockchain development brings 2 years of focused Web3 experience 
            with a distinctive business-first approach to dApp development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Professional Summary */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-8 h-8 text-blue-600" />
                My Web3 Journey
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p className="leading-relaxed">
                  My passion for Web3 technology ignited from a deep fascination with cryptocurrency and the revolutionary 
                  potential of decentralized systems. Over the past 2 years, I've immersed myself completely in blockchain 
                  development, mastering smart contract programming, dApp architecture, and the evolving DeFi ecosystem.
                </p>
                <p className="leading-relaxed mt-4">
                  My Bachelor's degree in Hospitality Management with a Finance minor provides me with a unique competitive advantage. 
                  While others focus purely on the technical side, I bring deep understanding of business operations, financial principles, 
                  and most importantly, what creates exceptional user experiences. This background allows me to build Web3 solutions 
                  that are not only technically innovative but also business-viable and user-friendly.
                </p>
                <p className="leading-relaxed mt-4">
                  I'm fluent in Python, JavaScript, Go (Golang), and Solidity, with hands-on experience developing on both 
                  Ethereum and Aptos blockchains. My signature projects include the Aptos Billboard dApp and this dynamic portfolio 
                  website, both showcasing my ability to create practical blockchain applications that users actually want to use.
                </p>
              </div>
            </section>

            {/* Values & Approach */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                Core Values & Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Decentralization First</h3>
                    </div>
                    <p className="text-slate-600">
                      I believe in building truly decentralized solutions that empower users 
                      and remove intermediaries, creating more transparent and trustless systems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Innovation in Web3</h3>
                    </div>
                    <p className="text-slate-600">
                      The blockchain space evolves rapidly. I stay at the forefront of new protocols, 
                      consensus mechanisms, and DeFi innovations to build cutting-edge solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Community Building</h3>
                    </div>
                    <p className="text-slate-600">
                      Web3 thrives on collaboration and open-source contributions. I actively 
                      participate in blockchain communities and share knowledge with fellow developers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold">User-Centric dApps</h3>
                    </div>
                    <p className="text-slate-600">
                      My hospitality background helps me create blockchain applications that 
                      prioritize user experience and accessibility, making Web3 more approachable.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Background */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">My Unique Path to Web3</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  My path to Web3 development is unconventional but purposeful. While earning my Bachelor's in Hospitality 
                  Management with a Finance minor, I became captivated by cryptocurrency and blockchain technology's potential 
                  to revolutionize how we interact with money and digital systems.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Rather than seeing my hospitality background as unrelated, I recognized it as my secret weapon. The hospitality 
                  industry taught me how to create exceptional user experiences, manage complex operations, and understand what 
                  drives customer satisfaction. Combined with my finance knowledge, I approach Web3 development with a unique 
                  perspective that balances technical innovation with business practicality.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  For the past 2 years, I've dedicated myself entirely to mastering blockchain development. My flagship projects—
                  the Aptos Billboard dApp where users sign transactions to post messages on a public blockchain billboard, and 
                  this dynamic portfolio with its Spring Boot backend—demonstrate my ability to create Web3 applications that 
                  are both technically sophisticated and genuinely engaging for users.
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
                    <span className="text-slate-600">2 years focused Web3 development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-600">Python, JavaScript, Go & Solidity</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-600">Building Web3 dApps</span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Specializing in Ethereum & Aptos blockchain development with React/Next.js frontends
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Go (Golang)</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Spring Boot</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">Aptos</Badge>
                  <Badge variant="outline">Web3</Badge>
                  <Badge variant="outline">DeFi</Badge>
                  <Badge variant="outline">Smart Contracts</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Web3 Journey</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bachelor's in Hospitality Management + Finance Minor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>2+ years dedicated to blockchain development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Built dApps on Ethereum and Aptos blockchains</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Passionate about DeFi and cryptocurrency innovation</span>
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
