import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NavbarItem } from 'src/app/interfaces/navbar';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private navbarService:NavbarService){}

  faUtensils = faUtensils;
  faBars = faBars;
  navbarSubs$: Subscription | null = null;
  navbar:NavbarItem[] | null = null;
  dropdown$:Subscription | null = null;
  dropdownToggled:boolean = false;

  ngOnInit(): void {
      this.navbarSubs$ = this.navbarService.navbar$.subscribe(navbar => this.navbar = navbar);
      this.dropdown$ = this.navbarService.dropdownMenu$.subscribe(val => this.dropdownToggled = val);
  }

  ngOnDestroy(): void {
    this.navbarSubs$?.unsubscribe();
    this.dropdown$?.unsubscribe();
  }

  handleNavigate($event:NavbarItem){
    this.navbarService.onSwitchRoute($event.path);
  }

  toggleDropdown(){
    this.navbarService.onDropdownToggle();
  }

}