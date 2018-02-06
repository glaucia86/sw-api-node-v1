/**
 *
 * Arquivo: test/integration/routes/planets_spec.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por receber o teste das rotas de 'Planets' da Api.
 * Data: 05/02/2018
 *
 */

describe('Routes: Planets', () => {
    const defaultPlanet = {
      nome: 'Tatooine',
      clima: 'árido',
      terreno: 'deserto'
    };
  
    describe('GET /planets', () => {
      it('Deve retornar uma listas de Planetas', done => {
 
       request
       .get('/planets')
       .end((err, res) => {
         expect(res.body[0]).to.eql(defaultPlanet);
         done(err);
       });
     });
   });
 });
