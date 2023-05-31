import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Biblioteca } from "../models/biblioteca.model";

@Injectable({
  providedIn: "root",
})
export class BibliotecaService {
  url = "http://localhost:8080/api/biblioteca";
  //?page=0&size=5&order=id,asc

  constructor(private http: HttpClient) {}

  public bibliotecas(page: number, size: number): Observable<any> {
    return this.http.get<any>(this.url + "?" + `page=${page}&size=${size}`);
  }


  public bibliotecaById(biblioteca:Biblioteca):Observable<any>{
    return this.http.get<any>(this.url+'/'+`${biblioteca.id}`)
  }

}
