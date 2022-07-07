type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputText: React.FunctionComponent<Props> = ({ onChange, value, onKeyDown }) => {
  return <input onKeyDown={onKeyDown} value={value} className='form__text-input' type='text' placeholder='SEARCH' onChange={onChange} />;
};

export default InputText;
