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
import { MenuComponent } from './menu/menu.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, CardComponent, TomingoPipe, FlashingDirective, ScrollDirective, CopyDirective, CheckoutComponent, MenuComponent, Page1Component, Page2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
