// hooks
import { useState } from "react";

// types
import type { ToDo } from "@interfaces/todoProps";

const useTodoManage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [text, setText] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
    }
    setText("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setText(todo.text);
      setEditId(id);
    }
  };

  return {
    todos,
    handleDelete,
    handleEdit,
    handleAddOrEdit,
    text,
    setText,
    editId,
  };
};

export default useTodoManage;
