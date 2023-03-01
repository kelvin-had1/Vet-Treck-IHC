
interface ButtonProps {
  count: number;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}>count is {props.count}</button>
  );
};

export { Button };