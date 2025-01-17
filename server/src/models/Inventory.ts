import { type Document, model, Schema } from "mongoose";
import { type Inventory } from "../@types";

interface I extends Document, Inventory {}

const instance = new Schema<I>(
    {
        name: {
            type: String,
            required: true,
            unqiue: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['special', 'regular'],
            default: 'regular'
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

const modelName = 'Inventory'

export default model<I>(modelName, instance)