import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarItem } from 'src/app/interfaces/navbar';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(
    private navbarService: NavbarService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {}

  @Input() customClasses:string[] = [''];
  containerClasses:string[] = ['bg-secondary', 'md:bg-transparent', 'flex', 'justify-between', 'items-center', 'w-full', 'relative'];
  isDropdownOpen: boolean = false;

  faUtensils = faUtensils;
  faBars = faBars;
  navbarSubs$: Subscription | null = null;
  navbar: NavbarItem[] | null = null;
  dropdown$: Subscription | null = null;
  dropdownToggled: boolean = false;
  cta: string = 'BOOK A TABLE';
  currentRoute: string = '';

  ngOnInit(): void {
    this.navbarSubs$ = this.navbarService.navbar$.subscribe(
      (navbar) => {
        this.navbar = navbar;
      }
    );
    this.dropdown$ = this.navbarService.dropdownMenu$.subscribe(
      (val) => {
        this.dropdownToggled = val;
      }
    );

    // Get the initial route
    this.currentRoute = this.router.url;

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url;
      this.navbarService.onSwitchRoute(this.currentRoute.replace('/', ''));
    });
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
      return;
    }
    this.navbarService.onSwitchRoute($event.path);
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.navbarService.onDropdownToggle();
  }
}
