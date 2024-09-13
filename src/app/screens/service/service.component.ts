import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  cards: any[] = [
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
    {
      icon: faUtensils,
      title: 'test',
      description: 'test2',
    },
  ];
}
