const {Router} = require('express');
const {uuid} = require('uuidv4');

const routes = new Router();

const products = [];


//Listar os produtos
routes.get('/products', (req, res) =>{
    const {test} = req.query;

    return res.json(products)
});
//Criar um produto
routes.post('/products', (req, res) =>{
    const {name, price, quantity} = req.body;

    const product = {
        id:uuid(),
        name,
        price,
        quantity
    }

    products.push(product)

    return res.json(product)
});
//Alterar um produto
routes.put('/products/:id', (req, res) =>{
    const {id} = req.params;
    const {name, price, quantity} = req.body;

    const productIndex = products.findIndex(product => product.id ===id)

    if(productIndex === -1){
        return res.status(400).json({error:'Produto não encontrado'});
    }

    const product = {
        id,
        name,
        price,
        quantity
    }

        products[productIndex] = product;

        return res.json(product)
});
//Deletar um produto
routes.delete('/products/:id', (req, res) =>{
    const {id} = req.params;

    const productIndex = products.findIndex(product => product.id ===id)

    if(productIndex === -1){
        return res.status(400).json({error:'Produto não encontrado'});
    }

    products.splice(productIndex, 1);

    return res.status(204).send();
});

module.exports = routes;