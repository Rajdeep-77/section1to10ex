import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
 
})
export class CustomerDetailsComponent implements OnInit{

  constructor() { }
  ngOnInit() {
    
  }


  // exercise-1 variables___________________________________________
  
  customerName:string='';
  customerEmail:string='';
  customerAddress:string='';
    // receiveAddress($event: string) {  this.customerAddress = $event;  };
  customerStatus:string="Inactive";
    onStatusSelected(value:string) {this.customerStatus = value;};
  customerDetails:{ name:string, email:string, address:string, status:string } ={
    name: '',
    email: '',
    address: '',
    status:''
  };
  customerList:Array<object>=[];

  isSubmitted:boolean=true;
  inputMissing=true;
  showTable:boolean=false;
  tableDisplay(){
    this.showTable=!this.showTable;
  }
   

  // exercise-1 functions___________________________________________
  onSubmit(){
    // console.log(this.customerName)
    // console.log(this.customerEmail)
    // console.log(this.customerAddress)
    // console.log(this.customerStatus)
    if(this.customerName!='' && this.customerEmail!='' && this.customerAddress!='' ){
    this.inputMissing=false;
    this.isSubmitted=false;
    this.customerDetails={name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:this.customerStatus};
    this.customerList.push(this.customerDetails);
    }
    if(this.customerName=='' || this.customerEmail=='' || this.customerAddress==''){
      this.inputMissing=true;
    }
  }

  ascendingTableName(){
    this.customerList.filter(()=>{
      
    })
  }

}  




