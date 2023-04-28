import { Component, OnInit } from '@angular/core';
import { PhotoI } from 'src/app/modules/busqueda/Interfaces/PhotosInterface';
import { busquedas } from 'src/app/modules/busqueda/components/input/input.component';
import { PhotoService } from 'src/app/modules/busqueda/services/photo.service';

export let listaDesdeSideBar: PhotoI[] = [];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  list: string[] = [];
  lista: PhotoI[] = [];
  constructor(private photoService: PhotoService) {}

  filtrar(item: string) {
    this.photoService.PhotoFilter(item).subscribe((resp: any) => {
      this.photoService.listaFiltrada = resp;
      this.lista = resp;
      listaDesdeSideBar = resp;
      this.photoService.actualizarLista(this.lista);
      // console.log(this.photoService.listaFiltrada);
    });
  }

  ngOnInit(): void {
    this.list = busquedas;
    // console.log(this.list);

    // this.list=this.list.splice(0,9);
    // this.list.splice(0,10);
  }
}
