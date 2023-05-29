import { Component, OnInit, Input, AfterViewInit, ViewChild } from "@angular/core";
import { ILibros } from "../../interface/ILibros.interface";
import { LibrosService } from "../../service/libros.service";
import { NgbModal, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { ModalComponent } from "../modal/modal.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.scss"],
})
export class TablaComponent implements OnInit,AfterViewInit {
  @Input() ListLibros!: ILibros[];
  @Input() queryString: string;
  libro: ILibros;
  p: any;
  items: any[] = [];
  totalItems: number = 0;
  pageSize: number = 20;
  currentPage: number = 1;


  @ViewChild(ModalComponent) addview !:ModalComponent


  constructor(
    private modalService: NgbModal,
    private librosService: LibrosService,
    private config: NgbPaginationConfig,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/libros/all').subscribe((data: any) => {
      this.items = data.content;
      this.totalItems = data.totalElements;
    });
  }

  openModal(content: any, libro: ILibros) {
    this.libro = libro;
    this.modalService.open(content, { centered: true });
  }

  functionedit(code:any){

    this.addview.LoadEditData(code);

  }

  ngAfterViewInit(): void {

  }

  onPageChange() {
    const url = 'http://localhost:8080/api/libros/all' + '?page=' + (this.currentPage - 1) + '&size=' + this.pageSize;
    this.http.get(url).subscribe((data: any) => {
      this.items = data.content;
      this.totalItems = data.totalElements;
    });
  }




  borrarRegistro(libro: ILibros) {
    Swal.fire({
      title: "¿Desea borrar el registro?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.librosService.borrarLibro(libro).subscribe((resp: any) => {
          this.librosService.getLibros();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
}
