import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit,OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 
  radioBtnValue;
  ngOnInit(){
  }

  onSelectedBtnChanges(vL){
    this.radioBtnValue=vL;
    console.log(this.radioBtnValue)

  }
 

}
