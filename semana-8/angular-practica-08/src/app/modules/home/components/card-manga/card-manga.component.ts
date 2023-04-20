import { Component, Input, OnInit } from '@angular/core';
import { Manga } from '@modules/home/interfaces/manga.interface';

@Component({
  selector: 'app-card-manga',
  templateUrl: './card-manga.component.html',
  styleUrls: ['./card-manga.component.scss'],
})
export class CardMangaComponent implements OnInit {
  @Input()
  obj!: Manga;
  constructor() {}

  ngOnInit(): void {}
}
