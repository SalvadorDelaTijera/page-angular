import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formularioContacto: FormGroup

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  enviar(){}

}
