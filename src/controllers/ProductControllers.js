import ProductRepository from '../repositories/ProductRepository';

class ProductController {
    async store(req,res){
        const productPayload = req.body;

        const product = await ProductRepository.create(productPayload);

        return res.json(product);
    }

    async getByID(req,res){
        const { id } = req.params;
        const product = await ProductRepository.getByID(id);

        return res.json(product);
    }
}

export default new ProductController();