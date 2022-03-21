import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as moment from 'moment';


@Injectable({providedIn: 'root'})


export class AuthGuard implements CanActivate{

    constructor(private router: Router,
                private auth : AuthService) {}

    canActivate(): boolean {
        const token = JSON.parse(JSON.stringify(localStorage.getItem('Token')));
        const tokenExpires = localStorage.getItem('TokenExpiry')
        if (token && token.token !== null){            
            if (moment(tokenExpires?.replace(/\"/g, "")) < moment()) {
                this.auth.getToken();
                return true;
            }else {
                return true;
            }
        }else {
            this.router.navigateByUrl('login');
            return false;
        }
    }
}