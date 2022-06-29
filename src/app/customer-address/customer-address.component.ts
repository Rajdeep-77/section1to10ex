import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    this.sendAddress();
  }

  // @Input() isSubmittedInaddress:boolean;
  @Output() customerAddress = new EventEmitter<string>();
  @Input() customerAddressChild:string;
  addressMissing:boolean=false;
  
  //this function sends address to parent component
 sendAddress(){ 
  this.customerAddress.emit(this.customerAddressChild);
  }

  //this function checks the address validity
 checkAddress(){
  if(this.customerAddressChild!='[A-Za-z0-9]+'){
    this.addressMissing=true;
  }
  else
  {
    this.addressMissing=false;
  }
}


}
