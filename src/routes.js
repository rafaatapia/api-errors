import { Router } from 'express';
import ErrorController from './app/controllers/ErrorController';

const routes = new Router();

routes.get('/errors', ErrorController.index);
routes.post('/errors', ErrorController.store);

export default routes;
