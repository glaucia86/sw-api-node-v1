/**
 *
 * Arquivo: src/controllers/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por fazer a chamada das rotas do HTTP no
 *  arquivo 'baseController.js'.
 * Data: 06/02/2018
 *
 */

import BaseController from "./baseController";

class PlanetsController extends BaseController {
  constructor(Planet, apiRoot) {
    super(apiRoot, Planet);
  }
}

export default PlanetsController;
