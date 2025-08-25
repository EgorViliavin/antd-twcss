import axios from "axios";

export const getTodos = async () =>
  (await axios("https://jsonplaceholder.typicode.com/todos")).data;
