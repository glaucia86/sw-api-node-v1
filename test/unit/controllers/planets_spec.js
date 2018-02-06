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
        it('Deve retornar uma listas de Planetas', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const planetsController = new PlanetsController();
            planetsController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultPlanet)).to.be.true;
        });
    });
}); 

