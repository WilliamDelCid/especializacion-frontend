import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  IMAGE_COUDINARY,
  VIDEO_YOUTEBE,
} from '../../constants/directivas.const';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIFComponent {
  isError: boolean = true;
  msg: string = 'Resultado';
  dato: string = 'video';
  image: string = IMAGE_COUDINARY;
  resultado: boolean = true;
  //Inyectamos la clase DomSanitizer
  constructor(private sanitizer: DomSanitizer) {}
  get video() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_YOUTEBE);
  }
}
