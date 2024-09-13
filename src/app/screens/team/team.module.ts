import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactSectionModule } from 'src/app/components/contact-section/contact-section.module';
import { TeamComponent } from './team.component';

const routes:Routes = [
  {
    path: '',
    component: TeamComponent
  }
]


@NgModule({
  declarations: [TeamComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ContactSectionModule
  ]
})
export class TeamModule { }


