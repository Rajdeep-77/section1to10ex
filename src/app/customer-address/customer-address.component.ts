import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerCentralServService } from '../customer-central-serv.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  constructor(private customerCentral:CustomerCentralServService) { }
  ngOnInit(){
    // this.sendAddress();
  }

  customerAddressChild:string;
  subsc:Subscription= this.customerCentral.formAddress.subscribe(add => { this.customerAddressChild=add; });
  subsc2:Subscription= this.customerCentral.emptyAddress.subscribe(add => { this.customerAddressChild=add; });
  // customerAddressChild:string=this.customerCentral.getAddressData();
  // @Input() customerAddressChild:string;
  // @Output() customerAddress = new EventEmitter<string>();
  
  addressMissing:boolean=false;
  
  //this function sends address to parent component
 sendAddress(){ 
  this.customerCentral.formAddress.emit(this.customerAddressChild);
  }

}
