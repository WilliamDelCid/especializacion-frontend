import { EventEmitter,Injectable } from '@angular/core';
import { ILibros } from '../interface/ILibros.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  ListLibros!:ILibros[];


  constructor(private http:HttpClient) { }


  getLibros(){
    return this.http.get("http://localhost:8080/api/libros/all").subscribe((resp:any)=>{
      this.ListLibros = resp.content;
    });
  }


 getBiblioteca(){
  return this.http.get('http://localhost:8080/api/biblioteca/all');
 }


  nuevoLibro(libro: ILibros):any{
    console.log(libro);
    const url = `http://localhost:8080/api/libros`;
    return this.http.post(url,libro);
  }

  editarLibro(libro: ILibros):any{
    const url = `http://localhost:8080/api/libros/${libro.id}`;
    return this.http.put(url,libro);
  }


  borrarLibro(libro: ILibros):any{
    const url = `http://localhost:8080/api/libros/${libro.id}`;
    return this.http.delete(url);
  }


}
