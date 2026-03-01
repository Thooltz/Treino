import { Exercise } from '../types/workout';
import styles from './ExerciseItem.module.css';

interface ExerciseItemProps {
  exercise: Exercise;
  completed: boolean;
  onToggle: () => void;
}

/**
 * Componente para exibir um exercício clicável com check
 */
export function ExerciseItem({ exercise, completed, onToggle }: ExerciseItemProps) {
  return (
    <div
      className={`${styles.exerciseItem} ${completed ? styles.completed : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-label={`${exercise.name} - ${completed ? 'Concluído' : 'Não concluído'}`}
    >
      <div className={styles.exerciseContent}>
        <span className={styles.exerciseName}>{exercise.name}</span>
        {(exercise.sets || exercise.reps) && (
          <span className={styles.exerciseInfo}>
            {exercise.sets && `${exercise.sets}×`}
            {exercise.reps}
          </span>
        )}
      </div>
      <div className={styles.checkIcon}>
        {completed ? '✅' : '⬜'}
      </div>
    </div>
  );
}
