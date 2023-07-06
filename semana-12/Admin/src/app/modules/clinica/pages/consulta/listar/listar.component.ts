import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IConsulta } from '../../../interfaces/consulta.interface';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  pdfSrc = "";
  pdfSrc2 = "";
allConsultas: IConsulta[];
  constructor(private clinicaService:ConsultaService) {
   }

  ngOnInit(): void {
    this.clinicaService.Consultas();
    this.generarPdf();
    this.generarPdf2();
  }

  get ListConsultita(){
    return this.clinicaService.ListConsulta;
  }

  descargarPdf(){
    this.clinicaService.generarConsultaPdf().subscribe((data:Blob)=>{
      const blob = new Blob([data],{type:'application/pdf'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'consultaMedicaPorEspecialidad.pdf';
      link.click();
    })
  }

  generarPdf(){
    this.clinicaService.generarConsultaPdf2().subscribe((resp:Blob)=>{
      const file = new Blob([resp],{type:'application/pdf'});
      const fileUrl = URL.createObjectURL(file);
      this.pdfSrc = fileUrl;
    })
  }

  generarPdf2(){
    this.clinicaService.generarConsultaPdf3().subscribe((resp:Blob)=>{
      const file = new Blob([resp],{type:'application/pdf'});
      const fileUrl = URL.createObjectURL(file);
      this.pdfSrc2 = fileUrl;
    })
  }

  generarConsultaPdf(){
    this.clinicaService.generarConsultaPdf().subscribe((resp:Blob)=>{
      const file = new Blob([resp],{type:'application/pdf'});
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl);
    })
  }

  crearPdf(){

    const data = document.getElementById('htmlData');
    const doc = new jsPDF('p','pt','a4');
    const content =
    `
    PACIENTES Y MEDICOS CONSULTADOS
    --------------------------------------------------------------------------
    `;
    const options = {
      background: 'white',
      scale:3
    };

    html2canvas(data,options).then((resp)=>{
      const img = resp.toDataURL('image/PNG');
      const bufferX = 60;
      const bufferY = 60;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth ) / imgProps.width;
      doc.addImage(img,'PNG',bufferX,bufferY,pdfWidth,pdfHeight,'','FAST');
      return doc;
    }).then((docResult)=>{
      docResult.text(content,10,10);
      docResult.save(`${new Date().toISOString()}_consultasG.pdf`);
    })


  }

  pdfMake(){
    this.clinicaService.generarPdfMake('PDFMAKE ---- ANGULAR',this.ListConsultita);
  }


  pdfMake2(){
    this.clinicaService.generarPdfMake2('',this.ListConsultita);
  }


}
