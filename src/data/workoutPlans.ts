import { DayPlan, Exercise } from '../types/workout';
import { generateExerciseId } from '../utils/dayUtils';

/**
 * Converte uma string de exercício para um objeto Exercise
 * Extrai séries e reps quando disponíveis
 */
function parseExerciseItem(item: string): Exercise {
  // Remove numeração inicial (ex: "1. ", "2. ")
  const cleanItem = item.replace(/^\d+\.\s*/, '').trim();
  
  // Tenta extrair séries e reps do formato "Nome – 4×12" ou "Nome – 4×10–12"
  // Também captura formatos como "4×12 (mulher) | 4×8–10 (homem)"
  const setsRepsMatch = cleanItem.match(/–\s*(\d+)×([\d–]+(?:\s*\([^)]+\))?(?:\s*\|\s*\d+×[\d–]+(?:\s*\([^)]+\))?)?)/);
  
  let name = cleanItem;
  let sets: number | undefined;
  let reps: string | undefined;
  
  if (setsRepsMatch) {
    sets = parseInt(setsRepsMatch[1], 10);
    reps = setsRepsMatch[2].trim();
    // Remove a parte de séries/reps do nome, incluindo tudo após o primeiro "–"
    name = cleanItem.replace(/\s*–\s*.*$/, '').trim();
  } else {
    // Remove outras informações como "(se estiver vazia)" ou "– X min"
    // Mas mantém o nome principal
    const parts = cleanItem.split('–');
    name = parts[0].trim();
    // Se houver informação após o "–" que não seja séries/reps, pode ser tempo ou observação
    if (parts.length > 1 && !parts[1].match(/\d+×/)) {
      // É tempo ou observação, pode ser incluído no nome ou ignorado
      // Por enquanto, mantemos apenas o nome principal
    }
  }
  
  // Remove parênteses com observações do nome final
  name = name.replace(/\s*\([^)]+\)\s*$/, '').trim();
  
  return {
    id: generateExerciseId(name),
    name: name,
    sets: sets,
    reps: reps,
  };
}

/**
 * Converte seções de workout para DayPlan
 */
export function convertSectionsToDayPlan(sections: Array<{ title: string; items: string[] }>): DayPlan[] {
  return sections.map((section) => ({
    title: section.title,
    exercises: section.items.map(parseExerciseItem),
  }));
}
