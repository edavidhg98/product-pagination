import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entities', loadChildren: './entities/entities.module#EntitiesModule' }
];
