import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
  editable: boolean;
}

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent implements OnInit {
  Todo: Todo[] = [];
  newTodo: string = '';

  addNew() {
    const newId =
      this.Todo.length === 0 ? 1 : this.Todo[this.Todo.length - 1].id + 1;
    const newTodo = {
      id: newId,
      content: this.newTodo.trim(),
      completed: false,
      editable: false,
    };
    this.Todo.push(newTodo);
    this.newTodo = '';
    console.log(this.Todo);
  }

  delete(item: Todo) {
    this.Todo = this.Todo.filter((t) => {
      return t !== item;
    });
  }

  disabled() {
    const arreglo = this.Todo.filter((t) => t.completed === true);
    return arreglo.length === 0;
  }

  borrarTodos() {
    this.Todo = this.Todo.filter((t) => {
      return t.completed !== true;
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
