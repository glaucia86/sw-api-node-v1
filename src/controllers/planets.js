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
    const { params: { id } } = req;

    return this.Planet.find({ _id: id })
      .then(planets => res.send(planets))
      .catch(err => res.status(400).send(err.message));
  }

  addNewPlanet(req, res) {
    const planet = new this.Planet(req.body);

    return planet
      .save()
      .then(() => res.status(201).send(planet))
      .catch(err => res.status(422).send(err.message));
  }

  updatePlanet(req, res) {
    return this.Planet.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  deletePlanet(req, res) {
    return this.Planet.remove({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default PlanetsController;
