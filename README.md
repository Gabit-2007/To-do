# 📝 To-Do

> Uma aplicação de gerenciamento de tarefas desenvolvida com React, TypeScript e TanStack Query para praticar consumo de APIs, gerenciamento de estado assíncrono e validação de formulários.

## ✨ Funcionalidades

- ✅ Listar tarefas
- ➕ Criar novas tarefas
- ✔️ Marcar tarefas como concluídas
- 🗑️ Excluir tarefas
- 🔄 Atualização automática da lista após alterações
- 📋 Validação de formulários com Zod
- 🔔 Feedback visual utilizando React Toastify

---

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- TanStack Query
- React Hook Form
- Zod
- Axios
- Tailwind CSS 4
- React Router
- React Toastify

---

## 📂 Estrutura do projeto

```text
src
├── components
├── hooks
├── schema
├── services
├── assets
├── routes
└── main.tsx
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/to-do.git
```

Entre na pasta do projeto:

```bash
cd to-do
```

Instale as dependências:

```bash
pnpm install
```

Inicie a API com JSON Server:

```bash
pnpm json-server
```

Em outro terminal, inicie a aplicação:

```bash
pnpm dev
```

A aplicação estará disponível em:

- Front-end: http://localhost:5173
- API: http://localhost:3000## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/to-do.git
```

Entre na pasta do projeto:

```bash
cd to-do
```

Instale as dependências:

```bash
pnpm install
```

Inicie a API com JSON Server:

```bash
pnpm json-server
```

Em outro terminal, inicie a aplicação:

```bash
pnpm dev
```

A aplicação estará disponível em:

- Front-end: http://localhost:5173
- API: http://localhost:3000

---

## 📦 Scripts

```bash
pnpm dev          # Inicia o front-end
pnpm json-server  # Inicia o JSON Server
pnpm build        # Gera a versão de produção
pnpm preview      # Visualiza o build
pnpm lint         # Executa o ESLint
```

---

## 📡 API

Este projeto utiliza o **JSON Server** para simular uma API REST durante o desenvolvimento.

Operações disponíveis:

- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

Os dados são armazenados no arquivo `db.json`.

---

## 💡 Conceitos praticados

- Componentização
- Custom Hooks
- TanStack Query (Queries e Mutations)
- Cache Invalidation
- React Hook Form
- Validação com Zod
- Consumo de API REST com Axios
- Tipagem com TypeScript
- Estilização com Tailwind CSS

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo.