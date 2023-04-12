import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  Dato(target: HTMLElement) {
    console.log(target); // target es el elemento div con la clase "hamburger"
    target.children[0].classList.toggle('linea1');
    target.children[1].classList.toggle('linea2');
    target.children[2].classList.toggle('linea3');
    target.nextElementSibling?.classList.toggle('menu-items');
  }

  ngOnInit(): void {}
}
