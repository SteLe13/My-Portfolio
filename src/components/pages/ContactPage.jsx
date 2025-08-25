import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  Mail, 
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Calendar
} from 'lucide-react'

const ContactPage = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo } = portfolioData
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Best for Web3 project discussions, DeFi collaborations, and smart contract consulting',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Available for urgent blockchain development matters and Web3 project discussions',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedinUrl,
      description: 'Professional networking, Web3 career opportunities, and blockchain industry connections',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: personalInfo.githubUrl,
      description: 'Explore my Web3 projects, smart contracts, Aptos Billboard dApp, and full-stack development',
      color: 'text-slate-700',
      bgColor: 'bg-slate-100'
    }
  ]

  const quickTopics = [
    'Web3 Development Project',
    'Smart Contract Development',
    'Aptos Blockchain dApp',
    'DeFi Project Collaboration',
    'Full-time Web3 Opportunity',
    'Ethereum Development',
    'Blockchain Consulting'
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl">
              <MessageCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Let's Build Web3 Together
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to build the future of Web3 together? I'm passionate about collaborating on innovative dApp projects, 
            DeFi solutions, and smart contract development. My unique blend of hospitality-driven UX design and 
            blockchain expertise ensures we'll create Web3 applications that users actually love to use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-6 h-6 text-blue-600" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Your Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Subject *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    {/* Quick Topics */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Quick Topics (optional)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {quickTopics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => handleInputChange('subject', topic)}
                            className="px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your project, question, or just say hello..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Methods */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className={`p-2 ${method.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                          {method.label}
                        </div>
                        <div className="text-sm text-slate-600 mb-1">
                          {method.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {method.description}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            {/* Location & Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-slate-500" />
                  <div>
                    <div className="font-medium text-slate-900">{personalInfo.location}</div>
                    <div className="text-sm text-slate-600">Pacific Time Zone (PST/PDT)</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-medium text-slate-900">{personalInfo.availability}</div>
                    <div className="text-sm text-slate-600">Actively looking for new opportunities</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-slate-500" />
                  <div>
                    <div className="font-medium text-slate-900">Response Time</div>
                    <div className="text-sm text-slate-600">Usually within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href={personalInfo.resumeUrl || '#'} 
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium text-slate-900">Download Resume</span>
                  <Globe className="w-4 h-4 text-slate-500" />
                </a>
                <a 
                  href="/projects" 
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium text-slate-900">View Portfolio</span>
                  <Globe className="w-4 h-4 text-slate-500" />
                </a>
                <a 
                  href="/experience" 
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium text-slate-900">Work Experience</span>
                  <Globe className="w-4 h-4 text-slate-500" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to start a conversation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you have a dApp project in mind, want to discuss DeFi opportunities, 
                or need a blockchain developer with business acumen, I'm here and ready to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${personalInfo.email}`}>
                  <Button size="lg" variant="secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me Directly
                  </Button>
                </a>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

