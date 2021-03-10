import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    EntryPageComponent,
    BillingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, CommonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
