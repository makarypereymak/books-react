type Props = {
  onClick: () => void;
  className: string;
  children: string;
};

const Button: React.FunctionComponent<Props> = ({ onClick, className, children }) => {
  return (
    <button className={className} type='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
