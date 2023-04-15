import { Component, OnInit } from '@angular/core';
import { Neko } from '../../interface/neko.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  verdadero: boolean = false;

  obj: Neko = {
    artist_href: '',
  };

  constructor(private Service: MovieService) {
    this.Service.Movie.subscribe((resp: any) => {
      const { results } = resp;
      if (results && results.length > 0) {
        this.obj = results[0];
      }
    });
  }

  ngOnInit(): void {}
}
