import { Component, OnInit} from '@angular/core';
import { ModalService } from '../service/modal.service';
import { IJson } from '../service/IJson.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  Ijson!:IJson;

  constructor(private modalSS:ModalService) { }

  ngOnInit(): void {
    console.log('ModalComponent initialized');
   this.Ijson =  this.modalSS.$json;

  }


  closeModal(){
    this.modalSS.$modal.emit(false);
  }

}
