import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ConteinerComponent } from './modules/home/components/conteiner/conteiner.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListComponent } from './modules/home/components/list/list.component';
import { ButtonComponent } from './modules/home/components/button/button.component';
import { BusquedaComponent } from './modules/busqueda/components/busqueda/busqueda.component';
import { HistorialComponent } from './modules/historial/components/historial/historial.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConteinerComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
    ButtonComponent,
    BusquedaComponent,
    HistorialComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
