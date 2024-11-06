import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton";
import { CrmContainer } from "./styled.components";

const Crm = () => {
  const { userResponse, handleResponse } = useFormContext();
  
  return (
    <CrmContainer>
      <p>
        ¿Cuál CRM están utilizando en tu empresa? CRM:
      </p>

      <div className="crms-grid">
        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="SAP"
          isSelected={userResponse.crm === "SAP"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Microsoft Dynamics"
          isSelected={userResponse.crm === "Microsoft Dynamics"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Salesforce"
          isSelected={userResponse.crm === "Salesforce"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Hubspot"
          isSelected={userResponse.crm === "Hubspot"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Zoho"
          isSelected={userResponse.crm === "Zoho"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Netsuite (Oracle)"
          isSelected={userResponse.crm === "Netsuite (Oracle)"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="Monday"
          isSelected={userResponse.crm === "Monday"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="CRM Propio"
          isSelected={userResponse.crm === "CRM Propio"}
        />

        <OptionButton
          category="crm"
          handleChangeValue={handleResponse}
          value="No tengo CRM"
          isSelected={userResponse.crm === "No tengo CRM"}
          isFullWidth={true}
        />
      </div>

    </CrmContainer>
  )
}

export default Crm