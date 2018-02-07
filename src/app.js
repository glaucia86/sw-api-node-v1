/**
 *
 * Arquivo: src/api.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por iniciar e carregar os middlewares.
 * Data: 05/02/2018
 *
 */

import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import database from "./config/database";

const app = express();

const configureExpress = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/json" }));
  
  app.use("/api", routes);

  return app;
};

export default () => database.connect().then(configureExpress);
