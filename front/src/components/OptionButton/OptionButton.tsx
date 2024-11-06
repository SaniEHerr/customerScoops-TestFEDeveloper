// OptionButton.tsx
import { OptionButtonContainer } from "./styled.components"

interface OptionButtonProps {
  value ?            : string;
  handleChangeValue  : Function;
  category           : string;
  isSelected         : boolean;
}

const OptionButton = ({ value, handleChangeValue, category, isSelected }: OptionButtonProps) => {
  // Function that handles the selection of an option
  const handleSelect = () => {
    // Calls handleChangeValue with the category and value of the selected option
    handleChangeValue(category, value);
  };

  return (
    // Use `$isSelected` to make it a transient prop and avoid console errors related to DOM
    <OptionButtonContainer
      onClick={handleSelect}
      $isSelected={isSelected}
    >
      {value}
    </OptionButtonContainer>
  );
}

export default OptionButton;
