import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListaAnagraficaComponent } from './componenti/lista-anagrafica/lista-anagrafica.component';
import { AggiungereAnagraficaComponent } from './componenti/aggiungere-anagrafica/aggiungere-anagrafica.component';
import { ModificareAnagraficaComponent } from './componenti/modificare-anagrafica/modificare-anagrafica.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ListaAnagraficaComponent,
    AggiungereAnagraficaComponent,
    ModificareAnagraficaComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    NgbModule,
    HttpClientModule,
    [SweetAlert2Module.forRoot()],
    [SweetAlert2Module],
    [SweetAlert2Module.forChild({})],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
