import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomizedCellComponent } from '../customized-cell/customized-cell.component';

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
   private frameworkComponents:any;

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
        width:150,
        cellRenderer: "customizedAgeCell"
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
      },
      {
        headerName: "date",
        field: "date",
        width:90,
      },
      {
        headerName: "sport",
        field: "sport",
        width:90,
      },
      {
        headerName: "gold",
        field: "gold",
        width:90,
      }
    ]
    this.frameworkComponents = {
      customizedAgeCell:CustomizedCellComponent
    }
  }
  onGridReady(params:any){
    this.gridApi=params.api;
    this.gridColumnApi= params.columnApi;
    this.http
    .get(" http://localhost:3000/Users")
    .subscribe(data=>{
      params.api.setRowData(data)
    })
    this.colDefs({

    })
    this.frameworkComponents({
      
    })
  }
}
