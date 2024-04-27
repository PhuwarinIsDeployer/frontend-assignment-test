import { TodoListItemsType } from "@/app/types/todo-list-item/todo-list-item";

export type TodoColumnType = {
  todoItems: TodoListItemsType[];
  todoType: string;
  isAddValue: boolean;
  handleActionTodoList: (
    name: string,
    type: string,
    isAddValue: boolean
  ) => void;
  backgroundColor: string;
};
