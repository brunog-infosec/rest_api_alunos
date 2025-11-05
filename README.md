# Lang (pt-BR)

## REST API Alunos

API RESTful para cadastro e consulta de alunos, feita em Node.js e Express.

- 🧩 Stack: Node.js, Express, MariaDB, Sequelize ORM
- 🔐 Autenticação: JWT
- 🧠 Aprendizado: CRUD completo e middleware de validação
- 🚀 Para rodar: configure .env.example, criando um novo .env com seus dados locais, depois npm install && npm run dev

A RESTful API for managing student data.

## Overview

This project implements a REST API that allows performing CRUD operations (Create, Read, Update, Delete) on student records.

## Features

- Create new student records
- Retrieve student information
- Update existing student data
- Delete student records
- Data validation
- Error handling

## Technologies

- Node.js
- Express.js
- Database (MariaDB)
- RESTful architecture

## Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/rest_api_alunos.git
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

4. Start the server

```bash
npm start
```

## API Endpoints

- `GET /api/alunos` - Get all students
- `GET /api/alunos/:id` - Get student by ID
- `POST /api/alunos` - Create new student
- `PUT /api/alunos/:id` - Update student
- `DELETE /api/alunos/:id` - Delete student

## License

MIT License-+-+-+-+-+
