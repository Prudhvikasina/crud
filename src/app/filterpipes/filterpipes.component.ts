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
    Name: 'Prudhvi',
    joinedDate:new Date(25, 12, 2000)
  },
  {
    Name: 'Prudhvi',
    joinedDate:new Date(11, 6, 1999)
  },
  ];

}