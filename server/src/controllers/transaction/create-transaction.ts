import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const createTransaction = async (req: Request, res: Response) => {
    try {
        const { item, status, user } = req.body;
        const transaction = new Transaction({ item, status, user });
        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
    } catch(error) {
        res.status(400).json({
            error: "Error in creating transaction"
        })
    }
}

export default createTransaction;