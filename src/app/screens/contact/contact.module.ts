import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContactSectionModule } from 'src/app/components/contact-section/contact-section.module';

const routes:Routes = [
  {
    path: '',
    component: ContactComponent
  }
]


@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ContactSectionModule
  ]
})
export class ContactModule { }
