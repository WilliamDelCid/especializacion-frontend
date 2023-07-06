import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64imageComponent } from './pages/base64image/base64image.component';

const routes: Routes = [{
  path:'',component:Base64imageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportExcelRoutingModule { }
