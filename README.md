# Star Wars API Node.JS by Glaucia Lemos

<p align="center">
  <img src="https://i.imgur.com/YUNJs1N.gif"/>  
</p>

Projeto com o objetivo final de criar uma api que realize as 4 operações do HTTP: GET, DELETE, PUT &amp; POST. Utilizando das boas práticas de programação e realizando o TDD.

## Recursos Utilizados no Desenvolvimento:

- Node.Js;
- Express.Js
- MongoDb & MLab;
- ES6;
- Babel (Transpiler);
- Code Metrics; (análise de desenvolvimento do codigo)
- Visual Studio Code;
- Json data (para retornar os dados);
- PostMan (testar a API criada);
- TDD (Testes de Unidade e Integração);
- Mocha, Chai, Sinon & Supertest; 
- BDD (Behaviour Driven Development);

## Testando a Aplicação no Postman:
Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaixo para 
poder testar cada API criada!

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)


**p.s.: por padrão já estou deixando a conexão de dados do Cloud: MLab, para facilitar todos vocês. Mas, caso queiram testar via MongoDb, bastam baixar e descomentar a connection criada nos arquivos contidos na pasta: 'config'.**

### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

## Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

## Padrão das Rotas Criadas: 

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas a serem desenvolvidas:

obs.: api de exemplo através do site: https://jsonplaceholder.typicode.com

 ROTA                      |     HTTP(Verbo)   |      Descrição                |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/planets                    |       GET         | Selecionar Todos os Planetas     | GET:    http://localhost:8000/api/planets     
/planets                     |       POST        | Criar um Post                 | POST:   http://localhost:8000/api/planets
/planets/:id             |       GET         | Selecionar Por Id             | GET:    http://localhost:8000/planets/:id
/planets/:nome             |       GET         | Selecionar Por Nome            | GET:    http://localhost:8000/planets/:name
/planets/:id            |       PUT         | Atualizar Por Id              | PUT:    http://localhost:8000/planets/:id   
/planets/:id           |       DELETE      | Excluir Por Id                | DELETE: http://localhost:8000/planets/:id

### Executando a Aplicação

Primeiro, você precisará abrir um terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Depois, abre um outro terminal, para iniciar a aplicação. Para isso, basta iniciar o server para o projeto ser executado localmente. (via nodemon)

```
npm start
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:8000/api`. E pronto a aplicação será executada de maneira local na sua máquina.  

Se tudo der certo, deverá apresentar a seguinte mensagem:

```
Bem Vindo(a) a API da B2WAds
```      

## Executando os Testes:

Basta executar o comando: **(dentro da pasta src)**

1) Para Testes de Integração:

```
> npm run test:integration

```

2) Para Testes de Unidade:

```
> npm run test:unit

```

**documentação em desenvolvimento**


