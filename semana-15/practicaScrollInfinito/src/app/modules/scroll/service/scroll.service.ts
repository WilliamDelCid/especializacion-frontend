import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJson } from '../interface/IJson.interface';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private http:HttpClient) { }

  url="https://jsonplaceholder.typicode.com/photos?_limit=30";


  Photos(_page:number){
    const params: any={
      _page
    }
    return this.http.get<IJson[]>(this.url,{params});
  }



}
