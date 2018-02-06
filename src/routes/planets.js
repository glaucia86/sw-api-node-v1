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
import Planet from '../models/planet';

const router = express.Router();
const planetsController = new PlanetsController(Planet);

router.get('/', (req, res) => planetsController.get(req, res));

export default router;