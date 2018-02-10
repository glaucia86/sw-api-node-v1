/**
 *
 * Arquivo: src/config/database.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pela configuração do banco de dados.
 * Data: 06/02/2018
 *
 */

import mongoose from "mongoose";

mongoose.Promise = Promise;

const mongodbUrl =
  process.env.MONGODB_URL || "mongodb://localhost:27017/sw-api-node-v1";

const connect = () =>
  mongoose.connect(mongodbUrl);

export default { connect };
