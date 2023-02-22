import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { TomingoPipe } from './tomingo.pipe';
import { FlashingDirective } from './flashing.directive';
import { ScrollDirective } from './scroll.directive';
import { CopyDirective } from './copy.directive';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, CardComponent, TomingoPipe, FlashingDirective, ScrollDirective, CopyDirective, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
