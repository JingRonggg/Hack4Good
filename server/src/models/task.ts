import { type Document, model, Schema } from 'mongoose'
import { type Task } from '../@types'

interface I extends Document, Task {}

const instance = new Schema<I>(
    {
        task: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        users: {
            type: [String],
            required: true,
            default: []
        },
        status: {
            type: String,
            required: true,
            enum: ['completed', 'pendingCompletion', 'pendingVerification'],
            default: 'pendingCompletion'
        },
        markedCompleted: {
            type: Date,
            default: null
        },
        verified: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

const modelName = 'Task'

export default model<I>(modelName, instance)