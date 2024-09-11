import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuNavbarItem } from 'src/app/interfaces/menu-section';
import { MenuSectionService } from 'src/app/services/menu-section.service';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent {

  constructor(private menuSectionService: MenuSectionService) {}
  menuSections: MenuNavbarItem[] = [];
  menuSections$: Observable<MenuNavbarItem[]> = this.menuSectionService.menuSections$;

  onSelectMenuSection(menuItemId: number): void {
    this.menuSectionService.onSelectMenuSection(menuItemId);
  }

}
