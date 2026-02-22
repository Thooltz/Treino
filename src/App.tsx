import { useState, useEffect } from 'react';
import {
  WeekDay,
  workouts,
  getWorkoutByToday,
  getTodayWeekDay,
  getDayName,
} from './data/workouts';
import { DayTabs } from './components/DayTabs';
import { WorkoutCard } from './components/WorkoutCard';
import { NoWorkoutMessage } from './components/NoWorkoutMessage';
import styles from './App.module.css';

// Chave para localStorage
const SELECTED_DAY_KEY = 'treino-selected-day';

function App() {
  const today = getTodayWeekDay();
  const todayWorkout = getWorkoutByToday();

  // Estado para o dia selecionado - inicializa com o treino de hoje
  const [selectedDay, setSelectedDay] = useState<WeekDay | null>(() => {
    // Se não houver treino hoje (fim de semana), retorna null
    return todayWorkout ? today : null;
  });

  // Inicializa do localStorage após o primeiro render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SELECTED_DAY_KEY);
      if (saved && Object.values(WeekDay).includes(saved as WeekDay)) {
        setSelectedDay(saved as WeekDay);
      }
    } catch (error) {
      // Se houver erro ao acessar localStorage, ignora
      console.warn('Erro ao acessar localStorage:', error);
    }
  }, []);

  // Salva no localStorage quando o dia selecionado muda
  useEffect(() => {
    if (selectedDay) {
      try {
        localStorage.setItem(SELECTED_DAY_KEY, selectedDay);
      } catch (error) {
        console.warn('Erro ao salvar no localStorage:', error);
      }
    }
  }, [selectedDay]);

  // Função para selecionar um dia
  const handleSelectDay = (day: WeekDay) => {
    setSelectedDay(day);
  };

  // Função para voltar ao treino de hoje
  const handleBackToToday = () => {
    if (todayWorkout) {
      setSelectedDay(today);
    }
  };

  // Função para compartilhar o treino
  const handleShare = () => {
    if (!selectedDay) return;

    const workout = workouts.find((w) => w.day === selectedDay);
    if (!workout) return;

    // Formata o treino em texto
    let text = `📅 ${workout.dayName} – ${workout.workoutName}\n\n`;
    workout.sections.forEach((section) => {
      text += `${section.title}:\n`;
      section.items.forEach((item) => {
        text += `- ${item}\n`;
      });
      text += '\n';
    });

    // Copia para a área de transferência
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Treino copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err);
        alert('Erro ao copiar o treino.');
      });
  };

  // Obtém o treino selecionado
  const selectedWorkout = selectedDay
    ? workouts.find((w) => w.day === selectedDay)
    : null;

  // Obtém o nome do dia selecionado para exibição
  const selectedDayName = selectedDay ? getDayName(selectedDay) : 'Nenhum';

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Treino da Semana</h1>
        <p className={styles.subtitle}>
          Hoje é: <strong>{getDayName(today)}</strong> • Treino selecionado:{' '}
          <strong>{selectedDayName}</strong>
        </p>
      </header>

      <div className={styles.actions}>
        {todayWorkout && selectedDay !== today && (
          <button
            className={styles.actionButton}
            onClick={handleBackToToday}
            aria-label="Voltar para o treino de hoje"
          >
            🔄 Voltar pro treino de hoje
          </button>
        )}
        {selectedWorkout && (
          <button
            className={styles.actionButton}
            onClick={handleShare}
            aria-label="Compartilhar treino"
          >
            📤 Compartilhar
          </button>
        )}
      </div>

      <DayTabs selectedDay={selectedDay} onSelectDay={handleSelectDay} />

      <main className={styles.main}>
        {selectedWorkout ? (
          <WorkoutCard workout={selectedWorkout} />
        ) : (
          <NoWorkoutMessage today={today} onSelectDay={handleSelectDay} />
        )}
      </main>
    </div>
  );
}

export default App;
