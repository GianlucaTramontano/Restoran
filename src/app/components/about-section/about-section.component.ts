import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { SmallDataCard } from 'src/app/interfaces/about-section';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent {
  isVisible: boolean = false;
  faUtensils = faUtensils;
  images: string[] = [
    'https://themewagon.github.io/restoran/img/about-1.jpg',
    'https://themewagon.github.io/restoran/img/about-2.jpg',
    'https://themewagon.github.io/restoran/img/about-3.jpg',
    'https://themewagon.github.io/restoran/img/about-4.jpg',
  ];
  smallDataCards: SmallDataCard[] = [
    {
      number: 15,
      description: 'Years of',
      title: 'Experience',
    },
    {
      number: 50,
      description: 'Popular',
      title: 'Master chefs',
    },
  ]
  

}
