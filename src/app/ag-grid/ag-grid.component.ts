import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.sass']
})
export class AgGridComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    // this.rowData =this.http.get("");
  }
   
  @ViewChild("agGrid",{static:false}) agGrid: AgGridAngular | undefined;

  tittle = "crud";

  columnDefs = [
    { headerName: "make", field: "make", sortable:true, filter:true, checkboxSelection:true},
    { headerName: "model", field: "model", sortable:true, filter:true},
    { headerName: "price", field: "price", sortable:true, filter:true}
  ];
  
  autoGroupcolumnDef ={
    headerName:"model",
    field: "model",
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams:{
      checkbox:true
    }
  }

  rowData = [
    {make: "Toyota", model: "Celica", price:35000},
    {make: "ford", model: "mondeo", price:32000},
    {make: "Prorche", model: "Boxter", price:25000}
  ]

  getSelectedRows(){
    const selectedNodes = this.agGrid?.api.getSelectedNodes();
    const selectedData = selectedNodes?.map(node => node.data);
    const selectedDataStringPresentation = selectedData
    ?.map(node => node.make+ "" + node.model)
    .join(",");
    alert(`Selected Nodes: ${selectedDataStringPresentation}`);

  }
}
