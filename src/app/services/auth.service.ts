import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
    const tokenExpires = localStorage.getItem('TokenExpiry')     
    if (moment(tokenExpires?.replace(/\"/g, "")) > moment()) {
      console.log(JSON.parse(token).token);
      console.log("Bearer Token",token.token);
      return 'Bearer ' + JSON.parse(token).token;
    } else {
        console.error("Login expired. Please login again")
        this.router.navigateByUrl("/login");
      return "Login expired. Please login again"
    }
  }


  login(data:any) {
    return this.http.post(this.base_url + '/login', data)
      .pipe(tap((res: any) => {
        //     // add encrytion here later
        const tokenExpiry = moment().add(moment.duration(24,'hours'));
        localStorage.setItem('Token', JSON.stringify(res.data.auth_token));
        localStorage.setItem('TokenExpiry',JSON.stringify(tokenExpiry));
        localStorage.setItem('User', JSON.stringify(res.data.user));
        this.router.navigateByUrl('/');
      }));
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    localStorage.removeItem('TokenExpiry')
    this.router.navigateByUrl("/login");
  }
}
