import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practica';

  constructor(private metaService: Meta) {
    this.metaService.addTag({
      property: 'og:title',
      content: 'Angular Proyect',
    });
    this.metaService.addTag({
      property: 'og:description',
      content: 'Descubre diferentes imagenes de gatos',
    });
    this.metaService.addTag({
      property: 'og:url',
      content: '',
    });
  }
}
