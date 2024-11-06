import React, { createContext, useContext, useState, ReactNode } from 'react';

// Interface for user response data, defining the expected shape of the form data
export interface UserResponseData {
  name      ?: string;
  position  ?: string;
  challenge ?: string;
  crm       ?: string;
  industry  ?: string;
}

// Interface for the context properties, including user response and handler function
interface FormContextProps {
  userResponse: UserResponseData; // Current responses from the user
  handleResponse: (category: keyof UserResponseData, value: string) => void; // Function to update user responses
}

// Create the context with a default value of undefined
const FormContext = createContext<FormContextProps | undefined>(undefined);

// Custom hook to access the FormContext. If used outside of FormProvider, it throws an error
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must to be use into FormProvider");
  }
  return context;
};

// Interface for FormProvider props, defining that it expects children components to be passed in
interface FormProviderProps {
  children: ReactNode;
}

// FormProvider component that provides the context value to its children
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [userResponse, setUserResponse] = useState<UserResponseData>({});

  console.log(userResponse);

  // Function to handle updating the user response based on the category and value
  const handleResponse = (category: keyof UserResponseData, value: string) => {
    setUserResponse((prevResponses) => ({
      ...prevResponses,
      [category]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ userResponse, handleResponse }}>
      {children}
    </FormContext.Provider>
  );
};