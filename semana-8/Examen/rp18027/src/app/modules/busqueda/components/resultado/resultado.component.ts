import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoI } from '../../Interfaces/PhotosInterface';
import { listaDesdeSideBar } from 'src/app/modules/shared/components/side-bar/side-bar.component';

// export const resultados: PhotoI[]=[];

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {
  @Input() lista!: PhotoI[];

  list: PhotoI[] = [];
  listaData: PhotoI[] = [];
  constructor(private photoService: PhotoService) {
    this.photoService.listaFiltrada;
  }

  ngOnInit(): void {
    // this.photoService.getPhotos().subscribe((resp:any)=>{
    //   this.list=resp;
    // });
    // this.list=this.photoService.listaFiltrada;
    this.listaData = listaDesdeSideBar;
    console.log(this.listaData);

    this.photoService.listaActualizada$.subscribe(
      (listaActualizada: PhotoI[]) => {
        this.lista = listaActualizada;
      }
    );
  }
}
