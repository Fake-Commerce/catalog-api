import {Schema, model} from 'mongoose';

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        default:0
    }
}, {
    versionKey: false,
});

export default model('Product', ProductSchema);