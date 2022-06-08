import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskApiServiceService {

  readonly taskAPIUrl = "https://localhost:7230/api";

  constructor(private http:HttpClient) { }

  //Tasks
  getTaskList():Observable<any[]>{
    return this.http.get<any>(this.taskAPIUrl + '/tasks');
  }

  addTask(data:any){
    return this.http.post(this.taskAPIUrl + '/tasks', data);
  }

  updateTask(id:number|string, data:any){
    return this.http.put(this.taskAPIUrl + `/tasks/${id}`, data);
  }

  deleteTask(id:number|string){
    return this.http.delete(this.taskAPIUrl + `/tasks/${id}`);
  }


  //Task types
  getTaskTypesList():Observable<any[]>{
    return this.http.get<any>(this.taskAPIUrl + '/taskTypes');
  }

  addTaskTypes(data:any){
    return this.http.post(this.taskAPIUrl + '/taskTypes', data);
  }

  updateTaskTypes(id:number|string, data:any){
    return this.http.put(this.taskAPIUrl + `/taskTypes/${id}`, data);
  }

  deleteTaskTypes(id:number|string){
    return this.http.delete(this.taskAPIUrl + `/taskTypes/${id}`);
  }

  //Statuses
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.taskAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.taskAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.taskAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.taskAPIUrl + `/status/${id}`);
  }
}
