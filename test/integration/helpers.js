/**
 *
 * Arquivo: test/integration/helpers.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por inicializar as configs de testes de Integração.
 * Data: 05/02/2018
 *
 */

import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/app.js';

global.app = app;
global.request = supertest(app);
global.expect = chai.request;
