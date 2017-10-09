import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInGuard } from './guards/Logged.guard';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate : [LoggedInGuard] }


];

export const routing = RouterModule.forRoot(appRoutes);