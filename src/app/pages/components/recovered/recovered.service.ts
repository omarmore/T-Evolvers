import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SPRINT } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class RecoveredService {


  constructor(public http:HttpClient ) {

  }

  listar(){
    let url = URL_SPRINT+'/recovery';
    return this.http.get(url);
  }

  delete(id:any){
    let url = URL_SPRINT+'/recovery/'+id;
    return this.http.delete(url);
  }

  guardar(modelo:any){
    let url = URL_SPRINT+'/recovery';
    return this.http.post(url,modelo);
  }

}
