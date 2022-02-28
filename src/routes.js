import {Router} from 'express';
import {uuid} from 'uuidv4';
import ProductController from './controllers/ProductControllers';

const routes = new Router();

routes.post('/products', ProductController.store)
routes.get('/products/:id', ProductController.getByID)

export default routes;