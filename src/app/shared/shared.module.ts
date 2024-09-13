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
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { MenuSectionComponent } from '../components/menu-section/menu-section.component';
import { MenuNavbarComponent } from '../components/menu-navbar/menu-navbar.component';
import { MenuNavbarItemComponent } from '../components/menu-navbar-item/menu-navbar-item.component';
import { MenuItemCardComponent } from '../components/menu-item-card/menu-item-card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReservationSectionComponent } from '../components/reservation-section/reservation-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamSectionComponent } from '../components/team-section/team-section.component';
import { TeamMemberCardComponent } from '../components/team-member-card/team-member-card.component';
import { TestimonialSectionComponent } from '../components/testimonial-section/testimonial-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
    BreadcrumbComponent,
    MenuSectionComponent,
    MenuNavbarComponent,
    MenuNavbarItemComponent,
    MenuItemCardComponent,
    FooterComponent,
    ReservationSectionComponent,
    TeamSectionComponent,
    TeamMemberCardComponent,
    TestimonialSectionComponent
  ],
  imports: [FontAwesomeModule, CommonModule, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule, CarouselModule],
  exports: [
    HeroComponent,
    BasicCardComponent,
    NavbarComponent,
    NgIntersectViewDirective,
    AboutSectionComponent,
    ImagesCompositionComponent,
    BasicButtonComponent,
    BreadcrumbComponent,
    MenuSectionComponent,
    MenuNavbarComponent,
    MenuNavbarItemComponent,
    MenuItemCardComponent,
    FooterComponent,
    ReservationSectionComponent,
    TeamSectionComponent,
    TeamMemberCardComponent,
    TestimonialSectionComponent
  ],
})
export class SharedModule {}
