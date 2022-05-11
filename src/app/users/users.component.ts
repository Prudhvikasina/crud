import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit ,OnChanges{
  gender = 'male';
  about = '';
  userlist = ['Prudhvi'];
  name ='prudhvi name';

  allowNewuser = false;
  userCreatedStatus = 'No User is Created';

  constructor() {
    setTimeout(() => {
      this.allowNewuser = true;
    }, 3000);
   }

   changeUserCreatedStatus() {
     this.userCreatedStatus = 'User is created';
   }

  ngOnChanges(changes: SimpleChanges): void {
  console.log("OnChange callled")
  }
  ngOnInit(): void { }
  onUserAdded(event: string) {
    this.userlist.push(event);
  }
onNameChanged() {
  this.name = 'hello prudhvi';
}
OnDeleteComponet() {
  this.userlist = [];
}
}
