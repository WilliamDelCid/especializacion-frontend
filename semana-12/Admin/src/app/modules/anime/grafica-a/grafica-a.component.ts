import { Component, Input, OnInit } from '@angular/core';
import {Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica-a',
  templateUrl: './grafica-a.component.html',
  styleUrls: ['./grafica-a.component.scss']
})
export class GraficaAComponent implements OnInit {

@Input() title:string='Sin titulo';
@Input('labels') donaLabels:Label[]=['label1','label2'];
@Input('data') donadata:MultiDataSet=[[350,4150]];
@Input('colors') colors:Color[]=[{backgroundColor:['#6857E6','#F02059']}];

  constructor() { }

  ngOnInit(): void {
  }

}
