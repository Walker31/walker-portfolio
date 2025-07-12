# Aditya Janga - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a full-stack developer.

## ✨ Features

### 🎨 **Enhanced Visual Design**
- **Modern Dark Theme**: Sleek black background with blue/purple gradients
- **Animated Background Elements**: Subtle floating orbs and gradient effects
- **Smooth Animations**: CSS transitions and micro-interactions throughout
- **Glass Morphism**: Backdrop blur effects for modern UI elements
- **Custom Scrollbar**: Styled scrollbar matching the theme

### 🚀 **Improved User Experience**
- **Loading Screen**: Animated welcome screen with typing effect and progress bar
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, scale animations, and visual feedback
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 📱 **Mobile-First Design**
- **Hamburger Menu**: Animated mobile navigation with smooth transitions
- **Touch-Friendly**: Optimized button sizes and spacing for mobile
- **Performance**: Optimized animations and loading times

### 🎯 **Content Sections**

#### **Home Section**
- Hero introduction with animated background
- Professional title and description
- Call-to-action buttons with gradient effects
- Social media links with hover animations

#### **About Section**
- Detailed personal introduction
- **Skills Visualization**: Progress bars showing proficiency levels
- **Education**: Academic background with relevant coursework
- **Experience**: Professional experience with detailed descriptions
- **Two-column Layout**: Organized information presentation

#### **Projects Section**
- **6 Featured Projects**: Detailed descriptions with technologies used
- **Project Cards**: Interactive cards with hover effects
- **Feature Lists**: Key features for each project
- **Live Demo Links**: Direct links to project demos
- **GitHub Integration**: Source code links for each project
- **Technology Tags**: Visual representation of tech stack

#### **Contact Section**
- **Contact Form**: Enhanced form with validation and loading states
- **Contact Information**: Email, phone, and location details
- **Social Links**: GitHub, LinkedIn, and Twitter integration
- **Success/Error Messages**: User feedback for form submissions

### 🛠 **Technical Improvements**

#### **Performance Optimizations**
- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Efficient Rendering**: React best practices for smooth performance

#### **Code Quality**
- **Clean Architecture**: Well-organized component structure
- **Reusable Components**: Modular design for maintainability
- **TypeScript Ready**: Prepared for future TypeScript migration
- **ESLint Configuration**: Code quality and consistency

#### **Styling Enhancements**
- **Tailwind CSS**: Utility-first styling approach
- **Custom Animations**: CSS keyframes for unique effects
- **Gradient Utilities**: Custom gradient text and background classes
- **Responsive Utilities**: Mobile-first responsive design

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Walker31/walker-portfolio.git
   cd walker-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your EmailJS credentials:
   ```
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📁 **Project Structure**

```
walker-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Home.jsx          # Hero section
│   │   │   ├── About.jsx         # About section with skills
│   │   │   ├── Projects.jsx      # Projects showcase
│   │   │   └── Contact.jsx       # Contact form
│   │   ├── LoadingScreen.jsx     # Animated loading screen
│   │   ├── MobileMenu.jsx        # Mobile navigation
│   │   ├── Navbar.jsx            # Desktop navigation
│   │   └── RevealOnScroll.jsx    # Scroll animations
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Global styles and animations
│   └── main.jsx                  # App entry point
├── .github/workflows/            # GitHub Actions deployment
├── package.json
└── README.md
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Blue (#3b82f6) to Purple (#8b5cf6) gradients
- **Secondary**: Cyan (#06b6d4) accents
- **Background**: Black (#0a0a0a) with gray variations
- **Text**: White (#f3f4f6) with gray variations

### **Typography**
- **Font**: Space Grotesk (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good readability

### **Animations**
- **Loading**: Typing effect with progress bar
- **Reveal**: Scroll-triggered animations
- **Hover**: Scale and glow effects
- **Transitions**: Smooth 300ms cubic-bezier transitions

## 🔧 **Technologies Used**

### **Frontend**
- **React 19**: Latest React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **EmailJS**: Contact form functionality

### **Development Tools**
- **ESLint**: Code linting and formatting
- **GitHub Pages**: Deployment platform
- **Responsive Design**: Mobile-first approach

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 **Performance Features**

- **Lazy Loading**: Components load on demand
- **Optimized Images**: WebP format with fallbacks
- **Minified CSS**: Production-ready styles
- **Fast Loading**: Optimized bundle size

## 📧 **Contact Integration**

The contact form uses EmailJS for reliable email delivery:
- **Service ID**: Configured via environment variables
- **Template ID**: Custom email template
- **Public Key**: Secure API access

## 🚀 **Deployment**

### **GitHub Pages Deployment**

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### **Setup Instructions:**

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

3. **Set up EmailJS (Optional)**:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Add them as GitHub Secrets:
     - `VITE_SERVICE_ID`
     - `VITE_TEMPLATE_ID`
     - `VITE_PUBLIC_KEY`

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

#### **GitHub Actions Workflow**

The `.github/workflows/deploy.yml` file handles:
- ✅ Automatic builds on push to main
- ✅ Environment variable injection
- ✅ Build verification
- ✅ Deployment to GitHub Pages
- ✅ Error handling and logging

#### **Manual Deployment**

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

## 🔄 **Recent Updates**

### **v2.0 - Major Enhancement**
- ✨ Complete visual redesign
- 🎨 Enhanced animations and transitions
- 📱 Improved mobile experience
- 🚀 Better performance optimization
- 📝 More detailed project descriptions
- 🎯 Enhanced user experience

### **Key Improvements**
1. **Visual Design**: Modern dark theme with gradients
2. **Animations**: Smooth scroll-triggered animations
3. **Content**: More detailed project and experience information
4. **Mobile**: Better responsive design and navigation
5. **Performance**: Optimized loading and rendering
6. **Accessibility**: Better keyboard navigation and ARIA labels

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 **Contact**

- **Email**: aditya.janga@example.com
- **GitHub**: [@Walker31](https://github.com/Walker31)
- **LinkedIn**: [Aditya Janga](https://linkedin.com/in/aditya-janga)

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
