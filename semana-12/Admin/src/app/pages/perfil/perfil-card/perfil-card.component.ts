import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from 'src/app/account/models/usuario.model';
import { UsuarioService } from 'src/app/account/services/usuario.service';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss']
})
export class PerfilCardComponent implements OnInit {
  @Input()
  perfil:Usuario;
  img:string;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {


  }

}
