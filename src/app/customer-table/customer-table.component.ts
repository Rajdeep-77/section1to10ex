import { Component, Injectable, OnInit } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-table',
  template:`<h1>{{title}}</h1>`,
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers:[CustomerDetailsComponent]
})

@Injectable()
export class CustomerTableComponent implements OnInit {

  title="Customer List";
  constructor(
    // private cstm:CustomerDetailsComponent,
    // private cstmList:CustomerDetailsComponent,
    ){ }
  // cstmObj:object={  
  //   name:this.cstm.customerDetails.name, 
  //   email:this.cstm.customerDetails.email, 
  //   address:this.cstm.customerDetails.address, 
  //   staus:this.cstm.customerDetails.status
  // };
  
  

  ngOnInit() {
 
  }

}
