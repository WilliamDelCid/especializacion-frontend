import { Component, Input, OnInit } from '@angular/core';
import { busqueda } from '../../interface/busqueda.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  busqueda!: busqueda;
  constructor() {}

  ngOnInit(): void {}
}
