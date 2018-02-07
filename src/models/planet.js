/**
 *
 * Arquivo: src/models/planet.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo: 'Planet'
 * Data: 06/02/2018
 *
 */

/**
 * Infos inerentes a classe:
 * ==== Planet ====
 * id: number
 * nome: string
 * clima: string
 * terreno: string
 */

import mongoose from "mongoose";

const PlanetSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  clima: { type: String, required: true },
  terreno: { type: String, required: true }
});

const Planet = mongoose.model("Planet", PlanetSchema);

export default Planet;
