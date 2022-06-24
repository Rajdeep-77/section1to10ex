import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ActivationEnd } from '@angular/router';

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
  
  customerName:string;
  customerEmail:string;
  customerAddress:string;
    
  customerStatus:string="Inactive";
  
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
  
   

  // exercise-1 functions___________________________________________

  //this function gets address from child component
  getAddress(event: string) {  this.customerAddress = event; }

  //this function sets the value of customer status
  onStatusSelected(value:string) { 
    this.customerStatus = value; 
  };

  //this function submits the details filled inside customer form
  onSubmit(){
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

  // this function toggles the table on button click
  tableDisplay(){
    this.showTable=!this.showTable;
  }

  // this function sorts the table rows based on ascending order of name column
  // ascendingTableName(){
  //   var table, rows, switching, i, x, y, shouldSwitch;
  //   table = document.getElementById("myTable");
  //   switching = true;
  //   /*Make a loop that will continue until
  //   no switching has been done:*/
  //   while (switching) {
  //     //start by saying: no switching is done:
  //     switching = false;
  //     rows = table.rows;
  //     /*Loop through all table rows (except the
  //     first, which contains table headers):*/
  //     for (i = 1; i < (rows.length - 1); i++) {
  //       //start by saying there should be no switching:
  //       shouldSwitch = false;
  //       /*Get the two elements you want to compare,
  //       one from current row and one from the next:*/
  //       x = rows[i].getElementsByTagName("TD")[0];
  //       y = rows[i + 1].getElementsByTagName("TD")[0];
  //       //check if the two rows should switch place:
  //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //         //if so, mark as a switch and break the loop:
  //         shouldSwitch = true;
  //         break;
  //       }
  //     }
  //     if (shouldSwitch) {
  //       /*If a switch has been marked, make the switch
  //       and mark that a switch has been done:*/
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //     }
  //   }
  // }

  //this functions catches name, email and address
  // getEditedName(event: string) {  
  //   this.customerName = event;
  //   // document.getElementById('inputFieldName').innerHTML=event; 
  // };
  // getEditedEmail(event: string) {  
  //   this.customerEmail = event;  
  //   // document.getElementById('inputFieldEmail').innerHTML=event; 
  // };
  // getEditedAddress(event: string) {  
  //   this.customerAddress = event;  
  // };

}  




