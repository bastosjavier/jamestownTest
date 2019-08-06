import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'person', component: ListPersonComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
