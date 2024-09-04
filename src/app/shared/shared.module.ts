import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { BasicCardComponent } from '../components/basic-card/basic-card.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeroComponent, BasicCardComponent, NavbarComponent],
  imports: [FontAwesomeModule, CommonModule],
  exports: [HeroComponent, BasicCardComponent, NavbarComponent],
})
export class SharedModule {}
