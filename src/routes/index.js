/**
 *
 * Arquivo: src/routes/index.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por carregar todas as rotas da app.
 * Data: 06/02/2018
 *
 */

import express from 'express';
import planetsRoute from './planets';

const router = express.Router();

router.use('/planets', planetsRoute);
router.get('/api', (req, res) => res.json({message: 'Bem Vindo(a) a API da B2WAds'}));

export default router;
