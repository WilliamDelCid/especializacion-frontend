import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { API_PETS } from '../../../../constants/routes/routes';
import { ServiceMascotaService } from '../../services/service-mascota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() obj!: IMascota;
  pets = API_PETS;
  // !Para enviar la accion de eliminar al padre,utlizamos el decorador Output */
  @Output()
  eliminar = new EventEmitter<IMascota>();

  constructor(
    private mascotasService: ServiceMascotaService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  eliminarPets(obj: IMascota) {
    this.eliminar.emit(obj); // !Para enviar la aacion al componente padre, enviamos el id a eliminar
  }
}
