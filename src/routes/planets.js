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

router.get("/", (req, res) => planetsController.get(req, res));
router.get("/:id", (req, res) => planetsController.getPlanetsById(req, res));
router.post("/", (req, res) => planetsController.addNewPlanet(req, res));
router.put("/:id", (req, res) => planetsController.updatePlanet(req, res));
router.delete("/:id", (req, res) => planetsController.deletePlanet(req, res));

export default router;
