import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignacionResponse, IPedidos, IProducto } from '@asignacion/interface/AsignacionResponse.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private url:string="https://javapaas-139348-0.cloudclusters.net/asignacion";
  constructor(private asignacionService:HttpClient){}

  isLoading= false;

  listAsignacion:AsignacionResponse={
    content:[],
    pageable:{
      offset:0,
      paged:true,
      pageNumber:0,
      pageSize:0,
      sort:{
        empty:true,
        sorted:true,
        unsorted:true
      },
      unpaged:true
    },
    empty:true,
    first:true,
    last:true,
    number:0,
    numberOfElements:0,
    size:0,
    sort:{
      empty:true,
      sorted:true,
      unsorted:true,
    },
    totalElements:0,
    totalPages:0
  }

  listProducto:IProducto[]=[];
  listPedidos:IPedidos[]=[];

  getPages(page:number=0,size:number=10){
    this.isLoading=true;
    return this.asignacionService.get<AsignacionResponse>(this.url,{
      params:{
        page:page.toString(),
        size:size.toString()
      }
    }).subscribe((data)=>{
      this.listAsignacion=data;
      this.isLoading=false;
    })

  }

  getProducto(){
    return this.asignacionService.get<IProducto[]>(this.url+'/productos').subscribe((resp)=>{
      this.listProducto=resp;
    })
  }

  getPedidos(){
    return this.asignacionService.get<IPedidos[]>(this.url+'/pedidos').subscribe((resp)=>{
      this.listPedidos=resp;
    })
  }

  create(asignacion:FormGroup){
    return this.asignacionService.post(this.url,asignacion);
  }

  update(idAsignacion:number,asignacion:FormGroup){
    return this.asignacionService.put(this.url+`/${idAsignacion}`,asignacion);
  }

  delete(idAsignacion:number){
    console.log(idAsignacion);

    return this.asignacionService.delete(this.url+`/${idAsignacion}`);
  }


}
