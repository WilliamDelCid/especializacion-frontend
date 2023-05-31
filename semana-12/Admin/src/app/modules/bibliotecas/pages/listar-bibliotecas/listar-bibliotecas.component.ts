import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-listar-bibliotecas',
  templateUrl: './listar-bibliotecas.component.html',
  styleUrls: ['./listar-bibliotecas.component.scss']
})
export class ListarBibliotecasComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  bibliotecas:Array<any> = [];
  // Para la paginacion
  page:number = 0;
  size:number = 10;

  constructor(private bibliotecaService:BibliotecaService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Biblioteca' }, { label: 'Listar', active: true }];
    this.mostrarBiblioteca();
  }

  mostrarBiblioteca(){
    this.bibliotecaService.bibliotecas(this.page,this.size).subscribe((resp:any)=>{
        this.bibliotecas = resp.content;
        console.log(this.bibliotecas);

    })
  }

  setSize(num:number){
    this.size = num;
    this.mostrarBiblioteca();
  }

}
