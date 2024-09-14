# Laudêmio Management App

## Descrição

Este projeto tem como objetivo criar um aplicativo mobile multiplataforma para o **registro e acompanhamento de pagamentos de laudêmios** de imóveis pertencentes às paróquias. O sistema permite que o funcionário responsável pela arrecadação possa **cadastrar imóveis**, **registrar pagamentos**, e **acompanhar o histórico** de cada imóvel de forma simples e prática, eliminando a necessidade de um controle manual em livros físicos.

## Funcionalidades

- **Cadastro de Imóveis**: Permite o registro de novos imóveis com informações como endereço, proprietário, situação, e anotações.
- **Listagem de Imóveis**: Exibe uma lista de todos os imóveis cadastrados no sistema, com possibilidade de filtro e busca.
- **Registro de Pagamentos**: Registra o pagamento de laudêmios por mês e ano, permitindo o acompanhamento do histórico de cada imóvel.
- **Histórico de Pagamentos**: Exibe o histórico de pagamentos de um imóvel específico, permitindo aos administradores planejar futuras cobranças.

## Tecnologias Utilizadas

### Frontend
- **React Native**: Utilizado para o desenvolvimento do aplicativo mobile. Escolhido por sua familiaridade com ReactJS e por ser uma solução multiplataforma, permitindo o desenvolvimento para Android e iOS com uma base de código unificada.
- **Expo**: Ferramenta para desenvolvimento e build de aplicativos React Native. Utilizada para simplificar o processo de geração do APK para Android.

### Backend
- **Node.js**: Usado para desenvolver a API REST que fornece os dados para o aplicativo mobile.
- **Express.js**: Framework utilizado para a construção das rotas e serviços no backend.
- **SQLite**: Banco de dados utilizado para armazenar os registros de imóveis e pagamentos de forma leve e eficiente.
- **Knex.js**: Utilizado para gerenciar as migrations e facilitar o acesso ao banco de dados.

### Deploy
- **AWS EC2**: O backend foi deployado em uma instância EC2 da AWS, configurada com IP fixo para facilitar o acesso pelo aplicativo.
- **Expo**: O aplicativo mobile foi empacotado em um APK através do Expo para ser distribuído ao usuário final.

## Estrutura do Projeto

```bash
├── mobile/               # Código do aplicativo mobile
│   ├── assets/           # Ícones, imagens e recursos visuais
│   ├── src/              # Código principal com arquivos de pages
│   └── services/         # Camada de integração com a API
├── backend/src/          # Código do backend (Node.js)
│   ├── controllers/      # Controladores que gerenciam a lógica das rotas
│   ├── database/         # Migrations do Knex para criação das tabelas
│   └── routes            # Definição das rotas da API
├── README.md             # Documentação do projeto
└── package.json          # Dependências e scripts do projeto
```

## Instalação e Configuração

### Requisitos

- **Node.js** (v14 ou superior)
- **Expo CLI** (para rodar o aplicativo mobile)
- **AWS CLI** (para configurar a instância EC2)

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/thiago-liracst/LauTec
   cd LauTec/backend
   ```

2. Instale as dependências do backend:
   ```bash
   npm install
   ```

3. Execute as migrations para configurar o banco de dados SQLite:
   ```bash
   npx knex migrate:latest
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. O backend estará rodando em `http://localhost:3000`.

### Frontend

1. Entre na pasta `client`:
   ```bash
   cd ../mobile
   ```

2. Instale as dependências do React Native:
   ```bash
   npm install
   ```

3. Execute o aplicativo no Expo:
   ```bash
   expo start
   ```

4. Escaneie o QR code no Expo Go App para visualizar o aplicativo em seu dispositivo móvel.

### Deploy do Backend

1. Faça login na AWS e crie uma instância EC2.
2. Configure as permissões e portas necessárias para o servidor.
3. Faça deploy do backend na EC2 e configure um IP fixo.
4. Atualize o endereço da API no frontend para o IP da instância.

### Geração do APK

1. Para gerar o APK do aplicativo mobile, execute o comando:
   ```bash
   expo build:android
   ```

2. O APK será gerado e poderá ser distribuído diretamente para os usuários.