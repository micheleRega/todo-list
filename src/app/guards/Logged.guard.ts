import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthUser } from '../services/AuthUser.service';
import {  Router } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate{
    //This guard keeps track of the current Logged user
    // If there's no User logged in the browser, prevent the access to all the protected routes
    constructor( private auth : AuthUser, private router : Router ){}

    canActivate(): boolean {
        let loggedIn = this.auth.isLoggedIn();

        if(loggedIn){
            return true;
        }else{
            this.router.navigateByUrl('login');
        }
    }
}