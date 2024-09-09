import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { BasicCardComponent } from '../components/basic-card/basic-card.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIntersectViewDirective } from '../directives/ng-intersect-view.directive';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { ImagesCompositionComponent } from '../components/images-composition/images-composition.component';
import { SmallDataCardComponent } from '../components/small-data-card/small-data-card.component';
import { BasicButtonComponent } from '../components/basic-button/basic-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeroComponent,
    BasicCardComponent,
    NavbarComponent,
    NgIntersectViewDirective,
    AboutSectionComponent,
    ImagesCompositionComponent,
    SmallDataCardComponent,
    BasicButtonComponent,
  ],
  imports: [FontAwesomeModule, CommonModule, HttpClientModule],
  exports: [
    HeroComponent,
    BasicCardComponent,
    NavbarComponent,
    NgIntersectViewDirective,
    AboutSectionComponent,
    ImagesCompositionComponent,
    BasicButtonComponent,
  ],
})
export class SharedModule {}
