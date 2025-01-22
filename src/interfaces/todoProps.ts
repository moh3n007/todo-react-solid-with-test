import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface TodoProps {
  id: number;
  text: string;
}

export interface TodoFormData {
  text: string;
}

export interface TodoInputProps extends UseFormRegisterReturn<"text"> {
  isEdditing: boolean;
  error?: FieldError;
  onCancelEdit: VoidFunction;
}

export interface TodoListProps {
  todos: TodoProps[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  editId: number | null;
}

export interface TodoItemProps {
  todo: TodoProps;
  onDelete: VoidFunction;
  onEdit: VoidFunction;
  disabled?: boolean;
}
