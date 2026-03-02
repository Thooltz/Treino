// Enum para os dias da semana
export enum WeekDay {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

// Interface para uma seção do treino
export interface WorkoutSection {
  title: string;
  items: string[];
}

// Interface para um treino completo
export interface Workout {
  day: WeekDay;
  dayName: string;
  workoutName: string;
  sections: WorkoutSection[];
}

// Dados dos treinos
export const workouts: Workout[] = [
  {
    day: WeekDay.MONDAY,
    dayName: 'SEGUNDA',
    workoutName: 'PEITO + TRÍCEPS',
    sections: [
      {
        title: 'Aquecimento',
        items: ['Bike – 5 min'],
      },
      {
        title: 'Peito',
        items: [
          'Supino reto',
          'Supino inclinado',
          'Supino declinado',
          'Peck deck',
          'Crucifixo na polia baixa (se estiver vazia)',
        ],
      },
      {
        title: 'Tríceps',
        items: [
          'Tríceps corda polia',
          'Tríceps testa corda polia',
          'Tríceps francês corda polia',
        ],
      },
      {
        title: 'Abdômen',
        items: ['Abdominal supra', 'Abdominal infra', 'Prancha'],
      },
      {
        title: 'Cardio',
        items: ['Escada – 3 a 5 min', 'Esteira inclinada – 25 min'],
      },
    ],
  },
  {
    day: WeekDay.TUESDAY,
    dayName: 'TERÇA',
    workoutName: 'PERNA (A)',
    sections: [
      {
        title: 'Aquecimento',
        items: ['Bike – 5 min'],
      },
      {
        title: 'Perna',
        items: [
          '1. Hip Thrust (barra ou máquina) – 4×12 (mulher) | 4×8–10 (homem)',
          '2. Agachamento Livre – 4×10–12 (mulher) | 4×6–8 (homem)',
          '3. Leg Press 45° (pés altos e abertos) – 4×12–15 (mulher) | 4×10–12 (homem)',
          '4. Afundo (passada longa) – 3×12 por perna (mulher) | 3×10 por perna (homem)',
          '5. Abdução de Quadril (abrir perna) – 4×20 (mulher) | 3×15 (homem)',
          '6. Adução de Quadril (fechar perna) – 3×15–20',
          '7. Panturrilha em pé – 4×15–20',
          '8. Cadeira Extensora',
        ],
      },
      {
        title: 'Abdômen',
        items: ['Abdominal supra', 'Abdominal infra', 'Prancha'],
      },
      {
        title: 'Cardio',
        items: ['Esteira inclinada – 15 a 20 min'],
      },
    ],
  },
  {
    day: WeekDay.WEDNESDAY,
    dayName: 'QUARTA',
    workoutName: 'COSTAS + BÍCEPS',
    sections: [
      {
        title: 'Aquecimento',
        items: ['Bike – 5 min'],
      },
      {
        title: 'Costas',
        items: [
          'Remada curvada com barra',
          'Puxada na máquina',
          'Puxada baixa com triângulo',
          'Remada unilateral na máquina',
          'Pulldown',
        ],
      },
      {
        title: 'Bíceps',
        items: [
          'Rosca inclinada com halter',
          'Rosca Scott',
          'Rosca 21',
          'Rosca martelo (se tiver força)',
        ],
      },
      {
        title: 'Abdômen',
        items: ['Abdominal supra', 'Abdominal infra', 'Prancha'],
      },
      {
        title: 'Cardio',
        items: ['Esteira inclinada – 15 a 20 min'],
      },
    ],
  },
  {
    day: WeekDay.THURSDAY,
    dayName: 'QUINTA',
    workoutName: 'PERNA (B)',
    sections: [
      {
        title: 'Aquecimento',
        items: ['Bike – 5 min'],
      },
      {
        title: 'Perna',
        items: [
          'Stiff',
          'Mesa Flexora',
          'Agachamento Búlgaro',
          'Agachamento Sumo',
          'Coice',
          'Glute Bridge / Hip Thrust na máquina',
          'Abdução de Quadril (abrir perna)',
          'Panturrilha',
        ],
      },
      {
        title: 'Abdômen',
        items: ['Abdominal supra', 'Abdominal infra', 'Prancha'],
      },
      {
        title: 'Cardio',
        items: ['Esteira inclinada – 15 a 20 min'],
      },
    ],
  },
  {
    day: WeekDay.FRIDAY,
    dayName: 'SEXTA',
    workoutName: 'OMBRO',
    sections: [
      {
        title: 'Aquecimento',
        items: ['Bike – 5 min'],/*  */
      },
      {
        title: 'Ombro',
        items: [
          'Desenvolvimento',
          'Elevação lateral',
          'Elevação frontal',
          'Crucifixo inverso',
          'Encolhimento',
        ],
      },
      {
        title: 'Abdômen',
        items: ['Abdominal supra', 'Abdominal infra', 'Prancha'],
      },
      {
        title: 'Cardio',
        items: ['Esteira inclinada – 15 a 20 min'],
      },
    ],
  },
];

// Função utilitária para obter o dia da semana atual
export function getTodayWeekDay(): WeekDay {
  const today = new Date().getDay();
  // getDay() retorna: 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const dayMap: WeekDay[] = [
    WeekDay.SUNDAY,
    WeekDay.MONDAY,
    WeekDay.TUESDAY,
    WeekDay.WEDNESDAY,
    WeekDay.THURSDAY,
    WeekDay.FRIDAY,
    WeekDay.SATURDAY,
  ];
  return dayMap[today];
}

// Função para obter o treino do dia atual
export function getWorkoutByToday(): Workout | null {
  const today = getTodayWeekDay();
  // Sábado e domingo não têm treino definido
  if (today === WeekDay.SATURDAY || today === WeekDay.SUNDAY) {
    return null;
  }
  return workouts.find((w) => w.day === today) || null;
}

// Função para obter o nome do dia em português
export function getDayName(day: WeekDay): string {
  const dayNames: Record<WeekDay, string> = {
    [WeekDay.MONDAY]: 'Segunda-feira',
    [WeekDay.TUESDAY]: 'Terça-feira',
    [WeekDay.WEDNESDAY]: 'Quarta-feira',
    [WeekDay.THURSDAY]: 'Quinta-feira',
    [WeekDay.FRIDAY]: 'Sexta-feira',
    [WeekDay.SATURDAY]: 'Sábado',
    [WeekDay.SUNDAY]: 'Domingo',
  };
  return dayNames[day];
}

// Função para obter abreviação do dia
export function getDayAbbreviation(day: WeekDay): string {
  const abbreviations: Record<WeekDay, string> = {
    [WeekDay.MONDAY]: 'SEG',
    [WeekDay.TUESDAY]: 'TER',
    [WeekDay.WEDNESDAY]: 'QUA',
    [WeekDay.THURSDAY]: 'QUI',
    [WeekDay.FRIDAY]: 'SEX',
    [WeekDay.SATURDAY]: 'SAB',
    [WeekDay.SUNDAY]: 'DOM',
  };
  return abbreviations[day];
}
