import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-section';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent {
  menuItems: MenuItem[] = [
    {
      id: 1,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-1.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
    {
      id: 2,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-2.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
    {
      id: 3,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-3.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
    {
      id: 4,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-4.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
    {
      id: 5,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-5.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
    {
      id: 6,
      imageUrl: 'https://themewagon.github.io/restoran/img/menu-6.jpg',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      title: 'Pizza',
      price: '15€',
    },
  ]

}
