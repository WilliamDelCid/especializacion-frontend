import { Component, Input, OnInit } from '@angular/core';
import { NekoInterface } from '../../interfaces/Neko.interface';

@Component({
  selector: 'app-CardNeko',
  templateUrl: './CardNeko.component.html',
  styleUrls: ['./CardNeko.component.scss'],
})
export class CardNekoComponent implements OnInit {
  @Input() obj!: NekoInterface;

  constructor() {}

  ngOnInit() {}
}
