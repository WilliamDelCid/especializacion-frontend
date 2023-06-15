import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalService } from './service/modal.service';
import { IJson } from './service/IJson.interface';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit  {
  modalSwitch!: boolean;

  title = 'pruebaModal';
  list: IJson[] = [];

  @ViewChild(PopupComponent) addview !:PopupComponent


  constructor(private service: ModalService) {
    this.getDatos();
  }

  // ngOnInit(){
  //   this.service.$modal.subscribe((valor)=>{this.modalSwitch = valor})

  // }

  getDatos() {
    return this.service.getDatos().subscribe((resp: any) => {
      this.list = resp;
    });
  }

  openModal(){
    this.modalSwitch = true;
  }

  openModalEditar(Ijson:IJson){
    console.log(Ijson);
    this.service.$json = Ijson;
    this.modalSwitch = true;
  }



  functionedit(code:any){

    this.addview.LoadEditData(code);

  }

  ngAfterViewInit(): void {

  }



}
