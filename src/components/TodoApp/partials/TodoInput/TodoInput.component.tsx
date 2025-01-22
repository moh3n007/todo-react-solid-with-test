// types
import type { TodoInputProps } from "@/interfaces/todoProps";

const TodoInput: React.FC<TodoInputProps> = (props) => {
  const { handleAddOrEdit, text, setText, editId } = props;
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>
        {editId !== null ? "Save" : "Add"}
      </button>
    </>
  );
};

export default TodoInput;
