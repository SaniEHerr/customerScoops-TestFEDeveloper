import { UserResponseData } from "../../contexts/FormContext";
import { OptionButtonContainer } from "./styled.components"

interface OptionButtonProps {
  value ?           : string;
  handleChangeValue : Function;
  category          : string;
  isSelected        : boolean;
}

const OptionButton = ({ value, handleChangeValue, category, isSelected }: OptionButtonProps) => {
  const handleSelect = () => {
    handleChangeValue(category as keyof UserResponseData, value);
  };

  return (
    <OptionButtonContainer
      onClick={handleSelect}
      isSelected={isSelected}
    >
      {value}
    </OptionButtonContainer>
  )
}

export default OptionButton