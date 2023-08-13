import { Component, OnInit } from '@angular/core';
import { miConstante } from '@asignacion/constantes/constantes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  asignacion:string = miConstante;
  home:string = environment.Home;

  constructor() { }

  ngOnInit(): void {
  }

}
