import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import { usePortfolio } from '../../contexts/PortfolioContext'
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  Code, 
  Mail, 
  Settings,
  LogIn,
  LogOut,
  Menu,
  X,
  Shield
} from 'lucide-react'

const Navigation = () => {
  const location = useLocation()
  const { isAdmin, login, logout, portfolioData } = usePortfolio()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' })

  const handleLogin = () => {
    if (login(loginCredentials)) {
      setIsLoginOpen(false)
      setLoginCredentials({ username: '', password: '' })
    } else {
      alert('Invalid credentials. Use admin/admin123')
    }
  }

  const handleLogout = () => {
    logout()
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  const adminNavItems = [
    { path: '/admin', label: 'Dashboard', icon: Settings },
  ]

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const NavLink = ({ item, mobile = false }) => {
    const Icon = item.icon
    const isActive = isActivePath(item.path)
    
    return (
      <Link
        to={item.path}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-blue-100 text-blue-700 font-medium'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        } ${mobile ? 'w-full justify-start' : ''}`}
      >
        <Icon className="w-4 h-4" />
        <span>{item.label}</span>
      </Link>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {portfolioData.personalInfo.fullName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="font-bold text-slate-800">{portfolioData.personalInfo.fullName}</h1>
              <p className="text-sm text-slate-500">{portfolioData.personalInfo.title}</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
            
            {isAdmin && adminNavItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Admin Controls */}
          <div className="flex items-center gap-3">
            {isAdmin ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Admin</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <LogIn className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Admin Login</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Username"
                      value={loginCredentials.username}
                      onChange={(e) => setLoginCredentials(prev => ({ ...prev, username: e.target.value }))}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={loginCredentials.password}
                      onChange={(e) => setLoginCredentials(prev => ({ ...prev, password: e.target.value }))}
                    />
                    <Button onClick={handleLogin} className="w-full">
                      Login
                    </Button>
                    <p className="text-sm text-slate-500 text-center">
                      Demo credentials: admin / admin123
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {portfolioData.personalInfo.fullName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="font-bold text-slate-800">{portfolioData.personalInfo.fullName}</span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t bg-white">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} mobile />
              ))}
              
              {isAdmin && adminNavItems.map((item) => (
                <NavLink key={item.path} item={item} mobile />
              ))}

              <div className="pt-4 border-t">
                {isAdmin ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg">
                      <Shield className="w-4 h-4" />
                      <span>Admin Mode</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        <LogIn className="w-4 h-4 mr-2" />
                        Admin Login
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Admin Login</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Username"
                          value={loginCredentials.username}
                          onChange={(e) => setLoginCredentials(prev => ({ ...prev, username: e.target.value }))}
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          value={loginCredentials.password}
                          onChange={(e) => setLoginCredentials(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <Button onClick={handleLogin} className="w-full">
                          Login
                        </Button>
                        <p className="text-sm text-slate-500 text-center">
                          Demo credentials: admin / admin123
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation

