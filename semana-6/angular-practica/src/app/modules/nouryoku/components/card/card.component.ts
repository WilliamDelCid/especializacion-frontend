import { Component, OnInit, Input } from '@angular/core';
import { Nouryoku } from '../../interface/Nouryoku.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() obj!: Nouryoku;

  constructor() {}

  ngOnInit() {
    console.log(this.obj);
  }
}
