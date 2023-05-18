import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmpleado } from '../interface/IEmpleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  ListEmpleados!:IEmpleado[];
  constructor(private http:HttpClient) {
  console.log('Funca');

   }

  getEmpleado(){
    return this.http.get("http://localhost:8080/empleado/listar").subscribe((resp:any)=>{
      this.ListEmpleados = resp;
    });
  }

  nuevoEmpleado(empleado: IEmpleado):any{
    console.log(empleado);

    const url = `http://localhost:8080/empleado/agregar`;
    return this.http.post(url,empleado);
  }

  editarEmpleado(empleado: IEmpleado):any{
    const url = `http://localhost:8080/empleado/editar/${empleado.id}`;
    return this.http.put(url,empleado);
  }


  borrarEmpleado(empleado:IEmpleado):any{
    const url = `http://localhost:8080/empleado/eliminar/${empleado.id}`;
    return this.http.delete(url);
  }

}
