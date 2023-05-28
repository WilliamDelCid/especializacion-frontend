import { Component, OnInit, Input } from "@angular/core";
import { ILibros } from "../../interface/ILibros.interface";
import { LibrosService } from "../../service/libros.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.scss"],
})
export class TablaComponent implements OnInit {
  @Input() ListLibros!: ILibros[];
  @Input() queryString: string;
  libro: ILibros;
  p: any;
  constructor(
    private modalService: NgbModal,
    private librosService: LibrosService
  ) {}

  ngOnInit(): void {}

  openModal(content: any, libro: ILibros) {
    this.libro = libro;
    this.modalService.open(content, { centered: true });
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
