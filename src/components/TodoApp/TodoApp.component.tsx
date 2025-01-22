// hooks
import useTodoManage from "@hooks/useTodoManage";

// components
import TodoInput from "./partials/TodoInput";
import TodoList from "./partials/TodoList";

const ToDoApp: React.FC = () => {
  const {
    todos,
    handleEdit,
    handleDelete,
    handleAddOrEdit,
    text,
    setText,
    editId,
  } = useTodoManage();

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoInput
        handleAddOrEdit={handleAddOrEdit}
        text={text}
        setText={setText}
        editId={editId}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default ToDoApp;
