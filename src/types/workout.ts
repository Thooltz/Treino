// Tipos para o sistema de checklist
export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type Exercise = {
  id: string;
  name: string;
  sets?: number;
  reps?: string;
};

export type DayPlan = {
  title: string;
  exercises: Exercise[];
};

export type Progress = Record<string, boolean>;
