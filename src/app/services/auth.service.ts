import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  base_url = environment.baseUrl;

  getHeaders() {
    let header = new HttpHeaders();
    header = header.append('Authorization', this.getToken());
    return header;
  }

  getToken():string{
    // add encrytion here later
    const token:any = JSON.parse(JSON.stringify(localStorage.getItem('Token')));
    if (new Date(token.access.expires).toISOString() > new Date().toISOString()) {
      return 'Bearer ' + token.access.token;
    } else {
        console.error("Login expired. Please login again")
      return "Login expired. Please login again"
    }
  }


  login(data:any) {
    return this.http.post(this.base_url + '/login', data)
      .pipe(tap((res: any) => {
        //     // add encrytion here later
        localStorage.setItem('Token', JSON.stringify(res.tokens));
        localStorage.setItem('User', JSON.stringify(res.user));
      }));
  }

//   logout() {
//     const token = JSON.parse(localStorage.getItem('Token'));

//     this.http.post(this.base_url + '/institute/auth/logout', {
//       refreshToken: token.refresh.token,
//     }).subscribe(res => {

//       localStorage.removeItem('Token');
//       localStorage.removeItem('User');
//     }, err => {
//       console.log(err);
//     })
//     this.router.navigateByUrl('login');
//   }
}

