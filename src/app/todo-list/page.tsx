"use client";
import React, { useState } from "react";
import { todoListItems } from "../mock-data/fruit-and-vegetable";

import { TODO_TYPES } from "../constant/todo-type";
import { TodoListItemsType } from "../types/todo-list-item/todo-list-item";
import CardImageButton from "../components/card-image-button/CardImageButton";

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
    <div className="grid grid-cols-3 gap-4 p-4 bg-black h-full min-h-screen">
      <div className="col-span-1 bg-custom-yellow p-4 rounded-lg">
        <h2 className="text-center font-bold mb-2">Todo Items</h2>
        {todoItems?.map(
          (item) =>
            !item.isSelected && (
              <CardImageButton
                key={item.name}
                name={item?.name}
                onClick={() => handleActionTodoList(item.name, item.type, true)}
              />
            )
        )}
      </div>

      <div className="col-span-1 bg-custom-orange p-4 rounded-lg">
        <h2 className="text-center font-bold mb-2">Fruit</h2>
        {todoItems?.map(
          (item) =>
            item.type === TODO_TYPES.FRUIT &&
            item.isSelected && (
              <CardImageButton
                key={item.name}
                name={item?.name}
                time={5}
                onClick={() =>
                  handleActionTodoList(item.name, item.type, false)
                }
              />
            )
        )}
      </div>

      <div className="col-span-1 bg-custom-green p-4 rounded-lg">
        <h2 className="text-center font-bold mb-2">Vegetable</h2>
        {todoItems?.map(
          (item) =>
            item.type === TODO_TYPES.VEGETABLE &&
            item.isSelected && (
              <CardImageButton
                key={item.name}
                name={item?.name}
                time={5}
                onClick={() =>
                  handleActionTodoList(item.name, item.type, false)
                }
              />
            )
        )}
      </div>
    </div>
  );
}
