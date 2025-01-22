// types
import type { TodoItemProps } from "@interfaces/todoProps";

// components
import Button from "@ui/Button";

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, onDelete, onEdit, disabled } = props;
  return (
    <div className="flex items-center py-1 px-2 gap-2 border border-solid border-gray rounded">
      <p className="flex-1">{todo.text}</p>
      <Button type="button" onClick={onEdit} disabled={disabled}>
        Edit
      </Button>
      <Button type="button" onClick={onDelete} disabled={disabled}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
