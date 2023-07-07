import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ExportService } from '../../services/export.service';
import { IConsultaExcelTabla, IConsultaExcelTablaPaciente } from '../../interface/excel.interface';

@Component({
  selector: 'app-base64image',
  templateUrl: './base64image.component.html',
  styleUrls: ['./base64image.component.scss']
})
export class Base64imageComponent implements OnInit {
  myimage!:string;
  codigoBase64!:string;
  constructor(private exportService:ExportService) { }

  ngOnInit(): void {
  }


  onChange($event:Event){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const observable = new Observable((subscribir:Subscriber<any>)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        subscribir.next(fileReader.result);
        subscribir.complete();
      }
      fileReader.onerror = (error)=>{
        subscribir.error(error);
        subscribir.complete();
      }
    });

    observable.subscribe((resp:string)=>{
      this.myimage = resp;
      this.codigoBase64 = resp;
    });

  }

  exportExcelEndpoint(){
    this.exportService.exportExcel().subscribe((data:any)=>{
      let file = new Blob([data],{
        type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      let fileUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.download = 'paciente.xls';
      link.href = fileUrl;
      link.click();
    })
  }

  download():void{
    // this.exportService.downloadExcel();
    this.exportService.getConsultaExportExcelPaciente().subscribe((res:IConsultaExcelTablaPaciente)=>{
    this.exportService.getConsultaExportExcel().subscribe((response:IConsultaExcelTabla)=>{
      this.exportService.downloadExcel(response,res);
    })
    })
  }


  downloadPaciente():void{
    // this.exportService.downloadExcel();
    this.exportService.getConsultaExportExcelPaciente().subscribe((response:IConsultaExcelTablaPaciente)=>{
      this.exportService.downloadExcelPaciente(response);
    })
  }


}
