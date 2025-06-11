// Professional Portfolio - Enhanced JavaScript
// Author: R. Rackymuthu
// Enhanced with modern ES6+ features and smooth animations

// Initialize EmailJS
(function() {
  // Replace with your actual EmailJS public key when ready to use
  emailjs.init('u7PjywkMu4rciztWC'); // User needs to replace this
})();

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu a');
const backToTopBtn = document.querySelector('.back-to-top');
const contactForm = document.getElementById('contactForm');

// Enhanced Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Initialize portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollEffects();
  initAnimations();
  initContactForm();
  initBackToTop();
  initSmoothScrolling();
  initTypingEffect();
  initParallaxEffect();
  initCardAnimations();
  
  // Show page after initialization
  document.body.style.opacity = '1';
});

// Enhanced Navigation System
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });

  // Highlight active navigation item
  updateActiveNavItem();
  
  // Update on scroll
  window.addEventListener('scroll', updateActiveNavItem);
}

// Update active navigation item based on scroll position
function updateActiveNavItem() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navMenuItems.forEach(item => item.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
}

// Enhanced Scroll Effects
function initScrollEffects() {
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navbar background on scroll
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
}

// Enhanced Animation System
function initAnimations() {
  // Observe elements for animations
  const animateElements = document.querySelectorAll(`
    .summary-item, .timeline-item, .project-card, 
    .skill-category, .education-card, .contact-method
  `);
  
  animateElements.forEach(el => {
    animationObserver.observe(el);
  });

  // Stagger animations for grouped elements
  const staggerGroups = [
    { selector: '.summary-item', delay: 100 },
    { selector: '.project-card', delay: 150 },
    { selector: '.skill-category', delay: 200 }
  ];

  staggerGroups.forEach(group => {
    const elements = document.querySelectorAll(group.selector);
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * group.delay}ms`;
    });
  });
}

// Enhanced Contact Form with EmailJS
function initContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Validate form
    if (!validateForm(formData)) {
      showNotification('Please fill in all required fields correctly.', 'error');
      return;
    }

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'portfolio_email_service', // Replace with your EmailJS service ID
        'template_741jqj5', // Replace with your EmailJS template ID
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_email: 'racky.rmuthu@gmail.com'
        }
      );

      if (response.status === 200) {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      showNotification('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
    } finally {
      // Reset button
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// Form validation
function validateForm(formData) {
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const subject = formData.get('subject')?.trim();
  const message = formData.get('message')?.trim();

  // Check required fields
  if (!name || !email || !subject || !message) {
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${getNotificationIcon(type)}"></i>
      <span>${message}</span>
      <button class="notification-close" aria-label="Close notification">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;

  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    padding: '16px 20px',
    borderRadius: '8px',
    backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
    color: 'white',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    zIndex: '10000',
    transform: 'translateX(400px)',
    transition: 'transform 0.3s ease-in-out',
    maxWidth: '400px',
    wordWrap: 'break-word'
  });

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Close functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => closeNotification(notification));

  // Auto close after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      closeNotification(notification);
    }
  }, 5000);
}

function getNotificationIcon(type) {
  switch (type) {
    case 'success': return 'fa-check-circle';
    case 'error': return 'fa-exclamation-circle';
    case 'warning': return 'fa-exclamation-triangle';
    default: return 'fa-info-circle';
  }
}

function closeNotification(notification) {
  notification.style.transform = 'translateX(400px)';
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 300);
}

// Enhanced Back to Top Button
function initBackToTop() {
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Enhanced Smooth Scrolling
function initSmoothScrolling() {
  navMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Enhanced Typing Effect - No Layout Shift
function initTypingEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;

  const originalText = subtitle.textContent;
  
  // Create container structure to prevent layout shift
  subtitle.innerHTML = `
    <span class="text-invisible">${originalText}</span>
    <span class="text-typing"></span>
    <span class="cursor-typing">|</span>
  `;
  
  const invisibleText = subtitle.querySelector('.text-invisible');
  const typingText = subtitle.querySelector('.text-typing');
  const cursor = subtitle.querySelector('.cursor-typing');
  
  // Style the invisible text to reserve space
  invisibleText.style.visibility = 'hidden';
  invisibleText.style.position = 'absolute';
  
  // Style the typing text
  typingText.style.position = 'absolute';
  typingText.style.left = '0';
  typingText.style.top = '0';
  
  // Style the cursor
  cursor.style.position = 'absolute';
  cursor.style.left = '0';
  cursor.style.top = '0';
  cursor.style.opacity = '0';
  
  let index = 0;
  const typeSpeed = 50;
  
  function typeWriter() {
    if (index < originalText.length) {
      const currentText = originalText.substring(0, index + 1);
      typingText.textContent = currentText;
      
      // Position cursor after the current text
      const textWidth = typingText.offsetWidth;
      cursor.style.left = textWidth + 'px';
      
      index++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      // Show cursor and start blinking
      cursor.style.opacity = '1';
      cursor.classList.add('cursor');
    }
  }
  
  // Start typing effect after a delay
  setTimeout(typeWriter, 1000);
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });
}

// Enhanced Card Animations
function initCardAnimations() {
  const cards = document.querySelectorAll('.project-card, .summary-item, .skill-category');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Tech Tag Interactive Effects
function initTechTags() {
  const techTags = document.querySelectorAll('.tech-tag');
  
  techTags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      tag.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Enhanced Timeline Animation
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });
}

// Statistics Counter Animation
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const finalValue = stat.textContent;
        const numValue = parseFloat(finalValue);
        
        if (!isNaN(numValue)) {
          animateCounter(stat, 0, numValue, 2000, finalValue.includes('.'));
        }
        
        counterObserver.unobserve(stat);
      }
    });
  });

  stats.forEach(stat => {
    counterObserver.observe(stat);
  });
}

function animateCounter(element, start, end, duration, isDecimal) {
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    const currentValue = start + (end - start) * easeOutQuart(progress);
    element.textContent = isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = end + (end === 9.2 ? '' : '+');
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Easing function
function easeOutQuart(t) {
  return 1 - (--t) * t * t * t;
}

// Keyboard Navigation Support
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
    
    // Enter key on nav toggle
    if (e.key === 'Enter' && e.target === navToggle) {
      navToggle.click();
    }
  });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
  initTechTags();
  initTimelineAnimation();
  initStatCounters();
  initKeyboardNavigation();
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  updateActiveNavItem();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Error handling for missing elements
function safeQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element not found: ${selector}`);
  }
  return element;
}

