import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecoveredService } from './recovered.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.css']
})
export class RecoveredComponent implements OnInit {
  public datos$:Observable<any> ;
  public recovered:any;
  constructor( public servicio:RecoveredService ) {

    this.datos$ = this.listar();
  }

  ngOnInit(): void {
  //  this.asignar();
  }

  listar(){
    return this.servicio.listar().pipe(
       map(datos => datos)
    )

  }

  asignar(){
    this.datos$ = this.listar();
  }

  delete(id:any){
    Swal.fire({
      title: 'Desea eliminar el registro?',
      text: "Este proceso no se puede regresar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.delete(id).subscribe(()=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.asignar();
        });

      }
    });



  }

  editar(datos:any){
    this.recovered = datos;
  }

}
