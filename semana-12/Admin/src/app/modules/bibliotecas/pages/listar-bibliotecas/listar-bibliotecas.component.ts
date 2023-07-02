import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Biblioteca } from '../../models/biblioteca.model';
import { Libro } from '../../models/libro.model';
import Swal from 'sweetalert2';
import { LibroService } from '../../services/libro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-bibliotecas',
  templateUrl: './listar-bibliotecas.component.html',
  styleUrls: ['./listar-bibliotecas.component.scss']
})
export class ListarBibliotecasComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  bibliotecas:Array<any> = [];
  libros:Array<any>[] = [];


  formLibro!:FormGroup;

  //formulario
  submitted:boolean = false;
  bibliotecaSeleccionada:Biblioteca = null;
  libroSeleccionado:Libro  = null;
  ix:number;


  // Para la paginacion
  page:number = 0;
  size:number = 10;
  hideme:boolean[]=[];
  constructor(private bibliotecaService:BibliotecaService,private LibroService:LibroService,private modalService:NgbModal,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Biblioteca' }, { label: 'Listar', active: true }];
    this.mostrarBiblioteca();
  }


  initForm():void{
    this.formLibro = this.fb.group({
      nombre:['',[Validators.required]]
    })
  }


  mostrarBiblioteca(){
    this.bibliotecaService.bibliotecas(this.page,this.size).subscribe((resp:any)=>{
        this.bibliotecas = resp.content;
        console.log(this.bibliotecas);
        this.bibliotecas.forEach(x=>{
            this.hideme.push(true);
        })
    })
  }

  setSize(num:number){
    this.size = num;
    this.mostrarBiblioteca();
  }

  changeValue(i:number){
    this.hideme[i]=!this.hideme[i];
  }

  mostrarLibros(biblio:Biblioteca,indice:number){
        this.mostrarBiblioteca();
        this.changeValue(indice);
        this.libros[indice] = [];
        this.bibliotecaService.bibliotecaById(biblio).subscribe((resp)=>{
          this.libros[indice]= resp.libros;
        });
        console.log(this.libros);

  }

  guardarLibro(){
    if (this.formLibro.valid) {
      if (this.libroSeleccionado==null) {
          this.registrarLibro();
      }
    }
    this.modalService.dismissAll();
    this.submitted = true;
  }

  registrarLibro(){
    
  }

  borrar(libro:Libro,i:number){
    Swal.fire({
      title:'Estas seguri',
      showDenyButton:true,
      showCancelButton:true,
      confirmButtonText:'Borrar',
      denyButtonText:'No guardar',
    }).then((result)=>{
      if (result.isConfirmed) {
          this.LibroService.borrarLibro(libro).subscribe(resp=>{
            console.log(resp);

            if (!resp) {
                this.changeValue(i);
                Swal.fire('Borrado cone exito','','success');
            }else{
              Swal.fire('Error, hable con el administrador','','warning');

            }
          });
      }else if (result.isDenied){
        Swal.fire('Cambios no aplicados','','info');

      }
    })

  }

  paraAgregar(content:any,biblioteca:Biblioteca,i:number){
    this.initForm();
    this.submitted = false;
    this.bibliotecaSeleccionada = biblioteca;
    this.libroSeleccionado  = null;
    this.ix= i;
    this.modalService.open(content);
  }


}
