import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent {
  opcion: number = 0;
  tipoAlerta: string = 'danger';

  mostrarAlert(op: number): void {
    this.opcion = op;
    switch (op) {
      case 1: {
        Swal.fire(
          'Buen trabajo!',
          `Esta es la opcion ${this.opcion}`,
          'success'
        );
        break;
      }
      case 2: {
        Swal.fire({
          position: 'top-end',
          title: 'Buen trabajo!',
          text: `Esta es la opcion ${this.opcion}`,
          icon: 'warning',
        });
        break;
      }
      default: {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '!Algo salio mal!',
          footer: '<a href="">Por que tengo este problema? </a>',
        });
        break;
      }
    }
  }

  get random(): number {
    return Math.trunc(Math.random() * 6 + 1);
  }

  get alerta(): string {
    let n: number = this.random;
    switch (n) {
      case 1:
        this.tipoAlerta = 'primary';
        break;
      case 2:
        this.tipoAlerta = 'success';
        break;
    }
    return this.tipoAlerta;
  }
}
