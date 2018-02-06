/**
 *
 * Arquivo: src/controllers/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 * Data: 06/02/2018
 *
 */

class PlanetsController {

    get(req, res) {
        return res.send([{
            nome:'Tatooine',
            clima: 'árido',
            terreno: 'deserto'
        }])
    }
}

export default PlanetsController;
