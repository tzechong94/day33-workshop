import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnChanges{

  @Input()
  tasks: Task[] = []

  allTasks: Task[] = []

  @Output()
  onEditTask = new Subject<number>

  @Output()
  onDeleteTask = new Subject<number>

  ngOnChanges(changes: SimpleChanges): void {
  }

  editTask(idx: number) {
    this.onEditTask.next(idx)
    console.log('editing task on index: ', idx)
  }

  deleteTask(idx:number) {
    // this.tasks.slice(idx,1)
    this.onDeleteTask.next(idx)
    console.log('deleting task on index: ', idx)
  }



}
