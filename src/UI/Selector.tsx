type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  className: string
  options: Array<string>
}

const SelectorCategories: React.FunctionComponent<Props> = ({ onChange, value, className, options }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectorCategories
