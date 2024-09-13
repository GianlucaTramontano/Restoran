import { Component } from '@angular/core';

interface FooterSection {
  title: string;
  type: 'links' | 'contact' | 'opening' | 'newsletter';
  content: any;
  socialLinks?: { icon: string; url: string }[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerSections: FooterSection[] = [
    {
      title: 'Company',
      type: 'links',
      content: [
        { label: 'About Us', url: '/about' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Reservation', url: '/reservation' },
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms & Condition', url: '/terms' }
      ]
    },
    {
      title: 'Contact',
      type: 'contact',
      content: [
        '123 Street, New York, USA',
        '+012 345 67890',
        'info@example.com'
      ],
      socialLinks: [
        { icon: 'fab fa-twitter', url: '#' },
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-youtube', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' }
      ]
    },
    {
      title: 'Opening',
      type: 'opening',
      content: [
        { days: 'Monday - Saturday', hours: '09AM - 09PM' },
        { days: 'Sunday', hours: '10AM - 08PM' }
      ]
    },
    {
      title: 'Newsletter',
      type: 'newsletter',
      content: 'Dolor amet sit justo amet elitr clita ipsum elitr est.'
    }
  ];

  emailInput = '';
  isVisible = false;

  copyrightText = '© Your Site Name, All Right Reserved. Designed By HTML Codex';
  distributionText = 'Distributed By ThemeWagon';

  bottomLinks = [
    { label: 'Home', url: '/' },
    { label: 'Cookies', url: '/cookies' },
    { label: 'Help', url: '/help' },
    { label: 'FAQs', url: '/faqs' }
  ];

  onIntersection(val: boolean) {
    if(!this.isVisible) {
      this.isVisible = val;
    }
  }

  onNewsletterSubmit() {
    this.emailInput = '';
  }
}
