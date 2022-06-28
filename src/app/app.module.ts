import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { FormsModule } from '@angular/forms';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { AntiIfDirective } from './anti-if.directive';
import { Task3Component } from './task3/task3.component';
import { HoverDirectiveDirective } from './hover-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerAddressComponent,
    CustomerTableComponent,
    AntiIfDirective,
    Task3Component,
    HoverDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
