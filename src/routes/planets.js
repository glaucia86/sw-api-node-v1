/**
 *
 * Arquivo: src/routes/planets.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas da api 'Planets'.
 * Data: 06/02/2018
 *
 */

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
  nome: 'Tatooine',
  clima: 'árido',
  terreno: 'deserto'
}]));

export default router;