import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interface/anime.interface';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  anime: Anime = {
    anime: '',
    character: '',
    quote: '',
  };

  constructor(private ServiceAnime: AnimeService) {
    this.ServiceAnime.FraseAnime.subscribe((res: any) => {
      this.anime = res;
    });
  }

  ngOnInit(): void {}
}
