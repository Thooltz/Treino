import { Workout } from '../data/workouts';
import { SectionList } from './SectionList';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
}

// Componente principal que exibe o card do treino
export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.calendarIcon}>📅</span>
          {workout.dayName} – {workout.workoutName}
        </h2>
      </div>
      <div className={styles.content}>
        {workout.sections.map((section, index) => (
          <SectionList key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
