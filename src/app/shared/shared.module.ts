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
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

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
    BreadcrumbComponent
  ],
  imports: [FontAwesomeModule, CommonModule, HttpClientModule, RouterModule],
  exports: [
    HeroComponent,
    BasicCardComponent,
    NavbarComponent,
    NgIntersectViewDirective,
    AboutSectionComponent,
    ImagesCompositionComponent,
    BasicButtonComponent,
    BreadcrumbComponent
  ],
})
export class SharedModule {}
