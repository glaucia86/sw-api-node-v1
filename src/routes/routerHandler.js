import express from 'express';

export default class RouterHandler {
    constructor(controllers) {
        this.router = express.Router();
        this.controllers = controllers;
    }

    /**
     * Registra as rotas default dos controllers
     */
    registerRoutes() {
        this.controllers.forEach(controller => {
            controller.routes.forEach(route =>
                this.router[route.action](`${controller.apiRoot}/${route.route}`, (req, res) =>
                    controller[route.method](data)));
        });
    }
}