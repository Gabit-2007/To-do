# 📝 To-Do App

Uma aplicação de gerenciamento de tarefas desenvolvida com **React**, **TypeScript** e **Tailwind CSS**, utilizando **JSON Server** para simular uma API REST.

## ✨ Funcionalidades

- ✅ Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- ✔️ Marcar tarefas como concluídas
- 🔄 Atualização em tempo real da interface
- 💾 Persistência de dados utilizando JSON Server
- 📱 Interface responsiva

## 🚀 Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- JSON Server
- Axios

## 📂 Estrutura do projeto

```
src/
├── assets/
├── components/
├── pages/
├── services/
├── types/
├── hooks/
├── App.tsx
└── main.tsx

db.json
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Gabit-2007/todo-app.git
```

Entre na pasta:

```bash
cd todo-app
```

Instale as dependências:

```bash
pnpm i
```

## ▶️ Executando o projeto

### Inicie o JSON Server

```bash
npx json-server db.json --port 3001
```

### Em outro terminal, execute o React

```bash
pnpm dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

A API estará disponível em:

```
http://localhost:3001/tasks
```

## 📌 Endpoints

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | /tasks | Lista todas as tarefas |
| POST | /tasks | Cria uma tarefa |
| PATCH | /tasks/:id | Atualiza uma tarefa |
| DELETE | /tasks/:id | Remove uma tarefa |

## 📸 Preview



## 📖 Aprendizados

Este projeto foi desenvolvido para praticar:

- Componentização em React
- Hooks
- Consumo de APIs REST
- CRUD completo
- Tipagem com TypeScript
- Estilização com Tailwind CSS
- Organização de projetos
- Comunicação entre Front-end e API

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo.
