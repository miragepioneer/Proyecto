import { Routes } from '@angular/router';
import { DetallesComponent } from './vistas/detalles/detalles.component';
import { ListadoComponent } from './vistas/listado/listado.component';
import { FormularioComponent } from './vistas/formulario/formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Listado', pathMatch: 'full' },
  { path: 'Listado', component: ListadoComponent },
  { path: 'Detalles', component: DetallesComponent },
  { path: 'Formulario', component: FormularioComponent },
];
