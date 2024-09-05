import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restoran';
  standardNavbarHidden:boolean = false;
  navbarClasses:string[] = ['']

  handleScrollPage(val:boolean){
    this.standardNavbarHidden = !val;
  }
}
