/**
 *
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 05/02/2018
 *
 */

import app from './src/app';
const port = 8000;

app.listen(port, () => {
    console.log(`Aplicação executando na porta ${port}`);
});

//Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão:
app.use(function(req, res, next) {
    console.log("Essa mensagem deverá aparecer antes das rotas....");
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});




