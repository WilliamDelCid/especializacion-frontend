import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { ServiceMascotaService } from '../../services/service-mascota.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; //array de mascotas
  parametroBuscar: string = ''; //parametro de busqueda

  mascotasP: any[] = [];
  datosM: string[] = [];
  datos: any[] = ['Usuario1', 30, true, "{'salario':200}", { a: 1 }];

  constructor(private mascotasService: ServiceMascotaService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp: IMascota[]) => {
      this.mascotas = resp;
    });
    this.listar();
    this.mostrar();
  }

  listar() {
    this.mascotasService.obtenerAll().then(async (resp: IMascota[]) => {
      // console.log(resp);
      //repaso
      let jsonArray;
      resp.forEach((obj, number) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
        // console.log(this.datosM[number]);
      });
      jsonArray = JSON.parse(this.datosM[0]);
      for (const key in jsonArray) {
        // console.log('key', jsonArray[key], key);
      }
      // console.log('Respuesta', this.mascotasP);
      // console.log('Respuesta', this.datosM);
      // console.log(jsonArray);

      const { id, raza, ...datos } = jsonArray;
      // console.log(id);

      const [obj1, obj2, obj3, ...losOtros] = resp;
      // console.log(obj1);
    });
  }

  buscar(): void {
    this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp: IMascota[]) => {
      this.mascotas = resp;
    });
  }

  mostrar() {
    this.datos.forEach((obj) => {
      // console.log('El forEach', obj);
    });

    // console.log('***********');
    for (const key in this.datos) {
      // console.log('llaves', key);
    }

    // console.log(Object.keys(this.datos));
    for (const iterator of this.datos) {
      // console.log(iterator);
    }
  }

  eliminarMascota(pet: IMascota) {
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: `Esta seguro de borrar a ${pet.raza}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar !',
    }).then((result: any) => {
      if (result.isConfirmed) {
        //actulizar el array omitiendo la mascota eliminada
        this.mascotas = this.mascotas.filter((objMascota: IMascota) => objMascota.id !== pet.id);
        //para quitar definitivo del json
        this.mascotasService.borrarMascota(pet).subscribe(
          (resp: any) => {
            this.toastr.success('El registro fue eliminado con exito!', 'Eliminado', { positionClass: 'toast-top-right' });
          },
          (err: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: err.error.msg,
            });
          }
        );
      }
    });
  }
}
