import { Component,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formularioContacto: FormGroup;

  tipoDni: string = 'DNI';
  // usuarioActivo: any = {
  //   name: 'Salvador',
  //   lastName: 'De la Tijera',
  //   dni: '123456789'
    
  // }

  constructor ( private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',],
      tipoDni: [''],
      dni: '',
      email: ['', [Validators.required, Validators.email]]
      
    })
  }

ngOnInit():void{ 

  this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
    this.tipoDni = value
  })

  // this.formularioContacto.valueChanges.subscribe(valor =>{
   
  // })

  // this.formularioContacto.patchValue({//setesa un parte del formulario 
  //   name: this.usuarioActivo.name,
  //   lastName: this.usuarioActivo.lastName,
  //   dni: this.usuarioActivo.dni

  // })
  // this.formularioContacto.get('name')?.disable();
  // this.formularioContacto.get('lastName')?.disable();
  // this.formularioContacto.get('dni')?.disable();
}

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }

enviar(){
  console.log(this.formularioContacto)
} 
}
