import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuarioService } from 'src/app/account/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,private router:Router){}

  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if (this.usuarioService.rol === 'ADMIN_ROLE') {
      console.log('Desde el admin if ');

      return true;
    }else{
      this.router.navigate(['/dashboard']);
      console.log('Desde el admin else');

      return false;
    }
  }

}
