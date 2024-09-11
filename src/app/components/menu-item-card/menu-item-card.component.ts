import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-section';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.css']
})
export class MenuItemCardComponent {
  @Input() menuItem!: MenuItem;
}
