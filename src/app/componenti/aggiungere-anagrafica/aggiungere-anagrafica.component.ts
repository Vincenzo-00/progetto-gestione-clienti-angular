import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClientiService } from 'src/app/servizio/clienti.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aggiungere-anagrafica',
  templateUrl: './aggiungere-anagrafica.component.html',
  styleUrls: ['./aggiungere-anagrafica.component.css']
})
export class AggiungereAnagraficaComponent implements OnInit {
  
  aggiungereForm: any;
  
  constructor(private servizioClienti: ClientiService) {}
  
  ngOnInit(): void {
    
    this.aggiungereForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      indirizzo: new FormControl(''),
      localita: new FormControl(''),
      comune: new FormControl(''),
      provincia: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      note: new FormControl('')
    });
    
  }
    
  onSubmit(){
    console.log(this.aggiungereForm.value)
    this.servizioClienti.insertAnagrafica(
      'http://localhost:3001/clienti',  
      {   nome: this.aggiungereForm.value.nome, 
          cognome: this.aggiungereForm.value.cognome,
          indirizzo: this.aggiungereForm.value.indirizzo,
          localita: this.aggiungereForm.value.localita,
          comune: this.aggiungereForm.value.comune,
          provincia: this.aggiungereForm.value.provincia,
          email: this.aggiungereForm.value.email,
          note: this.aggiungereForm.value.note
      }
    ).subscribe(data => {
        console.log(data)
        this.aggiungereForm.reset()
      })
  }
    
  successNotification() {
      Swal.fire('Ciao', 'Hai aggiunto con successo il cliente', 'success');
  }

}
  

 


