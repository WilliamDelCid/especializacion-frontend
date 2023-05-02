import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { RespuestaService } from 'src/app/modules/service/respuesta.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {
  constructor(private service: RespuestaService) {}

  ngOnInit(): void {}

  getClickHidden() {
    this.service.click = false;
  }

  getClick() {
    return this.service.click;
  }

  get getList() {
    return this.service.palabraBuscada;
  }
}
