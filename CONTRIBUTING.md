# Contributing to Dynamic Portfolio Website

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub Issues page to report bugs or suggest features
- Provide detailed information about the issue
- Include steps to reproduce bugs
- Attach screenshots if applicable

### Submitting Changes
1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** with clear, descriptive messages
   ```bash
   git commit -m "Add: new feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** with a clear description

## 📋 Development Guidelines

### Code Style
- Use **ESLint** and **Prettier** for consistent formatting
- Follow **React best practices** and hooks patterns
- Use **functional components** with hooks
- Implement **responsive design** principles
- Write **semantic HTML** with proper accessibility

### Component Structure
```jsx
// Component imports
import { useState, useEffect } from 'react'
import { ComponentName } from './ComponentName'

// Component definition
const MyComponent = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState(initialValue)
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies])
  
  // Event handlers
  const handleEvent = () => {
    // Handler logic
  }
  
  // Render
  return (
    <div className="component-container">
      {/* Component JSX */}
    </div>
  )
}

export default MyComponent
```

### Styling Guidelines
- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Maintain **consistent spacing** and typography
- Use **semantic color names** from the design system

### State Management
- Use **React Context** for global state
- Implement **custom hooks** for reusable logic
- Keep **component state local** when possible
- Use **localStorage** for data persistence

## 🧪 Testing

### Before Submitting
- Test on **multiple screen sizes** (mobile, tablet, desktop)
- Verify **admin functionality** works correctly
- Check **data persistence** in localStorage
- Ensure **navigation** works properly
- Test **form validation** and error handling

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Admin login/logout functionality
- [ ] Content editing and saving
- [ ] Responsive design on mobile
- [ ] Form validation works
- [ ] No console errors

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

### Format
```
Type: Brief description

Detailed explanation if needed
```

### Types
- **Add:** New features or components
- **Fix:** Bug fixes
- **Update:** Modifications to existing features
- **Remove:** Deletion of code or features
- **Refactor:** Code restructuring without functionality changes
- **Style:** Formatting, missing semicolons, etc.
- **Docs:** Documentation changes

### Examples
```bash
git commit -m "Add: contact form validation"
git commit -m "Fix: mobile navigation menu overflow"
git commit -m "Update: admin dashboard layout"
git commit -m "Docs: update README installation steps"
```

## 🎯 Feature Requests

When suggesting new features:

1. **Check existing issues** to avoid duplicates
2. **Describe the problem** the feature would solve
3. **Explain the proposed solution** in detail
4. **Consider the impact** on existing functionality
5. **Provide mockups** or examples if applicable

## 🐛 Bug Reports

When reporting bugs:

1. **Use a clear title** describing the issue
2. **Provide steps to reproduce** the bug
3. **Include expected vs actual behavior**
4. **Add screenshots** or screen recordings
5. **Specify browser and device** information
6. **Include console errors** if any

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- npm or pnpm
- Git
- VS Code (recommended)

### Setup Steps
1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm run dev`
4. Open http://localhost:5173

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

### Design Guidelines
- Follow the existing color scheme and typography
- Maintain consistent spacing using Tailwind utilities
- Ensure accessibility with proper ARIA labels
- Use semantic HTML elements

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors page

## 📞 Questions?

If you have questions about contributing:
- Open an issue for discussion
- Contact the maintainer: huule@sungodlab.org
- Check existing documentation and issues first

Thank you for contributing to make this project better! 🚀

