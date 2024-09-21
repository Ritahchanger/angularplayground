import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '',

    redirectTo:'HomeComponent',

    pathMatch:'full'
    
  },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
 