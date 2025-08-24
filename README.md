# Hubstry Dev++ TradeFlow - Prova de Conceito

Este repositório contém o código para a prova de conceito (PoC) da plataforma Hubstry Dev++ TradeFlow.

O objetivo desta PoC é demonstrar a viabilidade de uma plataforma digital integrada para simplificar e automatizar os fluxos de comércio exterior para pequenas e médias empresas.

## Visão Geral da Arquitetura

A aplicação segue uma arquitetura de monorepo com dois componentes principais:

-   `backend/`: Uma API Node.js/Express que serve dados simulados (mock) de operações de comércio exterior.
-   `frontend/`: Uma aplicação React que consome a API do backend e exibe os dados em um dashboard interativo.

## Como Executar a Aplicação

Siga as instruções abaixo para executar os dois componentes da aplicação localmente.

### 1. Backend (Servidor de API)

O backend é responsável por fornecer os dados das operações.

**Pré-requisitos:**
- Node.js e npm instalados.

**Passos:**

1.  **Navegue até o diretório do backend:**
    ```bash
    cd backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    node index.js
    ```

O servidor estará em execução em `http://localhost:3001`. Você pode testar o endpoint principal acessando `http://localhost:3001/api/operations` em seu navegador ou cliente de API.

### 2. Frontend (Aplicação React)

O frontend é a interface do usuário onde os dados das operações são exibidos.

**Pré-requisitos:**
- Node.js e npm instalados.

**Passos:**

1.  **Abra um novo terminal.**

2.  **Navegue até o diretório do frontend:**
    ```bash
    cd frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie a aplicação de desenvolvimento:**
    ```bash
    npm start
    ```

A aplicação React será aberta automaticamente em seu navegador no endereço `http://localhost:3000`. O dashboard buscará os dados do backend e exibirá a lista de operações.

## Tecnologias Utilizadas

-   **Backend:** Node.js, Express.js, CORS
-   **Frontend:** React, Create React App
-   **Gerenciador de Pacotes:** npm
