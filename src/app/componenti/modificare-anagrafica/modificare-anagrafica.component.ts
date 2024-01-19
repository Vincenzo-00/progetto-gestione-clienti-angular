import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ClientiService } from 'src/app/servizio/clienti.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificare-anagrafica',
  templateUrl: './modificare-anagrafica.component.html',
  styleUrls: ['./modificare-anagrafica.component.css']
})
export class ModificareAnagraficaComponent implements OnInit {

  modificareForm: any;
  aggiungereForm: any;

  constructor(private servizioClienti: ClientiService) {}
  
  ngOnInit(): void {

    this.modificareForm = new FormGroup({
      nome: new FormControl(''),
      cognome: new FormControl(''),
      indirizzo: new FormControl(''),
      localita: new FormControl(''),
      comune: new FormControl(''),
      provincia: new FormControl(''),
      email: new FormControl(''),
      note: new FormControl('')
    });

    const cliente = 
    this.servizioClienti.getClienteSelezionato()
    this.modificareForm.patchValue(cliente)

  }
  
  onSubmit(){
    
    const cliente = 
    this.servizioClienti.getClienteSelezionato()

    this.servizioClienti.patchAnagrafica(
      `http://localhost:3001/clienti/${cliente.id}`,
      { nome: this.modificareForm.value.nome, 
        cognome: this.modificareForm.value.cognome,
        indirizzo: this.modificareForm.value.indirizzo,
        localita: this.modificareForm.value.localita,
        comune: this.modificareForm.value.comune,
        provincia: this.modificareForm.value.provincia,
        email: this.modificareForm.value.email,
        note: this.modificareForm.value.note
      },
    ).subscribe(data => {
        console.log(data)
        this.modificareForm.reset()
      })
    
  }

  successNotification() {
    Swal.fire('Ciao', 'Hai modificato con successo il cliente', 'success');
  }

}
