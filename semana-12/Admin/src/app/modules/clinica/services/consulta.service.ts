import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConsulta } from '../interfaces/consulta.interface';
import {Img,PdfMakeWrapper,Table,Txt} from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
PdfMakeWrapper.setFonts(pdfFonts);
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  ListConsulta:IConsulta[] = [];
  constructor(private http: HttpClient) { }

  Consultas(){
   return this.http.get<IConsulta[]>('http://localhost:8080/consulta').subscribe((resp)=>{
    this.ListConsulta = resp;
   })
  }

  generarConsultaPdf(){
    const httpOptions = {responseType: 'arraybuffer' as 'json'};
    return this.http.get<Blob>('http://localhost:8080/consulta'+`/pdf`,httpOptions);
  }

  // generarConsultaPdfE(){
  //   const httpOptions = {responseType: 'arraybuffer' as 'json'};
  //   return this.http.get<Blob>('http://localhost:8080/consulta'+`/pdfE`,httpOptions);
  // }

  generarConsultaPdf2(){
    const httpOptions = {responseType: 'arraybuffer' as 'json'};
    return this.http.get<Blob>('http://localhost:8080/consulta'+`/pdf2`,httpOptions);
  }

  generarConsultaPdf3(){
    const httpOptions = {responseType: 'arraybuffer' as 'json'};
    return this.http.get<Blob>('http://localhost:8080/medico'+`/pdfMedicoEspecialidad`,httpOptions);
  }

  generar(){
    return this.http.get('http://localhost:8080/consulta'+`/pdf`);
  }

  async generarPdfMake(titulo:string,data:IConsulta[]){
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`${titulo}`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`REPORTE DE CONSULTAS`).color('blue').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(await new Img('assets/images/users/avatar-1.jpg').height(50).width(50).absolutePosition(60,40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('CONSULTAS:').margin(15).bold().decoration('underline').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [['','Paciente','Medico','Especialidad','Fecha']]).alignment('center').widths([20,200,200,130,100]).fontSize(12).italics().bold().layout('lightHorizontalLines').end);
      for(let x of data){
        pdf.add(new Table([
          ['','','','',''],['',`${x.paciente.nombrePaciente}${x.paciente.apellidoPaciente}`,`${x.medico.nombreMedico}${x.medico.apellidoMedico}`,`${x.especialidad.nombreEspeciadad}`,`${x.fechaConsulta}`]
        ]).widths([20,200,200,130,100]).fontSize(10).layout('lightHorizontalLines').end);
      }
    pdf.add(new Txt('').margin(20).end);
    pdf.add(new Txt('F._______________').alignment('right').end);
    pdf.footer(new Txt(''+new Date()).alignment('left').italics().margin(10).end);
    pdf.pageOrientation("landscape");
    pdf.create().open();
  }


  async generarPdfMake2(titulo:string,data:IConsulta[]){
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`${titulo}`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`REPORTE DE PACIENTE`).color('blue').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(await new Img('assets/images/users/avatar-4.jpg').height(50).width(50).absolutePosition(60,40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('CONSULTAS:').margin(15).bold().decoration('underline').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [['Nombre Paciente','Apellido Paciente','identPaciente','direccionPaciente','telefonoPaciente']])
      .alignment('center') // Añadido para centrar la tabla
      .widths([130,130,130,130,130])
      .fontSize(12)
      .italics()
      .bold()
      .layout('lightHorizontalLines')
      .end);
    for(let x of data){
      pdf.add(new Table([
        ['','','','',''],
        [`${x.paciente.nombrePaciente}`,`${x.paciente.apellidoPaciente}`,`${x.paciente.identPaciente}`,`${x.paciente.direccionPaciente}`,`${x.paciente.telefonoPaciente}`]
      ])
      .widths([130,130,130,130,130])
      .fontSize(10)
      .alignment('center')
      .layout('lightHorizontalLines')
      .end);
    }
    pdf.add(new Txt('').margin(20).end);
    pdf.add(new Txt('F._______________').alignment('right').end);
    pdf.footer(new Txt(''+new Date()).alignment('left').italics().margin(10).end);
    pdf.footer(new Txt(''))

    pdf.pageOrientation("landscape");
    pdf.create().open();
  }



}
