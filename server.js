/**
 *
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 05/02/2018
 *
 */

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

//Criando uma instância das Rotas via Express:
const router = express.Router();

//Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão:
router.use(function(req, res, next) {
    console.log("Algo está acontecendo aqui....");
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});

router.get('/', (req, res) => res.json({message: 'Bem Vindo(a) a API da B2WAds'}));

//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);

app.listen(8000, () => {
    console.log("Aplicação executando na porta 8000");
});
