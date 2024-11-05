import { OptionButtonContainer } from "./styled.components"

interface OptionButtonProps {
  value ?           : string;
  handleChangeValue : Function;
  category          : string;
  isSelected        : boolean;
}

const OptionButton = ({ value, handleChangeValue, category, isSelected  }: OptionButtonProps) => {
  const handleSelect = () => {
    handleChangeValue(value, category)
  }

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