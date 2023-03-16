import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EditedTask, Task } from 'src/app/models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges{

  @Output()
  onNewTask = new Subject<Task>

  @Input()
  editingTask: Task | null = null

  @Input()
  editedTaskIndex!: number

  @Output()
  onEditTask = new Subject<EditedTask>

  // taskControl!: FormControl
  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('changes: ', changes)

    const selectedTask: Task = changes['editingTask'].currentValue
    this.form.get('description')?.setValue(selectedTask.description)
    this.form.get('priority')?.setValue(selectedTask.priority)
    this.form.get('dueDate')?.setValue(selectedTask.dueDate)

  }

  createForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>('', [Validators.required]),
      priority: this.fb.control<string>('', [Validators.required]),
      dueDate: this.fb.control<Date>(new Date, [Validators.required]),
    })
  }


  addTask() {
    const task = this.form.value as Task
    this.onNewTask.next(task)
    this.form.reset()
    console.log('task: ', task)
  } 

  editTask() {
    const editedTask = this.form.value as EditedTask
    editedTask.index = this.editedTaskIndex
    this.onEditTask.next(editedTask)
  }

}
