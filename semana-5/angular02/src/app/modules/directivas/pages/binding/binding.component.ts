import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  //cambiamos la propiedad disabled del input y del buton
  habilitar: boolean = false;
  //cambiamos la propiedad class al button
  clase: string = 'btn btn-danger';
  //para cambiar la propiedad placeholder
  txtPlaceHolder: string = 'William Del Cid';
  //para cambiar la propiedad del tipo de input
  txtType: string = 'radio';
  //cambiar la propiedad checked
  isChecked: boolean = true;

  cambiarPropiedad() {
    this.habilitar = !this.habilitar;
    this.txtPlaceHolder = 'Deshabilitado';
    this.txtType = 'checkbox';
    this.isChecked = !this.isChecked;
    this.clase = 'btn btn-primary';
  }
}
