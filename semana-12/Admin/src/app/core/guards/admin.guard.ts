import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/account/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,private router:Router){}

  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if (this.usuarioService.rol === 'ADMIN_ROLE') {
      return true;
    }else{
      this.router.navigate(['/dashboard']);
      return false;
    }
  }

}