import BaseController from "./baseController";

/**
 *
 * Arquivo: src/controllers/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 * Data: 06/02/2018
 *
 */

class PlanetsController extends BaseController {
  constructor(Planet, apiRoot) {
    super(apiRoot, Planet);
  }
}

export default PlanetsController;
