// types
import type { TodoListProps } from "@interfaces/todoProps";

// components
import TodoItem from "./partials/TodoItem.component";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, handleEdit, handleDelete, editId } = props;
  return (
    <ul className="mt-4 flex flex-col gap-1">
      {todos.length ? todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
            disabled={editId === todo.id}
          />
        </li>
      )) : <p className="text-lg text-center">No todo added</p>}
    </ul>
  );
};

export default TodoList;
