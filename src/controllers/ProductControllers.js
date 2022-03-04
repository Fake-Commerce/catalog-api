import ProductRepository from '../repositories/ProductRepository';

class ProductController {
    async store(req,res){
        const productPayload = req.body;

        const product = await ProductRepository.create(productPayload);

        return res.json(product);
    }

    
    async index(req,res){
        const products = await ProductRepository.index();
        return res.json(products);
    }

    async getByID(req,res){
        try {
            const { id } = req.params;
            const product = await ProductRepository.getByID(id);
    
            if(!product) {
                return res.status(404).send();
            }
    
            return res.json(product);
        } catch(error) {
            console.error(error);
            res.status(400).send();
        }
    }

    async update(req,res){
        const { id } = req.params;
        const productUpdate = req.body;
        try {
            const product = await ProductRepository.update(id, productUpdate);

            return res.json(product);
        } catch (error) {
            console.error(error);
            return res.status(400).json({error:'Produto não encontrado'});
        }
    }

    async delete(req,res){
        const { id } = req.params;
        try {
            await ProductRepository.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error:'Produto não encontrado'});
        }
    }
}

export default new ProductController();