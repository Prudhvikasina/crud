import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipes',
  templateUrl: './filterpipes.component.html',
  styleUrls: ['./filterpipes.component.sass']
})
export class FilterpipesComponent implements OnInit {

  filteredString: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  Users = [{
    Name: 'Prudhvi',
    joinedDate:new Date(15, 2, 2016)
  },
  {
    Name: 'Naidu',
    joinedDate:new Date(18, 12, 2022)
  },
  {
    Name: 'Charan',
    joinedDate:new Date(12, 8, 2000)
  },
  ];


}


