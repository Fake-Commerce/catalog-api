import Product from "../models/Product";
import { uuid } from 'uuidv4';
import res from "express/lib/response";

class ProductRepository {
    async create({ name = '', price = 0, quantity = 0 }) {
        const product = await Product.create({
            id: uuid(),
            name,
            price,
            quantity
        });

        return product;
    }

    async index() {
        const products = await Product.find();

        return products;
    }

    async getByID(id) {
        const product = await Product.findById(id);
        return product;
    }
    
    async update(id, productData) {
        const product = await Product.findById(id);

        Object.assign(product, productData);

        await product.save();
        return product;
    
    }

    async delete(id) {
        const product = await Product.findById(id);
        await product.remove();
    }
}

export default new ProductRepository();