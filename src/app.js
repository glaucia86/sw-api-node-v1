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
import routes from './routes';

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

export default app;
