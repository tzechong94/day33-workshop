import { Component, OnChanges, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditedTask, Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  allTasks: Task[] = [];
  
  editedTask!: Task;
  editedTaskIndex!: number;

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }


  getTasks(task: Task) {
    this.allTasks = [...this.allTasks, task]
  }

  getTasksAfterDelete(idx:number) {
    this.allTasks.splice(idx,1)
  }

  editTask(idx: number){
    this.editedTask = this.allTasks[idx]  
    this.editedTaskIndex = idx
    console.log('edited task', this.editedTask)
  }

  editedTaskMethod(editedTask: EditedTask) {
    this.allTasks[editedTask.index] = editedTask
  }

}
