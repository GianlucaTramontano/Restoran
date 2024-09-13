import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactSectionModule } from 'src/app/components/contact-section/contact-section.module';

const routes:Routes = [
  {
    path: '',
    component: BookingComponent
  }
]


@NgModule({
  declarations: [BookingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ContactSectionModule
  ]
})
export class BookingModule { }
