import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenempthy',
})
export class ImagenempthyPipe implements PipeTransform {
  transform(img: any, tipo: 'mascotas'): string {
    if (img?.includes('https')) {
      return img;
    } else {
      return 'assets/images/no-image.jpg';
    }
  }
}
