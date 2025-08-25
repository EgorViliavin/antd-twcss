import { getTodos } from "./api";

import { makeAutoObservable } from "mobx";
import { fromPromise, type IPromiseBasedObservable } from "mobx-utils";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

class TodosStore {
  todos?: IPromiseBasedObservable<ITodo[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getAllTodosRequest = () => {
    this.todos = fromPromise(getTodos());
  };

  getAllTodos = () => {
    if (this.todos?.state !== "fulfilled") {
      return [];
    }

    return this.todos.value;
  };
}
export default new TodosStore();
