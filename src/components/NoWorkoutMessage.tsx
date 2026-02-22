import { WeekDay, getDayName } from '../data/workouts';
import styles from './NoWorkoutMessage.module.css';

interface NoWorkoutMessageProps {
  today: WeekDay;
  onSelectDay: (day: WeekDay) => void;
}

// Componente para exibir quando não há treino (sábado/domingo)
export function NoWorkoutMessage({ today }: NoWorkoutMessageProps) {
  return (
    <div className={styles.message}>
      <div className={styles.icon}>🏋️</div>
      <h2 className={styles.title}>Sem treino definido</h2>
      <p className={styles.text}>
        Hoje é <strong>{getDayName(today)}</strong> e não há treino programado para este dia.
      </p>
      <p className={styles.text}>
        Selecione um dia da semana abaixo para ver o treino correspondente:
      </p>
    </div>
  );
}
