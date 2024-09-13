import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactSectionModule } from 'src/app/components/contact-section/contact-section.module';
import { TestimonialComponent } from './testimonial.component';

const routes:Routes = [
  {
    path: '',
    component: TestimonialComponent
  }
]


@NgModule({
  declarations: [TestimonialComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class TestimonialModule { }


