import Product from "../models/Product";
import {uuid} from 'uuidv4';

class ProductController {
    async store(req,res){
        const {name, price, quantity} = req.body;

        const product = await Product.create({
            id:uuid(),
            name,
            price,
            quantity
        });

        return res.json(product);
    }
}

export default new ProductController();