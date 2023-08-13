import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  FormGroup,FormBuilder, Validators }   from '@angular/forms';
import Swal from 'sweetalert2';
import { AsignacionService } from '@asignacion/service/asignacion.service';
import { IAsignacion } from '@asignacion/interface/AsignacionResponse.interface';
import {Img, PdfMakeWrapper,Table,Txt} from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
PdfMakeWrapper.setFonts(pdfFonts);

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.scss'],
})
export class AsignacionComponent implements OnInit {

  formularioGeneral!: FormGroup;
  currentPage:number=1;
  constructor(private modalService: NgbModal, private fb: FormBuilder,private asignacionServive:AsignacionService) {
    this.formularioGeneral= this.iniciarFormulario();
  }

  ngOnInit(): void {
    this.asignacionServive.getPages();
    this.asignacionServive.getProducto();
    this.asignacionServive.getPedidos();
  }


// ! PDF



  async generatePDF(titulo:string,data:IAsignacion[]) {
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`${titulo}`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`Reporte de asignacion de Producto`).color('blue').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(await new Img('assets/logo.jpg').height(80).width(100).absolutePosition(60,40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('Asignacion de Producto:').margin(15).bold().decoration('underline').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [['#','Producto','Pedido','Cantidad','Fecha de Pedido']]).alignment('center').widths([20,200,200,130,100]).fontSize(12).italics().bold().layout('lightHorizontalLines').end);
      for(let x of data){
        var fechaISO = x.pedidos.fecha_pedido;
        var fecha = new Date(fechaISO);
        var fechaFormateada = this.formatearFecha(fecha);
        pdf.add(new Table([
          ['','','','',''],[`${x.idAsignacionProducto}`,`${x.producto.nombreProducto}`,`${x.pedidos.idPedido}`,`${x.cantidad}`,`${fechaFormateada}`]
        ]).widths([20,200,200,130,100]).alignment('center').fontSize(10).layout('lightHorizontalLines').end);
      }
    pdf.add(new Txt('').margin(20).end);
    pdf.footer(new Txt(''+this.formatearFecha(new Date())).alignment('left').italics().margin(10).end);
    pdf.pageOrientation("landscape");
    pdf.create().open();
  }


  formatearFecha(fecha: Date): string {
    const dia: number = fecha.getDate();
    const mes: number = fecha.getMonth() + 1;
    const anio: number = fecha.getFullYear();

    const diaFormateado: string = dia < 10 ? '0' + dia : '' + dia;
    const mesFormateado: string = mes < 10 ? '0' + mes : '' + mes;

    return diaFormateado + '/' + mesFormateado + '/' + anio;
  }


// ! PDF

// routes.constants.ts

// export const HOME_ROUTE = 'home';
// { path: HOME_ROUTE, component: HomeComponent },
// html
//     <a [routerLink]="['/' + homeRoute]">Go to Home</a>
// homeRoute = HOME_ROUTE;




// ! CRUD
  openModal(content: any,data?:IAsignacion) {
    Swal.fire({
      title:'',
      text:'Por favor espere',
      allowOutsideClick:false,
      focusDeny:true,
      inputAutoFocus:true,
      focusCancel:true,
      returnFocus:false,
      showCancelButton:false,
    })
    if (data) {
    this.formularioGeneral.setValue(
     {
      cantidad:data.cantidad,
      idAsignacionProducto:data.idAsignacionProducto,
      pedidos:data.pedidos.idPedido,
      producto:data.producto.idProducto
     }
    )
     Swal.close();
    this.modalService.open(content, { centered: true ,size:'lg'});

    }else{
      this.formularioGeneral.reset();
     Swal.close();

    this.modalService.open(content, { centered: true ,size:'lg'});

    }
  }

  private iniciarFormulario() {
    return this.fb.group({
      idAsignacionProducto:[''],
      cantidad: ['', [Validators.required]],
      pedidos: [null, [Validators.required]],
      producto: [null, [Validators.required]]
    })
  }


  guardar() {
    if (this.formularioGeneral.valid) {
      if (this.formularioGeneral.value.idAsignacionProducto) {
        this.asignacionServive.update(this.formularioGeneral.get('idAsignacionProducto')?.value,this.formularioGeneral.value).subscribe((resp)=>{
          this.asignacionServive.getPages();
          this.modalService.dismissAll();
          this.currentPage=1;
          Swal.fire({
            icon: 'success',
            title: 'Asignación editado correctamente',
          })
        })

      }else{
        this.asignacionServive.create(this.formularioGeneral.value).subscribe((resp)=>{
          this.asignacionServive.getPages();
          this.modalService.dismissAll();
          this.currentPage=1;
          Swal.fire({
            icon: 'success',
            title: 'Asignación agregada correctamente',
          })
        })
      }
    }

    return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched())
  }

  get listAsignacion(){
    return this.asignacionServive.listAsignacion;
  }

  get listProductos(){
    return this.asignacionServive.listProducto;
  }

  get listPedidos(){
    return this.asignacionServive.listPedidos;
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  close(){
    this.formularioGeneral.reset();
    this.modalService.dismissAll();
  }

  pageChange(page:number){
    this.asignacionServive.getPages(page-1);
  }

  delete(data:IAsignacion){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.asignacionServive.delete(data.idAsignacionProducto ?? 0).subscribe((resp)=>{
          this.asignacionServive.getPages();
          this.modalService.dismissAll();
          this.currentPage=1;

        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // ! CRUD




}
