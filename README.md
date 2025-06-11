# R. Rackymuthu - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects as a Manager at Deloitte with 8+ years of software engineering expertise.

🔗 **Live Demo**: [https://rackymuthu.github.io](https://rackymuthu.github.io)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This is a professional portfolio website built to showcase my career journey from Solution Developer to Manager at Deloitte. The website features a modern design with smooth animations, responsive layout, and interactive elements that highlight my technical expertise in Python, AWS, and full-stack development.

### 👨‍💼 Professional Highlights

- **Current Role**: Manager/Senior Consultant at Deloitte India
- **Experience**: 8+ years in software engineering
- **Specialization**: Python, AWS, Django, React, Microservices
- **Location**: Coimbatore, Tamil Nadu, India

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dark Theme**: Elegant dark color scheme with accent colors
- **Smooth Scrolling**: Enhanced navigation experience
- **Loading Animations**: Progressive content loading with fade-in effects

### 🚀 Functionality
- **Dynamic Experience Calculation**: Automatically calculates and displays years of experience
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Contact Form**: Functional contact form with EmailJS integration
- **Resume Download**: Direct download link for resume PDF
- **Social Media Integration**: Links to GitHub, LinkedIn, and Stack Overflow profiles

### 📱 Responsive Features
- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly**: All interactive elements are touch-optimized
- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Optimized Images**: Responsive images with proper aspect ratios

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Typography (Inter & JetBrains Mono)

### Libraries & Services
- **EmailJS**: Contact form email delivery service
- **GitHub Pages**: Static site hosting

### Development Tools
- **Git**: Version control
- **VS Code**: Development environment
- **Browser DevTools**: Testing and debugging

## 📁 Project Structure

```
rackymuthu.github.io/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
├── assets/
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   ├── config.js          # EmailJS configuration
│   │   ├── script.js          # Main JavaScript functionality
│   │   └── lib/
│   │       └── emailjs.min.js # EmailJS library
│   ├── images/
│   │   └── Rackymuthu.jpg     # Profile photo
│   └── resume.pdf             # Resume document
└── .git/                      # Git repository files
```

### 📄 File Descriptions

- **`index.html`**: Main page containing all sections (About, Experience, Projects, Skills, Education, Contact)
- **`assets/css/styles.css`**: Complete stylesheet with responsive design and animations
- **`assets/js/script.js`**: JavaScript for interactions, animations, and form handling
- **`assets/js/config.js`**: EmailJS configuration for contact form
- **`assets/js/lib/emailjs.min.js`**: EmailJS library for email functionality

## 🚀 Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Git (for version control)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rackymuthu/rackymuthu.github.io.git
   cd rackymuthu.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click index.html → "Open with Live Server"
   ```

3. **Access the site**
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## ⚙️ Configuration

### EmailJS Setup

The contact form uses EmailJS for email delivery. Configuration is in `assets/js/config.js`:

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_public_key',
  SERVICE_ID: 'your_service_id', 
  TEMPLATE_ID: 'your_template_id',
  TO_EMAIL: 'your_email@example.com'
};
```

### Customization

1. **Personal Information**: Update content in `index.html`
2. **Styling**: Modify `assets/css/styles.css`
3. **Functionality**: Enhance `assets/js/script.js`
4. **Images**: Replace `assets/images/Rackymuthu.jpg`
5. **Resume**: Update `assets/resume.pdf`

### Career Start Date

The experience calculation is based on the career start date in `script.js`:

```javascript
const careerStartDate = new Date('2016-05-01'); // Update this date
```

## 🌐 Deployment

### GitHub Pages (Current Hosting)

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select source: "Deploy from a branch"
   - Choose branch: `main`
   - Save settings

2. **Access your site**
   - URL: `https://yourusername.github.io`
   - Custom domain: Configure in repository settings

### Alternative Hosting Options

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting
- **Firebase Hosting**: Google's hosting platform

## 📧 Contact Form Setup

### EmailJS Configuration Steps

1. **Create EmailJS Account**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Setup Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Design your email template
   - Note the Template ID

4. **Get Public Key**
   - Find your public key in account settings

5. **Update Configuration**
   - Replace values in `assets/js/config.js`

### Template Variables

The contact form sends these variables to your email template:
- `{{name}}`: Sender's name
- `{{email}}`: Sender's email
- `{{subject}}`: Message subject
- `{{message}}`: Message content

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari, Chrome Mobile

### Fallbacks
- CSS Grid with Flexbox fallback
- Modern JavaScript with polyfills
- Progressive enhancement approach

## 📊 Performance Features

- **Optimized Images**: Compressed and properly sized
- **Minified CSS**: Reduced file size
- **Lazy Loading**: Images load as needed
- **Efficient JavaScript**: Optimized event handling
- **CDN Resources**: Fast loading of external libraries

## 🔧 Development Notes

### Key JavaScript Functions

- `updateDynamicContent()`: Calculates experience years
- `initContactForm()`: Handles form submission
- `initAnimations()`: Manages scroll animations
- `initNavigation()`: Navigation functionality

### CSS Architecture

- **Mobile-first**: Responsive design approach
- **BEM-like**: Organized CSS class naming
- **CSS Custom Properties**: For consistent theming
- **Flexbox & Grid**: Modern layout techniques

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**R. Rackymuthu**
- **Email**: [racky.rmuthu@gmail.com](mailto:racky.rmuthu@gmail.com)
- **Phone**: +91 97888-30879
- **LinkedIn**: [linkedin.com/in/rackymuthu](https://linkedin.com/in/rackymuthu)
- **GitHub**: [github.com/rackymuthu](https://github.com/rackymuthu)
- **Stack Overflow**: [stackoverflow.com/users/7178290/rackymuthu](https://stackoverflow.com/users/7178290/rackymuthu)

---

⭐ **Star the repository if you like it!**

📝 **Built with ❤️ using modern web technologies** 