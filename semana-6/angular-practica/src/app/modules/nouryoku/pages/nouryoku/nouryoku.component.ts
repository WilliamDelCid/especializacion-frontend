import { Component, OnInit } from '@angular/core';
import { NouryokuService } from '../../services/nouryoku.service';
import { Nouryoku } from '../../interface/Nouryoku.interface';

@Component({
  selector: 'app-nouryoku',
  templateUrl: './nouryoku.component.html',
  styleUrls: ['./nouryoku.component.scss'],
})
export class NouryokuComponent implements OnInit {
  dato: Nouryoku[] = [];

  constructor(private Service: NouryokuService) {}

  ngOnInit(): void {
    this.Service.Obtener.subscribe((resp: any) => {
      const {
        record: { frases },
      } = resp;

      this.dato = frases;
    });
  }
}
