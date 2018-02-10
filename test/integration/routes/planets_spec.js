/**
 *
 * Arquivo: test/integration/routes/planets_spec.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por receber o teste das rotas de 'Planets' da Api.
 * Data: 05/02/2018
 *
 */

import Planet from '../../../src/models/planet';

describe('Routes: Planets', () => {
  let request;

  before(()=> {
    return setupApp()
      .then(app => {
        request = supertest(app)
      });
  });

  const defaultId = '56cb91bdc3464f14678934ca';
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
  }

  beforeEach(() => {
    const planet = new Planet(defaultPlanet);
    planet._id = '56cb91bdc3464f14678934ca';
    return Planet.remove({})
      .then(() => planet.save());
  });

  afterEach(() => Planet.remove({}));

  describe('GET /planets', () => {
    it("Deve retornar uma lista de Planetas", done => {
      request.get("/api/planets").end((err, res) => {
        expect(res.body).to.eql([expectedPlanet]);
        done(err);
      });
    });

    context("Quando for encontrar um determinado Id", done => {
      it("Devo retornar 200 com um planeta", done => {
        request.get(`/api/planets/${defaultId}`).end((err, res) => {
          expect(res.statusCode).to.eql(200);
          expect(res.body).to.eql([expectedPlanet]);
          done(err);
        });
      });
    });
  });

  describe('POST /planets', () => {
    context("Quando for adicionar um novo Planeta", () => {
      it("Devo retornar um novo Planeta com status 201", done => {
        const customId = "56cb91bdc3464f14678934ba";
        const newPlanet = Object.assign({}, { _id: customId, __v: 0 }, defaultPlanet);
        const expectedSavedPlanet = {
          __v: 0,
          _id: customId,
          nome: 'Tatooine',
          clima: 'árido',
          terreno: 'deserto'
        };

        request
          .post("/api/planets")
          .send(newPlanet)
          .end((err, res) => {
            expect(res.statusCode).to.eql(201);
            expect(res.body).to.eql(expectedSavedPlanet);
            done(err);
          });
      });
    });
  });

  describe('PUT /planets/:id', () => {
    context("Quando for atualizar um Planeta", () => {
      it("Devo atualizar o Planeta e retornar o status 200", done => {
        const customPlanet = { nome: "Planeta Teste Atualizado" };
        const updatedPlanet = Object.assign({}, customPlanet, defaultPlanet);

        request
          .put(`/api/planets/${defaultId}`)
          .send(updatedPlanet)
          .end((err, res) => {
            expect(res.status).to.eql(200);
            done(err);
          });
      });
    });
  });

  describe('DELETE /planets/:id', () => {
    context("Quando for excluir um Planeta", () => {
      it("Devo excluir o Planeta e retornar status 204", done => {
        request.delete(`/api/planets/${defaultId}`).end((err, res) => {
          expect(res.status).to.eql(204);
          done(err);
        });
      });
    });
  });
});
