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

newTask: string;
  constructor() {
    this.items;
    this.newTask = '';
    this.completed = false;
   }

   addTask () {
    this.items.push; ({
      "completed" : false,
      "task" : this.newTask})
  }
  completeTask () {
    this.completed = true;;
  }
  removeTask () {
    this.items.splice;
  }
  ngOnInit() {
  }
}

  
//   

//  completeTask () {
//     this.completed = true;
//    }

//  addTask () {
//   this.items.push;
//  }

// removeTask() {
//   this.items.pop;
// }
// 
