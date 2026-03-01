import { useMemo } from 'react';
import { DayPlan, Progress, DayKey } from '../types/workout';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { ExerciseItem } from './ExerciseItem';
import styles from './WorkoutToday.module.css';

interface WorkoutTodayProps {
  dayPlan: DayPlan[];
  dayKey: DayKey;
  dayName: string;
}

/**
 * Componente principal que exibe o treino do dia com checklist
 */
export function WorkoutToday({ dayPlan, dayKey, dayName }: WorkoutTodayProps) {
  // Chave do localStorage para o progresso deste dia
  const storageKey = `progress:${dayKey}`;
  
  // Estado do progresso (quais exercícios foram concluídos)
  const [progress, setProgress] = useLocalStorageState<Progress>(storageKey, {});

  // Função para alternar o estado de um exercício
  const toggleExercise = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Função para resetar todos os exercícios do dia
  const resetProgress = () => {
    if (window.confirm('Deseja resetar todos os exercícios deste treino?')) {
      setProgress({});
    }
  };

  // Calcula estatísticas de progresso
  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;

    dayPlan.forEach((section) => {
      section.exercises.forEach((exercise) => {
        total++;
        if (progress[exercise.id]) {
          completed++;
        }
      });
    });

    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }, [dayPlan, progress]);

  return (
    <div className={styles.workoutToday}>
      {/* Cabeçalho com estatísticas */}
      <div className={styles.header}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{stats.completed}</span>
            <span className={styles.statLabel}>de {stats.total}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{stats.percentage}%</span>
            <span className={styles.statLabel}>concluído</span>
          </div>
        </div>
        <button
          className={styles.resetButton}
          onClick={resetProgress}
          aria-label="Resetar treino do dia"
        >
          🔄 Resetar
        </button>
      </div>

      {/* Seções do treino */}
      {dayPlan.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <div className={styles.exercisesList}>
            {section.exercises.map((exercise) => (
              <ExerciseItem
                key={exercise.id}
                exercise={exercise}
                completed={!!progress[exercise.id]}
                onToggle={() => toggleExercise(exercise.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
