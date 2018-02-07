/**
 *
 * Arquivo: src/controllers/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 * Data: 06/02/2018
 *
 */
class PlanetsController {
  constructor(Planet) {
    this.Planet = Planet;
  }

  get(req, res) {
      return this.Planet.find({})
      .then(planets => res.send(planets))
      .catch(err => res.status(400).send(err.message));
  }

  getPlanetsById(req, res) {
      return Promise.resolve([
        {
          __v: 0,
          _id: "59821330eacea81b34c74d64",
          nome: "Tatooine",
          clima: "árido",
          terreno: "deserto"
        }
      ]).then(planets => res.send(planets));
  }
}

export default PlanetsController;
