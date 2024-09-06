import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NavbarItem } from 'src/app/interfaces/navbar';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private navbarService: NavbarService) {}

  @Input() customClasses:string[] = [''];
  containerClasses:string[] = ['bg-secondary', 'md:bg-transparent', 'flex', 'justify-between', 'items-center', 'w-full', 'genericPadding'];
  isDropdownOpen: boolean = false;

  faUtensils = faUtensils;
  faBars = faBars;
  navbarSubs$: Subscription | null = null;
  navbar: NavbarItem[] | null = null;
  dropdown$: Subscription | null = null;
  dropdownToggled: boolean = false;
  cta: string = 'BOOK A TABLE';
  ngOnInit(): void {
    this.navbarSubs$ = this.navbarService.navbar$.subscribe(
      (navbar) => {
        this.navbar = navbar;
        console.log('Navbar items:', this.navbar);
      }
    );
    this.dropdown$ = this.navbarService.dropdownMenu$.subscribe(
      (val) => {
        this.dropdownToggled = val;
        console.log('Dropdown toggled:', this.dropdownToggled);
      }
    );
  }

  handleClick(){}

  getClasses(){
    return this.containerClasses.concat(this.customClasses)
  }

  ngOnDestroy(): void {
    this.navbarSubs$?.unsubscribe();
    this.dropdown$?.unsubscribe();
  }

  handleNavigate($event: NavbarItem) {
    if ($event.subpaths?.length) {
      console.log('stop');
      return;
    }
    this.navbarService.onSwitchRoute($event.path);
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.navbarService.onDropdownToggle();
  }
}
