import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PortfolioProvider } from './contexts/PortfolioContext'
import Navigation from './components/layout/Navigation'

// Page Components
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ExperiencePage from './components/pages/ExperiencePage'
import ProjectsPage from './components/pages/ProjectsPage'
import SkillsPage from './components/pages/SkillsPage'
import ContactPage from './components/pages/ContactPage'
import AdminDashboard from './components/pages/AdminDashboard'

import './App.css'

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <Navigation />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-slate-800 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Huu Tai Le</h3>
                  <p className="text-slate-300 mb-4">
                    Full-Stack Software Engineer passionate about building scalable web applications
                    and solving complex problems with modern technologies.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    <a href="/about" className="block text-slate-300 hover:text-white transition-colors">About</a>
                    <a href="/experience" className="block text-slate-300 hover:text-white transition-colors">Experience</a>
                    <a href="/projects" className="block text-slate-300 hover:text-white transition-colors">Projects</a>
                    <a href="/contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Connect</h4>
                  <div className="space-y-2">
                    <a href="https://linkedin.com/in/huutaile" target="_blank" rel="noopener noreferrer" 
                       className="block text-slate-300 hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/huutaile" target="_blank" rel="noopener noreferrer" 
                       className="block text-slate-300 hover:text-white transition-colors">GitHub</a>
                    <a href="mailto:huutai.le@example.com" 
                       className="block text-slate-300 hover:text-white transition-colors">Email</a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2025 Huu Tai Le. All rights reserved. Built with React & modern web technologies.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </PortfolioProvider>
  )
}

export default App

