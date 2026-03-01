import { DayKey } from '../types/workout';
import { WeekDay } from '../data/workouts';

/**
 * Converte WeekDay para DayKey
 */
export function weekDayToDayKey(weekDay: WeekDay): DayKey {
  const map: Record<WeekDay, DayKey> = {
    [WeekDay.MONDAY]: 'mon',
    [WeekDay.TUESDAY]: 'tue',
    [WeekDay.WEDNESDAY]: 'wed',
    [WeekDay.THURSDAY]: 'thu',
    [WeekDay.FRIDAY]: 'fri',
    [WeekDay.SATURDAY]: 'sat',
    [WeekDay.SUNDAY]: 'sun',
  };
  return map[weekDay];
}

/**
 * Obtém o DayKey do dia atual
 */
export function getDayKey(): DayKey {
  const today = new Date().getDay();
  // getDay() retorna: 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const dayMap: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return dayMap[today];
}

/**
 * Gera um ID único para um exercício baseado no nome
 */
export function generateExerciseId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]/g, '-') // Substitui caracteres especiais por hífen
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens no início/fim
}
