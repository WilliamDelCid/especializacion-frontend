import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/modules/service/respuesta.service';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.scss'],
})
export class ConteinerComponent implements OnInit {
  constructor(private service: RespuestaService) {}

  ngOnInit(): void {}
}
