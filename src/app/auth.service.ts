// import { HttpClient } from "@angular/common/http";

// export class AuthService {

//     private _loginUrl = "http://localhost:4200/login";
//     private _contactusUrl = "http://localhost:4200/contactus";

//     constructor(private http: HttpClient) { }

//     loginUser(user) {
//         return this.http.post<any>(this._loginUrl, user)
//     }

//     contactusUser(user) {
//         return this.http.post<any>(this._contactusUrl, user)
//     }

//     loggedIn() {
//         return !!localStorage.getItem('token')
//     }
// }