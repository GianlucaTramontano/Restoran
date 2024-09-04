import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () =>
      import('./screens/home/home.module').then(m => m.HomeModule),
    data: {
      preload: true
    }
  },
  { 
    path: 'about', 
    loadChildren: () =>
      import('./screens/about/about.module').then(m => m.AboutModule),
    data: {
      preload: true
    }
  },
  { 
    path: 'contact', 
    loadChildren: () =>
      import('./screens/contact/contact.module').then(m => m.ContactModule),
    data: {
      preload: true
    }
  },
  { 
    path: 'service', 
    loadChildren: () =>
      import('./screens/service/service.module').then(m => m.ServiceModule),
    data: {
      preload: true
    }
  },
  { 
    path: 'menu', 
    loadChildren: () =>
      import('./screens/menu/menu.module').then(m => m.MenuModule),
    data: {
      preload: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }