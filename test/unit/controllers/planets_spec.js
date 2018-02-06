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

describe('Controllers: Planets', () => {
  const defaultPlanet = [{
      nome:'Tatooine',
      clima:'árido',
      terreno:'deserto'
  }];

   const defaultRequest = { params: {} };

   describe("get() planets", () => {
     it("Deve chamar a função send com uma lista de Planetas", () => {
       const response = { send: sinon.spy() };
       Planet.find = sinon.stub();

       Planet.find.withArgs({}).resolves(defaultPlanet);

       const planetsController = new PlanetsController(Planet);

       return planetsController
         .get(defaultRequest, response)
         .then(() => {
           sinon.assert.calledWith(response.send, defaultPlanet);
         });
     });

     it("Deve retornar 400 quando vier a ocorrer error", () => {
       const request = {};
       const response = { send: sinon.spy(), status: sinon.stub() };

       response.status.withArgs(400).returns(response);
       Planet.find = sinon.stub();
       Planet.find.withArgs({}).rejects({ message: "Error" });

       const planetsController = new PlanetsController(Planet);

       return planetsController.get(request, response).then(() => {
         sinon.assert.calledWith(response.send, "Error");
       });
     });
   });


});
