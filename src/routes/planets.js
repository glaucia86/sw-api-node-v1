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
router.get('/:id', (req, res) => planetsController.getById(req, res));
router.post('/', (req, res) => planetsController.create(req, res));
router.put('/:id', (req, res) => planetsController.update(req, res));
router.delete('/:id', (req, res) => planetsController.remove(req, res));

export default router;
