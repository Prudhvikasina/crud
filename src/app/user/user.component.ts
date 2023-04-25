import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  @Input('user')
  username!: string;
  @Input()
  name!: string;
  userID: number =10;
  userStatus: string ='offline';
  message :string = "";

  status = "Completed";
  disabledValue = true;

  constructor() { 

    console.log('constructor called');
  }


  rows = [

    {
    
    title: 'Google',
    
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    
    buttonText: 'Google',
    matter :'prudhvi',
    footer:'Welcome to Google '
    
    },
    
    {
    
    title: 'Apple',
    
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    
    buttonText: 'Apple',
    
    footer:'Welcome to Apple '
    
    },
    
    {
    
    title: 'Microsoft',
    
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    
    buttonText: 'Microsoft',
    
    footer:'Welcome to Microsoft'
    
    },
    
    {
    
    title: 'PeopleTech',
    
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    
    buttonText: 'PeopleTech',
    
    footer:'Welcome to PeopleTech'
    
    },
    
    
    ];
  ngOnDestroy(): void {
  console.log('OnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnChanges(element: SimpleChanges){
    console.log("ngOnchanges called");
    console.log(element);
  }
  ngOnInit(): void {
   console.log('ngOninit called');
   if(this.status = "Completed"){
    this.disabledValue = true;
   }else{
    this.disabledValue = false;
   }
  }
  onclick(){
    return this.name;
  }
  arr: any = [10];
myFun1() {
this.arr.push(12);
console.log(this.arr);
}
ngDoCheck() {
console.log('ngDoCheck');
}
ngAfterContentinit() {
  console.log('After Content init called');
}
ngAfterContentchecked() {
  console.log('After content checked called');
}

ngAfterViewinit(){
  console.log('after view init called');
}

ngAfterViewchecked() {
  console.log('after view checked called');
}
ngOndestroy() {
  console.log('destroy called');
}

getUserStatus(){
  return this.getUserStatus;
}

onSubmit(){
  
}
}

