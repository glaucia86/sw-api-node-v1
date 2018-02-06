/**
 *
 * Arquivo: test/integration/routes/planets_spec.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por receber o teste das rotas de 'Planets' da Api.
 * Data: 05/02/2018
 *
 */

import Planet from '../../../src/models/planet';

describe("Routes: Planets", () => {
  let request;

  before(() => {
    return setupApp().then(app => {
      request = supertest(app);
    });
  });

  const defaultId = "56cb91bdc3464f14678934ca";

  const defaultPlanet = {
    nome: 'Tatooine',
    clima: 'árido',
    terreno: 'deserto'
  };

  const expectedPlanet = {
    __v: 0,
    _id: defaultId,
    nome: 'Tatooine',
    clima: 'árido',
    terreno: 'deserto'
  };

  beforeEach(() => {
    const planet = new Planet(defaultPlanet);
    planet._id = "56cb91bdc3464f14678934ca";
    return Planet.remove({}).then(() => planet.save());
  });

  afterEach(() => Planet.remove({}));

  describe("GET /planets", () => {
    it("Deve retornar uma lista de Planetas", done => {
      request.get("/planets").end((err, res) => {
        expect(res.body).to.eql([expectedPlanet]);
        done(err);
      });
    });

    context('Quando um encontrar um determinado Id', done => {
      it('Deve retornar 200 com um planeta', done => {
         
        request
          .get(`/planets/${defaultId}`)
          .end((err, res) => {
            expect(res.statusCode).to.eql(200);
            expect(res.body).to.eql([expectedPlanet]);
            done(err);
          });
      });
    });
  });
});
