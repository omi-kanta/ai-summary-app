interface RadioButtonProps {
  options: { label: string; value: string }[];
  selectedOption: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ options, selectedOption, onChange }: RadioButtonProps) => {
  return (
    <div className="flex flex-col items-start mb-4">
      {options.map((option) => (
        <label key={option.value} className="mb-2">
          <input
            type="radio"
            name="summaryType"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
