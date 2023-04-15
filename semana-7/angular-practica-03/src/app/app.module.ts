import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from './modules/movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkeletonComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
