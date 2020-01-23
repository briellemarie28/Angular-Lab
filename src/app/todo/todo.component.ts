import { Component, OnInit, Input } from '@angular/core';

export interface ITodo {
  task : string;
  completed : boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit, ITodo { 
  task: string;
  completed: boolean;
  items: ITodo[] = [
    {"task" : 'Fold Clothes',
    "completed" : false},
    {"task" : 'Put Clothes in Dresser',
    "completed" : false},
    {"task" : 'Relax',
    "completed" : false},
    {"task" : 'Try to Pet Cat',
    "completed" : true},
    {"task" : 'Pet Dog',
    "completed" : false},
    {"task" : 'Be Awesome',
    "completed" : false},
];

@Input()
newTask: string;
  constructor() {
   }
   addTask () {
    this.items.push ({
      "completed" : false,
      "task" : this.newTask})
  }
  completeTask () {
    this.completed = true;
  }

  ngOnInit() {
  }
 }
//removeTask=(array, n) =>
 {
//    const index = array.indexOf(n);
//    if (index > -1) {
//     array.splice(index, 1);
// }
//    return array;
//  }
 }
 

  

