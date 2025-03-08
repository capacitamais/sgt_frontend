## UNISENAI - Análise e Desenvolvimento de Sistemas<br>

## PROJETO APLICADO 4 - 2025-1<br>

- Antonio Hebert Mendonça dos Santos
- Daniel Andrade Silva
- Enrik
- Joseli Divino
- Miyuki Araújo Hirata

# Frontend de um aplicativo para Gerenciamento de Treinamentos <br>

Neste documento

- Sobre o aplicativo
- Arquitetura do aplicativo
- Stack
- Instruções para execução

## Sobre o aplicativo

O aplicativo será utilizado para a gestão de treinamentos.
Este repositório se refere ao frontend do aplicativo.
Acesse o repositório do backend: https://github.com/jonatasrossetto/sgt_backend

## Arquitetura do aplicativo

- O aplicativo é estruturado em três camadas principais, uma camada de front-end, uma camada de back-end e uma camada de persistência.<br>
- A camada de front-end foi desenvolvida como uma SPA (Single Page Application) utilizando o framework Angular, com NodeJs e TypeScript, o design das telas foi implementado utilizando-se a biblioteca de componentes Bootstrap. O front-end se comunica com a api rest do back-end através de requisições http com autorização concedida por um token JWT fornecido pelo back-end no momento do login.<br>
- A camada de back-end foi desenvolvida em Node com auxílio do framework NestJs para implementação dos end-points REST que realizam as operações do sistema. A autorização de acesso aos end-points é realizada através da validadação de um token JWT. O acesso via CORS está habilitado até a finalização dos teste. O Prisma ORM é utilizado para a comunicação com a camada de persistência. O gerenciador de dependências é o Npm.<br>
- A camada de persistência é implementada com o MySql, um sistema gerenciador de banco de dados relacional.<br>

## Frontend Stack:

- IDE Vscode >2023-09
- npm
- Nodejs v22.11.0
- Angular 19.0.3
- Bootstrap 5.3.3
- JWT
- Postman

## Instruções para execução do backend

- Baixar ou clonar este repositório.

### Back-end

- No prompt de comando executar: npm install
- No prompt de comando executar: npm start 
- Para testar, no navegador acesse http://localhost:4200 

### Telas implementadas

- https://github.com/jonatasrossetto/sgt_frontend/blob/main/printTelas20241205.pdf


