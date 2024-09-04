import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { HomeModule } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  cards:any[] = [{
    icon: faUtensils,
    title: 'test',
    description: 'test2'
  }]
}
