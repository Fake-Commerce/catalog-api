import Product from "../models/Product";
import { uuid } from 'uuidv4';

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

    async getByID(id) {
        return {
            id,
            name: "dove",
            price: 1,
            quantity: 10,
        }
    }
}

export default new ProductRepository();