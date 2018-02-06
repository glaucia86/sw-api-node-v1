import { request } from "http";

/**
 *
 * Arquivo: test/integration/routes/planets_spec.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por receber o teste das rotas de 'Planets' da Api.
 * Data: 05/02/2018
 *
 */

describe('Rotas: Planets', () => {
    const defaultPlanet = {
        name: 'Tatooine',
        climate: 'árido',
        terrain: 'deserto'
    };

    //Aqui estou usando o 'supertest' que nos permite fazer uma requisição http para uma determinada
    //rota e verifica o retorno de resposta:
    describe('GET /planets', () => {
        it('Deve retornar uma lista de Planetas', done => {
            request
            .get('/planets')
            .end((err, res) => {
                expect(res.body[0]).to.eql(defaultPlanet);
                done(err);
            });
        });
    });
});
