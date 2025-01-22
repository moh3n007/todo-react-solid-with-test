// types
import type { TodoListProps } from "@interfaces/todoProps";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, handleEdit, handleDelete } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
