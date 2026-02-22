import { WorkoutSection } from '../data/workouts';
import styles from './SectionList.module.css';

interface SectionListProps {
  section: WorkoutSection;
}

// Componente para exibir uma seção do treino (ex: Aquecimento, Peito, etc.)
export function SectionList({ section }: SectionListProps) {
  // Ícones/emojis para cada tipo de seção
  const getSectionIcon = (title: string): string => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('aquecimento')) return '🔥';
    if (titleLower.includes('peito')) return '💪';
    if (titleLower.includes('tríceps')) return '💪';
    if (titleLower.includes('costas')) return '💪';
    if (titleLower.includes('bíceps')) return '💪';
    if (titleLower.includes('perna')) return '🦵';
    if (titleLower.includes('ombro')) return '💪';
    if (titleLower.includes('abdômen')) return '🔥';
    if (titleLower.includes('cardio')) return '🏃';
    return '📋';
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span className={styles.icon}>{getSectionIcon(section.title)}</span>
        {section.title}
      </h3>
      <ul className={styles.list}>
        {section.items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
