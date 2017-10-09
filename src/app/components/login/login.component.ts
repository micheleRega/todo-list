import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AuthUser } from '../../services/AuthUser.service';
import { Location }  from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit{
    constructor ( private router: Router, private auth:AuthUser,  private location:Location, private fb: FormBuilder) {}

    form: FormGroup;
    formSubmitted: boolean = false;

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.compose([ Validators.required, Validators.minLength(4) ])],
            password: ['', Validators.compose([ Validators.required, Validators.minLength(6) ])],
        });
    }

    submit() {
        if (this.form.valid) {
            this.form.value.password = CryptoJS.MD5(this.form.value.password).toString();
            var user = JSON.stringify(this.form.value);
            localStorage.setItem('user', user);
            this.auth.setUser(user);
            this.location.replaceState('/'); // clears browser history so they can't navigate with back button
            this.router.navigateByUrl('home');
        } else {
            this.formSubmitted = true;
        }
    }

}
