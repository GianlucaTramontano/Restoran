import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() customClass: string[] = [''];
  containerClasses: string[] = ['hero-header', 'w-screen', 'md:w-full', 'min-h-fit', 'flex', 'flex-col', 'justify-center', 'items-center', 'py-10'];

  getClasses(): string[] {
    return this.containerClasses.concat(this.customClass);
  }
}
