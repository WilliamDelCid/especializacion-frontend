import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-binding',
  templateUrl: './ng-binding.component.html',
  styleUrls: ['./ng-binding.component.scss'],
})
export class NgBindingComponent implements OnInit {
  nombre: string[] = ['Kely', 'Mishel'];
  nombreFormulario: string = '';
  agregar(): void {
    if (this.nombreFormulario === '') {
      return;
    }
    this.nombre.push(this.nombreFormulario);
    this.nombreFormulario = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
