import { useFormContext } from "../../contexts/FormContext";
import ChallengesOption from "./components/ChallengesOptions"
import { ChallengesContainer } from "./styled.components"

const Challenges = () => {
  const { userResponse, handleResponse } = useFormContext();

  return (
    <ChallengesContainer>
      <p>
        ¿Cuáles son tus principales desafíos para 2024?
      </p>
      
      <div className="challenges-grid">
        <ChallengesOption
          letter="A"
          description="Aumentar conversión de leads a clientes"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Aumentar conversión de leads a clientes"}
        />

        <ChallengesOption
          letter="B"
          description="Reducir customer churn"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Reducir customer churn"}
        />

        <ChallengesOption
          letter="C"
          description="Implementar un programa VoC"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Implementar un programa VoC"}
        />
        
        <ChallengesOption
          letter="D"
          description="Reducir costos en gestión de reclamos"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Reducir costos en gestión de reclamos"}
        />

        <ChallengesOption
          letter="E"
          description="Optimizar procesos comerciales"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Optimizar procesos comerciales"}
        />

        <ChallengesOption
          letter="F"
          description="Optimizar procesos operativos"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Optimizar procesos operativos"}
        />

        <ChallengesOption
          letter="G"
          description="Otro"
          category="challenge"
          handleChangeValue={handleResponse}
          isSelected={userResponse.challenge === "Otro"}
        />        
      </div>
    </ChallengesContainer>
  )
}

export default Challenges