import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList.component";
import type { TodoListProps } from "@/interfaces/todoProps";
import { vi } from "vitest";

describe("TodoList Component", () => {
  const mockProps: TodoListProps = {
    todos: [],
    handleEdit: vi.fn(),
    handleDelete: vi.fn(),
    editId: null,
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the list correctly", () => {
    render(<TodoList {...mockProps} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders the empty state when there are no todos", () => {
    render(<TodoList {...mockProps} />);

    const emptyMessage = screen.getByText("No todo added");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("renders a list of todos", () => {
    const todos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
    ];
    render(<TodoList {...mockProps} todos={todos} />);

    todos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  it("calls handleEdit when edit button is clicked", () => {
    const todos = [{ id: 1, text: "Todo 1" }];
    const mockHandleEdit = vi.fn();
    render(
      <TodoList {...mockProps} todos={todos} handleEdit={mockHandleEdit} />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    expect(mockHandleEdit).toHaveBeenCalledWith(1);
    expect(mockHandleEdit).toHaveBeenCalledTimes(1);
  });

  it("calls handleDelete when delete button is clicked", () => {
    const todos = [{ id: 1, text: "Todo 1" }];
    const mockHandleDelete = vi.fn();
    render(
      <TodoList {...mockProps} todos={todos} handleDelete={mockHandleDelete} />
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledWith(1);
    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });

  it("disables edit button for the currently editing todo", () => {
    const todos = [{ id: 1, text: "Todo 1" }];
    render(<TodoList {...mockProps} todos={todos} editId={1} />);

    const editButton = screen.getByText("Edit");
    expect(editButton).toBeDisabled();
  });
});
