import { Workout } from '../data/workouts';
import { convertSectionsToDayPlan } from '../data/workoutPlans';
import { weekDayToDayKey } from '../utils/dayUtils';
import { WorkoutToday } from './WorkoutToday';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
}

// Componente principal que exibe o card do treino
export function WorkoutCard({ workout }: WorkoutCardProps) {
  // Converte as seções do workout para DayPlan
  const dayPlan = convertSectionsToDayPlan(workout.sections);
  const dayKey = weekDayToDayKey(workout.day);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.calendarIcon}>📅</span>
          {workout.dayName} – {workout.workoutName}
        </h2>
      </div>
      <div className={styles.content}>
        <WorkoutToday
          dayPlan={dayPlan}
          dayKey={dayKey}
          dayName={workout.dayName}
        />
      </div>
    </div>
  );
}
