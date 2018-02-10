
export default class RouterHandler {
  constructor(router, controllers) {
    this.router = router;
    this.controllers = controllers;
  }

  /**
   * Registra as rotas default dos controllers
   */
  registerRoutes() {
    this.controllers.forEach(controller => {
      controller.routes.forEach(route => {
        this.router[route.action](`${controller.apiRoot}${route.route}`, (req, res) =>
          controller[route.method](req, res));
      });
    });
  }
}