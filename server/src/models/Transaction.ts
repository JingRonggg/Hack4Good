import { type Document, model, Schema } from 'mongoose'
import { type Transaction } from '../@types'

interface I extends Document, Transaction {}

const instance = new Schema<I>(
    {
        item: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['approved', 'pending', 'declined'],
            default: 'pending'
        },
        user: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const modelName = 'Transaction'

export default model<I>(modelName, instance)