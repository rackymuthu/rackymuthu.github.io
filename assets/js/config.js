// EmailJS Configuration
// Note: These values are safe to expose in frontend since EmailJS public key is meant to be public
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'u7PjywkMu4rciztWC',
  SERVICE_ID: 'portfolio_email_service', 
  TEMPLATE_ID: 'template_741jqj5',
  TO_EMAIL: 'racky.rmuthu@gmail.com'
};

// Make config available globally
window.EMAILJS_CONFIG = EMAILJS_CONFIG; 