import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { ServiceMascotaService } from '../../services/service-mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ServiceMascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.service.buscarMascotaId(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
  }
  regresar() {
    this.router.navigate(['mascotas/listar']);
  }

  delete() {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.service.deleteMascota(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Se elimino el perrito',
    });
    this.regresar();
  }
}
