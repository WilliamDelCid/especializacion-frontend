import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../service/modal.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private modalService: NgbModal, private service: ModalService) { }

  @ViewChild('content') addview !: ElementRef


  ngOnInit(): void {
    // this.LoadDesignation();
  }


  errormessage = '';
  errorclass = '';
  saveresponse: any;
  editdata: any;
  destdata:any;

  empform = new FormGroup({

    code: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(),

  });

  SaveEmployee() {
    if (this.empform.valid) {

      console.log(this.empform.getRawValue());

      // this.service.SaveEmployee(this.empform.getRawValue()).subscribe(result => {
      //   this.saveresponse = result;

      //   if (this.saveresponse.result == 'pass') {

      //     this.errormessage = "Saved Sucessfully";
      //     this.errorclass = "sucessmessage";
      //     setTimeout(()=>{
      //       this.modalService.dismissAll();
      //     },1000)

      //   } else {
      //     this.errormessage = "Failed to save";
      //     this.errorclass = "errormessage";
      //   }
      // });

    } else {
      this.errormessage = "Please enter valid data";
      this.errorclass = "errormessage";
    }
  }


  // LoadDesignation(){
  //   this.service.GetDesignation().subscribe(result=>{
  //    this.destdata=result;
  //   });
  // }

  LoadEditData(emple: any) {

    console.log(emple.id);
    console.log(emple.nombre);

    this.open();
    // let result;
    // // this.service.GetEmployeebycode(code).subscribe(result => {
    //   console.log(result);

    //   this.editdata = result;
      this.empform.setValue({code:emple.id,name:emple.userId,email:emple.title,phone:emple.title});

    // });



  }

  Clearform(){
    this.empform.setValue({code:0,name:'',email:'',phone:''})
  }

  open() {
    this.Clearform();
    this.modalService.open(this.addview, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get name() {
    return this.empform.get("name");
  }
  get email() {
    return this.empform.get("email");
  }



}
