import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RecoveredService } from '../recovered.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() recovered:any = null;
  @Output() reporteador = new EventEmitter();

  public formulario : FormGroup;

  constructor(private fb:FormBuilder,private service:RecoveredService) {
    this.formulario = this.fb.group({
      id:'',
      name:['',Validators.required],
      age:['',Validators.required]
    });
  }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    this.formulario.patchValue(this.recovered);
  }


  guardar(){
    let modelo =this.formulario.value ;

    if(modelo?.id==''){
      delete modelo['id'];

    }
    return this.service.guardar(modelo).subscribe((dato:any)=>{
      this.reporteador.emit(dato);
      this.formulario.reset();
    }) ;

  }


}
