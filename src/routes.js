import {Router} from 'express';
import {uuid} from 'uuidv4';
import ProductController from './controllers/ProductControllers';

const routes = new Router();

routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.getByID)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

export default routes;