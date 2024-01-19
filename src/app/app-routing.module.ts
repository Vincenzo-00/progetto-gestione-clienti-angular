import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnagraficaComponent } from './componenti/lista-anagrafica/lista-anagrafica.component';
import { AggiungereAnagraficaComponent } from './componenti/aggiungere-anagrafica/aggiungere-anagrafica.component';
import { ModificareAnagraficaComponent } from './componenti/modificare-anagrafica/modificare-anagrafica.component';

const routes: Routes = [
  {path:'', component: ListaAnagraficaComponent},
  {path:'aggiungere', component: AggiungereAnagraficaComponent},
  {path:'modificare', component: ModificareAnagraficaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
