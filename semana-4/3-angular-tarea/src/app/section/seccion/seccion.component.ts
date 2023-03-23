import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss'],
})
export class SeccionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const img = document.querySelector('.imagen_body') as HTMLImageElement;
    var mediaQuery = window.matchMedia('(min-width: 992px)');

    function handleScreenChange(e: any) {
      if (e.matches) {
        img.src = '../../../assets/images/image-web-3-desktop.jpg';
      } else {
        img.src = '../../../assets/images/image-web-3-mobile.jpg';
      }
    }

    mediaQuery.addEventListener('change', handleScreenChange);
    handleScreenChange(mediaQuery);
  }
}
