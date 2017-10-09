import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../../services/AuthUser.service';
import { User } from '../../models/User';
import {  Router } from '@angular/router';
import { Location }  from '@angular/common';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.html'
})

export class NavigationComponent implements OnInit{

    private user:User;

    constructor ( private auth:AuthUser,  private router:Router, private location:Location ) {}

    ngOnInit(){
        this.auth.loggedInUser.subscribe(
            (user:User) => {
                this.user  = typeof user == 'string' ? JSON.parse(user) : user
            }
        )
    }

    logout(){
        //In order to logout the current user, we clear the user item in the localstorage
        this.auth.unsetUserInLocalStorage();
        localStorage.removeItem('user');
        this.location.replaceState('/');
        this.router.navigateByUrl('login');

    }
}
