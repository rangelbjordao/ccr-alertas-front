# CCR Alertas

## Sobre o Projeto

O **CCR Alertas** é um aplicativo desenvolvido para aprimorar a comunicação e a segurança operacional dos funcionários de trens e estações, permitindo a transmissão de informações críticas de maneira **rápida, eficiente e precisa**.

O projeto visa facilitar a troca de informações em tempo real, garantindo maior segurança e eficiência nas operações ferroviárias.

## Passos para o desenvolvimento do projeto

1. **Criação do Design Inicial** – O projeto começou com o design das telas no **Figma**, onde foram estruturadas as interfaces e definida a identidade visual.
2. **Prototipação com HTML e CSS** – Após a criação do design, o projeto foi desenvolvido inicialmente utilizando **HTML e CSS** para estruturar e estilizar as páginas.
3. **Migração para Next.js** – Com a base visual pronta, o projeto foi migrado para **Next.js**, permitindo um desenvolvimento mais dinâmico e escalável.
4. **Implementação da API** – Integração com o backend em Java (Quarkus) para persistência e manipulação dos dados de eventos.

## 🖥️ Como Utilizar o Sistema

### 🔑 Credenciais Padrão

Para acessar o sistema, utilize as seguintes credenciais:

-   **Usuário:** admin
-   **Senha:** admin

A página inicial do **CCR Alertas** apresenta as principais opções de navegação. O usuário pode interagir com os seguintes botões:

-   **Reportar Evento**: Acessa a página **Reportar Evento**, onde o funcionário pode registrar um novo evento.
-   **Monitorar Eventos em Aberto**: Acessa a página **Monitorar Eventos em Aberto**, que exibe uma lista de eventos já reportados e ainda em andamento, onde os funcionários também podem atualizar o status dos eventos.
-   **Solicitar Ajuda**: Acessa a página **Solicitar Ajuda**, que permite solicitar assistência em caso de necessidade.
-   **Histórico**: Acessa a página **Histórico**, para visualizar eventos que já foram resolvidos.

### 📌 Reportar Evento

Para reportar um evento, o usuário deve seguir os seguintes passos:

1. Acessar a página de **Reportar Evento**.
2. Preencher os seguintes campos obrigatórios:
    - **Selecionar Evento**: Selecione um evento para reportar.
    - **Local do Evento**: Informe o local onde o evento ocorreu.
    - **Descrição do Evento**: Forneça informações detalhadas sobre o ocorrido.
3. Clicar no botão **Enviar** para registrar o evento no sistema.

Após o envio, a equipe responsável poderá visualizar o evento reportado e tomar as providências necessárias.

### 📌 Monitorar Eventos em Aberto

1. Acessar a página **Monitorar Eventos**.
2. Visualizar lista de eventos em aberto, com informações de:
    - **Título**
    - **ID**
    - **Cargo**
    - **Local**
    - **Descrição**
    - **Data do Evento**
    - **Status**
3. O usuário pode atualizar e acompanhar o andamento de cada evento listado.

### 📌 Solicitar Ajuda

1. Acessar a página de **Solicitar Ajuda**.
2. Selecionar um evento em aberto na lista disponível.
3. Descrever a ajuda necessária.
4. Clicar no botão **Enviar** para atualizar o status e descrição.

### 📌 Histórico de Eventos Resolvidos

1. Acessar a página de **Histórico**.
2. Visualizar os eventos que já foram resolvidos. Cada item da lista contém:
    - **Título**
    - **ID**
    - **Cargo**
    - **Local**
    - **Descrição**
    - **Data do Evento**
    - **Status**

O sistema foi projetado para ser intuitivo e de fácil utilização, garantindo agilidade no acesso às informações.
