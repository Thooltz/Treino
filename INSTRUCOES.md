# 🚀 Instruções para Rodar o App

## Passo a Passo

1. **Abra o terminal/prompt de comando** na pasta do projeto:
   ```
   cd C:\Projetos\Treino
   ```

2. **Instale as dependências** (se ainda não instalou):
   ```
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```
   npm run dev
   ```

4. **Abra o navegador** no endereço que aparecer no terminal (geralmente `http://localhost:5173`)

## ⚠️ Se não funcionar:

### Erro: "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org/
- Reinicie o terminal após instalar

### Erro: "Cannot find module"
- Delete a pasta `node_modules` e o arquivo `package-lock.json`
- Execute `npm install` novamente

### Erro no navegador
- Abra o Console do navegador (F12) e veja qual é o erro
- Verifique se o servidor está rodando no terminal

### Porta já em uso
- Se a porta 5173 estiver ocupada, o Vite usará outra porta automaticamente
- Veja no terminal qual porta está sendo usada

## 📱 Funcionalidades

- ✅ Detecta automaticamente o dia da semana
- ✅ Mostra o treino do dia atual
- ✅ Navegação entre dias (SEG, TER, QUA, QUI, SEX)
- ✅ Salva a seleção no navegador
- ✅ Botão para voltar ao treino de hoje
- ✅ Botão para compartilhar/copiar treino

## 🛠️ Comandos Úteis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
