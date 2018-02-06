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





