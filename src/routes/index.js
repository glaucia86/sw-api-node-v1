/**
 *
 * Arquivo: src/routes/index.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por carregar todas as rotas da app.
 * Data: 06/02/2018
 *
 */

import express from "express";
import RouterHandler from "./routerHandler";

import PlanetsController from '../controllers/planets';
import Planet from '../models/planet';

const router = express.Router();

// para adicionar rotas para novos controllers, só adicionar os 
// controllers no array abaixo
const controllers = [new PlanetsController(Planet, '/planets')];
const routerHandler = new RouterHandler(router, controllers);
routerHandler.registerRoutes();

router.get("/", (req, res) =>
  res.json({ message: "Bem Vindo(a) a API Star Wars!" })
);

export default router;
