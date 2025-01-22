// types
import type { TodoInputProps } from "@/interfaces/todoProps";

// components
import Button from "@ui/Button";
import Input from "@ui/Input";

const TodoInput: React.FC<TodoInputProps> = (props) => {
  const { isEdditing, error, onCancelEdit, ...rest } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 gap-3">
        <Input type="text" {...rest} />
        <Button type="submit">{isEdditing ? "Save" : "Add"}</Button>
        {isEdditing && (
          <Button type="submit" onClick={onCancelEdit}>
            Cancel
          </Button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{`- ${error.message}`}</p>
      )}
    </div>
  );
};

export default TodoInput;
