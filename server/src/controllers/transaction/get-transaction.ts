import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const getTransaction = async (_req: Request, res: Response) => {
    try {
        const transaction = await Transaction.find();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({
            error: "Error in fetching transaction",
            details: (error as Error).message,
        });
    }
}

export default getTransaction;