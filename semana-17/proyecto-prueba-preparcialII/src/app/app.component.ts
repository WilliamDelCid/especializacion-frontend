import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-prueba-preparcialII';

  constructor(private modalService: NgbModal) { }

  openModal(content:any) {
    this.modalService.open(content, { centered: true });
  }

  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  close(){
    this.modalService.dismissAll();
  }


}
