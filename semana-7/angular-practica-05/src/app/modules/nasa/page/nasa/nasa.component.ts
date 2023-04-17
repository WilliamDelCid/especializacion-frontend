import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../service/nasa.service';
import { Nasa } from '../../interface/nasa.interface';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss'],
})
export class NasaComponent implements OnInit {
  NasaObject: Nasa[] = [];
  constructor(private Service: NasaService) {
    this.Service.getApi.subscribe((arg: any) => (this.NasaObject = arg));
  }

  ngOnInit(): void {}
}
