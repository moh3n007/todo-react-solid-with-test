export interface ToDo {
  id: number;
  text: string;
}

export interface TodoInputProps {
  handleAddOrEdit: VoidFunction;
  text: string;
  setText: (text: string) => void;
  editId: number | null;
}

export interface TodoListProps {
  todos: ToDo[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}
