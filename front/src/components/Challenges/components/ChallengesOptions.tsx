import { OptionsContainer } from "../styled.components";

interface ChallengesOptionProps {
  letter            : string;
  description       : string;
  handleChangeValue : Function;
  category          : string;
  isSelected        : boolean;
}

const ChallengesOption = ({ letter, description, handleChangeValue, category, isSelected }: ChallengesOptionProps) => {
  // Function that handles the selection of an option
  const handleSelect = () => {
    // Calls handleChangeValue with the category and description of the selected option
    handleChangeValue(category, description);
  };


  return (
    // Use `$isSelected` to make it a transient prop and avoid console errors related to DOM
    <OptionsContainer
      onClick={handleSelect}
      $isSelected={isSelected}
    >
      <span>{letter}</span>
      <p>{description}</p>
    </OptionsContainer>
  );
};

export default ChallengesOption;