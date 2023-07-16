import { Component, OnInit } from '@angular/core';
import { ExportarService } from '../../services/exportar.service';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.scss']
})
export class ExportarComponent implements OnInit {
  file:File
  myFiles:string[]=[];

  constructor(private serviceExport:ExportarService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:Event){
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  subir(){
    this.serviceExport.upload(this.file).subscribe((resp)=>{
      console.log('respuesta',resp);
    })
  }

  onFileChange(event:any){
    for(let i = 0;i<event.target.files.length;i++){
      this.myFiles.push(event.target.files[i]);
    }
  }

  multiple(){
    this.serviceExport.multiples(this.myFiles).subscribe((resp)=>{
      console.log('resp mult',resp);

    })
  }





}
