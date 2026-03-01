import { useState, useEffect } from 'react';

/**
 * Hook genérico para gerenciar estado com persistência no localStorage
 */
export function useLocalStorageState<T>(
  key: string,
  initial: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Estado inicial: tenta carregar do localStorage, senão usa o valor inicial
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item) as T;
      }
    } catch (error) {
      console.warn(`Erro ao carregar ${key} do localStorage:`, error);
    }
    return initial;
  });

  // Salva no localStorage sempre que o estado mudar
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Erro ao salvar ${key} no localStorage:`, error);
    }
  }, [key, state]);

  return [state, setState];
}
