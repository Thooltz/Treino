import { WeekDay, workouts, getDayAbbreviation } from '../data/workouts';
import styles from './DayTabs.module.css';

interface DayTabsProps {
  selectedDay: WeekDay | null;
  onSelectDay: (day: WeekDay) => void;
}

// Componente de abas para navegação entre os dias
export function DayTabs({ selectedDay, onSelectDay }: DayTabsProps) {
  // Apenas dias de segunda a sexta têm treino
  const workoutDays = workouts.map((w) => w.day);

  return (
    <div className={styles.tabs}>
      {workoutDays.map((day) => {
        const isSelected = selectedDay === day;
        return (
          <button
            key={day}
            className={`${styles.tab} ${isSelected ? styles.active : ''}`}
            onClick={() => onSelectDay(day)}
            aria-label={`Selecionar treino de ${getDayAbbreviation(day)}`}
            aria-pressed={isSelected}
          >
            {getDayAbbreviation(day)}
          </button>
        );
      })}
    </div>
  );
}
