import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/Task.service';
@Component({
    selector: 'list',
    templateUrl: 'list.html'
})

export class ListComponent implements OnInit {

    tasks:string[] = []; //all tasks that need to be rendered in the html go here
    newTask:string=''; //variable binded to the addTask input

    constructor(private taskService:TaskService ) {

    }

    ngOnInit() {
        //we show cached tasks saved in the local storage
        this.taskService.tasks.subscribe(
            tasks => {
                if(tasks){
                    this.tasks = tasks;
                }else{
                    this.tasks = []
                }
            }
        );
    }

    /*
        Functions to Add and remove items form the to-do list

     */


    removeTask(index){
        this.tasks.splice(index,1);
        this.taskService.setTasks(this.tasks);
    }

    AddTask() {
        if(this.newTask.length>0){
            this.tasks.push(this.newTask);
            //update the localStorage since we're caching all of the tasks so that we show the list again in the user navigates back in the page
            this.taskService.setTasks(this.tasks);
            this.newTask='';
        }

    }
}
