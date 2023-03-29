import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practica';
  neko: any = [];

  constructor(private apiService: ApiService) {
    console.log('El componente se ha creado');
  }
  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.apiService
      .getNeko()
      .subscribe((response: any) => (this.neko = response.results[0]));
  }
}
