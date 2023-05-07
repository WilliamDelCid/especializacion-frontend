import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/pages/card/card.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CreditCardPipe } from './pipes/credit-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CreditCardPipe
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
