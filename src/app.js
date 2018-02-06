/**
 *
 * Arquivo: src/api.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por iniciar e carregar os middlewares.
 * Data: 05/02/2018
 *
 */

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/api', (req, res) => res.json({message: 'Bem Vindo(a) a API da B2WAds'}));

app.get('/planets', (req, res) => res.send([{
   name: 'Tatooine',
   climate: 'árido',
   terrain: 'deserto'
 }]));

export default app;
