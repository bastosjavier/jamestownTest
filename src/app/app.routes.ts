import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cars', component: ListCarsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
