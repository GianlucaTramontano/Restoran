import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-navbar-item',
  templateUrl: './menu-navbar-item.component.html',
  styleUrls: ['./menu-navbar-item.component.css']
})
export class MenuNavbarItemComponent {
  @Input() title: string = 'test';
  @Input() subtitle: string = 'test';
  @Input() id: number = 0;
  @Input() isSelected: boolean = false;
  @Input() icon: IconDefinition = faCoffee;

  @Output() selectMenuSection: EventEmitter<number> = new EventEmitter<number>();

  onSelectMenuSection(menuItemId: number): void {
    this.selectMenuSection.emit(menuItemId);
  }

}
