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

---

## Deploy Automatizado com AWS e GitHub Actions

Este projeto está configurado com um workflow de Continuous Integration/Continuous Deployment (CI/CD) usando GitHub Actions para automatizar a publicação (deploy) na AWS.

O workflow está definido em `.github/workflows/deploy.yml` e é acionado a cada `push` na branch `main`.

### Como Funciona

O workflow realiza duas tarefas principais em paralelo:
1.  **Deploy do Frontend:** Faz o build da aplicação React e sincroniza os arquivos estáticos com um bucket do AWS S3, que serve o site. Em seguida, invalida o cache do AWS CloudFront para que as atualizações fiquem disponíveis imediatamente.
2.  **Deploy do Backend:** Instala as dependências do servidor Node.js, cria um pacote `.zip` e o envia para o AWS Elastic Beanstalk, que gerencia a execução da API.

### Configuração Necessária (Passo a Passo)

Para que o deploy automático funcione, você precisa configurar suas credenciais da AWS no seu repositório do GitHub e atualizar os nomes dos recursos no arquivo `deploy.yml`.

**Passo 1: Configurar os Secrets no GitHub**

Você precisa criar "secrets" no seu repositório para armazenar suas chaves da AWS de forma segura.

1.  No seu repositório no GitHub, vá para **Settings** > **Secrets and variables** > **Actions**.
2.  Clique em **New repository secret**.
3.  Crie os dois secrets abaixo:
    -   **Nome:** `AWS_ACCESS_KEY_ID`
        -   **Valor:** Sua Access Key ID da AWS.
    -   **Nome:** `AWS_SECRET_ACCESS_KEY`
        -   **Valor:** Sua Secret Access Key da AWS.

> **Importante:** Crie um usuário IAM na AWS com permissões mínimas necessárias para S3, CloudFront e Elastic Beanstalk, em vez de usar suas credenciais de root.

**Passo 2: Atualizar o Arquivo `deploy.yml`**

Abra o arquivo `.github/workflows/deploy.yml` e substitua os valores de placeholder pelos nomes dos seus recursos na AWS.

-   **`aws-region`**: Altere `us-east-1` para a sua região da AWS em ambos os jobs (frontend e backend).
-   **`your-s3-bucket-name`**: No job `deploy-frontend`, substitua pelo nome do seu bucket S3.
-   **`your-cloudfront-distribution-id`**: No job `deploy-frontend`, substitua pelo ID da sua distribuição CloudFront.
-   **`Hubstry-TradeFlow-App`**: No job `deploy-backend`, substitua pelo nome da sua aplicação no Elastic Beanstalk.
-   **`Hubstry-TradeFlow-Env`**: No job `deploy-backend`, substitua pelo nome do seu ambiente no Elastic Beanstalk.

**Passo 3: Fazer o Deploy**

Após configurar os secrets e atualizar o arquivo de workflow, basta fazer um `git push` para a branch `main`. O GitHub Actions iniciará o processo de deploy automaticamente. Você pode acompanhar o progresso na aba **Actions** do seu repositório.

## Tecnologias Utilizadas

-   **Backend:** Node.js, Express.js, CORS
-   **Frontend:** React, Create React App
-   **Gerenciador de Pacotes:** npm

---

## Aviso de Propriedade Intelectual

Este projeto, incluindo seu conceito, nome ("Hubstry Dev++ TradeFlow") e a tecnologia core, é propriedade intelectual da **Hubstry**, em favor de seu fundador e CEO, **Guilherme Gonçalves Machado**.

Todos os direitos são reservados. A reprodução, distribuição ou qualquer outra forma de uso não autorizada deste material, no todo ou em parte, é estritamente proibida.