// Enhanced console message for developers
console.log(`
🚀 Portfolio Loaded Successfully!
👨‍💻 R. Rackymuthu - Manager at Deloitte
📧 racky.rmuthu@gmail.com
🔗 linkedin.com/in/rackymuthu
🌐 github.com/rackymuthu

Built with modern web technologies:
✅ Responsive Design
✅ Smooth Animations  
✅ Interactive Elements
✅ EmailJS Integration
✅ SEO Optimized
✅ Accessibility Features

For any questions or collaboration opportunities, feel free to reach out!
`);

// Add CSS for additional animations
const additionalStyles = `
<style>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.timeline-item.animate-in .timeline-content {
  animation: slideInFromLeft 0.6s ease-out;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-close {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.notification-close:hover {
  opacity: 0.8;
}
</style>
`;

// Add the additional styles to the document
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Dynamic content updates
function updateDynamicContent() {
    // Calculate years of experience from career start date (May 2016)
    const careerStartDate = new Date('2016-05-01');
    const currentDate = new Date();
    
    // Calculate the difference in years
    const yearsExperience = ((currentDate - careerStartDate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    
    // Update the years experience in hero stats
    const experienceStat = document.querySelector('.experience-stat');
    if (experienceStat) {
        experienceStat.textContent = yearsExperience;
    }
    
    // Update the years experience in hero description
    const experienceYears = document.querySelector('.experience-years');
    if (experienceYears) {
        experienceYears.textContent = `${yearsExperience} years`;
    }
    
    // Update footer year to current year
    const currentYearSpan = document.querySelector('.current-year');
    if (currentYearSpan) {
        const currentYear = currentDate.getFullYear();
        currentYearSpan.textContent = currentYear;
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('0pfPBJb4h3qTNNqvb');
    
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    
    // Update dynamic content
    updateDynamicContent();
    
    console.log('🚀 Professional Portfolio Loaded Successfully!');
    console.log('💼 Technologies: HTML5, CSS3, JavaScript, EmailJS');
    console.log('🎨 Features: Responsive Design, Smooth Animations, Contact Form');
    console.log('📧 Contact: racky.rmuthu@gmail.com');
}); 