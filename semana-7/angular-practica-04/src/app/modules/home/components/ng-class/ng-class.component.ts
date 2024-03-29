import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent implements OnInit {
  opcion: string = 'Me gusta';
  icon = {
    heart: true,
  };
  constructor() {}

  cambio(): void {
    this.icon.heart = !this.icon.heart;
    this.opcion = this.icon.heart ? 'Me gusta' : 'Ya no me gusta';
  }

  ngOnInit(): void {}
}
