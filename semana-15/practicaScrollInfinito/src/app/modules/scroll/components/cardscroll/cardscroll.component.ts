import { Component, Input, OnInit } from '@angular/core';
import { IJson } from '../../interface/IJson.interface';

@Component({
  selector: 'app-cardscroll',
  templateUrl: './cardscroll.component.html',
  styleUrls: ['./cardscroll.component.scss']
})
export class CardscrollComponent implements OnInit {
  @Input() card!:IJson;
  constructor() {

  }

  ngOnInit(): void {
  }

}
