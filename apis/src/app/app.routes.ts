import { Routes } from '@angular/router';


import { AboutComponent } from './pages/about/about.component';

import { ServicesComponent } from 
'./pages/services/services.component';

import { AlumniComponent } from './pages/alumni/alumni.component';


import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"services",component:ServicesComponent},
    {path:"alumni",component:AlumniComponent},

];
