import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.sass']
})
export class CellComponent implements OnInit {
   private colDefs:any;
   private gridApi:any;
   private gridColumnApi:any;
   private searchValue:any;

  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.colDefs=[
      {
        headerName: "Name",
        field: "athlete",
        width:150
      },
      {
        headerName: "Age",
        field: "age",
        width:150
      },
      {
        headerName: "country",
        Field: "country",
        width: 120,
        lockPosition: true,
        suppressNavigable:true,
        rowDrag: true
      },
      {
        headerName: "year",
        field: "year",
        width:90,
      }
    ]
  }
  onGridReady(params:any){
    this.gridApi=params.api;
    this.gridColumnApi= params.columnApi;
    this.http
    .get(" http://localhost:3000/Users")
    .subscribe(data=>{
      params.api.setRowData(data)
    })
  }
}
