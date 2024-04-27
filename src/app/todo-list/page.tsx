"use client";
import React, { useState } from "react";
import { todoListItems } from "../mock-data/fruit-and-vegetable";
import { TodoListItemsType } from "../types/todo-list-item/todo-list-item";
import TodoColumn from "../components/todoColumn/TodoColumn";

export default function AutoDeleteTodoList() {
  const [todoItems, setTodoItems] =
    useState<TodoListItemsType[]>(todoListItems);
  const [timerIds, setTimerIds] = useState<TodoListItemsType[]>([]);

  const handleActionTodoList = (
    name: string,
    type: string,
    isAddList: boolean
  ) => {
    const filterTodoList = todoItems.filter((todo) => todo.name !== name);

    setTodoItems([
      ...filterTodoList,
      { type: type, name: name, isSelected: isAddList },
    ]);

    if (isAddList) {
      handleDelay(name, type);
    } else {
      const timerId = timerIds.find((timer) => timer.name === name)?.timerId;
      if (timerId) {
        clearTimeout(timerId);
        setTimerIds((prevId) =>
          prevId.filter((timer) => timer.timerId !== timerId)
        );
      }
    }
  };

  const handleDelay = (name: string, type: string) => {
    const id = setTimeout(() => {
      setTodoItems((prevItems) => {
        const remainingItems = prevItems.filter((item) => item.name !== name);
        return [...remainingItems, { type, name, isSelected: false }];
      });
      setTimerIds((prevId) => prevId.filter((timer) => timer.name !== name));
    }, 5000);

    setTimerIds((prevId) => [
      ...prevId,
      { type: type, name: name, timerId: id },
    ]);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-black h-full min-h-screen text-white">
      <TodoColumn
        handleActionTodoList={handleActionTodoList}
        isAddValue={true}
        todoItems={todoItems}
        todoType="Todo Items"
        backgroundColor="bg-custom-yellow"
      />
      <TodoColumn
        handleActionTodoList={handleActionTodoList}
        isAddValue={false}
        todoItems={todoItems}
        todoType="Fruit"
        backgroundColor="bg-custom-orange"
      />
      <TodoColumn
        handleActionTodoList={handleActionTodoList}
        isAddValue={false}
        todoItems={todoItems}
        todoType="Vegetable"
        backgroundColor="bg-custom-green"
      />
    </div>
  );
}
