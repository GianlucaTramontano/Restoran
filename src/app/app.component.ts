import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { Subscription } from 'rxjs';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService
  ) {}
  title = 'Restoran';
  standardNavbarHidden: boolean = false;
  navbarClasses: string[] = [''];
  subscriptionNavbar: Subscription | null = null;
  appendedNavbarFirstTime: boolean = false;

  handleScrollPage(val: boolean) {
    this.standardNavbarHidden = !val;
    if (!this.appendedNavbarFirstTime) this.appendedNavbarFirstTime = !val;
  }
}
