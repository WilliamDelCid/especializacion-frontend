import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  abrirMenu(): void {
    const menuHamburguesa = document.querySelector('.menu') as HTMLImageElement;
    const menumobile = document.querySelector('#menu-mobile');
    if (menumobile?.classList[1] == 'menu-mobile') {
      menuHamburguesa.src = '../../../assets/images/icon-menu.svg';
    } else {
      menuHamburguesa.src = '../../../assets/images/icon-menu-close.svg';
    }
    menumobile?.classList.toggle('menu-mobile');
    menuHamburguesa.classList.toggle('menu-x');
  }
}
