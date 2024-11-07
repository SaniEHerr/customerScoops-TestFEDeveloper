// src/constants/challenges.ts

export type Challenge = {
  letter      : string;
  description : string;
};

// List of challenges to be displayed as options
export const challenges: Challenge[] = [
  { letter: "A", description: "Aumentar conversión de leads a clientes" },
  { letter: "B", description: "Reducir customer churn" },
  { letter: "C", description: "Implementar un programa VoC" },
  { letter: "D", description: "Reducir costos en gestión de reclamos" },
  { letter: "E", description: "Optimizar procesos comerciales" },
  { letter: "F", description: "Optimizar procesos operativos" },
  { letter: "G", description: "Otro" },
];
