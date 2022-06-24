import { Component,  EventEmitter,  Injectable, Input, OnInit, Output } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers:[CustomerDetailsComponent]
})

@Injectable()
export class CustomerTableComponent implements OnInit {

  
  @Input() isSubmittedChild:boolean;
  @Input() customerListChild:Array<any>;
  @Input() customerDetailArray:Array<any>;
  @Input() customerStatusChild:string;
  // row;
  constructor(){ }
  
  ngOnInit() {
  }

   // this function sorts the table rows based on ascending order of name column
    sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
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
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
    
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  // this function shows all rows with status= Active as well as status= Inactive
  showAll(){
    this.customerListChild=this.customerDetailArray ;
  }
  
  // this function shows rows with status= Active
  justActive(){ 
    this.customerListChild=this.customerDetailArray.filter( obj => { return obj.status == 'Active'; } ) ;  
  }

   // this function shows rows with status= Inactive
  justInactive(){
    this.customerListChild=this.customerDetailArray.filter( obj => { return obj.status == 'Inactive'; } );
  }

  // This function fills the form again with the data of selected row
  onEdit(elem){
    (<HTMLInputElement>document.getElementById('inputFieldName')).value=elem.name;
    (<HTMLInputElement>document.getElementById('inputFieldEmail')).value=elem.email;
    (<HTMLInputElement>document.getElementById('inputFieldAddress')).value=elem.address;
    (<HTMLInputElement>document.getElementById('inputFieldStatus')).value=elem.status;
  }
 

}
