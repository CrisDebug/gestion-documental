import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component'; // 👈 importa el navbar
import { FiscaliaComponent } from './pages/partes/fiscalia/fiscalia.component';
import { GuardiaComponent } from './pages/oficios/guardia/guardia.component';
import { JudicialesComponent } from './pages/oficios/judiciales/judiciales.component';

export const routes: Routes = [
  { path: '', redirectTo: '/partes/fiscalia', pathMatch: 'full' },

  {
    path: 'partes',
    children: [
      { path: 'fiscalia', component: FiscaliaComponent },
    ],
  },
  {
    path: 'oficios',
    children: [
      { path: 'guardia', component: GuardiaComponent },
      { path: 'judiciales', component: JudicialesComponent },
    ],
  },
];
