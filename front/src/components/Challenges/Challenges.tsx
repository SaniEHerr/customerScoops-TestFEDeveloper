import { challenges } from "../../constants/challenges";
import { useFormContext } from "../../contexts/FormContext";
import ChallengesOption from "./components/ChallengesOptions";
import { ChallengesContainer } from "./styled.components";

const Challenges = () => {
  const { userResponse, handleResponse } = useFormContext();

  return (
    <ChallengesContainer>
      <p>
        ¿Cuáles son tus principales desafíos para 2024?
      </p>

      <div className="challenges-grid">
        {/* Mapping through the challenges array to create a ChallengesOption for each challenge */}
        {challenges.map(({ letter, description }) => (
          <ChallengesOption
            key={letter}
            letter={letter}
            description={description}
            category="challenge"
            handleChangeValue={handleResponse}
            isSelected={userResponse.challenge === description}
          />
        ))}
      </div>
    </ChallengesContainer>
  );
};

export default Challenges;