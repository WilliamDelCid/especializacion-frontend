import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/modules/service/respuesta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: RespuestaService) {}

  ngOnInit(): void {}

  abrirMenu() {
    this.service.click = true;
  }
}
