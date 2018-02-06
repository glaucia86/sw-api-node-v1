/**
 *
 * Arquivo: test/integration/helpers.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por inicializar as configs de testes de Integração.
 * Data: 05/02/2018
 *
 */

import supertest from "supertest";
import chai from "chai";
import setupApp from "../../src/app.js";

global.setupApp = setupApp;
global.supertest = supertest;
global.expect = chai.expect;



