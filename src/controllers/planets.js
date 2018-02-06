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
    };

    get(req, res) {
        return this.Planet.find({})
            .then(planets => res.send(planets))
            .catch(err => res.status(400).send(err.message));
    }
}

export default PlanetsController;
