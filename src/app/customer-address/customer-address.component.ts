import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Input() isSubmitted3:boolean;
  @Output() customerAddress = new EventEmitter<string>();
  @Input() customerAddress2:string;

  // emptyAddr(){
  //   if(this.isSubmitted3==true){
  //     this.customerAddress2=='';
  //   }
  // }
  
  //this function sends address to parent component
 sendAddress(){ this.customerAddress.emit(this.customerAddress2) }
  
}
