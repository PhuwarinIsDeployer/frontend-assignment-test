"use client";
import React, { useState } from "react";
import {
  todoListItemsProps,
  todoListItems,
} from "../mock-data/fruit-and-vegetable";
import Card from "../components/card-button/CardButton";
import { TODO_TYPES } from "../constant/todo-type";

export default function AutoDeleteTodoList() {
  const [todoItems, setTodoItems] =
    useState<todoListItemsProps[]>(todoListItems);
  const [timerIds, setTimerIds] = useState<todoListItemsProps[]>([]);

  const handleAddTodoList = (
    name: string,
    type: string,
    isAddList: boolean
  ) => {
    const filterTodoList = todoItems.filter((filter) => filter.name !== name);

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
        setTimerIds((prevIds) =>
          prevIds.filter((timer) => timer.timerId !== timerId)
        );
      }
    }
  };

  const handleDelay = (name: string, type: string) => {
    const id = window.setTimeout(() => {
      setTodoItems((prevItems) => {
        const remainingItems = prevItems.filter((item) => item.name !== name);
        return [...remainingItems, { name, type, isSelected: false }];
      });
    }, 5000);

    setTimerIds((prevIds) => [
      ...prevIds,
      { name: name, type: type, timerId: id },
    ]);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-black h-full min-h-screen">
      <div className="col-span-1 bg-custom-yellow p-4 rounded-lg">
        <h2 className="text-center font-bold mb-2">Todo Items</h2>
        {todoItems?.map(
          (item) =>
            !item.isSelected && (
              <Card
                key={item.name}
                name={item?.name}
                onClick={() => handleAddTodoList(item.name, item.type, true)}
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
              <Card
                key={item.name}
                name={item?.name}
                time={5}
                onClick={() => handleAddTodoList(item.name, item.type, false)}
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
              <Card
                key={item.name}
                name={item?.name}
                time={5}
                onClick={() => handleAddTodoList(item.name, item.type, false)}
              />
            )
        )}
      </div>
    </div>
  );
}
