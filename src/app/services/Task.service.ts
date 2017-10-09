import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TaskService {
    //We're caching in the local storage All the tasks we add in the to-do list
    public tasks:BehaviorSubject<any> = new BehaviorSubject(false);

    constructor() {
        //with this variable we repeatedly update the tasks in the to-do list
        this.tasks.next(this.getTasks());
    }

    public setTasks(tasks):void {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.tasks.next(tasks);
    }

    public getTasks() {
        var tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : false;
    }



}