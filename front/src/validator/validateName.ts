export const validateName = (name: string): string => {
  if (!name.trim()) {
    return "Por favor, ingrese su nombre para continuar";
  } else if (name.length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  } else if (name.length > 16) {
    return "El nombre no puede exceder los 16 caracteres";
  }
  return "";
};