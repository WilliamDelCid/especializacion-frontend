import { Component, OnInit } from '@angular/core';
import { IMAGE } from 'src/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagen: string = IMAGE;
  constructor() {}

  ngOnInit(): void {}
}
