import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks: any;
  newtask: any;

  constructor(private _httpService: HttpService) {
  }

    ngOnInit() {
      this.btnGetTasks()
      this.newtask = {title: "", description: ""}
  

  }
    btnGetTasks() {

      let Tasks = this._httpService.getTask();
      Tasks.subscribe(data => {
        this.tasks = data;
        // console.log(this.tasks[0])
        console.log(data)
        console.log("***********1**************")
      });
    }

    btnDeleteTasks(id) {

      let Tasks = this._httpService.deleteTasks(id);
      Tasks.subscribe(data => {
        this.tasks = data;
        // console.log(this.tasks[0])
        console.log(data)
        console.log("************2*************")
        this.btnGetTasks();
      });
    }

    postAddTasks() {

      let Tasks = this._httpService.postTask(this.newtask);
      Tasks.subscribe(data => {
        this.btnGetTasks();
        this.newtask = {title: "", description: ""}
        console.log(data)
        console.log("************3*************")
      });
    }

}

//saidFunction (stuff coming back)

