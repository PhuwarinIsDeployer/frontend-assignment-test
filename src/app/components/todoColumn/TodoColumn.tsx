import CardImageButton from "../cardImageButton/CardImageButton";
import { TodoColumnType } from "./type";

const TodoColumn: React.FC<TodoColumnType> = ({
  todoItems,
  todoType,
  handleActionTodoList,
  isAddValue,
  backgroundColor,
}) => {
  return (
    <div
      className={`col-span-1 ${
        backgroundColor ?? "bg-custom-yellow"
      } p-4 rounded-lg`}
    >
      <h2 className="text-center font-bold mb-2">{todoType}</h2>
      {todoItems?.map(
        (item) =>
          ((item.type === todoType && item.isSelected) ||
            (todoType === "Todo Items" && !item.isSelected)) && (
            <CardImageButton
              key={item.name}
              name={item?.name}
              time={todoType === "Todo Items" ? undefined : 5}
              onClick={() =>
                handleActionTodoList(item.name, item.type, isAddValue)
              }
            />
          )
      )}
    </div>
  );
};

export default TodoColumn;
