// helper funcs
import clsx from "clsx";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button
      {...props}
      className={clsx(props.className, "bg-gray-200 px-2 rounded", {
        "opacity-30": props.disabled,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
