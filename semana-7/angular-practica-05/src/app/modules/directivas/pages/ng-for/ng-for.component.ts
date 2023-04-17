import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interface/persona.interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  Personas: Persona[] = [
    {
      nombre: 'William',
      edad: 13,
      genero: 'Masculino',
    },
    {
      nombre: 'Kely',
      edad: 12,
      genero: 'Femenina',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.Personas);
  }

  genero(persona: string): string {
    if (persona === 'Masculino') {
      return 'male';
    } else {
      return 'female';
    }
  }

  // borrar(i: number) {
  //   this.Personas.splice(i, 1);
  // }

  borrar(i: number) {
    this.Personas = this.Personas.filter((value, index, array) => index !== i);
  }
}
