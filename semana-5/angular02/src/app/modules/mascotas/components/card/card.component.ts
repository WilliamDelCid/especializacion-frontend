import { Component, Input, OnInit } from '@angular/core';
import { IMascota } from '../../interface/mascotas.interface';
import { API_PETS } from '../../../../constants/routes/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() obj!: IMascota;
  pets = API_PETS;
}
