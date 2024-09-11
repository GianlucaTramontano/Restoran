import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuNavbarItem } from '../interfaces/menu-section';
import {
  faBurger,
  faCoffee,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})

export class MenuSectionService {
  constructor() {}
  menuNavbar: MenuNavbarItem[] = [
    {
      id: 1,
      selected: true,
      title: 'Popular',
      subtitle: 'Breakfast',
      icon: faCoffee,
    },
    {
      id: 2,
      selected: false,
      title: 'Special',
      subtitle: 'Lunch',
      icon: faBurger,
    },
    {
      id: 3,
      selected: false,
      title: 'Lovely',
      subtitle: 'Dinner',
      icon: faUtensils,
    },
  ];

  menuSectionsSubj$ = new BehaviorSubject<MenuNavbarItem[]>(this.menuNavbar);

  menuSections$: Observable<MenuNavbarItem[]> =
    this.menuSectionsSubj$.asObservable();

  onSelectMenuSection(menuItemId: number): void {
    this.menuSectionsSubj$.next(
      this.menuNavbar.map((item) =>
        item.id === menuItemId
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }
}
