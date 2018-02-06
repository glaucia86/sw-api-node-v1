/**
 *
 * Arquivo: test/unit/controllers/planets_spec.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por receber os testes de unidade de 'Planets' da Api.
 * Data: 06/02/2018
 *
 */

import PlanetsController from '../../../src/controllers/planets';
import sinon from 'sinon';
import Planet from '../../../src/models/planet';
import planet from '../../../src/models/planet';

/**
 * Teste default
 */
describe('Controllers: Planets', ()=> {
    const defaultPlanet =[{
        nome: 'Tatooine',
        clima: 'árido',
        terreno: 'deserto'
    }];

    /**
     * Teste responsável por retornar uma lista de Planetas:
     */
    describe('get() planets', () => {
        it('Deve chamar a função send com uma lista de Planetas', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            Planet.find = sinon.stub();

            Planet.find.withArgs({}).resolves(defaultPlanet);

            const planetsController = new PlanetsController(Planet);
            return planetsController.get(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultPlanet);
            });
        });

        /**
         * Teste responsável por retornar alguma mensagem caso venha a ocorrer algum erro em conexão com o BD:
         */
        it('Deve retornar 400 quando vier a ocorrer error', () => {
            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            response.status.withArgs(400).returns(response);
            Planet.find = sinon.stub();
            Planet.find.withArgs({}).rejects({ message: "Error" });

            const planetsController = new PlanetsController(Planet);

            return planetsController.get(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, 'Error');
            });
        });
    });
}); 

