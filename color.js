// Smooth scroll to anchor links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Testimonials image slideshow
  let testimonialIndex = 0;
  showTestimonials();
  
  function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
    });
  
    testimonialIndex++;
  
    if (testimonialIndex > testimonials.length) {
      testimonialIndex = 1;
    }
  
    testimonials[testimonialIndex - 1].style.display = 'block';
    setTimeout(showTestimonials, 5000); // Change image every 5 seconds
  }
  
  // Google Pay configuration
  function onGooglePayLoaded() {
    google.payments.api.PaymentsClient({
      environment: 'TEST' // Change to 'PRODUCTION' for live transactions
    });
    createGooglePayButton();
  }
  
  function createGooglePayButton() {
    const googlePayButton = google.payments.api.PaymentsClient({
      createButton: createGooglePayButton
    });
  
    googlePayButton.addEventListener('load', (event) => {
      if (event.detail && event.detail.status === 'SUCCESS') {
        const button = googlePayButton.createButton({
          onClick: handleGooglePay
        });
  
        document.getElementById('googlePayButtonContainer').appendChild(button);
      }
    });
  }
  
  function handleGooglePay() {
    // Handle Google Pay logic here
    // This typically involves creating a payment request and processing the payment
    alert('Google Pay functionality coming soon!');
  }
  