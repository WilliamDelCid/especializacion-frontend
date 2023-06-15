import { EventEmitter,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IJson } from './IJson.interface';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private httpClient:HttpClient ) {

   }

   $modal = new EventEmitter<any>();
   $json!:IJson;

   getDatos(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
   }

   GetEmployeebycode(code: any) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/'+ code);
  }
}

