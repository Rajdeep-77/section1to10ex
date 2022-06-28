import { Component,  EventEmitter,  Injectable, Input, OnInit, Output } from '@angular/core';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers:[CustomerFormComponent]
})

@Injectable()
export class CustomerTableComponent implements OnInit {


  @Input() isSubmittedChild:boolean;
  @Input() customerListChild:Array<any> ;
  customerDetailArray:Array<any>;
  title:string="Customer List";
  @Output() nameOfObjectToBeEdit =  new EventEmitter<object>();
  tempVarDir:string;
  ObjToBeEdit;

  arrayOfSym:Array<boolean>=[true,false,true,false,true,false,true,false];
  constructor(){ }

  ngOnInit() {
    this.customerDetailArray=this.customerListChild ;
  }

  // This function sends the edited name to form component
  // sendObjToBeEdited(){ this.nameOfObjectToBeEdit.emit(this.ObjToBeEdit)}

  
   // this function sorts the table rows based on ascending order of name column
    sortTable(n) {
      if(n==0){
        this.arrayOfSym[0]=!this.arrayOfSym[0];
        this.arrayOfSym[1]=!this.arrayOfSym[1];
      }
      else  if(n==1){
        this.arrayOfSym[2]=!this.arrayOfSym[2];
        this.arrayOfSym[3]=!this.arrayOfSym[3];
      }
      else  if(n==2){
        this.arrayOfSym[4]=!this.arrayOfSym[4];
        this.arrayOfSym[5]=!this.arrayOfSym[5];
      }
      else  if(n==3){
        this.arrayOfSym[6]=!this.arrayOfSym[6];
        this.arrayOfSym[7]=!this.arrayOfSym[7];
      }

    var  rows, switching, tempVarX, tempVarY, shouldSwitch:boolean, switchcount:number = 0;
    switching = true;
    //Set the sorting direction to ascending:
    this.tempVarDir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = (<HTMLTableElement>document.getElementById("myTable")).rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (var i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        tempVarX = rows[i].getElementsByTagName("TD")[n];
        tempVarY = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (this.tempVarDir == "asc") {

          if (tempVarX.innerHTML.toLowerCase() > tempVarY.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (this.tempVarDir == "desc") {

          if (tempVarX.innerHTML.toLowerCase() < tempVarY.innerHTML.toLowerCase()) {
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
        if (switchcount == 0 && this.tempVarDir == "asc") {
          this.tempVarDir = "desc";
          switching = true;
        }
      }
    }
  }

  // this function shows all rows with status= Active and/or status= Inactive
  showJust(val: string){
    // this.customerDetailArray=this.customerListChild ;
    if(val=='all'){
      this.customerListChild=this.customerDetailArray ;
    }
    else if(val=='active'){
      this.customerListChild=this.customerDetailArray.filter( obj => { return obj.status == 'Active'; } ) ;
    }else if(val=='inactive'){
      this.customerListChild=this.customerDetailArray.filter( obj => { return obj.status == 'Inactive'; } );
    }else{
      this.customerListChild =this.customerDetailArray;
    }
  }

  
  
  // This function sends the edited name to form component
  onEdit(elem: object){
    // (<HTMLInputElement>document.getElementById('inputFieldName')).value=elem.name;
    // this.ObjToBeEdit=elem.id;
    // (<HTMLInputElement>document.getElementById('inputFieldEmail')).value=elem.email;
    // (<HTMLInputElement>document.getElementById('inputFieldAddress')).value=elem.address;
    // // (<HTMLInputElement>document.getElementById('inputFieldStatus')).value=elem.status;
    // if(elem.status=='Active'){
    //   (<HTMLInputElement>document.querySelector('input[id="statusActive"]:checked'));
    // }else{
    //   (<HTMLInputElement>document.querySelector('input[id="statusInactive"]:checked'));
    // }
    // (<HTMLInputElement>document.getElementById('editBtn')).style.display='block';
    // (<HTMLInputElement>document.getElementById('submitBtn')).style.display='hidden';
    // this.sendObjToBeEdited();
    this.nameOfObjectToBeEdit.emit(elem);
    (<HTMLInputElement>document.getElementById('submitBtn')).innerHTML="Edit";
    (<HTMLInputElement>document.getElementById('submitBtn')).style.backgroundColor="maroon";
    
  }


}
