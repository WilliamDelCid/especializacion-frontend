import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook,ImagePosition } from 'exceljs';
import { Observable } from 'rxjs';
import * as fs from 'file-saver';
import { LOGO } from '../constant/logo';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  url = 'http://localhost:8080';
  constructor(private http:HttpClient) { }
  private workbook!:Workbook;
  exportExcel():Observable<Blob>{
    const endpoint = `${this.url}/paciente/excel`;
    return this.http.get(endpoint,{
      responseType: 'blob'
    })
  }


  downloadExcel(){
    this.workbook = new Workbook();
    this.workbook.creator = 'cursoAngular';
    // this.workbook.addWorksheet('CONSULTAS');
    this.crearTablaConsulta();
    this.workbook.xlsx.writeBuffer().then((data)=>{
      const blob = new Blob([data]);
      fs(blob,'consulta.xlsx');
    })
  }

  private crearTablaConsulta(){
    const sheet = this.workbook.addWorksheet('CONSULTAS');
    sheet.getColumn("B").width = 5;
    sheet.getColumn("C").width = 15;
    sheet.getColumn("D").width = 12;
    sheet.getColumn("E").width = 15;
    sheet.getColumn("F").width = 40;
    sheet.getColumn("H").width = 40;
    sheet.getColumn("H").width = 40;

    sheet.columns.forEach((column)=>{
      column.alignment = {vertical: 'middle',wrapText: true}
    });

    const logoId = this.workbook.addImage({
      base64:LOGO,
      extension: 'png',
    })

    const position: ImagePosition = {
        tl:{col:1.4,row:1.2},
        ext:{width:128,height:128},
    };

    sheet.addImage(logoId,position);
    sheet.mergeCells('E5','H5');
    const titulo = sheet.getCell('E5');
    titulo.value = 'INFORMACION DE CONSULTAS MEDICAS';

    titulo.style.font = {
      bold:true,
      size:25,
      name: 'Antique Olive',
      underline: 'single',
      color:{
        argb: '660099'
      }
    };

    titulo.alignment = {
      vertical: 'middle',
      horizontal:'center',
      wrapText:false
    }

    const date = new Date();
    const fechaFormato = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
    const celdaFecha = sheet.getCell('F6');
    celdaFecha.value = fechaFormato;
    celdaFecha.font = {
      name: 'Arial Nova',
      size: 12,
      bold:true
    }
    celdaFecha.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: false
    };

    const headerR = sheet.getRow(10);
    headerR.values = [
      '',
      'N.',
      'Fecha',
      'Consultorio',
      'Especialidad',
      'Paciente',
      'Medico'
    ]

    headerR.alignment = {vertical: 'middle',wrapText: false};

    ['B','C','D','E','F','G','H'].forEach((columnKey)=>{
      sheet.getCell(`${columnKey}10`).font = {
        bold: true,
        color: {argb: 'FFFFFF'},
        size: 12,
        italic: true,
      };

      sheet.getCell(`${columnKey}10`).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: '000000'},
        bgColor: {argb:''},
      }


    })





  }






}
