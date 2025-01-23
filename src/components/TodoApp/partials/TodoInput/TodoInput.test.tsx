import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoInput from "./TodoInput.component";
import type { TodoInputProps } from "@/interfaces/todoProps";
import { vi } from "vitest";

describe("TodoInput Component", () => {
  const mockProps: TodoInputProps = {
    isEdditing: false,
    error: undefined,
    onCancelEdit: vi.fn(),
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
    name: "text",
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the input field and buttons correctly", () => {
    render(<TodoInput {...mockProps} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");

    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();

    const cancelButton = screen.queryByRole("button", { name: /cancel/i });
    expect(cancelButton).not.toBeInTheDocument();
  });

  it("renders 'Save' and 'Cancel' buttons when `isEdditing` is true", () => {
    render(<TodoInput {...mockProps} isEdditing={true} />);

    const saveButton = screen.getByRole("button", { name: /save/i });
    expect(saveButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();
  });

  it("handles typing into the input field", () => {
    render(<TodoInput {...mockProps} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    expect(mockProps.onChange).toHaveBeenCalled();
    expect(mockProps.onChange).toHaveBeenCalledWith(expect.anything());
  });

  it("displays an error message when `error` prop is provided", () => {
    render(
      <TodoInput
        {...mockProps}
        error={{ message: "This field is required", type: "required" }}
      />
    );

    const errorMessage = screen.getByText(/- This field is required/i);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-red-500");
  });

  it("calls `onCancelEdit` when the 'Cancel' button is clicked", () => {
    render(<TodoInput {...mockProps} isEdditing={true} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(mockProps.onCancelEdit).toHaveBeenCalled();
  });
});
