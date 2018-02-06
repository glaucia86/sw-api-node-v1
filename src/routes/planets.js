/**
 *
 * Arquivo: src/routes/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas da api 'Planets'.
 * Data: 06/02/2018
 *
 */

import express from 'express';
import PlanetsController from '../controllers/planets';

const router = express.Router();
const planetsController = new PlanetsController();

router.get('/', (req, res) => planetsController.get(req, res));

export default router;