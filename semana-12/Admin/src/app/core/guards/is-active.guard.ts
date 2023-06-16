import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/account/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class IsActiveGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,private router:Router){}


  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if (this.usuarioService.token=='') {
      console.log(this.usuarioService.token);
      console.log('if');
      return true;
    }else{
      this.router.navigate(['/dashboard']);
      console.log('else');

      return false;
    }
  }

}
