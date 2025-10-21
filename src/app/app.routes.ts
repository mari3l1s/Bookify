import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Reservas } from './features/reservas/reservas';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: () =>
             import('./features/home/home').then(m => m.Home),
    },
    {
        path: 'reservas',
        loadChildren: () =>
            import('./features/reservas/reservas').then(m => m.Reservas),
    },

];
