import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoApp from "./TodoApp.component";

describe("ToDoApp", () => {
  it("renders the ToDoApp Header", () => {
    render(<ToDoApp />);
    expect(screen.getByText("To-Do App")).toBeInTheDocument();
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("renders the ToDoInput", () => {
    render(<ToDoApp />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Add");
  });
  it("renders the ToDoList empty", () => {
    render(<ToDoApp />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("No todo added")).toBeInTheDocument();
  });
});
