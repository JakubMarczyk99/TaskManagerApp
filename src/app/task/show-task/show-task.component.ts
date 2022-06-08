import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskApiServiceService } from 'src/app/task-api-service.service';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  taskList$!:Observable<any[]>;
  taskTypesList$!:Observable<any[]>;
  taskTypesList:any=[];


  taskTypesMap:Map<number, string> = new Map()

  constructor(private service:TaskApiServiceService) { }

  ngOnInit(): void {
    this.taskList$ = this.service.getTaskList();
    this.taskTypesList$ = this.service.getTaskTypesList();
    this.refreshTaskTypesMap();
  }


  modalTitle:string = '';
  activateAddEditTaskComponent:boolean = false;
  task:any;

  modalAdd(){
    this.task={
      id:0,
      status:null,
      comments:null,
      taskTypeId:null
    }
    this.modalTitle="Add new task"
    this.activateAddEditTaskComponent = true;
  }

  modalEdit(item:any){
    this.task=item;
    this.modalTitle="Edit Task";
    this.activateAddEditTaskComponent=true;
  }
  
  delete(item:any){
    if(confirm(`Are you sure you want to dele this task? ${item.id}`)){
      this.service.deleteTask(item.id).subscribe(red =>{
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display="block";
      }

      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display="none"
        }
      }, 4000);
      this.taskList$=this.service.getTaskList();
      })
    }
  }

  modalClose(){
    this.activateAddEditTaskComponent = false;
    this.taskList$ = this.service.getTaskList();
  }

  refreshTaskTypesMap(){
    this.service.getTaskTypesList().subscribe(data =>{
      this.taskTypesList = data;

      for(let i=0; i<data.length; i++)
      {
        this.taskTypesMap.set(this.taskTypesList[i].id, this.taskTypesList[i].taskName);
      }
    })
  }

}
