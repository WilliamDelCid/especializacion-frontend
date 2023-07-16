import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportarService {

  url = 'http://localhost:8080/file'
  constructor(private http:HttpClient) { }

  upload(file:File):Observable<Object>{
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(`${this.url}/upload`,formData);
  }

  multiples(myFiles:string[]){
    const formData = new FormData();
    for(var i = 0;i<myFiles.length;i++){
      formData.append('file',myFiles[i]);
    }
    return this.http.post(`${this.url}/multiple`,formData);
  }




}
