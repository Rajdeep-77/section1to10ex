import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { FormsModule } from '@angular/forms';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerAddressComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
