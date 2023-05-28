import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';
import { barChart } from 'src/app/pages/chart/apex/data';
import { ChartType } from 'src/app/pages/chart/apex/apex.model';
import { ChartOptions } from '../../grafica-b/chartType.interface';


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

  dataApex: Partial<ChartOptions> = {
    series:[
      {
        name: "Series",
        data:[]
      }
    ],
    chart:{
      height: 350,
      type: "bar"
    },
    title:{
      text: ""
    },
    xaxis: {
      categories: []
    }
  }



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

    })
  }

  // graficar(){   //Grafica 1
  //   let grupos= {};
  // this.cards.forEach(card=>{
  //   const llave = card.type;
  //   if (!grupos[llave]){
  //     grupos[llave]=[];
  //   }
  //     grupos[llave].push(card);
  // });
  // let keyColor='backgroundColor';
  // console.log(grupos);
  //   for(const key in grupos){
  //       this.labels.push(key)
  //       this.dataGrafica.push(grupos[key].length)
  //       this.colores[0][keyColor].push(this.colorHex());
  //   }

  // }


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
  let keySeries= 'series';
  let data = 'data';
  let xaxis = 'xaxis';
  let categories = 'categories';
    for(const key in grupos){
        this.labels.push(key)
        this.dataGrafica.push(grupos[key].length)
        this.colores[0][keyColor].push(this.colorHex());

        this.dataApex[keySeries][0][data].push(grupos[key].length);
        this.dataApex[xaxis][categories].push(key);
    }
    this.dataApex.title.text = "Grafica de Anime";
    console.log("Este",this.dataApex);



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
