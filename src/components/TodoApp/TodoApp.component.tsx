// hooks
import useTodoManage from "@hooks/useTodoManage";

// components
import TodoInput from "./partials/TodoInput";
import TodoList from "./partials/TodoList";

// constants
import { TodoForm } from "@/constants/formNames";

const ToDoApp: React.FC = () => {
  const {
    todos,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    editId,
    onSubmit,
    register,
    formState: { errors },
  } = useTodoManage();

  return (
    <div className="min-w-[300px]">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do App</h1>
      <form onSubmit={onSubmit}>
        <TodoInput
          isEdditing={!!editId}
          error={errors.text}
          onCancelEdit={handleCancelEdit}
          {...register(TodoForm.TEXT)}
        />
      </form>
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editId={editId}
      />
    </div>
  );
};

export default ToDoApp;
