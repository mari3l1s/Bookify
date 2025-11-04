import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Reservas } from './features/reservas/reservas';


export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'reservas',
    loadComponent: () =>
      import('./features/reservas/reservas').then(m => m.Reservas),
  },
  {
    path: 'admin-panel',
    loadComponent:() =>
      import('./features/admin-panel/admin-panel').then(m => m.AdminPanel),
  }
];