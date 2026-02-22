# Treino da Semana

Site responsivo (mobile-first) para exibir treino semanal, desenvolvido com React + TypeScript + Vite.

## 🚀 Como rodar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## 📦 Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção

## ✨ Funcionalidades

- **Detecção automática do dia**: Ao abrir o site, ele detecta automaticamente o dia da semana atual e exibe o treino correspondente
- **Navegação manual**: Botões/abas para trocar entre os dias da semana (SEG, TER, QUA, QUI, SEX)
- **Persistência**: A seleção manual é salva no localStorage
- **Compartilhar**: Botão para copiar o treino selecionado para a área de transferência
- **Voltar para hoje**: Botão para retornar ao treino do dia atual
- **Design responsivo**: Layout mobile-first que se adapta a diferentes tamanhos de tela
- **Animações suaves**: Transições animadas ao trocar de treino

## 📱 Estrutura do projeto

```
src/
  ├── components/        # Componentes React
  │   ├── DayTabs.tsx
  │   ├── WorkoutCard.tsx
  │   ├── SectionList.tsx
  │   └── NoWorkoutMessage.tsx
  ├── data/             # Dados do treino
  │   └── workouts.ts
  ├── App.tsx           # Componente principal
  ├── main.tsx          # Ponto de entrada
  └── index.css         # Estilos globais
```

## 🎨 Tecnologias

- React 18
- TypeScript
- Vite
- CSS Modules
