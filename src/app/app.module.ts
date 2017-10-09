import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { AuthUser } from './services/AuthUser.service';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {ListComponent} from './components/list/list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedInGuard } from './guards/Logged.guard';
import { TaskService } from './services/Task.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,ListComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthUser, LoggedInGuard, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
