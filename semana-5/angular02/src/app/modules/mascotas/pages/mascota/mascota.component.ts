import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { ServiceMascotaService } from '../../services/service-mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { API_PETS } from 'src/app/constants/routes/routes';
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;
  constructor(private activeRoute: ActivatedRoute, private service: ServiceMascotaService, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.params.pipe(switchMap(({ id }) => this.service.buscarMascotaId(id))).subscribe((resp: IMascota) => {
      this.mascota = resp;
    });

    // console.log(this.service.obtenerById('1'));
    this.getMascota();
    this.getMascostaPromise();
  }

  getMascota(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.buscarMascotaId(id || '').subscribe((resp: any) => console.log(resp));
  }

  getMascostaPromise(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.obtenerById(id || '').then(async (resp: any) => {
      // this.mascota = resp;
      // console.log(resp);
    });
  }

  regresar() {
    this.router.navigate([API_PETS + '/listar']);
  }

  delete() {
    this.activeRoute.params.pipe(switchMap(({ id }) => this.service.deleteMascota(id))).subscribe((resp: IMascota) => {
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
