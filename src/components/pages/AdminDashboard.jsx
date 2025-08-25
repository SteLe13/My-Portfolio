import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  User, 
  Briefcase, 
  FolderOpen, 
  Code, 
  GraduationCap,
  Settings,
  Edit,
  Save,
  Plus,
  Trash2,
  X,
  Calendar,
  MapPin,
  ExternalLink,
  Github,
  Award,
  MessageSquare
} from 'lucide-react'

const AdminDashboard = () => {
  const { 
    portfolioData, 
    isAdmin, 
    updatePersonalInfo,
    addExperience,
    updateExperience,
    deleteExperience,
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    updateSkill,
    deleteSkill,
    updateEducation
  } = usePortfolio()

  const [activeTab, setActiveTab] = useState('overview')
  const [editingItem, setEditingItem] = useState(null)
  const [editingType, setEditingType] = useState(null)
  const [formData, setFormData] = useState({})

  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Settings },
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ]

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const formatDateForInput = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toISOString().split('T')[0]
  }

  const startEditing = (type, item = null) => {
    setEditingType(type)
    setEditingItem(item)
    
    if (item) {
      setFormData({ ...item })
    } else {
      // Set default values for new items
      switch (type) {
        case 'experience':
          setFormData({
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
            isCurrent: false,
            location: '',
            description: '',
            achievements: [],
            technologies: []
          })
          break
        case 'project':
          setFormData({
            projectName: '',
            description: '',
            longDescription: '',
            technologies: [],
            projectUrl: '',
            githubUrl: '',
            startDate: '',
            endDate: '',
            isOngoing: false,
            status: 'In Development',
            featured: false
          })
          break
        case 'skill':
          setFormData({
            skillName: '',
            proficiencyLevel: 'BEGINNER',
            category: '',
            yearsExperience: 0
          })
          break
        case 'education':
          setFormData({
            institutionName: '',
            degreeType: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            gpa: '',
            location: '',
            description: '',
            coursework: []
          })
          break
      }
    }
  }

  const saveItem = () => {
    switch (editingType) {
      case 'personal':
        updatePersonalInfo(formData)
        break
      case 'experience':
        if (editingItem) {
          updateExperience(editingItem.id, formData)
        } else {
          addExperience(formData)
        }
        break
      case 'project':
        if (editingItem) {
          updateProject(editingItem.id, formData)
        } else {
          addProject(formData)
        }
        break
      case 'skill':
        if (editingItem) {
          updateSkill(editingItem.id, formData)
        } else {
          addSkill(formData)
        }
        break
      case 'education':
        if (editingItem) {
          updateEducation([formData])
        } else {
          updateEducation([...portfolioData.education, formData])
        }
        break
    }
    
    setEditingType(null)
    setEditingItem(null)
    setFormData({})
  }

  const cancelEditing = () => {
    setEditingType(null)
    setEditingItem(null)
    setFormData({})
  }

  const deleteItem = (type, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'experience':
          deleteExperience(id)
          break
        case 'project':
          deleteProject(id)
          break
        case 'skill':
          deleteSkill(id)
          break
      }
    }
  }

  const updateFormField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateArrayField = (field, stringValue, separator = ',') => {
    const array = stringValue.split(separator).map(item => item.trim()).filter(item => item)
    updateFormField(field, array)
  }

  // Overview Tab
  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{portfolioData.experiences.length}</div>
                <div className="text-sm text-slate-600">Experiences</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FolderOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{portfolioData.projects.length}</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{portfolioData.skills.length}</div>
                <div className="text-sm text-slate-600">Skills</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{portfolioData.education.length}</div>
                <div className="text-sm text-slate-600">Education</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Portfolio updated</div>
                  <div className="text-xs text-slate-500">Personal information modified</div>
                </div>
                <div className="text-xs text-slate-500">Today</div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">New project added</div>
                  <div className="text-xs text-slate-500">Dynamic Portfolio Website</div>
                </div>
                <div className="text-xs text-slate-500">2 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => setActiveTab('personal')} className="h-auto p-4">
                <div className="text-center">
                  <User className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Edit Profile</div>
                </div>
              </Button>
              <Button variant="outline" onClick={() => startEditing('project')} className="h-auto p-4">
                <div className="text-center">
                  <Plus className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Add Project</div>
                </div>
              </Button>
              <Button variant="outline" onClick={() => startEditing('experience')} className="h-auto p-4">
                <div className="text-center">
                  <Briefcase className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Add Experience</div>
                </div>
              </Button>
              <Button variant="outline" onClick={() => startEditing('skill')} className="h-auto p-4">
                <div className="text-center">
                  <Code className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Add Skill</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Personal Info Tab
  const PersonalInfoTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Personal Information
          <Button onClick={() => { setFormData(portfolioData.personalInfo); startEditing('personal', portfolioData.personalInfo) }}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.fullName}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Title</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.title}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.email}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Phone</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.phone}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Location</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.location}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Availability</label>
            <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.availability}</div>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Professional Summary</label>
          <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.summary}</div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Tagline</label>
          <div className="mt-1 p-3 bg-slate-50 rounded-lg">{portfolioData.personalInfo.tagline}</div>
        </div>
      </CardContent>
    </Card>
  )

  // Experience Tab
  const ExperienceTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Professional Experience</h2>
        <Button onClick={() => startEditing('experience')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-6">
        {portfolioData.experiences.map((exp) => (
          <Card key={exp.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.positionTitle}</h3>
                  <p className="text-blue-600 font-medium">{exp.companyName}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(exp.startDate)} - {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => startEditing('experience', exp)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => deleteItem('experience', exp.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4">{exp.description}</p>
              
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  // Projects Tab
  const ProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button onClick={() => startEditing('project')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{project.projectName}</h3>
                    {project.featured && <Badge>Featured</Badge>}
                  </div>
                  <Badge variant={project.isOngoing ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => startEditing('project', project)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => deleteItem('project', project.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1 text-slate-600 hover:text-slate-700 text-sm">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  // Skills Tab
  const SkillsTab = () => {
    const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    }, {})

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Skills</h2>
          <Button onClick={() => startEditing('skill')}>
            <Plus className="w-4 h-4 mr-2" />
            Add Skill
          </Button>
        </div>

        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">{skill.skillName}</div>
                      <div className="text-sm text-slate-600">
                        {skill.proficiencyLevel} • {skill.yearsExperience} years
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" onClick={() => startEditing('skill', skill)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteItem('skill', skill.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Education Tab
  const EducationTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Education</h2>
        <Button onClick={() => startEditing('education')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </div>

      <div className="space-y-6">
        {portfolioData.education.map((edu) => (
          <Card key={edu.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degreeType}</h3>
                  <p className="text-blue-600 font-medium">{edu.fieldOfStudy}</p>
                  <p className="text-slate-600">{edu.institutionName}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div>GPA: {edu.gpa}</div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => startEditing('education', edu)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {edu.description && (
                <p className="text-slate-600 mb-4">{edu.description}</p>
              )}
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, index) => (
                      <Badge key={index} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  // Edit Dialog
  const EditDialog = () => (
    <Dialog open={editingType !== null} onOpenChange={(open) => !open && cancelEditing()}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingItem ? 'Edit' : 'Add'} {editingType?.charAt(0).toUpperCase() + editingType?.slice(1)}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {editingType === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  value={formData.fullName || ''}
                  onChange={(e) => updateFormField('fullName', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title || ''}
                  onChange={(e) => updateFormField('title', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => updateFormField('email', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input
                  value={formData.phone || ''}
                  onChange={(e) => updateFormField('phone', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <Input
                  value={formData.location || ''}
                  onChange={(e) => updateFormField('location', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Availability</label>
                <Input
                  value={formData.availability || ''}
                  onChange={(e) => updateFormField('availability', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Tagline</label>
                <Input
                  value={formData.tagline || ''}
                  onChange={(e) => updateFormField('tagline', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Professional Summary</label>
                <Textarea
                  rows={4}
                  value={formData.summary || ''}
                  onChange={(e) => updateFormField('summary', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">LinkedIn URL</label>
                <Input
                  value={formData.linkedinUrl || ''}
                  onChange={(e) => updateFormField('linkedinUrl', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">GitHub URL</label>
                <Input
                  value={formData.githubUrl || ''}
                  onChange={(e) => updateFormField('githubUrl', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Website URL</label>
                <Input
                  value={formData.websiteUrl || ''}
                  onChange={(e) => updateFormField('websiteUrl', e.target.value)}
                />
              </div>
            </div>
          )}

          {editingType === 'experience' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    value={formData.companyName || ''}
                    onChange={(e) => updateFormField('companyName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Position Title</label>
                  <Input
                    value={formData.positionTitle || ''}
                    onChange={(e) => updateFormField('positionTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={formData.location || ''}
                    onChange={(e) => updateFormField('location', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Start Date</label>
                  <Input
                    type="date"
                    value={formatDateForInput(formData.startDate)}
                    onChange={(e) => updateFormField('startDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <Input
                    type="date"
                    value={formatDateForInput(formData.endDate)}
                    onChange={(e) => updateFormField('endDate', e.target.value)}
                    disabled={formData.isCurrent}
                  />
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="current"
                      checked={formData.isCurrent || false}
                      onChange={(e) => updateFormField('isCurrent', e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="current" className="text-sm">Current Position</label>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={(e) => updateFormField('description', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Achievements (one per line)</label>
                <Textarea
                  rows={4}
                  value={formData.achievements?.join('\n') || ''}
                  onChange={(e) => updateArrayField('achievements', e.target.value, '\n')}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Technologies (comma-separated)</label>
                <Input
                  value={formData.technologies?.join(', ') || ''}
                  onChange={(e) => updateArrayField('technologies', e.target.value)}
                />
              </div>
            </div>
          )}

          {editingType === 'project' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Project Name</label>
                  <Input
                    value={formData.projectName || ''}
                    onChange={(e) => updateFormField('projectName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    value={formData.status || 'In Development'}
                    onChange={(e) => updateFormField('status', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="In Development">In Development</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Planning">Planning</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Project URL</label>
                  <Input
                    value={formData.projectUrl || ''}
                    onChange={(e) => updateFormField('projectUrl', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">GitHub URL</label>
                  <Input
                    value={formData.githubUrl || ''}
                    onChange={(e) => updateFormField('githubUrl', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Start Date</label>
                  <Input
                    type="date"
                    value={formatDateForInput(formData.startDate)}
                    onChange={(e) => updateFormField('startDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <Input
                    type="date"
                    value={formatDateForInput(formData.endDate)}
                    onChange={(e) => updateFormField('endDate', e.target.value)}
                    disabled={formData.isOngoing}
                  />
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="ongoing"
                      checked={formData.isOngoing || false}
                      onChange={(e) => updateFormField('isOngoing', e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="ongoing" className="text-sm">Ongoing Project</label>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Short Description</label>
                <Textarea
                  rows={2}
                  value={formData.description || ''}
                  onChange={(e) => updateFormField('description', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Detailed Description</label>
                <Textarea
                  rows={4}
                  value={formData.longDescription || ''}
                  onChange={(e) => updateFormField('longDescription', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Technologies (comma-separated)</label>
                <Input
                  value={formData.technologies?.join(', ') || ''}
                  onChange={(e) => updateArrayField('technologies', e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured || false}
                  onChange={(e) => updateFormField('featured', e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="featured" className="text-sm">Featured Project</label>
              </div>
            </div>
          )}

          {editingType === 'skill' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Skill Name</label>
                <Input
                  value={formData.skillName || ''}
                  onChange={(e) => updateFormField('skillName', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <Input
                  value={formData.category || ''}
                  onChange={(e) => updateFormField('category', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Proficiency Level</label>
                <select
                  value={formData.proficiencyLevel || 'BEGINNER'}
                  onChange={(e) => updateFormField('proficiencyLevel', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                  <option value="EXPERT">Expert</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Years of Experience</label>
                <Input
                  type="number"
                  value={formData.yearsExperience || 0}
                  onChange={(e) => updateFormField('yearsExperience', parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={cancelEditing}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={saveItem}>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage your portfolio content and settings</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'personal' && <PersonalInfoTab />}
          {activeTab === 'experience' && <ExperienceTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'skills' && <SkillsTab />}
          {activeTab === 'education' && <EducationTab />}
        </div>

        {/* Edit Dialog */}
        <EditDialog />
      </div>
    </div>
  )
}

export default AdminDashboard
