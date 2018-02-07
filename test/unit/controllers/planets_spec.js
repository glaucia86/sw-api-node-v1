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

describe('Controller: Planets', () => {
  const defaultPlanet = [{
    __v: 0,
    _id: "56cb91bdc3464f14678934ca",
    nome:'Tatooine',
    clima:'árido',
    terreno:'deserto'
  }];

  const defaultRequest = {
    params: {}
  };

  describe('get() planets', () => {
    it("Deve chamar a função send com uma lista de Planetas", () => {
      const response = { send: sinon.spy() };
      Planet.find = sinon.stub();

      Planet.find.withArgs({}).resolves(defaultPlanet);

      const planetsController = new PlanetsController(Planet);

      return planetsController.get(defaultRequest, response).then(() => {
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

  describe('getById()', () => {
    it("Deve retornar um determinado Planeta por Id", () => {
      const fakeId = "a-fake-id";
      const request = { params: { id: fakeId } };
      const response = { send: sinon.spy() };

      Planet.find = sinon.stub();
      Planet.find.withArgs({ _id: fakeId }).resolves(defaultPlanet);

      const planetsController = new PlanetsController(Planet);

      return planetsController.getById(request, response).then(() => {
        sinon.assert.calledWith(response.send, defaultPlanet);
      });
    });
  });

  describe('create() planet', () => {
    it("Deve retornar um novo Planeta cadastrado", () => {
      const requestWithBody = Object.assign({}, { body: defaultPlanet[0] }, defaultRequest);
      const response = { send: sinon.spy(), status: sinon.stub() };
      class fakePlanet {
        save() {}
      }

      response.status.withArgs(201).returns(response);
      sinon
        .stub(fakePlanet.prototype, "save")
        .withArgs()
        .resolves();

      const planetsController = new PlanetsController(fakePlanet);

      return planetsController
        .create(requestWithBody, response)
        .then(() => {
          sinon.assert.calledWith(response.send);
        });
    });

    context("Quando ocorrer algum um erro", () => {
      it("Deve retornar o status 422", () => {
        const response = { send: sinon.spy(), status: sinon.stub() };

        class fakePlanet {
          save() {}
        }

        response.status.withArgs(422).returns(response);
        sinon
          .stub(fakePlanet.prototype, "save")
          .withArgs()
          .rejects({ message: "Error" });

        const planetsController = new PlanetsController(fakePlanet);

        return planetsController
          .create(defaultRequest, response)
          .then(() => {
            sinon.assert.calledWith(response.status, 422);
          });
      });
    });
  });

  describe('update() planet', () => {
    it('Deve retornar status 200 quando um Planeta for atualizado', () => {
      const fakeId = 'a-fake-id';
      const updatedPlanet = {
        _id: fakeId,
        nome: "Planeta Atualizado",
        clima: "Clima Atualizado",
        terreno: "Terreno Atualizado"
      };
      const request = {
        params: {
          id: fakeId
        },
        body: updatedPlanet
      };
      const response = {
        sendStatus: sinon.spy()
      };

      class fakePlanet {
        static findOneAndUpdate() {}
      }

      const findOneAndUpdateStub = sinon.stub(fakePlanet, 'findOneAndUpdate');
      findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedPlanet).resolves(updatedPlanet);

      const planetsController = new PlanetsController(fakePlanet);

      return planetsController.update(request, response)
        .then(() => {
          sinon.assert.calledWith(response.sendStatus, 200);
        });
    });

    context("Quando ocorrer algum um erro", () => {
      it("Deve retornar o status 422", () => {
        const fakeId = "a-fake-id";
        const updatedPlanet = { 
          _id: fakeId, 
          nome: "Produto Atualizado", 
          clima: "Clima Atualizado",
          terreno: "Terreno Atualizado" 
        };
        const request = { params: { id: fakeId }, body: updatedPlanet };
        const response = { send: sinon.spy(), status: sinon.stub() };

        class fakePlanet {
          static findOneAndUpdate() {}
        }

        const findOneAndUpdateStub = sinon.stub(fakePlanet, "findOneAndUpdate");
        findOneAndUpdateStub
          .withArgs({ _id: fakeId }, updatedPlanet)
          .rejects({ message: "Error" });
        response.status.withArgs(422).returns(response);

        const planetsController = new PlanetsController(fakePlanet);

        return planetsController.update(request, response).then(() => {
          sinon.assert.calledWith(response.send, "Error");
        });
      });
    });
  });

  describe('delete() planet', () => {
    it("Deve retornar status 204 quando o Planeta for excluído", () => {
      const fakeId = "a-fake-id";
      const request = { params: { id: fakeId } };
      const response = { sendStatus: sinon.spy() };

      class fakePlanet {
        static remove() {}
      }

      const removeStub = sinon.stub(fakePlanet, "remove");

      removeStub.withArgs({ _id: fakeId }).resolves([1]);

      const planetsController = new PlanetsController(fakePlanet);

      return planetsController.remove(request, response).then(() => {
        sinon.assert.calledWith(response.sendStatus, 204);
      });
    });

    context("Quando ocorrer algum erro", () => {
      it("Deve retornar status 400", () => {
        const fakeId = "a-fake-id";
        const request = { params: { id: fakeId } };
        const response = { send: sinon.spy(), status: sinon.stub() };

        class fakePlanet {
          static remove() {}
        }

        const removeStub = sinon.stub(fakePlanet, "remove");

        removeStub
          .withArgs({ _id: fakeId })
          .rejects({ message: "Error" });
        response.status.withArgs(400).returns(response);

        const planetsController = new PlanetsController(fakePlanet);

        return planetsController.remove(request, response).then(() => {
          sinon.assert.calledWith(response.send, "Error");
        });
      });
    });
  });
});

