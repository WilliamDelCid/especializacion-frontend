import { Component, OnInit } from '@angular/core';
import * as xls from 'xlsx';
import { ReadExcelService } from '../../service/read-excel.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
interface IDatos{
  nombreMedico:string;
  apellidoMedico:string,
  jvpm:string,
}

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss']
})
export class ReadExcelComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 10;
  datos!:IDatos[];
  showBoundaryLinks = true;
  constructor(private service: ReadExcelService) { }

  ngOnInit(): void {

  }


  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
  }

  leerFile(event:Event){
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    let filereader = new FileReader();
    filereader.readAsArrayBuffer(file);
    filereader.onload = ( )=>{
      let data = filereader.result;
      let Workbook = xls.read(data,{type:'array'});

      const nameSheet = Workbook.SheetNames[0];
      const hoja = Workbook.Sheets[nameSheet];
      this.datos = xls.utils.sheet_to_json(hoja,{raw:true});
      this.insertar(this.datos);
      console.log(this.datos);
    }
  }

  insertar(datos:IDatos[]){
    for (let index = 0; index < datos.length; index++) {
      const element:IDatos = datos[index];
      this.service.nuevoLibro(element).subscribe((resp)=>{
        console.log(resp);
      })
    }


  }



}
