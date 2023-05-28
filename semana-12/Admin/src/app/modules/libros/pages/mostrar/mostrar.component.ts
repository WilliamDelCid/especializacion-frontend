import { Component, OnInit } from '@angular/core';
import { ILibros } from '../../interface/ILibros.interface';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  listaLibros: ILibros[]=[];
  term:string = '';

  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Libros' }, { label: 'Mostrar', active: true }];
    this.librosService.getLibros();

  }

  get returnList(){
    return this.librosService.ListLibros;
  }

}
