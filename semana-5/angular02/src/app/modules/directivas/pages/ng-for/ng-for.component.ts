import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  animesIsekai = [
    {
      titulo: 'Sword Art Online',
      estudio: 'A-1 Pictures',
      anio: 2012,
      protagonista: 'Kirito',
      genero: ['Aventura', 'Fantasía', 'Romance'],
    },
    {
      titulo: 'Re:Zero - Starting Life in Another World',
      estudio: 'White Fox',
      anio: 2016,
      protagonista: 'Subaru Natsuki',
      genero: ['Aventura', 'Fantasía', 'Drama'],
    },
    {
      titulo: 'That Time I Got Reincarnated as a Slime',
      estudio: '8bit',
      anio: 2018,
      protagonista: 'Rimuru Tempest',
      genero: ['Aventura', 'Fantasía', 'Acción'],
    },
    {
      titulo: 'Overlord',
      estudio: 'Madhouse',
      anio: 2015,
      protagonista: 'Ainz Ooal Gown',
      genero: ['Aventura', 'Fantasía', 'Acción'],
    },
    {
      titulo: 'The Rising of the Shield Hero',
      estudio: 'Kinema Citrus',
      anio: 2019,
      protagonista: 'Naofumi Iwatani',
      genero: ['Aventura', 'Fantasía', 'Acción'],
    },
    {
      titulo: "KonoSuba: God's Blessing on This Wonderful World!",
      estudio: 'Studio Deen',
      anio: 2016,
      protagonista: 'Kazuma Satou',
      genero: ['Aventura', 'Comedia', 'Fantasía'],
    },
    {
      titulo: 'No Game No Life',
      estudio: 'Madhouse',
      anio: 2014,
      protagonista: 'Sora and Shiro',
      genero: ['Aventura', 'Fantasía', 'Juegos'],
    },
    {
      titulo: 'The Saga of Tanya the Evil',
      estudio: 'NUT',
      anio: 2017,
      protagonista: 'Tanya von Degurechaff',
      genero: ['Aventura', 'Fantasía', 'Acción'],
    },
    {
      titulo: 'Drifters',
      estudio: 'Hoods Drifters Studio',
      anio: 2016,
      protagonista: 'Shimazu Toyohisa',
      genero: ['Aventura', 'Fantasía', 'Acción'],
    },
    {
      titulo: 'Log Horizon',
      estudio: 'Satelight',
      anio: 2013,
      protagonista: 'Shiroe',
      genero: ['Aventura', 'Fantasía', 'Juegos'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
