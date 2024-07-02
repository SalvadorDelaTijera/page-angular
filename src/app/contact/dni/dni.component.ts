import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})

export class DniComponent  implements OnChanges{

  @Input()tipoDni: string = 'DNI';
  formularioDocumento: FormGroup;

  variableNueva: string = "SAL";


  constructor ( private form: FormBuilder){
    this.formularioDocumento = this.form.group({
      // dni: '',
      dni:['']
    })
  }

// ngOnInit():void{ 

//   this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
//     this.tipoDni = value
//   })

ngOnChanges(changes: SimpleChanges): void {
  // console.log(changes?.['tipoDni'].currentValue)
  this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'SAL'
}

  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }


}
 