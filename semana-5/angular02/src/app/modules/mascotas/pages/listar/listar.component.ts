import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { ServiceMascotaService } from '../../services/service-mascota.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; //array de mascotas
  parametroBuscar: string = ''; //parametro de busqueda

  constructor(private mascotasService: ServiceMascotaService) {}

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp: IMascota[]) => {
      this.mascotas = resp;
    });
  }

  buscar(): void {
    this.mascotasService
      .buscarMascota(this.parametroBuscar)
      .subscribe((resp: IMascota[]) => {
        this.mascotas = resp;
      });
  }
}
