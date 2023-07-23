import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IDatos{
  nombreMedico:string;
  apellidoMedico:string,
  jvpm:string,
}

@Injectable({
  providedIn: 'root'
})
export class ReadExcelService {
  ListDatos!:IDatos[];


  constructor(private http:HttpClient) { }


  nuevoLibro(dato: IDatos):any{
    const url = `http://localhost:8080/medico`;
    return this.http.post(url,dato);
  }


}
