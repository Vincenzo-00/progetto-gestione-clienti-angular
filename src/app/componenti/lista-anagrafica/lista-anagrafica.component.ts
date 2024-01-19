import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs';
import { ClientiService } from 'src/app/servizio/clienti.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-anagrafica',
  templateUrl: './lista-anagrafica.component.html',
  styleUrls: ['./lista-anagrafica.component.css']
})
export class ListaAnagraficaComponent implements OnInit {

  clienti: any;

  constructor(private servizioClienti: ClientiService) {}
  
  ngOnInit(): void {

    this.servizioClienti.getAnagrafica('http://localhost:3001/clienti')
      .subscribe(data => {
      this.clienti = data;
    });

  }

  onDeleteAnagrafica(id: string){
      
    this.servizioClienti.deleteAnagrafica('http://localhost:3001/clienti', id)
    .pipe(
      switchMap(() => this.servizioClienti.getAnagrafica('http://localhost:3001/clienti'))
    )
    .subscribe(data => {
      this.clienti = data;
    });
  }

  onClienteSelezionato(cliente: any){
    this.servizioClienti.setClienteSelezionato(cliente);
  }

  alertConfirmation(id: string) {
    Swal.fire({
      title: 'Sei sicuro?',
      text: 'Questo processo è irreversibile',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'NO',
    }).then((result) => {
      if (result.value) {
        this.onDeleteAnagrafica(id)
        Swal.fire('Eliminato', 'Cliente eliminato correttamente.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annullato', 'Il cliente è ancora nel database', 'error');
      }
    });
  }

}

