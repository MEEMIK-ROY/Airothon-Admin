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
    if (new Date(token.expiresIn).toISOString() > new Date().toISOString()) {
      return 'Bearer ' + token.token;
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
        localStorage.setItem('Token', JSON.stringify(res.data.auth_token));
        localStorage.setItem('User', JSON.stringify(res.data.user));
      }));
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    this.router.navigateByUrl("/login");
  }
}
