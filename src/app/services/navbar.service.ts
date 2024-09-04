import { Injectable } from '@angular/core';
import { NavbarItem } from '../interfaces/navbar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private router:Router) { }
  private navbar:NavbarItem[] = [
    {
      path: '',
      label: 'Home',
      selected: true
    },
    {
      path: 'about',
      label: 'About',
      selected: false
    },
    {
      path: 'service',
      label: 'Service',
      selected: false
    },
    {
      path: 'menu',
      label: 'Menu',
      selected: false
    },
    {
      path: 'pages',
      label: 'Pages',
      selected: false,
      subpaths: [
        {
          path: 'booking',
          label: 'Booking'
        },
        {
          path: 'our-team',
          label: 'Our Team'
        },
        {
          path: 'testimonial',
          label: 'Testimonial'
        },
      ]
    },
    {
      path: 'contact',
      label: 'Contact',
      selected: false
    },
  ]

  navbarSubj$:Subject<NavbarItem[]> = new BehaviorSubject<NavbarItem[]>(this.navbar);
  dropdownMenuSubj$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dropdownMenu$:Observable<boolean> = this.dropdownMenuSubj$.asObservable();
  navbar$:Observable<NavbarItem[]> = this.navbarSubj$.asObservable();

  onSwitchRoute(route:string){
    for(let item of this.navbar){
      console.log(item.path, route)
      if(item.path !== route) item.selected = false;
      else item.selected = true;
    }
    this.navbarSubj$.next(this.navbar);
    this.router.navigateByUrl(route)
  }
  
  onDropdownToggle(){
    const current = this.dropdownMenuSubj$.getValue();
    this.dropdownMenuSubj$.next(!current);
  }
}
