import "./SearchBox.scss";

type Props = {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
  onKeyPress?: (e: any) => void;
};

const SearchBox: React.FC<Props> = ({
  value,
  placeholder,
  disabled,
  onChange,
  onKeyPress,
}) => {
  return (
    <input
      type="text"
      className="searchBox"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      onKeyPress={onKeyPress}
    ></input>
  );
};

export default SearchBox;
