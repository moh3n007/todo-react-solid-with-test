const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return (
    <input
      {...props}
      className="border border-solid border-gray rounded w-full px-2 py-1"
    />
  );
};

export default Input;
