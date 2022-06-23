import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { AppService } from './appService';

@Component({
  selector: 'app-customer-table',
  template: `<p>{{title}}</p>`,
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers:[CustomerDetailsComponent]
})

@Injectable()
export class CustomerTableComponent implements OnInit {

  title="Customer List"
  @Input() isSubmitted2:boolean;
  @Input() customerList2:Array<any>;

  @Input() customerStatus2:string;

  // @Output() customerName2 = new EventEmitter<string>();
  // @Output() customerEmail2= new EventEmitter<string>();
  // @Output() customerAddress2 = new EventEmitter<string>();
  // editName:string;
  // editEmail:string;
  // editAddress:string;

  tab=document.getElementById('myTable');
  rIndex;
  editThisRow(){
    
  }
  
  constructor(){ }
  
  ngOnInit() {
  }

  // these 3 functions edit the selected row by adding all values into form again
  // editThisRowName(el: { name: string; }){
  //   this.customerName2.emit(el.name);}

  // editThisRowEmail(el: { email: string; }){
  //   this.customerEmail2.emit(el.email);}

  // editThisRowAddress(el: { address: string; }){
  //   this.customerAddress2.emit(el.address);
  // }

  // editorFunction(){ 
  //   this.customerName2.emit(this.editName); 
  //   this.customerEmail2.emit(this.editEmail); 
  //   this.customerAddress2.emit(this.editAddress); 
  // }

   // this function sorts the table rows based on ascending order of name column
   ascendingTableName(){
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  // this function shows rows with status= Active
  justActive(){ 
    this.customerList2.filter( obj => { return obj.status =='Active'; } );
   }

   // this function shows rows with status= Inactive
  justInactive(){
    this.customerList2.filter( obj => { return obj.status=='Inactive' } );
  }

  
}
