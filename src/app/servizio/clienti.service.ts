import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  clienteSelezionato: any;

  constructor(private http: HttpClient) { }
  
  // Aggiunta cliente
  insertAnagrafica(url: string, body: any){
    return this.http.post(url, body)
  }

  // Ottenimento elenco dei clienti
  getAnagrafica(url: string){
    return this.http.get('http://localhost:3001/clienti')
  }

  // Eliminazione cliente
  deleteAnagrafica(url: string, id: string){
    return this.http.delete(`${url}/${id}`) 
  }

  // Imposta il cliente selezionato nella variabile
  setClienteSelezionato(cliente: any){
    this.clienteSelezionato = cliente;
  }

  getClienteSelezionato(){
    return this.clienteSelezionato;
  }

  // Modifica cliente
  patchAnagrafica(url: string, body: {}){
    return this.http.patch(url, body);
  }

}


