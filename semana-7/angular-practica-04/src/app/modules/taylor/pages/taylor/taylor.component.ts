import { Component, OnInit } from '@angular/core';
import { TaylorService } from '../../services/taylor.service';
import { Taylor } from '../../interface/taylor.interface';

@Component({
  selector: 'app-taylor',
  templateUrl: './taylor.component.html',
  styleUrls: ['./taylor.component.scss'],
})
export class TaylorComponent implements OnInit {
  taytay: Taylor = {
    quote: '',
    song: '',
    album: '',
  };
  constructor(private Service: TaylorService) {
    this.Service.SongTaylor.subscribe((resp: any) => {
      this.taytay = resp;
    });
  }

  ngOnInit(): void {}
}
