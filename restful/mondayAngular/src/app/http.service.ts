import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }




//DoStuffSaidFunction


    getTask() {
       console.log("Hit get task in service.ts?****&**WR@#($*@%*#%(#%@*")
       console.log("this._http.get('/tasks')")
      return this._http.get('/tasks')
      }
      deleteTasks(id) {
        console.log("Hit delete task in service.ts?****&**WR@#($*@%*#%(#%@*")
       return this._http.delete('/tasks/' + id)
       }
       postTask(input) {
        console.log("Hit get task in service.ts?****&**WR@#($*@%*#%(#%@*")
        console.log("this._http.get('/tasks')")
       return this._http.post('/tasks', input)
       }
}