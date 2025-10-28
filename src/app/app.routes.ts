import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Reservas } from './features/reservas/reservas';


export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'reservas',
    loadComponent: () =>
      import('./features/reservas/reservas').then(m => m.Reservas)
  }
];

//export const routes: Routes = [
//    {path: '', redirectTo: '/home', pathMatch: 'full'},
//    {
//        path: 'home',
//        loadComponent: () =>
//             import('./features/home/home').then(m => m.Home),
//    },
//    {
//        path: 'mis reservas',
//        loadComponent: () =>
//            import('./features/reservas/reservas').then(m => m.Reservas),
//    },
//
//];
//