# Desafio Smart Front End

Bem-vindo ao projeto **Desafio Smart Front End**! Este é um aplicativo front-end construído com React, TypeScript, Tailwind CSS e Jest para testes. Aqui você pode ver informações detalhadas sobre a instalação, execução, testes, estrutura do projeto, contribuição e licença.

## Índice

* **Instalação**: Fornece os comandos para clonar o repositório e instalar as dependências.
* **Executando o Projeto**: Explica como iniciar o projeto em modo de desenvolvimento.
* **Testes**: Instruções para executar testes utilizando Jest.
* **Estrutura do Projeto**: Descreve a organização das pastas e arquivos do projeto.
* **Contribuição**: Orientações para contribuir com o projeto.
* **Licença**: Especifica a licença do projeto.

## Instalação

Para começar a trabalhar com o projeto, você precisa clonar o repositório e instalar as dependências.

### Requisitos

* Node.js 14 ou superior

### Passos

1. **Clone o repositório:**

`git clone git clone https://fernandoforastieri-admin@bitbucket.org/fernandoforastieri/smart-desafio-front-end.git`

2. **Navegue até o diretório do projeto:**

`cd SmartDesafioFrontEnd`

3. **Instale as dependências:**

`npm install`
ou
`yarn install`

## Executando o Projeto

Para iniciar o projeto em modo de desenvolvimento, use o comando abaixo. Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo em seu navegador padrão.

`npm start`
ou
`yarn start`

O aplicativo será acessível em http://localhost:3000.

### Executando o Back End

O projeto consome os dados vindos diretamente da parte Back End do desafio, ambos precisam estar funcionando ao mesmo tempo, voce pode encontrar o repositorio back end e como inicia-lo aqui: [Desafio Back End](https://bitbucket.org/fernandoforastieri/smart-desafio-back-end/src/main/)

## Testes

O projeto utiliza Jest para testes. Para executar os testes, use o seguinte comando:

`npm test`
ou
`yarn test`

Os testes serão executados e você verá os resultados no terminal.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

* **public/**: Contém arquivos estáticos como index.html.
* **src/**: Contém o código-fonte do projeto, incluindo:
	+ Componentes: Reutilizáveis e isolados componentes React.
	+ Páginas: Páginas do aplicativo que utilizam os componentes.
	+ Estilos: Arquivos CSS e configurações do Tailwind CSS.
	+ Arquivos de tipagem: Definições de tipo para o TypeScript.
* **tests/**: Contém os arquivos de teste.
* **.gitignore**: Especifica quais arquivos e pastas devem ser ignorados pelo Git.
* **jest.config.js**: Configurações do Jest.
* **package.json**: Gerencia as dependências e scripts do projeto.
* **postcss.config.js**: Configurações do PostCSS.
* **tsconfig.json**: Configurações do TypeScript.
* **tailwind.config.js**: Configurações do Tailwind CSS.
* **README.md**: Documentação do projeto.

## Contribuição

Se você deseja contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
3. Faça suas alterações e adicione commits (git commit -am 'Adiciona nova funcionalidade').
4. Envie sua branch para o repositório remoto (git push origin feature/nova-funcionalidade).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License.
