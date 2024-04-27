export type TodoListItemsType = {
  type: string;
  name: string;
  isSelected?: boolean;
  timerId?: NodeJS.Timeout;
};
