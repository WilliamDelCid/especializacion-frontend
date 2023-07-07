import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook,ImagePosition } from 'exceljs';
import { Observable } from 'rxjs';
import * as fs from 'file-saver';
import { LOGO } from '../constant/logo';
import { IConsultaExcelTabla, IConsultaExcelTablaPaciente, ITablaConsulta, ITablaPaciente } from '../interface/excel.interface';
import { IConsulta, Paciente, PacientePrueba } from '../../clinica/interfaces/consulta.interface';
import { map } from 'rxjs/operators';

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

 async downloadExcel(dataExcel: IConsultaExcelTabla,dataExcelPaci: IConsultaExcelTablaPaciente){
    this.workbook = new Workbook();
    this.workbook.creator = 'cursoAngular';
    await this.crearTablaConsulta(dataExcel.tablaConsulta);
    await this.crearTablaPaciente(dataExcelPaci.tablaConsulta);
    this.workbook.xlsx.writeBuffer().then((data)=>{
      const blob = new Blob([data]);
      fs(blob,'ConsultasyPacientes.xlsx');
    })
  }

  async downloadExcelPaciente(dataExcel: IConsultaExcelTablaPaciente){
    this.workbook = new Workbook();
    this.workbook.creator = 'cursoAngular';
    // this.workbook.addWorksheet('CONSULTAS');
    await this.crearTablaPaciente(dataExcel.tablaConsulta);
    this.workbook.xlsx.writeBuffer().then((data)=>{
      const blob = new Blob([data]);
      fs(blob,'consulta.xlsx');
    })
  }


  private async crearTablaConsulta(dataConsulTaTable: ITablaConsulta[]){
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
    });

      const filasInsertar = sheet.getRows(11,dataConsulTaTable.length)!;
      for(let index = 0; index < filasInsertar.length; index++){
        const itemData = dataConsulTaTable[index];
        const row = filasInsertar[index];
        row.values = [
          '',
          `${index + 1}`,
          `${itemData.fechaConsulta}`,
          `${itemData.numConsultorio}`,
          `${itemData.especialidad}`,
          `${itemData.paciente}`,
          `${itemData.medico}`
        ];

        let fila = 11+index;

        ['B','C','D','E','F','G','H'].forEach((columnKey)=>{
          sheet.getCell(`${columnKey}${fila}`).border = {
            top: {style:'double',color:{argb: '00000000'}},
            left: {style:'double',color:{argb: '00000000'}},
            bottom: {style:'double',color:{argb: '00000000'}},
            right: {style:'double',color:{argb: '00000000'}},
          }
        })


        const idImage = await this.getIdImage('../assets/images/profile-img.png');
        sheet.addImage(idImage,{
          tl: {col:7,row: row.number - 1},
          ext: {width:50,height:50},
        });

        row.height = 55;
      }


  }

  private async getIdImage(url:string):Promise<number>{
    const response = await fetch(url);
    const image = this.workbook.addImage({
      buffer: await response.arrayBuffer(),
      extension: 'png',
    })
    return image;
  }


  private async crearTablaPaciente(dataConsulTaTable: ITablaPaciente[]){
    const sheet = this.workbook.addWorksheet('PACIENTES');
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
    titulo.value = 'INFORMACION DE PACIENTE';

    titulo.style.font = {
      bold:true,
      size:25,
      name: 'Constantia',
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
      'Nombre',
      'Apellido',
      'Direccion',
      'Telefono',
      'Email',
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
        fgColor: {argb: 'D6D4E8'},
        bgColor: {argb:''},
      }
    });

      const filasInsertar = sheet.getRows(11,dataConsulTaTable.length)!;
      for(let index = 0; index < filasInsertar.length; index++){
        const itemData = dataConsulTaTable[index];
        const row = filasInsertar[index];
        row.values = [
          '',
          `${index + 1}`,
          `${itemData.nombrePaciente}`,
          `${itemData.apellidoPaciente}`,
          `${itemData.direccionPaciente}`,
          `${itemData.telefonoPaciente}`,
          `${itemData.emailPaciente}`
        ];

        let fila = 11+index;

        ['B','C','D','E','F','G','H'].forEach((columnKey)=>{
          sheet.getCell(`${columnKey}${fila}`).border = {
            top: {style:'mediumDashDotDot',color:{argb: '00000000'}},
            left: {style:'mediumDashDotDot',color:{argb: '00000000'}},
            bottom: {style:'mediumDashDotDot',color:{argb: '00000000'}},
            right: {style:'mediumDashDotDot',color:{argb: '00000000'}},
          }
        })


        const idImage = await this.getIdImage('../assets/images/profile-img.png');
        sheet.addImage(idImage,{
          tl: {col:7,row: row.number - 1},
          ext: {width:50,height:50},
        });

        row.height = 55;
      }


  }




  getConsultaExportExcel(): Observable<IConsultaExcelTabla>{
    return this.http.get<IConsulta[]>(this.url + `/consulta`).pipe(map((resp:IConsulta[])=>{
      const dataExcel: IConsultaExcelTabla = {
        tablaConsulta: this.getConsultaTabla(resp)
      };
      return dataExcel;
    }))
  }



  private getConsultaTabla(response: IConsulta[]): ITablaConsulta[]{
    return response.map((item:IConsulta)=>({
      fechaConsulta: `${item.fechaConsulta}`,
      numConsultorio: `${item.numConsultorio}`,
      especialidad: `${item.especialidad.nombreEspeciadad}`,
      paciente: `${item.paciente.nombrePaciente} ${item.paciente.apellidoPaciente}`,
      medico: `${item.medico.nombreMedico} ${item.medico.apellidoMedico}`
    }))
  }


  getConsultaExportExcelPaciente(): Observable<IConsultaExcelTablaPaciente>{
    return this.http.get<PacientePrueba[]>(this.url + `/paciente`).pipe(map((resp:PacientePrueba[])=>{
      const dataExcel: IConsultaExcelTablaPaciente = {
        tablaConsulta: this.getConsultaTablaPaciente(resp)
      };
      return dataExcel;
    }))
  }

  private getConsultaTablaPaciente(response: PacientePrueba[]): ITablaPaciente[]{
    return response.map((item:PacientePrueba)=>({
      nombrePaciente: `${item.nombrePaciente}`,
      apellidoPaciente: `${item.apellidoPaciente}`,
      direccionPaciente: `${item.direccionPaciente}`,
      telefonoPaciente: `${item.telefonoPaciente}`,
      emailPaciente: `${item.emailPaciente}`,
    }))
  }







}
