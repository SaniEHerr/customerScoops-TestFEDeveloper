// OptionButton.tsx
import { OptionButtonContainer } from "./styled.components"

interface OptionButtonProps {
  value ?: string;
  handleChangeValue : Function;
  category : string;
  isSelected : boolean;
}

const OptionButton = ({ value, handleChangeValue, category, isSelected }: OptionButtonProps) => {
  const handleSelect = () => {
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
