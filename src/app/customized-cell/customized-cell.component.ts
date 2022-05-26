import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.sass']
})
export class CustomizedCellComponent implements OnInit, ICellRendererAngularComp {
  cellvalue:any;
  constructor() { }

  agInit(params:any) {
    if(params.value>20){
    this.cellvalue = "Above 20";
  }
  else{
    this.cellvalue = "Below 20";
  }
}
  ngOnInit(){
  }
  refresh(params:any):boolean{
    this.cellvalue= params.value;
    return true;
  }
}
