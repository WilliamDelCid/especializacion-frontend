import { Component, OnInit } from '@angular/core';
import { IJson } from '../../interface/IJson.interface';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  resultado:IJson[]=[];
  limit = 1;
  loading:boolean=false;
  constructor(private scrollService:ScrollService) { }

  ngOnInit(): void {
    this.resultado = [];
    this.buscarPhotos();
  }

  onScroll(){
    this.limit += 1;
    this.loading = true;
    setTimeout(() => {
      this.buscarPhotos();
      this.loading = false;
    }, 4000);
  }

  buscarPhotos(){
    this.scrollService.Photos(this.limit).subscribe((resp)=>{
      this.resultado = [...this.resultado,...resp];
    })
  }

}
