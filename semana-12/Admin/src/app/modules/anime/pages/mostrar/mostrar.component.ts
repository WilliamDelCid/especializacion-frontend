import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';

import { barChart } from 'src/app/pages/chart/apex/data';
import { ChartType } from 'src/app/pages/chart/apex/apex.model';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  barChart: ChartType;

  cards: IAnime[] = [];
  offset = 0;
  term:string = '';

  labels:string[]=[];
  dataGrafica=[];
  colores=[{backgroundColor:[]}];
  title:string='Casa';
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Anime' }, { label: 'Mostrar', active: true }];
  this.getCards();
  }

  getCards(nombreCard: string | null = null) {
    this.animeService.getCardsAnimeForma2(nombreCard, this.offset).subscribe((res) => {
      console.log(res)
      this.cards = [...this.cards, ...res];
      this.graficar();
      this.barChart = barChart;

    })
  }

  graficar(){
    let grupos= {};
  this.cards.forEach(card=>{
    const llave = card.type;
    if (!grupos[llave]){
      grupos[llave]=[];
    }
      grupos[llave].push(card);
  });
  let keyColor='backgroundColor';
  console.log(grupos);
    for(const key in grupos){
        this.labels.push(key)
        this.dataGrafica.push(grupos[key].length)
        this.colores[0][keyColor].push(this.colorHex());
    }

  }


  generarLetra(){
    let letra=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let numero = (Math.random()*15).toFixed(0);
    return letra[numero];
  }
  colorHex(){
    let color = "";
    for(let i=0;i<6;i++){
      color = color+this.generarLetra();
    }
    return "#"+color;
  }


}
