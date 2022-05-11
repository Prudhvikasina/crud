import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // loginUser() {
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //     res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/special'])
  //     },
  //     err => console.log(err)
  //   )
  // }
}
