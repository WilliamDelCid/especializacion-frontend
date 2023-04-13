import { Component, OnInit } from '@angular/core';
import { NekoService } from '../../services/neko.service';
import { NekoInterface } from '../../interfaces/Neko.interface';

@Component({
  selector: 'app-neko',
  templateUrl: './neko.component.html',
  styleUrls: ['./neko.component.scss'],
})
export class NekoComponent implements OnInit {
  Neko: NekoInterface[] = [];
  constructor(private Service: NekoService) {
    this.Service.AllNeko.subscribe((resp: any) => {
      const { results } = resp;
      this.Neko = results;
      console.log(results);
    });
  }

  ngOnInit(): void {}
}
