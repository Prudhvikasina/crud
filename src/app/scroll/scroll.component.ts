import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.sass']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(let i=1; i<=100; i++){
      this.Prudhvi.push(i)
    }
    console.log(this.Prudhvi)
  }

  Prudhvi : any = [];
  onScroll() {
    const length = this.Prudhvi.length;
    setTimeout(() =>{
      const p : any = ' '.repeat(100).split('').map((s,i) => i + 1 + length);
      while(p.length) this.Prudhvi.push(p.shift());
    },1000);
  }

}
