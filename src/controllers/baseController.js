/**
 *
 * Arquivo: src/controllers/baseController.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 * Data: 10/02/2018
 *
 */

export default class BaseController {
    constructor(apiRoot, model) {
        // rotas que serão criadas
        // route => path
        // method => HTTP Verb da rota: GET, POST, PUT, DELETE
        // action => funcão que deverá ser executada no controller
        this.routes = [
            { route: '', method: 'get', action: 'get' },
            { route: '/:id', method: 'getById', action: 'get' },
            { route: '', method: 'create', action: 'post' },
            { route: '/:id', method: 'update', action: 'put' },
            { route: '/:id', method: 'remove', action: 'delete' }
        ];

        this.apiRoot = apiRoot;
        this.model = model;
    }

    get(req, res) {
        return this.model.find({})
            .then(items => res.send(items))
            .catch(err => res.status(400).send(err.message));
    }

    getById(req, res) {
        const { params: { id } } = req;

        return this.model.find({ _id: id })
            .then(items => res.send(items))
            .catch(err => res.status(400).send(err.message));
    }

    create(req, res) {
        const item = new this.model(req.body);

        return item.save()
            .then(() => res.status(201).send(res.json({message: 'Planeta Criado com Sucesso!'}), item))
            .catch(err => res.status(422).send(err.message));
    }

    update(req, res) {
        return this.model.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).send(err.message));
    }

    remove(req, res) {
        return this.model.remove({ _id: req.params.id })
            .then(() => res.sendStatus(204))
            .catch(err => res.status(400).send(err.message));
    }
}