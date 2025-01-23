// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// types
import type { TodoProps, TodoFormData } from "@interfaces/todoProps";
import type { SubmitHandler } from "react-hook-form";

// validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  text: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
});

const useTodoManage = () => {
  const defaultValues: TodoFormData = {
    text: "",
  };

  const handleCancelEdit = () => {
    setEditId(null);
    reset();
  };

  const handleAddOrEdit: SubmitHandler<TodoFormData> = ({ text }) => {
    if (editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text } : todo
      );
      setTodos(updatedTodos);
      handleCancelEdit();
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
    }
    reset();
  };

  const { handleSubmit, reset, setValue, clearErrors, ...rest } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setEditId(id);
      setValue("text", todo.text);
    }
    clearErrors();
  };

  return {
    todos,
    handleDelete,
    handleEdit,
    handleCancelEdit,
    editId,
    onSubmit: handleSubmit(handleAddOrEdit),
    ...rest,
  };
};

export default useTodoManage;
