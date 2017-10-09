import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthUser {
    //this Observable keeps track of the current logged user
    public loggedInUser : BehaviorSubject<any> = new BehaviorSubject(false);

    constructor() {
        //we call this function once the class is intantiated to check if the user is loggedin
        //end to get all the User's info
        this.loggedInUser.next(this.getUser());
    }

    public setUser(user) : void{
        this.loggedInUser.next(user);
    }

    public unsetUserInLocalStorage() : void{
        this.loggedInUser.next(false);
    }

    public getUser(){
        // We're getting the User's info ftom the browser local storage
        var user = localStorage.getItem('user');
        return user ? JSON.parse(user) : false;
    }

    public isLoggedIn() : boolean {
        //this utility function return's a boolean if there's data in the localStorage
        //we're using this function in the Logged.guard, in order to keep the user from
        //enter private routes if not logged
        return !!this.getUser();
    }



}
