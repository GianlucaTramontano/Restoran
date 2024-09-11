import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyLinks = [
    { label: 'About Us', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Reservation', url: '/reservation' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms & Condition', url: '/terms' }
  ];

  contactInfo = [
    '123 Street, New York, USA',
    '+012 345 67890',
    'info@example.com'
  ];

  socialLinks = [
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-youtube', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' }
  ];

  openingHours = [
    { days: 'Monday - Saturday', hours: '09AM - 09PM' },
    { days: 'Sunday', hours: '10AM - 08PM' }
  ];

  newsletterText = 'Dolor amet sit justo amet elitr clita ipsum elitr est.';
  emailInput = '';

  copyrightText = '© Your Site Name, All Right Reserved. Designed By HTML Codex';
  distributionText = 'Distributed By ThemeWagon';

  bottomLinks = [
    { label: 'Home', url: '/' },
    { label: 'Cookies', url: '/cookies' },
    { label: 'Help', url: '/help' },
    { label: 'FAQs', url: '/faqs' }
  ];

  onNewsletterSubmit() {
    // Implement newsletter signup logic here
    console.log('Newsletter signup:', this.emailInput);
    this.emailInput = ''; // Clear the input after submission
  }
}
